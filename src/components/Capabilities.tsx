import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Network, MessageSquare, Cog, Brain, BookOpen,
  Workflow, Building2, ArrowRight
} from 'lucide-react';

const agents = [
  {
    id: 'autonomous',
    title: 'Autonomous AI Agents',
    icon: <Bot className="w-6 h-6" />,
    description: 'Independently plan, execute, and adjust complex multi-step goals with self-correcting logic loops.',
    features: ['Goal decomposition', 'Self-healing workflows', 'Adaptive planning', 'Autonomous execution'],
    color: '#00F2FE',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Systems',
    icon: <Network className="w-6 h-6" />,
    description: 'Networked agents that collaborate, delegate, and audit cross-department workflows autonomously.',
    features: ['Agent orchestration', 'Role delegation', 'Cross-agent auditing', 'Conflict resolution'],
    color: '#7F00FF',
  },
  {
    id: 'conversational',
    title: 'Conversational AI Agents',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Next-gen context-aware support and sales agents executing background tools in real-time.',
    features: ['Context memory', 'Tool execution', 'Multi-turn dialogue', 'Sentiment analysis'],
    color: '#00FF87',
  },
  {
    id: 'task-automation',
    title: 'Task Automation Agents',
    icon: <Cog className="w-6 h-6" />,
    description: 'Fast, programmatic executors of repetitive operational processes with zero human intervention.',
    features: ['Batch processing', 'Error recovery', 'Queue management', 'Parallel execution'],
    color: '#00F2FE',
  },
  {
    id: 'decision-making',
    title: 'Decision-Making Agents',
    icon: <Brain className="w-6 h-6" />,
    description: 'Real-time analytical engines offering rule-based and predictive triggers for critical decisions.',
    features: ['Rule engines', 'Predictive triggers', 'Risk scoring', 'Anomaly detection'],
    color: '#7F00FF',
  },
  {
    id: 'rag-knowledge',
    title: 'RAG-Based Knowledge Agents',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Query enterprise documents to output verified, cited insights with full source traceability.',
    features: ['Vector search', 'Citation tracking', 'Multi-format ingestion', 'Semantic chunking'],
    color: '#00FF87',
  },
  {
    id: 'workflow',
    title: 'Workflow Orchestration Agents',
    icon: <Workflow className="w-6 h-6" />,
    description: 'Connect ERPs, CRMs, and APIs into autonomous loops that self-optimize over time.',
    features: ['API chaining', 'Event-driven triggers', 'CRM/ERP integration', 'Auto-retry logic'],
    color: '#00F2FE',
  },
  {
    id: 'domain-specific',
    title: 'Domain-Specific AI Agents',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Specialized agents tailored for legal, healthcare, compliance, and finance verticals.',
    features: ['HIPAA compliant', 'SOC2 ready', 'Industry-specific RAG', 'Regulatory guardrails'],
    color: '#7F00FF',
  },
];

export default function Capabilities() {
  const [activeAgent, setActiveAgent] = useState(agents[0].id);
  const active = agents.find((a) => a.id === activeAgent)!;

  return (
    <section id="capabilities" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F2FE] mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            8 Agent Types.{' '}
            <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            Each agent architecture is custom-engineered for your specific operational requirements and integration stack.
          </p>
        </motion.div>

        {/* Agent grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Agent selector grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {agents.map((agent, i) => (
              <motion.button
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveAgent(agent.id)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 rounded-xl text-left transition-all duration-300 group ${
                  activeAgent === agent.id
                    ? 'glass-strong border border-white/10'
                    : 'glass border border-transparent hover:border-white/5'
                }`}
              >
                {activeAgent === agent.id && (
                  <motion.div
                    layoutId="activeAgentBorder"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      border: `1px solid ${agent.color}40`,
                      boxShadow: `0 0 20px ${agent.color}15`,
                    }}
                  />
                )}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                    activeAgent === agent.id
                      ? 'text-white'
                      : 'bg-white/5 text-[#8A8A9A] group-hover:text-white'
                  }`}
                  style={
                    activeAgent === agent.id
                      ? { background: `linear-gradient(135deg, ${agent.color}, ${agent.color}80)` }
                      : {}
                  }
                >
                  {agent.icon}
                </div>
                <span className={`text-xs font-medium ${activeAgent === agent.id ? 'text-white' : 'text-[#8A8A9A]'}`}>
                  {agent.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active agent detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAgent}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="gradient-border p-8 lg:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(135deg, ${active.color}, ${active.color}80)` }}
                >
                  {active.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{active.title}</h3>
                  <p className="text-sm text-[#8A8A9A] mt-1">{active.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {active.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: active.color }}
                    />
                    <span className="text-sm text-[#8A8A9A]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#00F2FE] hover:text-white transition-colors"
              >
                Learn more about {active.title}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
