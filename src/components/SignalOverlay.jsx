"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SignalOverlay() {
  const reduceMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <svg 
      className="absolute inset-0 pointer-events-none w-full h-full" 
      viewBox="0 0 1440 900" 
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Gradient and glow definitions */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56,189,248,0)" />
          <stop offset="50%" stopColor="rgba(56,189,248,0.9)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </linearGradient>

        <radialGradient id="chipGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.3)" />
          <stop offset="70%" stopColor="rgba(56,189,248,0.1)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </radialGradient>
      </defs>

      {/* Central chip glow */}
      <motion.circle
        cx="720"
        cy="450"
        r="120"
        fill="url(#chipGlow)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: reduceMotion ? 1 : [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Flowing signal paths */}
      
      {/* Path 1: Top flowing to chip */}
      <motion.path
        d="M120,200 C350,180 520,220 720,300 C720,350 720,400 720,450"
        stroke="rgba(56,189,248,0.8)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="20 10"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      <motion.g>
        <motion.path
          d="M120,200 C350,180 520,220 720,300 C720,350 720,400 720,450"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="30 20"
          animate={!reduceMotion ? { 
            strokeDashoffset: [0, -100],
            opacity: [0.5, 1, 0.5]
          } : undefined}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            delay: 0
          }}
        />
      </motion.g>

      {/* Path 2: Right flowing from chip */}
      <motion.path
        d="M720,450 C900,450 1100,400 1320,380"
        stroke="rgba(56,189,248,0.8)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="20 10"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      <motion.g>
        <motion.path
          d="M720,450 C900,450 1100,400 1320,380"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="30 20"
          animate={!reduceMotion ? { 
            strokeDashoffset: [0, -100],
            opacity: [0.5, 1, 0.5]
          } : undefined}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
            delay: 0.5
          }}
        />
      </motion.g>

      {/* Path 3: Bottom left flowing to chip */}
      <motion.path
        d="M80,700 C300,650 500,600 650,520 C680,490 700,470 720,450"
        stroke="rgba(56,189,248,0.8)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="20 10"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      <motion.g>
        <motion.path
          d="M80,700 C300,650 500,600 650,520 C680,490 700,470 720,450"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="30 20"
          animate={!reduceMotion ? { 
            strokeDashoffset: [0, -100],
            opacity: [0.5, 1, 0.5]
          } : undefined}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
            delay: 1
          }}
        />
      </motion.g>

      {/* Path 4: Top right flowing from chip */}
      <motion.path
        d="M720,450 C850,350 1000,280 1200,200 C1280,180 1340,170 1400,160"
        stroke="rgba(56,189,248,0.8)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="20 10"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      <motion.g>
        <motion.path
          d="M720,450 C850,350 1000,280 1200,200 C1280,180 1340,170 1400,160"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="30 20"
          animate={!reduceMotion ? { 
            strokeDashoffset: [0, -100],
            opacity: [0.5, 1, 0.5]
          } : undefined}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "linear",
            delay: 1.5
          }}
        />
      </motion.g>

      {/* Path 5: Left side flowing to chip */}
      <motion.path
        d="M40,450 C200,430 400,440 600,445 C650,447 690,449 720,450"
        stroke="rgba(56,189,248,0.8)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="20 10"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      <motion.g>
        <motion.path
          d="M40,450 C200,430 400,440 600,445 C650,447 690,449 720,450"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="30 20"
          animate={!reduceMotion ? { 
            strokeDashoffset: [0, -100],
            opacity: [0.5, 1, 0.5]
          } : undefined}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "linear",
            delay: 2
          }}
        />
      </motion.g>

      {/* Moving particles along paths */}
      {!reduceMotion && (
        <>
          {/* Particle 1 */}
          <motion.circle
            r="4"
            fill="rgba(56,189,248,0.9)"
            filter="url(#glow)"
            animate={{
              motionPath: {
                path: "M120,200 C350,180 520,220 720,300 C720,350 720,400 720,450"
              }
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Particle 2 */}
          <motion.circle
            r="3"
            fill="rgba(56,189,248,0.8)"
            filter="url(#glow)"
            animate={{
              motionPath: {
                path: "M720,450 C900,450 1100,400 1320,380"
              }
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Particle 3 */}
          <motion.circle
            r="3"
            fill="rgba(56,189,248,0.7)"
            filter="url(#glow)"
            animate={{
              motionPath: {
                path: "M80,700 C300,650 500,600 650,520 C680,490 700,470 720,450"
              }
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          {/* Particle 4 */}
          <motion.circle
            r="3"
            fill="rgba(56,189,248,0.8)"
            filter="url(#glow)"
            animate={{
              motionPath: {
                path: "M40,450 C200,430 400,440 600,445 C650,447 690,449 720,450"
              }
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}

      {/* Additional ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          r="2"
          fill="rgba(56,189,248,0.4)"
          cx={200 + i * 150}
          cy={300 + Math.sin(i) * 200}
          animate={!reduceMotion ? {
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          } : undefined}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}
    </svg>
  );
}