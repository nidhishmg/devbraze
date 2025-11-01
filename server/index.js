import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import XLSX from 'xlsx'
import { createClient } from '@supabase/supabase-js'
import multer from 'multer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 4000
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data')
const ADMIN_KEY = process.env.ADMIN_KEY || ''
const STORAGE = process.env.STORAGE || 'filesystem' // filesystem | supabase | both
const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_KEY = process.env.SUPABASE_KEY || ''
const SUPABASE_TABLE = process.env.SUPABASE_TABLE || 'registrations'
const supabase = (STORAGE.includes('supabase') && SUPABASE_URL && SUPABASE_KEY)
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: true }))

// Ensure base data dir
fs.mkdirSync(DATA_DIR, { recursive: true })

const sanitize = (s) => String(s || '')
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9\-]+/g, '-')
  .replace(/^-+|-+$/g, '')

const writeCsv = (csvPath, headers, row) => {
  const exists = fs.existsSync(csvPath)
  const line = headers.map(h => (row[h] ?? '')).join(',') + '\n'
  if (!exists) {
    fs.writeFileSync(csvPath, headers.join(',') + '\n' + line, 'utf8')
  } else {
    fs.appendFileSync(csvPath, line, 'utf8')
  }
}

const writeXlsx = (xlsxPath, headers, row) => {
  let wb, ws
  if (fs.existsSync(xlsxPath)) {
    wb = XLSX.readFile(xlsxPath)
    const sheetName = wb.SheetNames[0]
    ws = wb.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 })
    if (data.length === 0) data.push(headers)
    data.push(headers.map(h => row[h] ?? ''))
    const newWs = XLSX.utils.aoa_to_sheet(data)
    wb.Sheets[sheetName] = newWs
  } else {
    wb = XLSX.utils.book_new()
    const data = [headers, headers.map(h => row[h] ?? '')]
    ws = XLSX.utils.aoa_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, 'Registrations')
  }
  XLSX.writeFile(wb, xlsxPath)
}

const writeSupabase = async (slug, record) => {
  if (!supabase) return
  const payload = { ...record, slug }
  // Ensure extras is JSON
  if (typeof payload.extras === 'string') {
    try { payload.extras = JSON.parse(payload.extras) } catch { /* keep string */ }
  }
  await supabase.from(SUPABASE_TABLE).insert(payload)
}

// Multer storage configured per-event based on slug
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, _file, cb) => {
      const slug = sanitize(req.params.slug)
      const uploadDir = path.join(DATA_DIR, slug, 'uploads')
      fs.mkdirSync(uploadDir, { recursive: true })
      cb(null, uploadDir)
    },
    filename: (_req, file, cb) => {
      const ts = Date.now()
      const safe = String(file.originalname || 'upload').replace(/[^a-zA-Z0-9._-]/g, '_')
      cb(null, `${ts}-${safe}`)
    }
  })
})

app.post('/api/events/:slug/register', upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const slug = sanitize(req.params.slug)
    const { name, email, phone, branch, year, notes, website, extras, transactionId } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'name and email are required' })
    }

    // Honeypot spam trap: if filled, pretend success without saving
    if (website) {
      return res.json({ ok: true, slug, saved: true })
    }

    // Require payment verification details
    if (!transactionId) {
      return res.status(400).json({ ok: false, error: 'transactionId is required' })
    }
    if (!req.file) {
      return res.status(400).json({ ok: false, error: 'paymentScreenshot is required' })
    }

    const eventDir = path.join(DATA_DIR, slug)
    fs.mkdirSync(eventDir, { recursive: true })

    const timestamp = new Date().toISOString()
    const screenshotFilename = path.basename(req.file.path)
    const record = {
      timestamp,
      name,
      email,
      phone,
      branch,
      year,
      notes,
      transactionId,
      paymentScreenshot: screenshotFilename,
      extras: extras ? (typeof extras === 'string' ? extras : JSON.stringify(extras)) : ''
    }
    const headers = ['timestamp', 'name', 'email', 'phone', 'branch', 'year', 'notes', 'transactionId', 'paymentScreenshot', 'extras']

    const csvPath = path.join(eventDir, 'registrations.csv')
    const xlsxPath = path.join(eventDir, 'registrations.xlsx')

    if (STORAGE === 'filesystem' || STORAGE === 'both') {
      writeCsv(csvPath, headers, record)
      writeXlsx(xlsxPath, headers, record)
    }
    if (STORAGE === 'supabase' || STORAGE === 'both') {
      await writeSupabase(slug, record)
    }

    return res.json({ ok: true, slug, saved: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ ok: false, error: 'internal_error' })
  }
})

app.get('/api/events/:slug/export.csv', (req, res) => {
  if (ADMIN_KEY) {
    const key = req.query.adminKey || req.headers['x-admin-key']
    if (key !== ADMIN_KEY) return res.status(401).send('Unauthorized')
  }
  const slug = sanitize(req.params.slug)
  const csvPath = path.join(DATA_DIR, slug, 'registrations.csv')
  if (!fs.existsSync(csvPath)) return res.status(404).send('No registrations')
  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', `attachment; filename="${slug}-registrations.csv"`)
  fs.createReadStream(csvPath).pipe(res)
})

app.get('/api/events/:slug/export.xlsx', (req, res) => {
  if (ADMIN_KEY) {
    const key = req.query.adminKey || req.headers['x-admin-key']
    if (key !== ADMIN_KEY) return res.status(401).send('Unauthorized')
  }
  const slug = sanitize(req.params.slug)
  const xlsxPath = path.join(DATA_DIR, slug, 'registrations.xlsx')
  if (!fs.existsSync(xlsxPath)) return res.status(404).send('No registrations')
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', `attachment; filename="${slug}-registrations.xlsx"`)
  fs.createReadStream(xlsxPath).pipe(res)
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`DevBraze server listening on http://localhost:${PORT}`)
})
