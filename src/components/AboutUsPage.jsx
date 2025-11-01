import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  CircuitBoard, 
  Bot, 
  ArrowRight, 
  Sparkles, 
  BookOpen,
  Lightbulb,
  Globe,
  Code,
  Palette,
  Megaphone,
  Zap,
  Calendar,
  Share2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navbar from './Navbar'
import Footer from './Footer'

const AboutUsPage = () => {
  const teams = [
    {
      key: "content",
      name: "Content & Design Team",
      icon: Palette,
      description: "Crafting visual stories and compelling content that brings our vision to life",
      responsibilities: ["UI/UX Design", "Graphic Design", "Content Creation", "Brand Identity"],
      color: "text-cyan",
      bgColor: "bg-cyan/10",
      borderColor: "border-cyan/30",
      glowColor: "group-hover:shadow-cyan/20"
    },
    {
      key: "marketing",
      name: "Marketing Team",
      icon: Megaphone,
      description: "Spreading the word about DevBraze and building our community presence",
      responsibilities: ["Brand Promotion", "Campaign Strategy", "Community Outreach", "Partnership Building"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      glowColor: "group-hover:shadow-blue-400/20"
    },
    {
      key: "events",
      name: "Event Management Team",
      icon: Calendar,
      description: "Orchestrating memorable experiences and engaging technical events",
      responsibilities: ["Event Planning", "Workshop Coordination", "Hackathon Organization", "Guest Speaker Management"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      key: "tech",
      name: "Tech Team",
      icon: Code,
      description: "Building the digital infrastructure and innovative solutions for our community",
      responsibilities: ["Web Development", "App Development", "Technical Projects", "System Administration"],
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
      borderColor: "border-sky-400/30",
      glowColor: "group-hover:shadow-sky-400/20"
    },
    {
      key: "social",
      name: "Social Media Team",
      icon: Share2,
      description: "Connecting with our audience and building our digital community",
      responsibilities: ["Content Strategy", "Social Media Management", "Community Engagement", "Digital Campaigns"],
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
      borderColor: "border-indigo-400/30",
      glowColor: "group-hover:shadow-indigo-400/20"
    },
    {
      key: "students",
      name: "Student Coordinators",
      icon: Users,
      description: "Leading initiatives and guiding core teams within DevBraze",
      responsibilities: ["Leadership", "Team Coordination", "Mentorship", "Strategic Planning"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
      glowColor: "group-hover:shadow-purple-400/20"
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and exploring cutting-edge technologies",
      color: "text-cyan"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building a strong community of like-minded tech enthusiasts",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous growth through hands-on experience and knowledge sharing",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating meaningful solutions that make a difference",
      color: "text-sky-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Video (local only) */}
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-90"
          src="/videos/circuit.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Soft gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan/10 via-blue-400/10 to-blue-500/10 border border-cyan/30 text-cyan text-sm font-medium mb-8 animate-glow-border">
              <CircuitBoard className="h-4 w-4 mr-2 animate-pulse" />
              About DevBraze
              <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-light mb-6 leading-tight">
              The Official Tech Community of{' '}
              <span className="gradient-text">REVA University</span>
            </h1>
            
            <p className="text-lg md:text-xl text-light/80 max-w-4xl mx-auto leading-relaxed">
              School of Electronics and Communication Engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-gradient-to-br from-slate to-navy relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-light mb-8">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-light/80 leading-relaxed mb-6">
                <span className="gradient-text font-semibold">DevBraze</span> is the official technical community and club of the School of
                Electronics and Communication Engineering at REVA University. We are a
                dynamic and vibrant platform created to adapt to the evolving interests
                and aspirations of students and technology enthusiasts.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-slate/30 rounded-lg robot-glow`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-light mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-light/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Mission
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-8">
              Fostering Innovation &{' '}
              <span className="gradient-text">Collaboration</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-light/80 leading-relaxed">
                Our mission is to foster innovation, learning, and collaboration in the
                field of electronics and communication engineering. We aim to explore
                the latest advancements in technology, connect students with peers and
                industry professionals, and create opportunities for knowledge sharing
                and practical experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-gradient-to-br from-slate to-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan/10 via-blue-400/10 to-blue-500/10 border border-cyan/20 text-cyan text-sm font-medium mb-6 animate-glow-border">
              <CircuitBoard className="h-4 w-4 mr-2 animate-pulse" />
              Our Teams
              <Zap className="h-4 w-4 ml-2 animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6">
              Interconnected Teams Powered by{' '}
              <span className="gradient-text">Innovation</span>
            </h2>
            
            <p className="text-lg text-light/80 max-w-3xl mx-auto">
              Like a sophisticated circuit board, our teams work in perfect harmony, with DevBraze as
              the central processor powering all operations.
            </p>
          </motion.div>

          {/* Tech-themed Organizational Circuit Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative px-6"
          >
            {/* Teams Grid */}
            <div className="teams-grid max-w-7xl mx-auto">
              {teams.map((team, index) => (
                <motion.div
                  key={team.key}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`area-${team.key} group`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    delay: index * 0.1
                  }}
                >
                  {/* Team Card */}
                  <div className={`relative min-w-[320px] max-w-[420px] mx-auto h-full rounded-2xl p-6 bg-white/5 border ${team.borderColor} backdrop-blur-md shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)] group-hover:shadow-[0_0_60px_-5px_rgba(56,189,248,0.5)] transition-all duration-500 overflow-hidden`}>
                    {/* Background glow animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/3 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 ${team.bgColor} rounded-xl border ${team.borderColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <team.icon className={`h-6 w-6 ${team.color}`} />
                          </div>
                          <div>
                            <h3 className={`text-lg font-bold ${team.color} group-hover:text-cyan transition-colors duration-300 tracking-wide uppercase`}>
                              {team.name}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Team number indicator */}
                        <div className={`text-2xl font-bold ${team.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                          0{index + 1}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {team.description}
                      </p>

                      {/* Responsibilities Tags */}
                      <div className="flex flex-wrap gap-2">
                        {team.responsibilities.map((responsibility, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-xs px-3 py-1 rounded-full bg-slate-800/60 border border-slate-600/40 text-slate-300 hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan transition-all duration-200 cursor-default"
                          >
                            {responsibility}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan/60 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
                  </div>
                </motion.div>
              ))}
              
              {/* Central DevBraze Microprocessor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="relative">
                  {/* Main Processor Package */}
                  <div className="relative w-40 h-40 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-lg border-4 border-slate-400/80 shadow-[0_0_40px_-10px_rgba(148,163,184,0.6)]">
                    
                    {/* Connection Pins - Top */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={`top-${i}`} className="w-1 h-6 bg-gradient-to-t from-slate-400 to-cyan rounded-sm">
                          <div className="w-full h-2 bg-cyan animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Connection Pins - Bottom */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={`bottom-${i}`} className="w-1 h-6 bg-gradient-to-b from-slate-400 to-cyan rounded-sm">
                          <div className="w-full h-2 bg-cyan animate-pulse" style={{ animationDelay: `${i * 0.1 + 0.8}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Connection Pins - Left */}
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={`left-${i}`} className="w-6 h-1 bg-gradient-to-l from-slate-400 to-cyan rounded-sm">
                          <div className="w-2 h-full bg-cyan animate-pulse" style={{ animationDelay: `${i * 0.1 + 0.4}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Connection Pins - Right */}
                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={`right-${i}`} className="w-6 h-1 bg-gradient-to-r from-slate-400 to-cyan rounded-sm">
                          <div className="w-2 h-full bg-cyan animate-pulse" style={{ animationDelay: `${i * 0.1 + 1.2}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Central Processing Core */}
                    <div className="absolute inset-6 bg-gradient-to-br from-slate-900 via-navy to-slate-800 rounded border-2 border-slate-500/50 overflow-hidden">
                      {/* DevBraze Logo Core */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan via-blue-400 to-blue-600 rounded-full border-2 border-cyan/50 flex items-center justify-center animate-pulse-slow">
                          <span className="text-white font-bold text-lg tracking-wider">DB</span>
                        </div>
                      </div>
                      
                      {/* Circuit Pattern Overlay */}
                      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
                        <defs>
                          <pattern id="microCircuit" patternUnits="userSpaceOnUse" width="20" height="20">
                            <rect width="20" height="20" fill="transparent"/>
                            <circle cx="10" cy="10" r="1" fill="#38BDF8" opacity="0.6">
                              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <path d="M0 10 L20 10 M10 0 L10 20" stroke="#38BDF8" strokeWidth="0.3" opacity="0.4"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#microCircuit)"/>
                      </svg>
                      
                      {/* Processing Indicator Lights */}
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-cyan rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                    
                    {/* Processor Label */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs text-slate-300 font-mono bg-slate-800/60 px-2 py-0.5 rounded">DEVBRAZE-CPU</span>
                    </div>
                  </div>
                  
                  {/* Heat Dissipation Effect */}
                  <div className="absolute inset-0 rounded-lg border border-cyan/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-lg border border-blue-400/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </motion.div>
            </div>

            {/* Central Microprocessor Only - No Connections */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Keep this div for potential future additions, but remove all SVG connections */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6 leading-tight">
              Ready to <span className="gradient-text">join our journey</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-light/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Become part of DevBraze and help us shape the future of electronics and communication engineering at REVA University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan via-blue-500 to-blue-600 hover:from-cyan/90 hover:via-blue-500/90 hover:to-blue-600/90 animate-glow-border hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Join DevBraze</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 border-cyan hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 animate-glow-border"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUsPage