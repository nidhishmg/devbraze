import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  const features = [
    {
      title: "Electronics & Hardware",
      description: "From PCB design to IoT devices, robotics, and embedded systems - we build the future with circuits.",
      color: "text-cyan",
      bgColor: "bg-cyan/10",
      glowColor: "group-hover:shadow-cyan/20"
    },
    {
      title: "Robotics & AI", 
      description: "Autonomous systems, machine learning, computer vision, and intelligent automation projects.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      glowColor: "group-hover:shadow-blue-400/20"
    },
    {
      title: "Computer Science",
      description: "Full-stack development, algorithms, data structures, and cutting-edge software solutions.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Innovation Lab",
      description: "Hackathons, research projects, and collaborative innovation where hardware meets software.",
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
      glowColor: "group-hover:shadow-sky-400/20"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy to-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338BDF8' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan/10 via-blue-400/10 to-blue-500/10 border border-cyan/20 text-cyan text-sm font-medium mb-6 animate-glow-border">
              <CircuitBoard className="h-4 w-4 mr-2 animate-pulse" />
              About DevBraze
              <Bot className="h-4 w-4 ml-2 animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6">
              Born from passion for{' '}
              <span className="gradient-text">circuits and code</span>
            </h2>
            
            <p className="text-lg text-light/80 mb-6 leading-relaxed">
              DevBraze unites students who love to innovate, build, and learn hands-on — 
              from IoT devices to AI applications. We're more than a club; we're a launchpad 
              for tomorrow's tech leaders.
            </p>
            
            <p className="text-base text-light/70 mb-8 leading-relaxed">
              Our interdisciplinary approach combines electronics, computer science, and 
              creative problem-solving to tackle real-world challenges. Whether you're 
              interested in hardware design, software development, or the intersection 
              of both, DevBraze provides the community and resources to turn your ideas into reality.
            </p>

            <Link to="/about">
              <Button 
                className="group hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`card-hover h-full p-6 bg-slate/30 border-slate/30 hover:border-${feature.color.split('-')[1]}/30 transition-all duration-300 group hover:shadow-lg ${feature.glowColor} hover:scale-105`}>
                  <CardContent className="p-0">
                    <div>
                        <h3 className={`font-semibold text-light mb-2 font-heading group-hover:${feature.color} transition-colors duration-300`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-light/70 leading-relaxed">
                          {feature.description}
                        </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection