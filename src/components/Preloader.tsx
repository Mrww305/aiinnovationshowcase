import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Props {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0C] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F2FE] to-[#7F00FF] flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-sm font-bold">
                <span className="text-white">Aiagents</span>
                <span className="text-[#00F2FE]">.Megnitoo</span>
              </div>
              <div className="text-xs text-[#8A8A9A] mt-1">by Sajid Afridi</div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="h-[2px] rounded-full bg-white/10 overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="h-full w-1/2 bg-gradient-to-r from-[#00F2FE] to-[#7F00FF]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
