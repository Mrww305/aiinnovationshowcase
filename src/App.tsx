import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import CaseStudies from './components/CaseStudies';
import ImplementationSteps from './components/ImplementationSteps';
import ROICalculator from './components/ROICalculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F0F0F5] overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #00F2FE, #7F00FF, #00FF87)',
        }}
      />

      {/* Background grid */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient glow orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00F2FE] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="fixed top-2/3 -right-32 w-96 h-96 rounded-full bg-[#7F00FF] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#00FF87] opacity-[0.02] blur-[150px] pointer-events-none" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider max-w-5xl mx-auto" />
        <Capabilities />
        <div className="section-divider max-w-5xl mx-auto" />
        <CaseStudies />
        <div className="section-divider max-w-5xl mx-auto" />
        <ImplementationSteps />
        <div className="section-divider max-w-5xl mx-auto" />
        <ROICalculator />
        <div className="section-divider max-w-5xl mx-auto" />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
