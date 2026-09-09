import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Globe, Award, Linkedin, Github, Twitter } from 'lucide-react';

const expertise = [
  { icon: <Brain className="w-5 h-5" />, label: 'AI Agent Architecture', detail: 'Multi-agent orchestration, autonomous planning' },
  { icon: <Cpu className="w-5 h-5" />, label: 'LLM Infrastructure', detail: 'OpenAI, Claude, Llama 3, Mistral deployment' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Full-Stack Engineering', detail: 'Python, TypeScript, React, FastAPI, Kubernetes' },
  { icon: <Globe className="w-5 h-5" />, label: 'Enterprise Integration', detail: 'ERP, CRM, API orchestration at scale' },
];

const frameworks = [
  'LangChain', 'LlamaIndex', 'AutoGen', 'CrewAI', 'OpenAI', 'Anthropic Claude',
  'Meta Llama 3', 'Mistral', 'Pinecone', 'Weaviate', 'Qdrant', 'pgvector',
  'Kubernetes', 'Docker', 'AWS', 'GCP', 'FastAPI', 'TypeScript',
];

export default function AboutFounder() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-[#00F2FE]/[0.02] via-[#7F00FF]/[0.02] to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7F00FF] mb-4">
            Meet the Engineer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built by{' '}
            <span className="gradient-text-animated">Sajid Afridi</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            AI Infrastructure Engineer — architecting production-grade AI systems that scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* Left - Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="gradient-border p-8">
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00F2FE] via-[#7F00FF] to-[#00FF87] p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#16161F] flex items-center justify-center">
                    <span className="text-3xl font-bold gradient-text">SA</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00FF87] border-2 border-[#16161F] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Sajid Afridi</h3>
                <p className="text-sm text-[#00F2FE] font-medium mt-1">AI Infrastructure Engineer</p>
                <p className="text-xs text-[#8A8A9A] mt-2">Founder & Lead Engineer @ Aiagents.Megnitoo</p>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3 mb-6">
                {[
                  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                  { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-[#8A8A9A] hover:text-[#00F2FE] hover:border-[#00F2FE]/30 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '50+', label: 'AI Agents Shipped' },
                  { value: '87%', label: 'Avg Automation' },
                  { value: '4 Wk', label: 'POC Delivery' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-[10px] text-[#8A8A9A] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00FF87]" />
                About Sajid
              </h4>
              <p className="text-[#8A8A9A] leading-relaxed text-sm">
                Sajid Afridi is an <strong className="text-white">AI Infrastructure Engineer</strong> specializing in building production-grade AI agent systems for enterprise clients worldwide. With deep expertise in large language models, multi-agent orchestration, and workflow automation, Sajid has architected and deployed AI solutions that process millions of requests daily.
              </p>
              <p className="text-[#8A8A9A] leading-relaxed text-sm mt-3">
                As the founder of <strong className="text-white">Aiagents.Megnitoo</strong>, he leads a team of engineers delivering custom autonomous agents, RAG-based knowledge systems, and enterprise workflow automation. His work spans industries from fintech to healthcare, with a focus on security, scalability, and measurable ROI.
              </p>
            </div>

            {/* Expertise */}
            <div className="grid sm:grid-cols-2 gap-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl glass border border-white/5 hover:border-[#00F2FE]/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] flex items-center justify-center group-hover:bg-[#00F2FE]/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-xs text-[#8A8A9A]">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack marquee */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h4 className="text-sm font-medium text-[#8A8A9A] mb-4">Frameworks & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] text-[#8A8A9A] border border-white/5 hover:border-[#00F2FE]/30 hover:text-[#00F2FE] transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#00F2FE] to-[#7F00FF] text-white hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] transition-all duration-300"
            >
              Work with Sajid
              <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
