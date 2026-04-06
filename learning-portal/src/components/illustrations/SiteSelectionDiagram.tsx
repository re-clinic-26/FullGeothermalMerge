import { motion } from 'motion/react';

const factors = [
  { x: 60, y: 52, label: 'Geology', icon: '🪨' },
  { x: 340, y: 52, label: 'Density', icon: '🏘️' },
  { x: 60, y: 172, label: 'Access', icon: '🛤️' },
  { x: 340, y: 172, label: 'Demand', icon: '🌡️' },
  { x: 200, y: 194, label: 'Infrastructure', icon: '⚡' },
];

export function SiteSelectionDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <h4 className="text-xl font-bold text-slate-800">What makes a good geothermal site?</h4>
      <p className="mt-2 text-sm text-slate-600">
        A strong first-pass screen looks at the building itself and the surrounding conditions that make network connections practical.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50 p-4 ring-1 ring-slate-200/70">
        <svg viewBox="0 0 400 220" className="h-56 w-full">
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220 }}
          >
            <rect x="170" y="80" width="60" height="50" rx="6" fill="white" stroke="#2563eb" strokeWidth="2" />
            <polygon points="170,80 200,55 230,80" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
            <text x="200" y="112" textAnchor="middle" fontSize="8" fontWeight="700" fill="#334155">
              Building
            </text>
          </motion.g>

          {factors.map((factor, index) => (
            <motion.g
              key={factor.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.12, type: 'spring', stiffness: 220 }}
            >
              <motion.line
                x1={factor.x}
                y1={factor.y}
                x2={200}
                y2={105}
                stroke="#93c5fd"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
              />
              <circle cx={factor.x} cy={factor.y} r="24" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5" />
              <text x={factor.x} y={factor.y - 5} textAnchor="middle" fontSize="12">
                {factor.icon}
              </text>
              <text x={factor.x} y={factor.y + 10} textAnchor="middle" fontSize={factor.label.length > 11 ? '6.5' : '7'} fontWeight="700" fill="#334155">
                {factor.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}
