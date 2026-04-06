import { motion } from 'motion/react';
import { Flame, Home, Snowflake } from 'lucide-react';

interface HeatPumpDiagramProps {
  mode?: 'heating' | 'cooling';
}

export function HeatPumpDiagram({ mode = 'heating' }: HeatPumpDiagramProps) {
  const isHeating = mode === 'heating';

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-emerald-50 p-4 shadow-lg md:p-6">
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-700/90 to-emerald-500/60" />

      <div className="relative h-80 md:h-96">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-4 w-36 -translate-x-1/2 md:top-3"
        >
          <div className="w-0 h-0 border-x-[72px] border-b-[42px] border-x-transparent border-b-slate-700" />
          <div className="relative flex h-24 items-center justify-center rounded-b-xl border-2 border-slate-300 bg-white shadow-md">
            <Home className="h-8 w-8 text-slate-400" />
            <div className="absolute -right-3 top-3 rounded-lg bg-white px-2 py-1 text-xs font-bold shadow ring-1 ring-slate-200">
              <span className={isHeating ? 'text-orange-600' : 'text-cyan-600'}>
                {isHeating ? '70°F' : '72°F'}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-[8.75rem] z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border-2 border-blue-200 bg-white shadow-lg md:top-[9rem]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-blue-400"
          >
            {isHeating ? <Flame className="h-5 w-5 text-orange-600" /> : <Snowflake className="h-5 w-5 text-cyan-600" />}
          </motion.div>
        </motion.div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 360" preserveAspectRatio="xMidYMid meet">
          <motion.path
            d="M 180 196 L 180 286 Q 180 304 198 304 L 258 304 Q 278 304 278 284 L 278 196"
            stroke="#2563eb"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          {[0, 1, 2, 3].map((index) => (
            <motion.circle
              key={index}
              r="4"
              fill={isHeating ? '#f97316' : '#06b6d4'}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0], offsetDistance: ['0%', '100%'] }}
              transition={{ duration: 4, delay: index * 0.8, repeat: Infinity, ease: 'linear' }}
              style={{
                offsetPath: isHeating
                  ? "path('M 278 284 L 278 196 L 212 196 L 180 196 L 180 286 Q 180 304 198 304 L 258 304 Q 278 304 278 284')"
                  : "path('M 180 196 L 180 286 Q 180 304 198 304 L 258 304 Q 278 304 278 284 L 278 196 L 212 196')",
              }}
            />
          ))}
        </svg>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          style={{ transformOrigin: 'bottom' }}
          className="absolute left-1/2 top-[6.75rem] h-14 w-1 -translate-x-1/2 bg-blue-300 md:top-[7rem]"
        />

        <motion.div
          animate={{ y: isHeating ? [188, 120] : [120, 188], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          {isHeating ? <Flame className="h-4 w-4 text-orange-600" /> : <Snowflake className="h-4 w-4 text-cyan-600" />}
        </motion.div>

        <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-2 shadow ring-1 ring-slate-200">
          <div className="text-xs text-slate-500">Ground temperature</div>
          <div className="text-lg font-bold text-emerald-700">50°F</div>
        </div>
      </div>
    </div>
  );
}
