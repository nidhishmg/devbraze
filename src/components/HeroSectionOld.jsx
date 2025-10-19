import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingIcons = []

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-bg"></div>
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}/40 robot-glow`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="h-8 w-8 md:h-14 md:w-14" />
        </motion.div>
      ))}

      {/* Electronic Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100">
              {/* Circuit paths */}
              <path d="M0 50 L100 50 M50 0 L50 100" stroke="#38BDF8" strokeWidth="1" fill="none"/>
              <path d="M0 25 L25 25 L25 75 L75 75 L75 25 L100 25" stroke="#60A5FA" strokeWidth="1" fill="none"/>
              {/* Circuit nodes */}
              <circle cx="25" cy="25" r="3" fill="#38BDF8"/>
              <circle cx="75" cy="75" r="3" fill="#3B82F6"/>
              <circle cx="50" cy="50" r="4" fill="#60A5FA"/>
              <rect x="20" y="70" width="10" height="5" fill="#1E40AF"/>
              <rect x="70" y="20" width="5" height="10" fill="#2563EB"/>
            </pattern>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
          <rect width="100%" height="100%" fill="url(#circuitGradient)"/>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-slate/40"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate/30 via-slate/20 to-slate/30 backdrop-blur-sm border border-cyan/30 text-cyan text-sm font-medium mb-6 animate-glow-border"
        >
          Student-Led Tech Innovation Hub
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-light mb-6 leading-tight"
        >
          Igniting Innovation through{' '}
          <span className="gradient-text">Electronics & Code</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-light/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          DevBraze is a community of creators, tinkerers, and developers shaping 
          tomorrow's technology through hands-on innovation and collaborative learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan via-blue-500 to-blue-600 hover:from-cyan/90 hover:via-blue-500/90 hover:to-blue-600/90 animate-glow-border hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Join the Club</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-semibold border-2 border-cyan hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 animate-glow-border"
          >
            Explore Events
          </Button>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                number: "50+", 
                label: "Active Members", 
                color: "from-cyan to-blue-400",
                bgColor: "bg-cyan/10",
                borderColor: "border-cyan/30"
              },
              { 
                number: "25+", 
                label: "Projects Built", 
                color: "from-blue-400 to-indigo-500",
                bgColor: "bg-blue-400/10",
                borderColor: "border-blue-400/30"
              },
              { 
                number: "15+", 
                label: "Events Hosted", 
                color: "from-indigo-500 to-purple-500",
                bgColor: "bg-indigo-500/10",
                borderColor: "border-indigo-500/30"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className={`relative group cursor-pointer`}
              >
                {/* Card Background */}
                <div className={`relative p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300`}>
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                       style={{background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`}}></div>
                  

                  
                  {/* Number with animation */}
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 text-center`}
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-light/70 text-center font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-60`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`
                        }}
                        animate={{
                          y: [-20, -40, -20],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-indicator"></div>
      </motion.div>
    </section>
  )
}

export default HeroSection