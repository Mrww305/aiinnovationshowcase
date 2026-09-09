import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, ArrowRight, Shield, Clock, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <footer id="contact" className="relative py-24 lg:py-32 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#00F2FE]/[0.03] to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F2FE] mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Ready to Build Your{' '}
            <span className="gradient-text">AI-Powered Future?</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            Schedule a free consultation and discover how custom AI agents can transform your operations.
          </p>
        </motion.div>

        {/* Contact form + Trust */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-border p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#00FF87]/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#00FF87]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#8A8A9A] text-sm">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#8A8A9A] mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#00F2FE]/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8A8A9A] mb-1.5 block">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#00F2FE]/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8A8A9A] mb-1.5 block">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#00F2FE]/50 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#8A8A9A] mb-1.5 block">How can we help?</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#00F2FE]/50 transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-glow py-3.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#00F2FE] to-[#7F00FF] text-white flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Request Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            )}
          </motion.form>

          {/* Trust highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'Built for Production, Not Just Demos',
                desc: 'Every agent ships with monitoring, error handling, and 99.9% uptime SLA.',
                color: '#00F2FE',
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: '60 Days Free Technical Support',
                desc: 'Comprehensive post-launch support with performance tuning and team coaching.',
                color: '#00FF87',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'POC in 4 Weeks',
                desc: 'See your custom AI agent working with your data before committing to full build.',
                color: '#7F00FF',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl glass border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-[#8A8A9A] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Schedule link */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#00F2FE]/5 to-[#7F00FF]/5 border border-[#00F2FE]/10">
              <p className="text-sm text-[#8A8A9A] mb-3">
                Prefer to schedule directly?
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#00F2FE] hover:text-white transition-colors"
              >
                Book a 30-min discovery call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00F2FE] to-[#7F00FF] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold">
                <span className="text-white">Aiagents</span>
                <span className="text-[#00F2FE]">.Megnitoo</span>
              </span>
            </div>
            <p className="text-xs text-[#8A8A9A]">
              © 2024 Aiagents.Megnitoo. All rights reserved. Production-Ready AI Solutions.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-[#8A8A9A] hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-xs text-[#8A8A9A] hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-xs text-[#8A8A9A] hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
