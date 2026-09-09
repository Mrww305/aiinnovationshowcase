import { motion } from 'framer-motion';

export default function SEOContent() {
  return (
    <section className="relative py-16 border-t border-white/5" aria-label="About our AI agent development services">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-sm text-[#8A8A9A] leading-relaxed"
        >
          <h2 className="text-lg font-semibold text-white mb-4">
            AI Agent Development & Infrastructure Engineering by Sajid Afridi
          </h2>
          
          <p>
            <strong className="text-white">Sajid Afridi</strong> is a seasoned <strong className="text-white">AI Infrastructure Engineer</strong> and the founder of Aiagents.Megnitoo, a specialized agency focused on building production-ready AI agents for enterprise clients. With deep expertise in <strong className="text-white">large language model deployment</strong>, <strong className="text-white">multi-agent orchestration</strong>, and <strong className="text-white">workflow automation</strong>, Sajid has delivered AI solutions that process millions of requests daily across industries including fintech, healthcare, legal, and enterprise SaaS.
          </p>

          <p>
            Our core services include <strong className="text-white">custom AI agent development</strong> using frameworks like <strong className="text-white">LangChain</strong>, <strong className="text-white">LlamaIndex</strong>, <strong className="text-white">AutoGen</strong>, and <strong className="text-white">CrewAI</strong>. We specialize in deploying models from <strong className="text-white">OpenAI (GPT-4, GPT-4o)</strong>, <strong className="text-white">Anthropic Claude</strong>, <strong className="text-white">Meta Llama 3</strong>, and <strong className="text-white">Mistral</strong> — whether in cloud, on-premise, or air-gapped environments. Our <strong className="text-white">RAG (Retrieval-Augmented Generation) pipelines</strong> leverage vector databases like Pinecone, Weaviate, Qdrant, and pgvector for enterprise knowledge retrieval.
          </p>

          <p>
            We build eight types of AI agents: <strong className="text-white">autonomous agents</strong> that independently plan and execute goals, <strong className="text-white">multi-agent systems</strong> that collaborate across departments, <strong className="text-white">conversational AI agents</strong> for support and sales, <strong className="text-white">task automation agents</strong> for repetitive processes, <strong className="text-white">decision-making agents</strong> with real-time analytics, <strong className="text-white">RAG-based knowledge agents</strong> for document querying, <strong className="text-white">workflow orchestration agents</strong> connecting ERPs and CRMs, and <strong className="text-white">domain-specific agents</strong> for regulated industries.
          </p>

          <p>
            Our proven case studies demonstrate measurable results: TuneGPT achieved 87% automation of manual music metadata searches, Tambot's multi-agent system compiles market analysis reports in 15 minutes instead of 6 hours, our appointment booking agent saves 95% of manual monitoring time with 24/7 Playwright automation, and Ladle's AI kitchen system achieves 90% recipe accuracy with 40x faster customization through multi-agent generation and safety validation.
          </p>

          <p>
            As an <strong className="text-white">AI infrastructure engineer</strong>, Sajid Afridi ensures every deployment meets enterprise standards: SOC2 compliance, HIPAA readiness, end-to-end encryption, role-based access controls, and comprehensive audit logging. Our 6-step implementation process — from free consultation through 60-day free post-launch support — guarantees production-grade quality with POC delivery in just 4 weeks.
          </p>

          <p>
            Whether you need <strong className="text-white">enterprise AI consulting</strong>, <strong className="text-white">LLM deployment services</strong>, <strong className="text-white">AI workflow automation</strong>, or <strong className="text-white">custom agent development</strong>, Aiagents.Megnitoo delivers solutions that integrate seamlessly with your existing technology stack — including Kubernetes, Docker, AWS, GCP, FastAPI, and TypeScript/Python backends. Contact Sajid Afridi today for a free consultation on your AI agent project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
