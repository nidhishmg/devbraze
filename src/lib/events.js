// Centralized events data with slugs

export const upcomingEvents = [
  {
    id: 1,
    title: 'EasyEDA Workshop',
    slug: 'easyeda-workshop-sep-23-2025',
    description:
      'PCB Design Workshop using EasyEDA Pro. Hands-on session. Laptops compulsory. Fee ₹100 per head.',
    date: 'Sep 23, 2025',
    location: 'CV Raman Block (102/103)',
    participants: undefined,
    image:
      'https://images.unsplash.com/photo-1555680207-9e11e8f3c3df?auto=format&fit=crop&w=1200&q=60',
    status: 'Registration Open',
    category: 'Workshop',
    registrationUrl: null,
    details: ['9am - 4pm', '₹100 per head', 'Laptops compulsory', 'Hands-on session'],
    featured: true
  }
]

export const pastEvents = [
  // Keep placeholders consistent with EventsPage where needed
]

export const getEventBySlug = (slug) => upcomingEvents.find((e) => e.slug === slug)
