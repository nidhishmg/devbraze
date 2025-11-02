import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Youtube } from 'lucide-react'

const resources = [
  { name: 'freeCodeCamp.org', url: 'https://www.youtube.com/c/Freecodecamp' },
  { name: 'Traversy Media', url: 'https://www.youtube.com/c/TraversyMedia' },
  { name: 'The Net Ninja', url: 'https://www.youtube.com/c/TheNetNinja' },
  { name: 'Fireship', url: 'https://www.youtube.com/c/Fireship' },
  { name: 'Tech With Tim', url: 'https://www.youtube.com/c/TechWithTim' },
  { name: 'Kevin Powell', url: 'https://www.youtube.com/c/KevinPowell' },
  { name: 'The Coding Train', url: 'https://www.youtube.com/c/TheCodingTrain' },
  { name: 'Web Dev Simplified', url: 'https://www.youtube.com/c/WebDevSimplified' }
]

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-10">
        <div className="absolute inset-0 md:hidden">
          <img src="/images/chip-hero.jpg" alt="Background" className="w-full h-full object-cover object-center brightness-90" />
        </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">Materials</h1>
          <p className="text-light/80 max-w-2xl">Curated learning channels to level up your development skills. All links open in a new tab.</p>
        </div>
      </section>

      {/* List */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <Card key={r.url} className="bg-slate/20 border-slate/20 p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  <Youtube className="h-5 w-5" />
                </div>
                <div className="truncate">
                  <div className="font-semibold truncate">{r.name}</div>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-xs text-light/60 hover:text-cyan truncate">
                    {r.url}
                  </a>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="shrink-0 border-cyan/40 text-cyan hover:bg-cyan/10">
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  Open <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ResourcesPage
