import { motion } from 'motion/react';
import { Flame, Snowflake } from 'lucide-react';

export function HeatFlowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-orange-50 p-6 shadow-lg md:p-8">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/70"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
            <Snowflake className="h-10 w-10 text-cyan-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-800">Cooler space</p>
            <p className="mt-1 text-sm text-slate-600">Lower thermal energy</p>
          </div>
        </motion.div>

        <div className="relative h-28 min-w-[220px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 112" preserveAspectRatio="none">
            <defs>
              <linearGradient id="portal-heat-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 24 56 C 110 56, 180 56, 336 56"
              stroke="url(#portal-heat-flow)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            {[0, 1, 2, 3].map((index) => (
              <motion.circle
                key={index}
                r="7"
                fill="#f97316"
                initial={{ opacity: 0 }}
                animate={{ cx: ['90%', '10%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.2, delay: index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
                cy="56"
              />
            ))}
          </svg>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
            <div className="inline-flex flex-col items-center rounded-2xl bg-white/95 px-5 py-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-sm font-semibold text-slate-700">Heat naturally flows</span>
              <span className="text-xs text-slate-500">from warmer to cooler places</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/70"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
            <Flame className="h-10 w-10 text-orange-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-800">Warmer space</p>
            <p className="mt-1 text-sm text-slate-600">Higher thermal energy</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
