import React, { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import { Shield, Download, ArrowLeft } from 'lucide-react'
import RequireAdmin from './RequireAdmin'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const slugToTitle = (slug) => slug
  .replace(/-/g, ' ')
  .replace(/\b\w/g, c => c.toUpperCase())

const AdminEventPage = () => {
  const { slug } = useParams()
  const title = useMemo(() => slugToTitle(slug || ''), [slug])
  const [adminKey, setAdminKey] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('DB_ADMIN_KEY')
    if (saved) setAdminKey(saved)
  }, [])

  useEffect(() => {
    if (adminKey) localStorage.setItem('DB_ADMIN_KEY', adminKey)
  }, [adminKey])

  const csvUrl = `${API_URL}/api/events/${slug}/export.csv${adminKey ? `?adminKey=${encodeURIComponent(adminKey)}` : ''}`
  const xlsxUrl = `${API_URL}/api/events/${slug}/export.xlsx${adminKey ? `?adminKey=${encodeURIComponent(adminKey)}` : ''}`

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/events" className="inline-flex items-center text-cyan mb-6 hover:text-blue-400">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Events
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin: {title}</h1>
          <p className="text-light/70 mb-8">Download registration exports for this event.</p>

          <div className="bg-slate/20 border border-slate/20 rounded-xl p-6 space-y-5">
            <div>
              <label className="block text-sm text-light/70 mb-1">Admin Key</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <Shield className="h-4 w-4 text-cyan ml-3" />
                <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 outline-none"
                  placeholder="Enter admin key (if configured)"
                />
              </div>
              <p className="text-xs text-light/50 mt-1">Saved to your browser only. Required if the backend has ADMIN_KEY set.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={csvUrl} className="flex items-center justify-center gap-2 bg-cyan/20 hover:bg-cyan/30 text-cyan border border-cyan/30 rounded-lg py-3">
                <Download className="h-4 w-4" /> Download CSV
              </a>
              <a href={xlsxUrl} className="flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 rounded-lg py-3">
                <Download className="h-4 w-4" /> Download XLSX
              </a>
            </div>
            <div className="text-xs text-light/50">
              <p>CSV: <span className="break-all">{csvUrl}</span></p>
              <p>XLSX: <span className="break-all">{xlsxUrl}</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminEventPage
