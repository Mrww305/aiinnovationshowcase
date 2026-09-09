import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Zap, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 'tunegpt',
    title: 'TuneGPT',
    subtitle: 'AI Music Assistant',
    description: 'Automated music metadata search and curation pipeline using RAG agents with semantic similarity matching across 2M+ tracks.',
    metrics: [
      { icon: <Zap className="w-4 h-4" />, value: '87%', label: 'Manual Tasks Automated' },
      { icon: <Clock className="w-4 h-4" />, value: '80%', label: 'User Time Saved' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '2M+', label: 'Tracks Indexed' },
    ],
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    gradient: 'from-[#00F2FE] to-[#7F00FF]',
  },
  {
    id: 'tambot',
    title: 'Tambot',
    subtitle: 'Market Analysis Agent',
    description: 'Multi-agent system compiling comprehensive TAM reports through parallel research agents, data synthesis, and executive summary generation.',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, value: '15 min', label: 'Report Generation Time' },
      { icon: <Zap className="w-4 h-4" />, value: '70%', label: 'Effort Automated' },
      { icon: <Award className="w-4 h-4" />, value: '6 hrs', label: 'Previous Manual Time' },
    ],
    tech: ['AutoGen', 'Claude', 'Web Scraping', 'Multi-Agent'],
    gradient: 'from-[#7F00FF] to-[#00FF87]',
  },
  {
    id: 'booking',
    title: 'Appointment Booking Agent',
    subtitle: '24/7 Monitoring System',
    description: 'Playwright + Python agent that monitors appointment slots across multiple platforms, auto-books optimal times, and handles cancellations.',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, value: '95%', label: 'Time Saved' },
      { icon: <Zap className="w-4 h-4" />, value: '24/7', label: 'Continuous Monitoring' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '10x', label: 'Booking Speed' },
    ],
    tech: ['Playwright', 'Python', 'Cron', 'Notification APIs'],
    gradient: 'from-[#00FF87] to-[#00F2FE]',
  },
  {
    id: 'ladle',
    title: 'Ladle',
    subtitle: 'AI Kitchen & Safety System',
    description: 'Multi-agent recipe generator paired with a safety validator agent ensuring allergen compliance, nutritional accuracy, and dietary restrictions.',
    metrics: [
      { icon: <Award className="w-4 h-4" />, value: '90%', label: 'Recipe Accuracy' },
      { icon: <Zap className="w-4 h-4" />, value: '40x', label: 'Faster Customization' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '100%', label: 'Safety Compliance' },
    ],
    tech: ['Multi-Agent', 'Safety Validators', 'RAG', 'Nutrition DB'],
    gradient: 'from-[#00F2FE] to-[#00FF87]',
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const study = caseStudies[current];

  const next = () => setCurrent((c) => (c + 1) % caseStudies.length);
  const prev = () => setCurrent((c) => (c - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section id="case-studies" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00FF87] mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Real-World{' '}
            <span className="gradient-text">Automation Success</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            Production deployments delivering measurable ROI across industries.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="gradient-border p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left - Info */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-xs font-medium mb-4`}>
                    {study.subtitle}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h3>
                  <p className="text-[#8A8A9A] leading-relaxed mb-6">{study.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-[#8A8A9A] border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Metrics */}
                <div className="grid gap-4">
                  {study.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white`}>
                        {metric.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold">{metric.value}</div>
                        <div className="text-xs text-[#8A8A9A]">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#00F2FE]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#00F2FE]/40 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#00F2FE]/40 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
