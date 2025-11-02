import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ThanksPage = () => {
  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 md:hidden">
          <img src="/images/chip-hero.jpg" alt="Tech circuit background" className="w-full h-full object-cover object-center brightness-90" />
        </div>
        <video className="absolute inset-0 w-full h-full object-cover brightness-90 hidden md:block" src="/videos/circuit.mp4" autoPlay loop muted playsInline preload="none" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <CheckCircle2 className="h-16 w-16 text-cyan mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Application Received</h1>
            <p className="text-lg text-light/80 mb-8">Thanks for applying to join DevBraze. We7ll review your application and get back to you soon.</p>
            <div className="flex gap-4 justify-center">
              <Button asChild><Link to="/">Go to Home</Link></Button>
              <Button asChild variant="outline"><Link to="/events">Explore Events</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ThanksPage
