import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Zap,
  Sparkles,
  Rocket,
  Trophy,
  Heart,
  Play,
  Pause,
  Timer,
  Gift
} from 'lucide-react'
import Navbar from './Navbar'
import { upcomingEvents as sharedUpcomingEvents } from '@/lib/events'

const EventsPage = () => {
  const [showPastEvents, setShowPastEvents] = useState(false)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const scrollRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Status color helper function
  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Coming Soon": return "bg-cyan/20 text-cyan border-cyan/30"
      case "Early Bird": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default: return "bg-slate/20 text-light border-slate/30"
    }
  }

  // Event modal handler
  const openEventModal = (event) => {
    setSelectedEvent(event)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || !isAutoScrolling) return

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1
        // Reset scroll when reaching end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(autoScroll, 30)
    return () => clearInterval(interval)
  }, [isAutoScrolling])

  // Mouse tracking for interactive effects
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  // Upcoming Events Data
  const upcomingEvents = sharedUpcomingEvents.map(e => ({
    ...e,
    // Normalize fields this page expects
    date: e.date || '',
    time: e.time || '09:00 AM - 04:00 PM',
    registrationOpen: e.status === 'Registration Open'
  }))

  // Past Events Data (for infinite scroll)
  const pastEventsData = [
    {
      id: 201,
      title: "Figma Workshop",
      date: "2024-08-28",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Workshop",
      location: "ECE Department",
      highlights: []
    },
    {
      id: 202,
      title: "Tech Fusion Hackathon",
      date: "2024-11-23",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Hackathon",
      location: "ECE Lab Complex",
      highlights: []
    },
    {
      id: 203,
      title: "Diamante Hackathon",
      date: "2024-08-31",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Hackathon",
      location: "REVA University",
      highlights: []
    },
    {
      id: 204,
      title: "TechMania",
      date: "2024-02-22",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Event",
      location: "ECE Department",
      highlights: []
    },
    {
      id: 205,
      title: "Genesis Seminar",
      date: "2023-11-01",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Seminar",
      location: "ECE Department",
      highlights: []
    },
    {
      id: 206,
      title: "Aarambha Seminar",
      date: "2023-11-01",
      image: "/api/placeholder/300/200",
      participants: null,
      category: "Seminar",
      location: "ECE Department",
      about: "Aarambha was the exciting start of the club, led by coordinator Prof. Anitha Kumari. All the founding members came together with energy to build a fun tech community. The event marked the official beginning of the club, sharing goals and plans for the future.",
      highlights: ["Inaugural Event", "Prof. Anitha Kumari", "Founding Members", "Community Launch"]
    }
  ]

  // Create infinite scroll array by repeating past events
  const [pastEvents, setPastEvents] = useState([...pastEventsData, ...pastEventsData, ...pastEventsData, ...pastEventsData])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      
      // If we're near the end, add more events
      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        setPastEvents(prev => [...prev, ...pastEventsData])
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
              <Calendar className="h-4 w-4 mr-2 animate-pulse" />
              DevBraze Events
              <Zap className="h-4 w-4 ml-2 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-light mb-6 leading-tight">
              Upcoming <span className="gradient-text">Events & Workshops</span>
            </h1>
            <p className="text-lg text-light/80 max-w-3xl mx-auto mb-8">
              Join our exciting events, workshops, and competitions designed to enhance your skills, 
              expand your network, and accelerate your tech journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-navy relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          {/* Featured Event - Large Card */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="bg-slate/20 border border-slate/20 hover:border-cyan/30 rounded-xl overflow-hidden group relative transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Event Media (Video for EasyEDA, else Image) */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  {upcomingEvents[0]?.slug === 'easyeda-workshop-sep-23-2025' ? (
                    <video
                      src="/videos/workshop.mp4"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={upcomingEvents[0].title}
                    />
                  ) : (
                    <img 
                      src={upcomingEvents[0].image} 
                      alt={upcomingEvents[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan to-blue-500 text-navy text-sm font-bold">
                    ⭐ FEATURED EVENT
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(upcomingEvents[0].status)}`}>
                    {upcomingEvents[0].status}
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-cyan/20 rounded-xl backdrop-blur-sm border border-cyan/30">
                      <Trophy className="h-8 w-8 text-cyan" />
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-medium border border-cyan/30">
                      {upcomingEvents[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-light group-hover:text-cyan transition-colors mb-4">
                    {upcomingEvents[0].title}
                  </h3>
                  
                  <p className="text-light/70 mb-6 leading-relaxed">
                    {upcomingEvents[0].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-light/60">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-cyan" />
                      <span>{upcomingEvents[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-cyan" />
                      <span>{upcomingEvents[0].location}</span>
                    </div>
                    {upcomingEvents[0].participants && (
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-cyan" />
                        <span>{upcomingEvents[0].participants}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`/register/${upcomingEvents[0].slug}`}
                      className="bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg self-start group/btn"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 inline group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      onClick={() => openEventModal(upcomingEvents[0])}
                      className="border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan px-6 py-3 rounded-xl font-semibold transition-all duration-300 self-start"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Events - Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-slate/20 border border-slate/20 hover:border-cyan/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
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
                          <Zap className="h-5 w-5 text-cyan" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-light group-hover:text-cyan transition-colors mb-3">
                        {event.title}
                      </h4>
                      
                      <p className="text-light/70 text-sm mb-4 leading-relaxed">
                        {event.description.length > 120 ? event.description.substring(0, 120) + '...' : event.description}
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
                      <button 
                        onClick={() => openEventModal(event)}
                        className="w-full border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan py-2 px-4 rounded-lg text-sm font-medium transition-all group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 inline group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 via-navy to-slate-800/50 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Past Events
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6">
              Our <span className="gradient-text">Event Gallery</span>
            </h2>
            
            <p className="text-lg text-light/80 max-w-3xl mx-auto mb-10">
              Take a look at our successful events and the amazing experiences we've created together.
            </p>
            
            {/* Action Button */}
            <div className="flex items-center justify-center mb-12">
              <motion.button
                onClick={() => setShowPastEvents(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan via-blue-400 to-purple-500 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)] relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 60px -5px rgba(56, 189, 248, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <Gift className="h-6 w-6 relative z-10" />
                <span className="relative z-10">View Past Events</span>
                <ExternalLink className="h-5 w-5 relative z-10" />
              </motion.button>
            </div>
          </motion.div>

          {/* Auto-Scrolling Past Events */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-6"
              style={{ scrollBehavior: 'smooth' }}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={`${event.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (index % 6) * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex-shrink-0 w-96 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="bg-white/5 border border-slate-600/30 rounded-3xl overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-500 relative">
                    {/* Animated Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      animate={{
                        background: [
                          'linear-gradient(0deg, transparent, transparent)',
                          'linear-gradient(90deg, rgba(56, 189, 248, 0.3), transparent)',
                          'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3))',
                          'linear-gradient(270deg, transparent, rgba(236, 72, 153, 0.3))',
                          'linear-gradient(360deg, transparent, transparent)'
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Event Image */}
                    <div className="relative h-52 bg-gradient-to-br from-slate-600/30 via-slate-500/30 to-slate-400/30 overflow-hidden">
                      {/* Floating Success Emojis */}
                      <div className="absolute inset-0">
                        {['🏆', '🎯', '✨', '🚀', '💯'].map((emoji, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-2xl opacity-60"
                            style={{
                              left: `${15 + i * 15}%`,
                              top: `${20 + i * 8}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              rotate: [0, 10, -10, 0],
                              scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut"
                            }}
                          >
                            {emoji}
                          </motion.div>
                        ))}
                      </div>

                      {/* Category Badge */}
                      <motion.div 
                        className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan/40"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-cyan text-sm font-medium">{event.category}</span>
                      </motion.div>

                      {/* Participants Badge */}
                      <motion.div 
                        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-xl border border-white/20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="text-white text-sm font-medium">👥 {event.participants} Attended</span>
                      </motion.div>

                      {/* Success Particles */}
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-green-400/60 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -30, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: Math.random() * 1.5,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <motion.h3 
                        className="text-lg font-bold text-light mb-3 group-hover:text-cyan transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {event.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-slate-400 text-sm mb-4 flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <Calendar className="h-4 w-4 text-cyan" />
                        {formatDate(event.date)}
                      </motion.p>

                      {/* Highlights with Fun Animation */}
                      <div className="space-y-2">
                        {event.highlights.slice(0, 3).map((highlight, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-3 text-sm text-slate-300"
                            whileHover={{ 
                              scale: 1.05, 
                              x: 10,
                              color: '#38BDF8'
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-cyan rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: idx * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="text-center mt-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-slate-400 text-sm">
              🖱️ Hover to pause • {isAutoScrolling ? '⚡ Auto-scrolling active' : '⏸️ Paused'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="bg-gradient-to-br from-navy via-slate-800 to-navy border border-cyan/30 rounded-2xl p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 px-3 py-1 rounded-lg border border-slate/30 text-slate-300 hover:bg-slate/20"
              >
                Close
              </button>

              <h3 className="text-2xl font-bold text-light mb-2">{selectedEvent.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-light/70 mb-4">
                <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-2 text-cyan" />{selectedEvent.date}</span>
                {selectedEvent.time && (
                  <span className="inline-flex items-center"><Clock className="h-4 w-4 mr-2 text-cyan" />{selectedEvent.time}</span>
                )}
                <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-2 text-cyan" />{selectedEvent.location}</span>
              </div>

              <p className="text-light/80 mb-4">{selectedEvent.description}</p>

              {Array.isArray(selectedEvent.details) && selectedEvent.details.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-light font-semibold mb-2">Details</h4>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    {selectedEvent.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedEvent.registrationUrl ? (
                <a
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 text-white px-5 py-2.5 rounded-xl font-semibold transition-all"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span className="inline-block border border-cyan/30 text-cyan px-5 py-2.5 rounded-xl">Registration Link Coming Soon</span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Past Events Modal */}
      <AnimatePresence>
        {showPastEvents && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setShowPastEvents(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-navy via-slate-800 to-navy border-2 border-cyan/30 rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.1), transparent 70%)',
                      'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.1), transparent 70%)',
                      'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1), transparent 70%)',
                      'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.1), transparent 70%)',
                      'radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.1), transparent 70%)'
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between mb-10 relative z-10">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-4xl"
                  >
                    📚
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-light mb-2">
                      Past Events Archive
                    </h2>
                    <p className="text-slate-400">🎉 Our journey of amazing events and memories</p>
                  </div>
                </motion.div>
                
                <motion.button
                  onClick={() => setShowPastEvents(false)}
                  className="p-3 hover:bg-red-500/20 rounded-2xl transition-all duration-300 border border-red-500/30 group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <X className="h-6 w-6 text-red-400 group-hover:text-red-300" />
                </motion.button>
              </div>

              {/* Events Grid */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, staggerChildren: 0.1 }}
              >
                {pastEventsData.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 12
                    }}
                    className="group cursor-pointer"
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="bg-white/5 border border-slate-600/30 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 relative">
                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{
                          boxShadow: [
                            '0 0 0 rgba(56, 189, 248, 0)',
                            '0 0 20px rgba(56, 189, 248, 0.3)',
                            '0 0 0 rgba(56, 189, 248, 0)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Event Image */}
                      <div className="h-36 bg-gradient-to-br from-slate-600/20 via-slate-500/20 to-slate-400/20 relative overflow-hidden">
                        {/* Success Celebration Elements */}
                        <div className="absolute inset-0">
                          {['🎊', '🏆', '⭐', '🎯'].map((emoji, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-xl opacity-70"
                              style={{
                                left: `${20 + i * 20}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 15, -15, 0],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                              }}
                            >
                              {emoji}
                            </motion.div>
                          ))}
                        </div>

                        {/* Category Badge */}
                        <motion.div 
                          className="absolute top-3 left-3 bg-navy/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-cyan font-medium border border-cyan/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          {event.category}
                        </motion.div>
                      </div>

                      {/* Event Content */}
                      <div className="p-5">
                        <motion.h3 
                          className="font-bold text-light mb-2 group-hover:text-cyan transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {event.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-slate-400 text-sm mb-4 flex items-center gap-2"
                          whileHover={{ x: 5 }}
                        >
                          <Calendar className="h-4 w-4 text-cyan" />
                          {formatDate(event.date)}
                        </motion.p>

                        {/* Participants Count */}
                        <motion.div 
                          className="mb-4 p-2 bg-green-500/10 border border-green-500/30 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                            <Users className="h-4 w-4" />
                            <span>✅ {event.participants} Successfully Participated</span>
                          </div>
                        </motion.div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {event.highlights.map((highlight, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center gap-2 text-xs text-slate-300"
                              whileHover={{ 
                                scale: 1.05, 
                                x: 5,
                                color: '#38BDF8'
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-cyan rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity, 
                                  delay: idx * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Fun Footer */}
              <motion.div
                className="text-center mt-12 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.p 
                  className="text-slate-400 text-lg"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉 More amazing events coming soon! Stay tuned! 🚀
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EventsPage
