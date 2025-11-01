import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Linkedin, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Helper to build public image paths for team photos
  const teamImage = (file) => `/images/team/${file}`

  const teamMembers = [
    {
      id: 1,
      name: "Srinidhi",
      role: "President",
      department: "Leadership",
      bio: "Leading DevBraze's vision for innovation and driving excellence across all club activities.",
  image: teamImage("srinidhi.jpg"),
      skills: ["Leadership", "Strategic Planning", "Innovation", "Management"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Aniketh",
      role: "Tech Lead",
      department: "Technology",
      bio: "Spearheading technical initiatives and mentoring members in cutting-edge development.",
  image: teamImage("aniketh.jpg"),
      skills: ["Full-Stack", "AI/ML", "System Design", "Mentoring"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "Jeevitha",
      role: "Content & Design Lead",
      department: "Creative",
      bio: "Creating engaging content and beautiful designs that represent DevBraze's spirit.",
  image: teamImage("jeevitha.jpg"),
      skills: ["UI/UX Design", "Content Creation", "Branding", "Creative Strategy"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 4,
      name: "Affan",
      role: "Event Management Lead",
      department: "Events",
      bio: "Orchestrating memorable events that bring tech enthusiasts together for learning.",
  image: teamImage("affan.jpg"),
      skills: ["Event Planning", "Project Management", "Logistics", "Coordination"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    }
  ]

  const itemsPerSlide = 3
  const maxSlides = Math.ceil(teamMembers.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const getCurrentMembers = () => {
    const start = currentSlide * itemsPerSlide
    return teamMembers.slice(start, start + itemsPerSlide)
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate to-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Meet the Team
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6">
            The minds behind <span className="gradient-text">DevBraze</span>
          </h2>
          
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Our diverse team of passionate students brings together expertise from 
            multiple disciplines to drive innovation and create meaningful impact.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative mb-12">


          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentMembers().map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full bg-slate/20 border-slate/20 hover:border-cyan/30 overflow-hidden group">
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
                      
                      {/* Social Links */}
                      <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={member.social.linkedin}
                          className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm hover:bg-cyan/30 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-cyan" />
                        </a>
                        <a 
                          href={member.social.github}
                          className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm hover:bg-cyan/30 transition-colors"
                        >
                          <Github className="h-4 w-4 text-cyan" />
                        </a>
                        <a 
                          href={member.social.email}
                          className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm hover:bg-cyan/30 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-cyan" />
                        </a>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-light mb-1 font-heading group-hover:text-cyan transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-cyan text-sm font-medium mb-2">
                        {member.role}
                      </div>
                      <div className="text-light/60 text-xs mb-3">
                        {member.department}
                        {member.year ? ` • ${member.year}` : ''}
                      </div>
                      <p className="text-light/70 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-cyan/10 text-cyan text-xs rounded-full border border-cyan/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet the Full Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/team">
            <Button 
              size="lg"
              className="px-8 py-3 hover:scale-105 transition-all duration-300"
            >
              Meet the Full Team
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection