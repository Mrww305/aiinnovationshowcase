# Aiagents.Megnitoo

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF008C?logo=framer)
![License](https://img.shields.io/badge/license-MIT-green)

**Premium AI Agent Development Agency Website**  
*Built by Sajid Afridi — AI Infrastructure Engineer*

[Live Demo](https://aiagents.megnitoo.com) · [Report Bug](https://github.com/yourusername/aiagents-megnitoo/issues) · [Request Feature](https://github.com/yourusername/aiagents-megnitoo/issues)

</div>

---

## 🎯 Overview

A cutting-edge, award-winning website for **Aiagents.Megnitoo** — a premier custom AI agent development and workflow automation agency. This project showcases production-ready AI solutions, multi-agent systems, and enterprise workflow automation tailored to exact operational stacks.

### ✨ Key Features

- 🎨 **Premium Dark Theme** with glassmorphic panels and neon accents
- 🖱️ **Custom Cursor** with magnetic effects and glow trails
- 🌊 **Interactive Particle System** with mouse-reactive connections
- 🎭 **Smooth Animations** powered by Framer Motion
- 📊 **Interactive ROI Calculator** for potential savings
- 🔄 **Animated Tech Stack Marquee**
- 📱 **Fully Responsive** design for all devices
- ⚡ **Optimized Performance** with code splitting and lazy loading
- 🔍 **SEO Optimized** with structured data and meta tags
- 🎬 **Premium Preloader** with brand animation

---

## 🚀 Tech Stack

### Frontend
- **React 18.2** - UI library
- **TypeScript 5.0** - Type safety
- **Vite 6.4** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 11.0** - Animation library
- **Lucide React** - Icon library

### SEO & Performance
- **Structured Data** (JSON-LD) for Organization, WebSite, and ProfessionalService
- **Meta Tags** for Open Graph and Twitter Cards
- **Sitemap.xml** for search engine crawling
- **Robots.txt** for AI crawler permissions
- **Semantic HTML** with proper heading hierarchy

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/aiagents-megnitoo.git

# Navigate to project directory
cd aiagents-megnitoo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ Project Structure

```
aiagents-megnitoo/
├── public/
│   ├── robots.txt          # Search engine & AI crawler rules
│   └── sitemap.xml         # Sitemap for SEO
├── src/
│   ├── components/
│   │   ├── AboutFounder.tsx       # Sajid Afridi profile section
│   │   ├── Capabilities.tsx       # 8 AI agent types showcase
│   │   ├── CaseStudies.tsx        # Interactive carousel
│   │   ├── CustomCursor.tsx       # Premium cursor effects
│   │   ├── FAQ.tsx                # Accordion FAQ section
│   │   ├── Footer.tsx             # Contact form & links
│   │   ├── Hero.tsx               # Hero with particle canvas
│   │   ├── ImplementationSteps.tsx # 6-step process timeline
│   │   ├── Navbar.tsx             # Navigation with mobile menu
│   │   ├── Preloader.tsx          # Loading animation
│   │   ├── ROICalculator.tsx      # Interactive savings calculator
│   │   ├── ScrollToTop.tsx        # Scroll-to-top button
│   │   ├── SEOContent.tsx         # SEO-optimized content
│   │   └── TechMarquee.tsx        # Animated tech stack
│   ├── App.tsx                    # Main app component
│   ├── index.css                  # Global styles & animations
│   └── main.tsx                   # Entry point
├── index.html                     # HTML template with meta tags
├── vercel.json                    # Vercel deployment config
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## 🎨 Design System

### Color Palette
```css
--color-bg-primary: #0A0A0C
--color-neon-teal: #00F2FE
--color-neon-violet: #7F00FF
--color-neon-green: #00FF87
--color-text-primary: #F0F0F5
--color-text-secondary: #8A8A9A
```

### Typography
- **Headings**: Plus Jakarta Sans (800, 700, 600)
- **Body**: Plus Jakarta Sans (400, 500)
- **Code**: JetBrains Mono (400, 500)

### Effects
- Glassmorphism with backdrop blur
- Gradient borders with animated glow
- Particle canvas with mouse interaction
- Custom cursor with magnetic hover
- Smooth scroll animations
- 3D tilt effects on cards

---

## 🚢 Deployment

### Vercel (Recommended)

The project is configured for seamless Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The `vercel.json` file handles SPA routing to prevent 404 errors on page refresh.

### Netlify

```bash
# Build command: npm run build
# Publish directory: dist
```

Add `_redirects` file:
```
/*    /index.html   200
```

### GitHub Pages

Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

---

## 🔍 SEO Optimization

### Structured Data
The site includes three types of structured data:
1. **Organization** - Company info with founder details
2. **WebSite** - Site metadata with search action
3. **ProfessionalService** - Service offerings and pricing

### Meta Tags
- Comprehensive title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Theme color

### AI Crawler Support
The `robots.txt` explicitly allows:
- GPTBot (OpenAI)
- ChatGPT-User
- Google-Extended
- CCBot (Common Crawl)
- PerplexityBot
- anthropic-ai
- Claude-Web

### Keywords Targeted
- Sajid Afridi
- AI Infrastructure Engineer
- Custom AI Agent Development
- Multi-Agent Systems
- LangChain, AutoGen, LlamaIndex
- RAG Pipelines
- Enterprise Workflow Automation
- LLM Deployment

---

## 🎯 Features Breakdown

### Hero Section
- Interactive particle canvas with mouse attraction
- Word-by-word reveal animation
- Interactive node visualizer showing AI pipeline
- Animated gradient text
- Trust metrics display

### Capabilities Section
- 8 AI agent types with detailed descriptions
- Interactive tabbed interface
- Animated feature cards
- Gradient borders on hover

### Case Studies
- Carousel with 4 real-world examples
- Animated transitions
- Tech stack badges
- Metrics display

### Implementation Process
- 6-step timeline
- Interactive stepper
- Progress indicator
- Detailed breakdown for each step

### ROI Calculator
- Interactive sliders
- Real-time calculations
- Animated result updates
- Visual feedback

### About Founder
- Profile card with stats
- Expertise grid
- Tech stack marquee
- Social links

### FAQ Section
- Accordion interface
- Programmatically generated content
- Smooth animations
- Accessible markup

---

## 🛠️ Customization

### Change Brand Colors
Edit `src/index.css`:
```css
@theme {
  --color-neon-teal: #00F2FE;
  --color-neon-violet: #7F00FF;
  --color-neon-green: #00FF87;
}
```

### Update Content
All content is in component files under `src/components/`. Key files:
- `Hero.tsx` - Main headline and CTAs
- `Capabilities.tsx` - AI agent types
- `CaseStudies.tsx` - Portfolio examples
- `AboutFounder.tsx` - Sajid Afridi profile

### Modify Animations
Adjust Framer Motion variants in each component or edit `src/index.css` for custom animations.

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sajid Afridi**  
AI Infrastructure Engineer  
Founder @ Aiagents.Megnitoo

- Website: [aiagents.megnitoo.com](https://aiagents.megnitoo.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Sajid Afridi](https://linkedin.com/in/yourusername)

---

## 🙏 Acknowledgments

- Design inspiration from Awwwards-winning sites
- Particle system based on canvas animations
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI components built with [Tailwind CSS](https://tailwindcss.com)

---

## 📞 Support

For support, email support@aiagents.megnitoo.com or visit our [contact page](https://aiagents.megnitoo.com#contact).

---

<div align="center">

**Built with ❤️ by Sajid Afridi**

⭐ Star this repo if you find it helpful!

</div>
