import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

// Programmatically generated FAQ items based on company context
const generateFAQs = (): FAQItem[] => {
  const faqs: FAQItem[] = [
    {
      question: 'How do you handle enterprise data security, privacy, and compliance requirements?',
      answer: 'We offer multiple deployment options to meet your security requirements: private cloud hosting (AWS, GCP, Azure VPC), on-premise air-gapped deployments, and hybrid architectures. All solutions are SOC2 Type II compliant by default. We implement end-to-end encryption, role-based access controls, audit logging, and data residency controls. For highly regulated industries (healthcare, finance), we support HIPAA, GDPR, and PCI-DSS compliance frameworks. Your data never leaves your controlled environment unless explicitly configured.',
    },
    {
      question: 'How do multi-agent systems maintain safety guardrails and human-in-the-loop oversight?',
      answer: 'Every multi-agent system we build includes multiple layers of safety: (1) Input/output validation agents that filter harmful or off-topic requests, (2) Confidence threshold gates that escalate to human reviewers when agent certainty falls below configurable levels, (3) Action approval workflows for high-stakes operations like financial transactions or data modifications, (4) Real-time monitoring dashboards with anomaly detection, and (5) Automatic circuit breakers that halt agent chains if error rates exceed thresholds. All agent decisions are logged with full traceability for audit purposes.',
    },
    {
      question: 'Which LLMs and frameworks do you support for agent development?',
      answer: 'We are framework-agnostic and select the optimal stack for each use case. Supported LLMs include OpenAI GPT-4/4o, Anthropic Claude 3.5 Sonnet/Opus, Meta Llama 3 (70B/405B), Mistral Large, and Google Gemini. For orchestration, we work with LangChain, LlamaIndex, Microsoft AutoGen, CrewAI, and custom architectures. We also integrate with vector databases (Pinecone, Weaviate, Qdrant, pgvector), monitoring tools (LangSmith, Arize), and deployment platforms (Modal, Fly.io, Kubernetes). Our team stays current with emerging models and can benchmark new releases against your specific workload.',
    },
    {
      question: 'What are the delivery timelines for POC and full production deployment?',
      answer: 'Our standard timeline is: (1) Initial Proof of Concept (POC) delivered within 2-4 weeks, demonstrating core agent functionality with your actual data and workflows. (2) Full production deployment typically takes 6-12 weeks depending on complexity, including comprehensive testing, security hardening, integration with your existing systems, and performance optimization. For urgent projects, we offer accelerated timelines with dedicated engineering resources. Every milestone includes client review gates and adjustment cycles to ensure alignment with evolving requirements.',
    },
    {
      question: 'What is included in the 60-day free post-launch support?',
      answer: 'Our complimentary 60-day support package includes: (1) 24/7 monitoring and alerting for agent performance, latency, and error rates, (2) Weekly performance tuning sessions to optimize prompt engineering and retrieval accuracy, (3) Bug fixes and hot-patch deployments within 4-hour SLA, (4) Analytics dashboard setup and interpretation coaching, (5) Team training sessions (up to 4 hours) for your engineering and operations staff, (6) Monthly performance reports with optimization recommendations, and (7) Priority access to our engineering team for any questions or adjustments. After 60 days, optional maintenance plans are available.',
    },
    {
      question: 'How is pricing structured for custom AI agent development?',
      answer: 'We use a transparent milestone-based pricing model: (1) Discovery & Architecture phase is offered free of charge, (2) Development is priced per milestone with fixed costs agreed upfront — no surprise charges, (3) Each milestone includes defined deliverables, acceptance criteria, and client sign-off gates. Typical POC engagements range from $15K-$40K, while full production deployments range from $50K-$200K+ depending on complexity, number of agents, and integration requirements. Ongoing maintenance plans (post-60-day free support) start at $3K/month and include monitoring, tuning, model updates, and priority support. We also offer outcome-based pricing for qualified enterprise engagements.',
    },
    {
      question: 'Can your AI agents integrate with our existing software stack and legacy systems?',
      answer: 'Absolutely. We specialize in connecting AI agents to diverse technology ecosystems. Our integration capabilities include: REST/GraphQL APIs, webhooks, database connectors (SQL, NoSQL), ERP systems (SAP, Oracle, NetSuite), CRM platforms (Salesforce, HubSpot), communication tools (Slack, Teams, email), cloud services (AWS, GCP, Azure), and legacy mainframe systems via middleware. We build custom adapters when native integrations are unavailable, and all connections are secured with enterprise-grade authentication (OAuth2, API keys, mTLS).',
    },
    {
      question: 'What makes Aiagents.Megnitoo different from other AI development agencies?',
      answer: 'Three key differentiators: (1) Production-first mindset — we build agents designed for 99.9% uptime in real business environments, not demo showcases. Every agent includes error handling, fallback logic, and monitoring from day one. (2) Multi-agent expertise — our team has deep experience building coordinated agent networks that handle complex workflows, not just single-chatbot implementations. (3) 60-day free support — we stand behind our work with comprehensive post-launch support, ensuring your agents perform optimally in production. Additionally, our engineers have shipped AI systems at scale for companies processing millions of requests daily.',
    },
  ];
  return faqs;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = generateFAQs();

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F2FE] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            Everything you need to know about our AI agent development process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-4 p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                  openIndex === i ? 'text-[#00F2FE]' : 'text-[#8A8A9A]'
                }`} />
                <span className="flex-1 text-sm sm:text-base font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#8A8A9A] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-[#00F2FE]' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-[52px]">
                      <p className="text-sm text-[#8A8A9A] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
