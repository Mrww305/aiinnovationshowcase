import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Database, Layers, Code2, Rocket, HeadphonesIcon
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Free Consultation',
    icon: <MessageCircle className="w-6 h-6" />,
    description: 'Business goal alignment and feasibility assessment. We map your operational pain points to AI agent capabilities.',
    details: ['Stakeholder interviews', 'Process mapping', 'ROI projection', 'Technical feasibility report'],
    color: '#00F2FE',
  },
  {
    id: 2,
    title: 'Data Assessment & Preparation',
    icon: <Database className="w-6 h-6" />,
    description: 'Knowledge base structuring and data pipeline setup for optimal agent performance.',
    details: ['Data audit & cleansing', 'Vector DB setup', 'API endpoint mapping', 'Schema design'],
    color: '#7F00FF',
  },
  {
    id: 3,
    title: 'Agent Design & Architecture',
    icon: <Layers className="w-6 h-6" />,
    description: 'LLM selection, tool integration, and safety guardrail configuration tailored to your stack.',
    details: ['LLM benchmarking', 'Tool selection', 'Guardrail design', 'Architecture blueprint'],
    color: '#00FF87',
  },
  {
    id: 4,
    title: 'Development & Testing',
    icon: <Code2 className="w-6 h-6" />,
    description: 'Iterative testing and POC delivery within 4 weeks with continuous client feedback loops.',
    details: ['Sprint-based development', 'Automated testing', 'Client review cycles', 'Performance benchmarking'],
    color: '#00F2FE',
  },
  {
    id: 5,
    title: 'Integration & Deployment',
    icon: <Rocket className="w-6 h-6" />,
    description: 'API connection and zero-downtime microservice launch into your production environment.',
    details: ['CI/CD pipeline', 'Zero-downtime deploy', 'Load testing', 'Monitoring setup'],
    color: '#7F00FF',
  },
  {
    id: 6,
    title: 'Monitoring & Free 60-Day Support',
    icon: <HeadphonesIcon className="w-6 h-6" />,
    description: 'Performance tuning, analytics dashboards, and hands-on client coaching for full adoption.',
    details: ['24/7 monitoring', 'Performance tuning', 'Team training', 'Quarterly reviews'],
    color: '#00FF87',
  },
];

export default function ImplementationSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7F00FF] mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            6-Step{' '}
            <span className="gradient-text">Implementation Engine</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            From consultation to production deployment — a proven framework for delivering AI agents that work.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Step selector - vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-white/5 lg:block hidden" />
            
            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <motion.button
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActiveStep(i)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    activeStep === i
                      ? 'glass-strong'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Step number circle */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0 ${
                      activeStep === i
                        ? 'text-white'
                        : 'bg-white/5 text-[#8A8A9A]'
                    }`}
                    style={
                      activeStep === i
                        ? { background: `linear-gradient(135deg, ${step.color}, ${step.color}80)` }
                        : {}
                    }
                  >
                    {step.id}
                  </div>
                  
                  <div className="min-w-0">
                    <span className={`text-sm font-medium block truncate ${
                      activeStep === i ? 'text-white' : 'text-[#8A8A9A]'
                    }`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Active indicator */}
                  {activeStep === i && (
                    <motion.div
                      layoutId="stepIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-r-full"
                      style={{ backgroundColor: step.color }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="gradient-border p-8 lg:p-10"
          >
            <div className="flex items-start gap-5 mb-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${steps[activeStep].color}, ${steps[activeStep].color}80)`,
                }}
              >
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="text-xs font-mono text-[#8A8A9A] mb-1">Step {steps[activeStep].id} of 6</div>
                <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
              </div>
            </div>

            <p className="text-[#8A8A9A] leading-relaxed mb-8 text-lg">
              {steps[activeStep].description}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {steps[activeStep].details.map((detail, i) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: steps[activeStep].color }}
                  />
                  <span className="text-sm text-[#8A8A9A]">{detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 flex items-center gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: i <= activeStep ? steps[activeStep].color : 'rgba(255,255,255,0.05)',
                    opacity: i <= activeStep ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
