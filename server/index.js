import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import XLSX from 'xlsx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 4000
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data')

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

app.post('/api/events/:slug/register', (req, res) => {
  try {
    const slug = sanitize(req.params.slug)
    const { name, email, phone, branch, year, notes } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'name and email are required' })
    }

    const eventDir = path.join(DATA_DIR, slug)
    fs.mkdirSync(eventDir, { recursive: true })

    const timestamp = new Date().toISOString()
    const record = { timestamp, name, email, phone, branch, year, notes }
    const headers = ['timestamp', 'name', 'email', 'phone', 'branch', 'year', 'notes']

    const csvPath = path.join(eventDir, 'registrations.csv')
    const xlsxPath = path.join(eventDir, 'registrations.xlsx')

    writeCsv(csvPath, headers, record)
    writeXlsx(xlsxPath, headers, record)

    return res.json({ ok: true, slug, saved: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ ok: false, error: 'internal_error' })
  }
})

app.get('/api/events/:slug/export.csv', (req, res) => {
  const slug = sanitize(req.params.slug)
  const csvPath = path.join(DATA_DIR, slug, 'registrations.csv')
  if (!fs.existsSync(csvPath)) return res.status(404).send('No registrations')
  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', `attachment; filename="${slug}-registrations.csv"`)
  fs.createReadStream(csvPath).pipe(res)
})

app.get('/api/events/:slug/export.xlsx', (req, res) => {
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
