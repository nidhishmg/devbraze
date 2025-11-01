# DevBraze Landing Page 🚀

A stunning, modern landing page for DevBraze - a student-led tech club focused on Electronics, Computer Science, and Innovation.

![DevBraze Preview](https://via.placeholder.com/800x400/0F172A/38BDF8?text=DevBraze+Landing+Page)

## ✨ Features

### 🎨 Modern Design
- **Futuristic & Clean**: Inspired by Google Developers and IEEE student chapter websites
- **Custom Color Palette**: Navy blue (#0F172A), slate (#1E293B), cyan accent (#38BDF8), light text (#F8FAFC)
- **Typography**: Poppins and Inter fonts for professional readability
- **Responsive**: Mobile-first design that works beautifully on all devices

### 🎬 Smooth Animations
- **Framer Motion**: Buttery smooth animations and transitions
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive cards and buttons with elegant hover states
- **Loading Screen**: Polished loading experience

### 🏗️ Sections Included

1. **Hero Section** - Eye-catching introduction with animated background
2. **About Preview** - Brief overview of DevBraze with feature highlights
3. **Events Section** - Showcase of upcoming hackathons, workshops, and tech talks
4. **Team Carousel** - Meet the amazing team members with social links
5. **Call-to-Action** - Encouraging visitors to join the community
6. **Footer** - Complete navigation and contact information

### 🛠️ Technical Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Production-ready motion library for React
- **shadcn/ui** - High-quality UI components built on Radix UI
- **Lucide React** - Beautiful & consistent icon set

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd devbraze-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the landing page in action!

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎯 Customization Guide

### Colors
Update the color palette in `tailwind.config.js`:
```js
colors: {
  navy: '#0F172A',      // Primary dark background
  slate: '#1E293B',     // Secondary background
  cyan: '#38BDF8',      // Primary accent color
  light: '#F8FAFC',     // Light text color
}
```

### Content
- **Hero Section**: Edit `src/components/HeroSection.jsx`
- **About Content**: Modify `src/components/AboutSection.jsx`
- **Events**: Update the events array in `src/components/EventsSection.jsx`
- **Team Members**: Edit the team data in `src/components/TeamSection.jsx`

### Animations
All animations are handled by Framer Motion. Key animation variants are defined in each component.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Navigation Structure

The landing page includes navigation to future pages:
- `/about` - Detailed about page
- `/events` - Full events calendar
- `/team` - Complete team directory
- `/contact` - Contact and join form

## 🎨 Design System

### Typography
- **Headings**: Poppins (bold, clean)
- **Body Text**: Inter (readable, modern)

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Generous whitespace for clean appearance

### Components
- Reusable UI components in `src/components/ui/`
- Consistent styling with shadcn/ui design system

## 🔧 Development

### Project Structure
```
src/
├── components/           # Main page sections
│   ├── ui/              # Reusable UI components
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── EventsSection.jsx
│   ├── TeamSection.jsx
│   ├── CTASection.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── lib/
│   └── utils.js         # Utility functions
├── App.jsx              # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link to `Navbar.jsx`

## 📈 Performance

- **Optimized Images**: Uses optimized placeholder images
- **Code Splitting**: Vite handles automatic code splitting
- **Minimal Bundle**: Only includes necessary dependencies
- **Smooth Animations**: 60fps animations with GPU acceleration

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog integration
- [ ] Project showcase gallery
- [ ] Member authentication portal
- [ ] Event registration system
- [ ] Newsletter signup integration

## 💡 Credits

Built with ❤️ by the DevBraze team using:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Ready to ignite innovation? Join DevBraze today!** 🔥

---

## 📋 Event Registration Backend (New)

This project now includes a simple backend to collect registrations and save them per-event into CSV and XLSX files.

### How it works
- Frontend route: `/register/:slug` renders a form; submits to the backend.
- Backend endpoint: `POST /api/events/:slug/register`
- Files written to: `server/data/<slug>/registrations.csv` and `registrations.xlsx`

### Run locally
1. Install web deps (once):
   ```bash
   npm install
   ```
2. Install server deps (once):
   ```bash
   cd server
   npm install
   ```
3. Start both (from project root):
   ```bash
   npm run dev:all
   ```
   - Web: http://localhost:5173
   - API: http://localhost:4000 (configurable via `VITE_API_URL`)

If you need to point the web app to a remote API, create `.env`:
```bash
cp .env.example .env
# then edit VITE_API_URL
```

### Production note
Writing files to disk won’t persist on serverless platforms (like Vercel functions). Deploy the backend to a host with persistent storage (e.g., Railway/Render/Fly/VM) or change the backend to save to a managed store (e.g., PostgreSQL, Supabase, or S3/Drive). The frontend already reads `VITE_API_URL` so you can point it to your hosted API.