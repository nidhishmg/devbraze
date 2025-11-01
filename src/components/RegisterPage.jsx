import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, User, Mail, Phone, School, FileText, ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from './Navbar'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

const slugToTitle = (slug) => slug
  .replace(/-/g, ' ')
  .replace(/\b\w/g, c => c.toUpperCase())

const RegisterPage = () => {
  const { slug } = useParams()
  const title = useMemo(() => slugToTitle(slug || ''), [slug])
  const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', year: '', notes: '', website: '' })
  const [extras, setExtras] = useState([{ key: '', value: '' }])
  const [status, setStatus] = useState({ submitting: false, ok: false, error: '' })
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState(null)
  const recaptchaTokenRef = useRef('')

  // Load Google reCAPTCHA v3 script if a site key is provided
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return
    const existing = document.querySelector('script[data-recaptcha]')
    if (existing) return
    const s = document.createElement('script')
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    s.async = true
    s.defer = true
    s.setAttribute('data-recaptcha', 'true')
    document.body.appendChild(s)
  }, [])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onExtraChange = (idx, field, value) => {
    const next = [...extras]
    next[idx] = { ...next[idx], [field]: value }
    setExtras(next)
  }
  const addExtra = () => setExtras([...extras, { key: '', value: '' }])
  const removeExtra = (idx) => setExtras(extras.filter((_, i) => i !== idx))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, ok: false, error: '' })
    try {
      // If reCAPTCHA is configured, attempt to obtain a token first
      let recaptchaToken = ''
      try {
        if (RECAPTCHA_SITE_KEY && window.grecaptcha && window.grecaptcha.execute) {
          await window.grecaptcha.ready(async () => {
            recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
            recaptchaTokenRef.current = recaptchaToken
          })
        }
      } catch (e) {
        // Non-fatal: continue without token
        console.warn('reCAPTCHA token failed', e)
      }

      // Build multipart FormData to include payment screenshot
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      fd.append('transactionId', transactionId)
      fd.append('extras', JSON.stringify(extras.reduce((acc, kv) => {
        if (kv.key && kv.value) acc[kv.key] = kv.value
        return acc
      }, {})))
      fd.append('recaptchaToken', recaptchaToken || recaptchaTokenRef.current || '')
      if (screenshot) fd.append('paymentScreenshot', screenshot)

      const res = await fetch(`${API_URL}/api/events/${slug}/register`, {
        method: 'POST',
        body: fd
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to register')
    setStatus({ submitting: false, ok: true, error: '' })
    setForm({ name: '', email: '', phone: '', branch: '', year: '', notes: '', website: '' })
    setTransactionId('')
    setScreenshot(null)
    setExtras([{ key: '', value: '' }])
    } catch (err) {
      setStatus({ submitting: false, ok: false, error: err.message || 'Error' })
    }
  }

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/events" className="inline-flex items-center text-cyan mb-6 hover:text-blue-400">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Events
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Register for {title}</h1>
          <p className="text-light/70 mb-8">Fill in your details to secure your spot.</p>

          <form onSubmit={onSubmit} className="bg-slate/20 border border-slate/20 rounded-xl p-6 space-y-5">
            {/* Payment Instructions + QR */}
            <div className="bg-slate/10 border border-slate/30 rounded-lg p-4">
              <p className="text-sm text-light/80 mb-3">Scan the QR to pay the registration fee. Then enter your transaction ID and upload the payment screenshot to complete registration.</p>
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-6">
                <div className="flex flex-col items-center">
                  <a href="/images/payment-qr.png" target="_blank" rel="noopener noreferrer" title="Open QR in new tab">
                    <img
                      src="/images/payment-qr.png"
                      alt="Payment QR"
                      className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-lg bg-white/5 border border-slate/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </a>
                  <span className="text-xs text-light/50 mt-2">Tap to view full size</span>
                </div>
                <ul className="text-sm text-light/70 list-disc pl-5 space-y-2">
                  <li>Ensure the screenshot clearly shows the amount, date/time, and transaction ID.</li>
                  <li>Registrations without a valid screenshot and transaction ID will be rejected.</li>
                </ul>
              </div>
            </div>
            {/* Honeypot field (hidden from users) */}
            <div className="hidden" aria-hidden="true">
              <label>Website</label>
              <input name="website" value={form.website} onChange={onChange} autoComplete="off" tabIndex="-1" />
            </div>
            <div>
              <label className="block text-sm text-light/70 mb-1">Full Name</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <User className="h-4 w-4 text-cyan ml-3" />
                <input name="name" required value={form.name} onChange={onChange} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Your name" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-light/70 mb-1">Email</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <Mail className="h-4 w-4 text-cyan ml-3" />
                <input type="email" name="email" required value={form.email} onChange={onChange} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-light/70 mb-1">Phone</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <Phone className="h-4 w-4 text-cyan ml-3" />
                <input name="phone" value={form.phone} onChange={onChange} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Optional" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-light/70 mb-1">Branch</label>
                <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                  <School className="h-4 w-4 text-cyan ml-3" />
                  <input name="branch" value={form.branch} onChange={onChange} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="ECE / CSE / ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm text-light/70 mb-1">Year</label>
                <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                  <Calendar className="h-4 w-4 text-cyan ml-3" />
                  <input name="year" value={form.year} onChange={onChange} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="1 / 2 / 3 / 4" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm text-light/70 mb-1">Notes</label>
              <div className="flex items-start bg-slate/10 rounded-lg border border-slate/30">
                <FileText className="h-4 w-4 text-cyan ml-3 mt-2" />
                <textarea name="notes" value={form.notes} onChange={onChange} rows="3" className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Anything we should know?" />
              </div>
            </div>

            {/* Payment verification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-light/70 mb-1">Transaction ID</label>
                <input required value={transactionId} onChange={(e) => setTransactionId(e.target.value)} className="w-full bg-slate/10 rounded-lg border border-slate/30 px-3 py-2 outline-none" placeholder="UPI Ref / TXN ID" />
              </div>
              <div>
                <label className="block text-sm text-light/70 mb-1">Payment Screenshot</label>
                <input required type="file" accept="image/*" onChange={(e) => setScreenshot(e.target.files?.[0] || null)} className="w-full text-sm" />
              </div>
            </div>

            {/* Additional fields (optional) */}
            <div>
              <label className="block text-sm text-light/70 mb-2">Additional fields (optional)</label>
              <div className="space-y-2">
                {extras.map((kv, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-2">
                    <input
                      className="col-span-2 bg-slate/10 rounded-lg border border-slate/30 px-3 py-2 outline-none"
                      placeholder="Field name (e.g., tshirtSize)"
                      value={kv.key}
                      onChange={(e) => onExtraChange(idx, 'key', e.target.value)}
                    />
                    <input
                      className="col-span-3 bg-slate/10 rounded-lg border border-slate/30 px-3 py-2 outline-none"
                      placeholder="Value"
                      value={kv.value}
                      onChange={(e) => onExtraChange(idx, 'value', e.target.value)}
                    />
                    {extras.length > 1 && (
                      <button type="button" onClick={() => removeExtra(idx)} className="text-red-400 text-sm mt-2">Remove</button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addExtra} className="text-cyan text-sm">+ Add field</button>
              </div>
            </div>

            <button disabled={status.submitting} className="w-full bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 text-white py-3 rounded-lg font-semibold">
              {status.submitting ? 'Submitting...' : 'Register'}
            </button>

            {status.ok && (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-5 w-5" /> Registration successful!
              </div>
            )}
            {status.error && (
              <div className="text-red-400">{status.error}</div>
            )}
            {RECAPTCHA_SITE_KEY && (
              <p className="text-xs text-light/50">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
