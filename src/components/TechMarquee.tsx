import { motion } from 'framer-motion';

const items = [
  'OpenAI GPT-4', 'Anthropic Claude', 'Meta Llama 3', 'LangChain', 'AutoGen',
  'LlamaIndex', 'CrewAI', 'Pinecone', 'Weaviate', 'Qdrant', 'Kubernetes',
  'FastAPI', 'TypeScript', 'Python', 'AWS', 'RAG Pipelines', 'Multi-Agent Systems',
  'Workflow Automation', 'Vector Search', 'MCP Protocol',
];

export default function TechMarquee() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-white/5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
          className="flex shrink-0 gap-8 items-center pr-8"
        >
          {[...items, ...items].map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-medium text-[#8A8A9A] whitespace-nowrap">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]/30" />
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
          className="flex shrink-0 gap-8 items-center pr-8"
          aria-hidden="true"
        >
          {[...items, ...items].map((item, i) => (
            <div key={`${item}-dup-${i}`} className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-medium text-[#8A8A9A] whitespace-nowrap">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
