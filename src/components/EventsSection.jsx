import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, Code, Zap, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "IoT Innovation Hackathon",
      description: "48-hour hackathon focused on building IoT solutions for smart cities. Teams will work with sensors, microcontrollers, and cloud platforms.",
      date: "Dec 15-17, 2024",
      location: "Tech Lab, Campus",
      participants: "50+ participants",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Registration Open",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering neural networks, deep learning, and practical ML applications using Python and TensorFlow.",
      date: "Nov 28, 2024",
      location: "Conference Hall A",
      participants: "30+ participants",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Coming Soon",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Full-Stack Development Bootcamp",
      description: "Intensive 3-day bootcamp covering modern web development with React, Node.js, and cloud deployment strategies.",
      date: "Jan 10-12, 2025",
      location: "Computer Lab",
      participants: "25+ participants",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Early Bird",
      category: "Bootcamp"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Coming Soon": return "bg-cyan/20 text-cyan border-cyan/30"
      case "Early Bird": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default: return "bg-slate/20 text-light border-slate/30"
    }
  }

  return (
    <section id="events" className="py-20 bg-navy relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming Events
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6">
            Learn, Build & <span className="gradient-text">Innovate Together</span>
          </h2>
          
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Join our hands-on workshops, hackathons, and tech talks designed to push 
            the boundaries of what's possible in electronics and software development.
          </p>
        </motion.div>

        {/* Innovative Events Grid */}
        <div className="relative">
          {/* Featured Event - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="card-hover bg-slate/20 border-slate/20 hover:border-cyan/30 overflow-hidden group relative">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Event Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={events[0].image} 
                    alt={events[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan to-blue-500 text-navy text-sm font-bold">
                    ⭐ FEATURED EVENT
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(events[0].status)}`}>
                    {events[0].status}
                  </div>
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="p-3 bg-cyan/20 rounded-xl backdrop-blur-sm border border-cyan/30">
                      {React.createElement(events[0].icon, { className: "h-8 w-8 text-cyan" })}
                    </div>
                  </motion.div>
                </div>

                {/* Event Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-medium border border-cyan/30">
                      {events[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-light group-hover:text-cyan transition-colors mb-4">
                    {events[0].title}
                  </h3>
                  
                  <p className="text-light/70 mb-6 leading-relaxed">
                    {events[0].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-light/60">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-cyan" />
                      <span>{events[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-cyan" />
                      <span>{events[0].location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-cyan" />
                      <span>{events[0].participants}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 self-start group/btn">
                    Register Now
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Events - Innovative Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="group"
              >
                <Card className="card-hover h-full bg-slate/20 border-slate/20 hover:border-cyan/30 overflow-hidden">
                  {/* Compact Event Layout */}
                  <div className="relative">
                    {/* Event Image Header */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full bg-navy/80 text-cyan text-xs font-medium border border-cyan/30">
                          {event.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute bottom-3 right-3">
                        <div className="p-2 bg-cyan/20 rounded-lg backdrop-blur-sm border border-cyan/30">
                          {React.createElement(event.icon, { className: "h-5 w-5 text-cyan" })}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-light group-hover:text-cyan transition-colors mb-3">
                        {event.title}
                      </h4>
                      
                      <p className="text-light/70 text-sm mb-4 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                      
                      {/* Event Details */}
                      <div className="space-y-2 text-xs text-light/60 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2 text-cyan" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2 text-cyan" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all group/btn"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="px-8 py-3 bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 hover:scale-105 transition-all duration-300"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection