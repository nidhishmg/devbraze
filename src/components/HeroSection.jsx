import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [signals, setSignals] = useState([])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Generate random signals/particles
  useEffect(() => {
    const generateSignals = () => {
      const newSignals = []
      for (let i = 0; i < 20; i++) {
        newSignals.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
          path: Math.floor(Math.random() * 4) // Different path types
        })
      }
      setSignals(newSignals)
    }
    
    generateSignals()
    const interval = setInterval(generateSignals, 8000)
    return () => clearInterval(interval)
  }, [])

  const CircuitBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Circuit Board Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Circuit traces */}
        <defs>
          <pattern id="circuit" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 0,4 L 8,4" stroke="rgba(0,255,255,0.2)" strokeWidth="0.1" />
            <path d="M 4,0 L 4,8" stroke="rgba(0,255,255,0.2)" strokeWidth="0.1" />
            <circle cx="4" cy="4" r="0.3" fill="rgba(0,255,255,0.3)" />
          </pattern>
          
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,255,255,0)" />
            <stop offset="50%" stopColor="rgba(0,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(0,255,255,0)" />
          </linearGradient>
        </defs>
        
        <rect width="100" height="100" fill="url(#circuit)" />
        
        {/* Main circuit paths */}
        <g stroke="rgba(0,255,255,0.4)" strokeWidth="0.3" fill="none">
          <path d="M 0,20 L 30,20 L 30,40 L 60,40 L 60,60 L 100,60" />
          <path d="M 0,80 L 40,80 L 40,30 L 70,30 L 70,10 L 100,10" />
          <path d="M 20,0 L 20,35 L 50,35 L 50,70 L 80,70 L 80,100" />
          <path d="M 100,45 L 75,45 L 75,25 L 45,25 L 45,85 L 0,85" />
          <path d="M 10,0 L 10,50 L 90,50 L 90,100" />
          <path d="M 0,65 L 25,65 L 25,15 L 85,15 L 85,95 L 100,95" />
        </g>
        
        {/* Circuit nodes/chips */}
        <g>
          <rect x="28" y="18" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
          <rect x="58" y="38" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
          <rect x="68" y="28" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
          <rect x="43" y="33" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
          <rect x="18" y="33" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
          <rect x="73" y="43" width="4" height="4" fill="rgba(0,255,255,0.6)" rx="0.5" />
        </g>
      </svg>

      {/* Animated Signals */}
      {signals.map((signal) => (
        <motion.div
          key={signal.id}
          className="absolute w-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-lg shadow-cyan-400/50"
          style={{
            left: `${signal.x}%`,
            top: `${signal.y}%`,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scaleX: [0, 1, 1, 0],
            x: signal.path === 0 ? [0, 300] : 
               signal.path === 1 ? [0, -300] :
               signal.path === 2 ? [0, 150] : [0, -150],
            y: signal.path === 0 ? [0, 0] :
               signal.path === 1 ? [0, 150] :
               signal.path === 2 ? [0, 200] : [0, -100]
          }}
          transition={{
            duration: signal.duration,
            delay: signal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Central Processor Animation */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 0.5, -0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main chip */}
          <div className="w-20 h-20 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-cyan-500/50 rounded-lg relative overflow-hidden backdrop-blur-sm">
            {/* Chip pattern */}
            <div className="absolute inset-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded">
              <div className="grid grid-cols-5 gap-0.5 h-full p-1">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-cyan-400/30 rounded-sm"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Pulsing core */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400/80 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Energy beams */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-10 bg-gradient-to-t from-cyan-400/90 to-transparent shadow-sm shadow-cyan-400/30"
              style={{
                top: -40,
                left: '50%',
                transformOrigin: '50% 50px',
                transform: `translateX(-50%) rotate(${i * 45}deg)`
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full shadow-sm shadow-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -40, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/60 to-slate/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/70" />
    </div>
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      <CircuitBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
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
              className="text-xl md:text-2xl text-light/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Where circuits meet creativity and code transforms ideas into reality. 
              Join the next generation of innovators building tomorrow's technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 hover:scale-105 transition-all duration-300 glow-effect"
              >
                Join DevBraze
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
                    className="group cursor-pointer"
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
                      <p className="text-light/70 text-center font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection