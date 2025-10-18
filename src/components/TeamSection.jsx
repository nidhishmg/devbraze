import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Users, Linkedin, Github, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      year: "Senior",
      bio: "Passionate about AI and robotics. Leading DevBraze's vision for innovation and community building.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["AI/ML", "Leadership", "Python", "React"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      role: "Tech Lead",
      department: "Electrical Engineering",
      year: "Junior",
      bio: "Hardware enthusiast with expertise in embedded systems and IoT development.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["IoT", "Embedded Systems", "C++", "PCB Design"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Event Manager",
      department: "Computer Engineering",
      year: "Sophomore",
      bio: "Organizing impactful events that bring the tech community together for learning and innovation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Project Management", "Full-Stack", "Node.js", "MongoDB"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Design Lead",
      department: "Computer Science",
      year: "Junior",
      bio: "Creating beautiful and functional user experiences for DevBraze's digital presence.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["UI/UX", "Figma", "React", "Design Systems"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Research Coordinator",
      department: "Data Science",
      year: "Senior",
      bio: "Bridging academic research with practical applications in machine learning and data analytics.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Data Science", "Research", "Python", "TensorFlow"],
      social: {
        linkedin: "#",
        github: "#",
        email: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Community Manager",
      department: "Information Systems",
      year: "Sophomore",
      bio: "Building connections and fostering an inclusive environment for all DevBraze members.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Community Building", "Marketing", "Social Media", "Communication"],
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
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="p-2"
              disabled={maxSlides <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-cyan w-6' : 'bg-slate/40'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="p-2"
              disabled={maxSlides <= 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

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
                        {member.department} • {member.year}
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
          <Button 
            size="lg"
            className="px-8 py-3 hover:scale-105 transition-all duration-300"
          >
            Meet the Full Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection