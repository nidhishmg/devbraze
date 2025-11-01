import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { upcomingEvents } from '@/lib/events'
import RequireAdmin from './RequireAdmin'

const AdminEventsList = () => {
  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin: Events</h1>
          <p className="text-light/70 mb-8">Quick links to event admin pages and registration forms.</p>

          <div className="space-y-4">
            {upcomingEvents.map(ev => (
              <div key={ev.slug} className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate/20 border border-slate/20 rounded-xl p-4">
                <div>
                  <div className="text-lg font-semibold">{ev.title}</div>
                  <div className="text-sm text-light/60">{ev.date} • {ev.location}</div>
                  <div className="text-xs text-light/50">Slug: {ev.slug}</div>
                </div>
                <div className="flex gap-3 mt-3 md:mt-0">
                  <Link to={`/register/${ev.slug}`} className="px-4 py-2 rounded-lg bg-cyan/20 text-cyan border border-cyan/30 hover:bg-cyan/30">Register</Link>
                  <Link to={`/admin/events/${ev.slug}`} className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30">Admin</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminEventsList
