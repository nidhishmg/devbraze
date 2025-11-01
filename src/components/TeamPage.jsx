import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Users, Linkedin, Instagram, Mail, ArrowLeft, Star, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from './Navbar'

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('leaders')

  // Helper to build public image paths for team photos
  const teamImage = (file) => `/images/team/${file}`

  const facultyCoordinators = [
    {
      id: 1,
      name: "Veena KN",
      role: "Assistant Professor",
      department: "Faculty Coordinator",
      bio: "Guiding DevBraze's academic excellence and providing mentorship for innovative student projects.",
  image: teamImage("veena-kn.jpg"),
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Sudharshan KN",
      role: "Director SC Admin",
      department: "Faculty Coordinator", 
      bio: "Overseeing administrative operations and ensuring DevBraze's alignment with institutional goals.",
  image: teamImage("sudharshan-kn.jpg"),
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    }
  ]

  const teamLeaders = [
    {
      id: 1,
      name: "Srinidhi",
      role: "President",
      department: "Leadership Team",
      bio: "Leading DevBraze's vision and driving innovation across all club activities and projects.",
  image: teamImage("srinidhi.jpg"),
      skills: ["Leadership", "Strategic Planning", "Project Management", "Innovation"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Vedhashree",
      role: "Vice President",
      department: "Leadership Team",
      bio: "Supporting organizational operations and coordinating between different teams for seamless execution.",
  image: teamImage("vedhashree.jpg"),
      skills: ["Operations", "Team Coordination", "Event Planning", "Communication"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "Chirag",
      role: "Treasurer",
      department: "Finance Team",
      bio: "Managing club finances and ensuring transparent handling of resources for all DevBraze activities.",
  image: teamImage("chirag-treasurer.jpg"),
      skills: ["Financial Management", "Budgeting", "Resource Planning", "Analytics"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 4,
      name: "Aniketh",
      role: "Tech Lead",
      department: "Technical Team",
      bio: "Spearheading technical initiatives and mentoring members in cutting-edge technology development.",
  image: teamImage("aniketh.jpg"),
      skills: ["Full-Stack Development", "AI/ML", "System Architecture", "Mentoring"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 5,
      name: "Jeevitha",
      role: "Content and Design Lead",
      department: "Creative Team",
      bio: "Creating engaging content and beautiful designs that represent DevBraze's innovative spirit.",
  image: teamImage("jeevitha.jpg"),
      skills: ["UI/UX Design", "Content Creation", "Brand Design", "Creative Strategy"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 6,
      name: "Chirag",
      role: "Social Media Lead",
      department: "Marketing Team",
      bio: "Building DevBraze's online presence and engaging with the tech community across platforms.",
  image: teamImage("chirag-social.jpg"),
      skills: ["Social Media Strategy", "Digital Marketing", "Community Engagement", "Analytics"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 7,
      name: "Affan",
      role: "Event Management Lead",
      department: "Events Team",
      bio: "Orchestrating memorable events that bring together tech enthusiasts for learning and networking.",
  image: teamImage("affan.jpg"),
      skills: ["Event Planning", "Logistics", "Vendor Management", "Team Coordination"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    },
    {
      id: 8,
      name: "Vina",
      role: "Marketing Lead",
      department: "Marketing Team",
      bio: "Developing marketing strategies to promote DevBraze's initiatives and attract new members.",
  image: teamImage("vina.jpg"),
      skills: ["Marketing Strategy", "Brand Promotion", "Campaigns", "Partnership Development"],
      social: {
        linkedin: "#",
        instagram: "#",
        email: "#"
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const categories = [
    { id: 'faculty', label: 'Faculty Coordinators', icon: Award },
    { id: 'leaders', label: 'Team Leaders', icon: Users }
  ]

  const getCurrentTeam = () => {
    return activeCategory === 'faculty' ? facultyCoordinators : teamLeaders
  }

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image for mobile */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/chip-hero.jpg"
            alt="Tech circuit background"
            className="w-full h-full object-cover object-center brightness-90"
            loading="lazy"
          />
        </div>
        {/* Background Video for md+ screens */}
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
              <Users className="h-4 w-4 mr-2 animate-pulse" />
              Meet Our Team
              <Heart className="h-4 w-4 ml-2 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-light mb-6 leading-tight">
              The People Behind{' '}
              <span className="gradient-text">DevBraze</span>
            </h1>
            
            <p className="text-lg text-light/80 max-w-3xl mx-auto mb-8">
              Meet the dedicated individuals who drive innovation, foster learning, and build 
              the future of technology at DevBraze.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-12 bg-navy/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-slate/20 backdrop-blur-sm p-2 rounded-2xl border border-slate/30">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan to-blue-500 text-white shadow-lg'
                      : 'text-light/70 hover:text-light hover:bg-slate/20'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-navy relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`grid gap-8 ${
                activeCategory === 'faculty' 
                  ? 'md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto' 
                  : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >
              {getCurrentTeam().map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full bg-slate/20 border-slate/20 hover:border-cyan/30 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <CardContent className="p-0">
                      {/* Member Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={member.image} 
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/team/placeholder.svg' }}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                        
                        {/* Role Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/80 text-cyan text-xs font-medium border border-cyan/30 backdrop-blur-sm">
                          {member.department}
                        </div>
                        
                        {/* Social Links */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a href={member.social.linkedin} className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm border border-cyan/30 text-cyan hover:bg-cyan/30 transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={member.social.instagram} className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm border border-cyan/30 text-cyan hover:bg-cyan/30 transition-colors">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-light group-hover:text-cyan transition-colors mb-1">
                          {member.name}
                        </h3>
                        <p className="text-cyan text-sm font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-light/70 text-sm mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        
                        {/* Skills */}
                        {member.skills && (
                          <div className="flex flex-wrap gap-2">
                            {member.skills.slice(0, 3).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-cyan/10 text-cyan text-xs rounded-full border border-cyan/20"
                              >
                                {skill}
                              </span>
                            ))}
                            {member.skills.length > 3 && (
                              <span className="text-light/50 text-xs">
                                +{member.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 via-navy to-slate-800/50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-light mb-6">
              Want to Join Our <span className="gradient-text">Amazing Team?</span>
            </h2>
            <p className="text-lg text-light/80 mb-8 max-w-2xl mx-auto">
              DevBraze is always looking for passionate individuals who want to make a difference 
              in the tech community. Join us in our mission to innovate and inspire!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan via-blue-500 to-blue-600 hover:from-cyan/90 hover:via-blue-500/90 hover:to-blue-600/90 animate-glow-border hover:scale-105 transition-all duration-300"
              >
                Join DevBraze
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold border-2 border-cyan hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage