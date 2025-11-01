import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, User, Mail, Phone, School, FileText, ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from './Navbar'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const slugToTitle = (slug) => slug
  .replace(/-/g, ' ')
  .replace(/\b\w/g, c => c.toUpperCase())

const RegisterPage = () => {
  const { slug } = useParams()
  const title = useMemo(() => slugToTitle(slug || ''), [slug])
  const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', year: '', notes: '' })
  const [status, setStatus] = useState({ submitting: false, ok: false, error: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, ok: false, error: '' })
    try {
      const res = await fetch(`${API_URL}/api/events/${slug}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to register')
      setStatus({ submitting: false, ok: true, error: '' })
      setForm({ name: '', email: '', phone: '', branch: '', year: '', notes: '' })
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
          </form>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
