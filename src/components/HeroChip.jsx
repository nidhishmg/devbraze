import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroChip = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden pt-28 md:pt-0 bg-gradient-to-b from-[#0B1324] to-[#0F172A]">
      {/* Background chip image: hide on mobile, show on md+ */}
      <div className="absolute inset-0">
        <img
          src="/images/chip-hero.jpg"
          alt="Futuristic microchip with flowing blue signal lines representing DevBraze electronics and CS theme"
          className="w-full h-full object-cover object-center"
          style={{ 
            filter: 'brightness(0.7) contrast(1.2)',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1324]/80 via-[#0B1324]/40 to-[#0F172A]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-[#0B1324]/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge removed as requested */}

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight"
          >
            Igniting Innovation through{' '}
            {/* Make 'Electronics &' clearly visible using the same purple/blue gradient style as 'Code' */}
            <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
              Electronics &
            </span>{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
              Code
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
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
              asChild
              size="lg"
              className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white hover:scale-105 transition-all duration-300"
            >
              <Link to="/join">Join DevBraze</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-cyan-400/60 text-slate-100 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Link to="/events">Explore Events</Link>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Active Members" },
              { number: "25+", label: "Projects Built" },
              { number: "15+", label: "Events Hosted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan/20 hover:border-cyan/40 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
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
  );
};

export default HeroChip;