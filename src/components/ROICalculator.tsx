import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

const hourlyCosts = [
  { label: '$25/hr', value: 25 },
  { label: '$50/hr', value: 50 },
  { label: '$75/hr', value: 75 },
  { label: '$100/hr', value: 100 },
  { label: '$150/hr', value: 150 },
  { label: '$200/hr', value: 200 },
];

export default function ROICalculator() {
  const [weeklyHours, setWeeklyHours] = useState(100);
  const [hourlyCost, setHourlyCost] = useState(75);

  const results = useMemo(() => {
    const automationRate = 0.75;
    const hoursReclaimedWeekly = weeklyHours * automationRate;
    const hoursReclaimedMonthly = hoursReclaimedWeekly * 4.33;
    const monthlySavings = hoursReclaimedMonthly * hourlyCost;
    const annualSavings = monthlySavings * 12;
    return {
      hoursReclaimedWeekly: Math.round(hoursReclaimedWeekly),
      hoursReclaimedMonthly: Math.round(hoursReclaimedMonthly),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
    };
  }, [weeklyHours, hourlyCost]);

  return (
    <section id="roi" className="relative py-24 lg:py-32">
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
            ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Calculate Your{' '}
            <span className="gradient-text">AI Savings</span>
          </h2>
          <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
            See how much time and money your team can reclaim with AI-powered automation.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gradient-border p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#00F2FE]" />
                  <label className="text-sm font-medium text-white">
                    Hours spent weekly on manual tasks
                  </label>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-[#8A8A9A]">10 hrs</span>
                  <span className="text-lg font-bold gradient-text">{weeklyHours} hrs/week</span>
                  <span className="text-xs text-[#8A8A9A]">1000 hrs</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-4 h-4 text-[#00FF87]" />
                  <label className="text-sm font-medium text-white">
                    Average hourly operational cost
                  </label>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {hourlyCosts.map((cost) => (
                    <button
                      key={cost.value}
                      onClick={() => setHourlyCost(cost.value)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        hourlyCost === cost.value
                          ? 'bg-gradient-to-r from-[#00F2FE] to-[#7F00FF] text-white shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                          : 'bg-white/5 text-[#8A8A9A] hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      {cost.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-[#8A8A9A] mb-1">
                  <Calculator className="w-3 h-3" />
                  Automation efficiency rate
                </div>
                <div className="text-2xl font-bold text-[#00FF87]">75%</div>
                <div className="text-xs text-[#8A8A9A] mt-1">
                  Based on industry benchmarks for AI agent automation
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#00F2FE]/5 to-transparent border border-[#00F2FE]/10">
                <div className="text-xs text-[#8A8A9A] mb-1">Hours Reclaimed Weekly</div>
                <motion.div
                  key={results.hoursReclaimedWeekly}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-bold text-[#00F2FE]"
                >
                  {results.hoursReclaimedWeekly} hrs
                </motion.div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#7F00FF]/5 to-transparent border border-[#7F00FF]/10">
                <div className="text-xs text-[#8A8A9A] mb-1">Hours Reclaimed Monthly</div>
                <motion.div
                  key={results.hoursReclaimedMonthly}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-bold text-[#7F00FF]"
                >
                  {results.hoursReclaimedMonthly.toLocaleString()} hrs
                </motion.div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#00FF87]/5 to-transparent border border-[#00FF87]/10">
                <div className="text-xs text-[#8A8A9A] mb-1">Projected Monthly Savings</div>
                <motion.div
                  key={results.monthlySavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-bold text-[#00FF87]"
                >
                  ${results.monthlySavings.toLocaleString()}
                </motion.div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00FF87]" />
                  <div className="text-xs text-[#8A8A9A]">Annual Projected Savings</div>
                </div>
                <motion.div
                  key={results.annualSavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-bold gradient-text mt-1"
                >
                  ${results.annualSavings.toLocaleString()}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
