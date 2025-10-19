import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SignalOverlay } from './SignalOverlay';
import { 
  HERO_TITLE, 
  HERO_SUBTITLE, 
  HERO_BADGE, 
  PRIMARY_CTA, 
  SECONDARY_CTA, 
  HERO_STATS 
} from '@/content/home';

const HeroChip = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
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
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0B1324] to-[#0F172A]">
      {/* Background chip image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/chip-hero.jpg"
          alt="Futuristic microchip with flowing blue signal lines representing DevBraze electronics and CS theme"
          className="w-full h-full object-cover object-center opacity-60"
          style={{ 
            filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.3))',
          }}
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            e.target.style.display = 'none';
            e.target.parentElement.style.background = `
              radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%),
              linear-gradient(135deg, #0B1324 0%, #1e293b 50%, #0F172A 100%)
            `;
          }}
        />
        {/* Additional glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-[#0B1324]/60" />
      </div>

      {/* Animated signal overlay */}
      <SignalOverlay />

      {/* Content */}
      <div className="relative container mx-auto px-6 grid lg:grid-cols-12 gap-8 z-10">
        <motion.div 
          className="lg:col-span-7 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-sm border border-cyan/30 text-cyan text-sm font-medium mb-6"
            style={{
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
            }}
          >
            {HERO_BADGE}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-6 leading-tight"
          >
            Igniting Innovation through{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Electronics & Code
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl leading-relaxed"
          >
            {HERO_SUBTITLE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="px-8 py-3 text-lg font-semibold rounded-xl bg-cyan-500/20 border-2 border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/30 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: '0 0 25px rgba(56, 189, 248, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {PRIMARY_CTA.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold rounded-xl bg-white/5 border-2 border-white/20 text-slate-100 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              {SECONDARY_CTA.label}
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {HERO_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="group cursor-pointer"
              >
                <div className={`relative p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300`}>
                  {/* Number with animation */}
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 text-center`}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <p className="text-slate-300 text-center font-medium text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - space for chip visual focus */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
          {/* Optional: Add floating elements or keep space for chip focus */}
          <motion.div
            className="relative"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 animate-pulse" />
            </div>
          </motion.div>
        </div>
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