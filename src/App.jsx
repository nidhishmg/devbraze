import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'

// Import components
import Navbar from './components/Navbar'
import HeroChip from './components/HeroChip'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import AboutUsPage from './components/AboutUsPage'
import EventsPage from './components/EventsPage'
import TeamPage from './components/TeamPage'
import ScrollToTop from './components/ScrollToTop'
import JoinPage from './components/JoinPage'
import ThanksPage from './components/ThanksPage'
// Registration and Admin routes removed per request

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 bg-navy flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <img 
            src="/devbraze-logo.svg" 
            alt="DevBraze Logo" 
            className="h-16 w-16 object-contain"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold font-heading gradient-text mb-2"
        >
          DevBraze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-light/70"
        >
          Loading innovation...
        </motion.p>
      </div>
    </motion.div>
  )

  // Home Page Component
  const HomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <HeroChip />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-navy text-light">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <Router 
            key="content"
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/thanks" element={<ThanksPage />} />
              {/* Registration/Admin routes removed */}
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App