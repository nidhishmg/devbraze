import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Events', href: '#events' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Join DevBraze', href: '/join' },
      { name: 'Project Gallery', href: '/projects' },
      { name: 'Workshop Materials', href: '/resources' },
      { name: 'Code of Conduct', href: '/conduct' },
      { name: 'FAQ', href: '/faq' }
    ],
    'Connect': [
      { name: 'Discord Server', href: '#' },
      { name: 'Slack Workspace', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Alumni Network', href: '#' },
      { name: 'Mentorship Program', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t border-slate/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338BDF8' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <img 
                      src="/devbraze-logo.svg" 
                      alt="DevBraze Logo" 
                      className="h-10 w-10 object-contain"
                    />
                    <div className="absolute inset-0 bg-cyan/10 rounded-full blur-md"></div>
                  </div>
                  <span className="text-2xl font-bold font-heading gradient-text">
                    DevBraze
                  </span>
                </div>

                <p className="text-light/70 mb-6 leading-relaxed">
                  Igniting innovation through electronics and code. Join our community 
                  of creators, tinkerers, and developers shaping tomorrow's technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 text-sm text-light/60">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-cyan" />
                    Student Activity Center, Room 204
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-cyan" />
                    hello@devbraze.org
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-cyan" />
                    +1 (555) 123-4567
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-light font-semibold font-heading mb-4 text-lg">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-light/70 hover:text-cyan transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-light/60 text-sm"
            >
              © 2024 DevBraze. All rights reserved. Made with ❤️ by the DevBraze team.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-slate/20 rounded-lg hover:bg-cyan/20 hover:text-cyan transition-all duration-200 text-light/70"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="p-2 bg-cyan/10 border border-cyan/20 rounded-lg hover:bg-cyan/20 transition-all duration-200 text-cyan group"
              aria-label="Scroll to top"
            >
              ↑
            </motion.button>
          </div>
        </div>

        {/* Additional Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-4 border-t border-slate/10"
        >
          <p className="text-light/50 text-xs">
            DevBraze is a registered student organization. We are committed to fostering 
            an inclusive and diverse community of innovators.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer