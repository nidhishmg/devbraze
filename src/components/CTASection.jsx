import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy via-slate to-navy relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="2" cy="2" r="1" fill="#38BDF8"/>
              <circle cx="18" cy="2" r="1" fill="#38BDF8"/>
              <circle cx="2" cy="18" r="1" fill="#38BDF8"/>
              <circle cx="18" cy="18" r="1" fill="#38BDF8"/>
              <line x1="2" y1="2" x2="18" y2="2" stroke="#38BDF8" strokeWidth="0.5"/>
              <line x1="2" y1="18" x2="18" y2="18" stroke="#38BDF8" strokeWidth="0.5"/>
              <line x1="2" y1="2" x2="2" y2="18" stroke="#38BDF8" strokeWidth="0.5"/>
              <line x1="18" y1="2" x2="18" y2="18" stroke="#38BDF8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-8">
            Join the Innovation Movement
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6 leading-tight">
            Ready to <span className="gradient-text">shape the future</span> with us?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-light/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join DevBraze today and become part of a community where innovation meets opportunity. 
            Let's build tomorrow's technology together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Active Members" },
              { number: "25+", label: "Projects Launched" },
              { number: "15+", label: "Events per Semester" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-light/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold glow-effect hover:scale-105 transition-all duration-300 group"
            >
              <Link to="/join">Become a Member</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-light/60 mt-8"
          >
            Open to all students regardless of experience level • Free membership • Active Discord community
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection