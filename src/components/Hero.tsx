import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Cpu, Database, Wrench, Shield } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
}

const nodes: Node[] = [
  { id: 'router', label: 'LLM Router', icon: <Cpu className="w-5 h-5" />, x: 20, y: 30, connections: ['rag', 'tools'] },
  { id: 'rag', label: 'RAG Engine', icon: <Database className="w-5 h-5" />, x: 55, y: 15, connections: ['router', 'guardrails'] },
  { id: 'tools', label: 'Tooling & APIs', icon: <Wrench className="w-5 h-5" />, x: 80, y: 40, connections: ['router', 'guardrails'] },
  { id: 'guardrails', label: 'Safety Guardrails', icon: <Shield className="w-5 h-5" />, x: 45, y: 70, connections: ['rag', 'tools'] },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const count = 60;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleNodeHover = useCallback((id: string | null) => {
    setActiveNode(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F2FE] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
              Production-Ready AI Solutions
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              We Build{' '}
              <span className="gradient-text-animated">Production-Ready</span>
              <br />
              AI Agents for Your Business.
            </h1>

            <p className="text-lg text-[#8A8A9A] max-w-xl mb-8 leading-relaxed">
              Custom AI agent development, multi-agent systems, and enterprise workflow automation tailored to your exact operational stack.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#00F2FE] to-[#7F00FF] text-white hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] transition-all duration-300"
              >
                Request Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass border border-white/10 text-white hover:border-[#00F2FE]/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all duration-300"
              >
                <Play className="w-4 h-4 text-[#00F2FE]" />
                Watch Demo System
              </motion.a>
            </div>

            {/* Trust metrics */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { value: '87%', label: 'Automation Rate' },
                { value: '4 Wks', label: 'POC Delivery' },
                { value: '60 Days', label: 'Free Support' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-xs text-[#8A8A9A] mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Interactive Node Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F2FE]/5 via-[#7F00FF]/5 to-[#00FF87]/5 blur-3xl" />
              
              {/* Grid background */}
              <div className="absolute inset-8 rounded-2xl border border-white/5 bg-dot-pattern" />

              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {nodes.map((node) =>
                  node.connections.map((connId) => {
                    const target = nodes.find((n) => n.id === connId);
                    if (!target) return null;
                    const isActive = activeNode === node.id || activeNode === connId;
                    return (
                      <line
                        key={`${node.id}-${connId}`}
                        x1={node.x}
                        y1={node.y}
                        x2={target.x}
                        y2={target.y}
                        stroke={isActive ? '#00F2FE' : 'rgba(255,255,255,0.08)'}
                        strokeWidth={isActive ? '0.3' : '0.15'}
                        strokeDasharray={isActive ? '2 1' : 'none'}
                        className="transition-all duration-500"
                      />
                    );
                  })
                )}
              </svg>

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 200 }}
                  onMouseEnter={() => handleNodeHover(node.id)}
                  onMouseLeave={() => handleNodeHover(null)}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    activeNode === node.id ? 'z-20 scale-110' : 'z-10'
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                      activeNode === node.id
                        ? 'glass-strong border border-[#00F2FE]/40 shadow-[0_0_30px_rgba(0,242,254,0.2)]'
                        : 'glass border border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeNode === node.id
                          ? 'bg-gradient-to-br from-[#00F2FE] to-[#7F00FF] text-white'
                          : 'bg-white/5 text-[#8A8A9A]'
                      }`}
                    >
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-medium text-center whitespace-nowrap text-[#8A8A9A]">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Center pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FF87] animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
