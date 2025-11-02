import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, CheckCircle2, ShieldCheck, Network, BookOpen, Phone, Mail, GraduationCap, Cpu } from 'lucide-react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const interestOptions = [
  'Web Development', 'Mobile Development', 'AI/Machine Learning', 'Cybersecurity',
  'IoT', 'Electronics', 'Robotics', 'Embedded Systems', 'PCB Design', 'Other'
]

const JoinPage = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', year: '', branch: '',
    interests: [], skills: '', experience: '', motivation: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const toggleInterest = (opt) => {
    setForm((f) => {
      const exists = f.interests.includes(opt)
      return { ...f, interests: exists ? f.interests.filter(i => i !== opt) : [...f.interests, opt] }
    })
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_JOIN_WEBAPP_URL || 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec'
    // Honeypot check: if filled, silently drop
    const bot = e.currentTarget.botcheck?.value
    if (bot) return
    try {
      setSubmitting(true)
      const payload = { ...form }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      // Apps Script web apps usually allow CORS and return 200
      if (res.ok) {
        setSubmitted(true)
        // Reset form and navigate to Thank You page
        setForm({ name: '', email: '', phone: '', year: '', branch: '', interests: [], skills: '', experience: '', motivation: '' })
        navigate('/thanks')
      } else {
        alert('Submission failed. Please try again later.')
      }
    } catch (err) {
      alert('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />

      {/* Hero Section with background video (shared pattern) */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/chip-hero.jpg"
            alt="Tech circuit background"
            className="w-full h-full object-cover object-center brightness-90"
            loading="lazy"
          />
        </div>
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-90 hidden md:block"
          src="/videos/circuit.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan/10 via-blue-400/10 to-blue-500/10 border border-cyan/30 text-cyan text-sm font-medium mb-8">
              Join <span className="ml-1 font-bold">DevBraze</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-light mb-6 leading-tight">
              Be part of <span className="gradient-text">our core team</span>
            </h1>
            <p className="text-lg text-light/80 max-w-3xl mx-auto mb-8">
              Ready to build something amazing? Contribute, learn, and lead alongside a passionate tech community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* Left: Why Join */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Why Join &lt;DevBraze&gt;?</h2>
            <div className="space-y-4">
              {[{
                icon: CheckCircle2, title: 'Leadership & Impact', desc: 'Lead initiatives that shape the future of technology education at our university.'
              }, {
                icon: Cpu, title: 'Hands-on Experience', desc: 'Build real projects in electronics, robotics, web, AI/ML and more.'
              }, {
                icon: Network, title: 'Community & Networking', desc: 'Connect with peers, mentors, and professionals; grow your network for life.'
              }, {
                icon: BookOpen, title: 'Skill Development', desc: 'Learn by doing—workshops, hackathons, and projects that level up your skills.'
              }, {
                icon: ShieldCheck, title: 'Career Growth', desc: 'Strengthen your portfolio with impactful, resume-ready work.'
              }].map(({ icon: Icon, title, desc }, idx) => (
                <Card key={idx} className="bg-slate/20 border-slate/20">
                  <div className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan/20 border border-cyan/30"><Icon className="h-5 w-5 text-cyan" /></div>
                    <div>
                      <div className="font-semibold text-light mb-1">{title}</div>
                      <p className="text-sm text-light/70">{desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-slate/10 border-slate/20 mt-6">
              <div className="p-4">
                <div className="font-semibold mb-2">What we’re looking for</div>
                <ul className="list-disc list-inside text-sm text-light/80 space-y-1">
                  <li>Passion for technology and innovation</li>
                  <li>Strong communication and leadership</li>
                  <li>Commitment to community service and learning</li>
                  <li>Experience in any technical domain (preferred)</li>
                  <li>Willingness to dedicate time to DevBraze activities</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Right: Apply Form (frontend only) */}
          <div>
            <Card className="bg-slate/20 border-slate/20">
              <form onSubmit={onSubmit} className="p-6 space-y-4">
                {/* Honeypot for bots */}
                <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-light/70">Full Name *</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Enter your full name" className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                  </div>
                  <div>
                    <label className="text-sm text-light/70">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com" className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-light/70">Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={onChange} required placeholder="10-digit phone number" className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                  </div>
                  <div>
                    <label className="text-sm text-light/70">Academic Year *</label>
                    <select name="year" value={form.year} onChange={onChange} required className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2">
                      <option value="">Select your year</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-light/70">Branch *</label>
                  <input name="branch" value={form.branch} onChange={onChange} required placeholder="e.g., Electronics & Communication" className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                </div>

                <div>
                  <label className="text-sm text-light/70">Areas of Interest (select any)</label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {interestOptions.map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`px-3 py-2 rounded-lg text-sm border transition ${form.interests.includes(opt) ? 'bg-cyan/20 text-cyan border-cyan/40' : 'bg-navy/50 text-light/70 border-slate/30 hover:border-cyan/40'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-light/70">Technical Skills</label>
                  <input name="skills" value={form.skills} onChange={onChange} placeholder="e.g., Python, React, ML, etc." className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                </div>

                <div>
                  <label className="text-sm text-light/70">Previous Experience</label>
                  <textarea name="experience" value={form.experience} onChange={onChange} rows={3} placeholder="Tell us about projects, internships, or relevant experience..." className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                </div>

                <div>
                  <label className="text-sm text-light/70">Why do you want to join DevBraze? *</label>
                  <textarea name="motivation" value={form.motivation} onChange={onChange} rows={4} required placeholder="Share your motivation and how you plan to contribute..." className="mt-1 w-full bg-navy/50 border border-slate/30 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan/60" />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full" disabled={submitting} aria-busy={submitting}>
                    {submitting ? 'Submitting...' : (submitted ? 'Submitted ✓' : 'Submit Application')}
                  </Button>
                  <p className="text-xs text-light/60 mt-2">Your data will be sent securely to our Google Sheet via Google Apps Script.</p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinPage
