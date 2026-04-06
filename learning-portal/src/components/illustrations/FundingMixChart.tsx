import { motion } from 'motion/react';

const segments = [
  { label: 'Tax credits', pct: 30, color: '#2563eb' },
  { label: 'State incentives', pct: 20, color: '#06b6d4' },
  { label: 'Green bonds', pct: 25, color: '#10b981' },
  { label: 'Local or private capital', pct: 25, color: '#f97316' },
];

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y} Z`;
}

export function FundingMixChart() {
  const cx = 100;
  const cy = 100;
  const r = 80;
  let cumulativeAngle = 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <h4 className="text-xl font-bold text-slate-800">Example financing mix</h4>
      <p className="mt-2 text-sm text-slate-600">
        Real projects vary, but many community systems combine public incentives with local financing and private capital.
      </p>

      <div className="mt-6 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
        <svg viewBox="0 0 200 200" className="h-44 w-44 flex-shrink-0">
          {segments.map((segment, index) => {
            const startAngle = cumulativeAngle;
            const sweep = (segment.pct / 100) * 360;
            cumulativeAngle += sweep;
            const d = describeArc(cx, cy, r, startAngle, startAngle + sweep - 0.5);
            const mid = polarToCartesian(cx, cy, r * 0.6, startAngle + sweep / 2);

            return (
              <motion.g key={segment.label}>
                <motion.path
                  d={d}
                  fill={segment.color}
                  stroke="#ffffff"
                  strokeWidth="2"
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.35 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
                <motion.text
                  x={mid.x}
                  y={mid.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {segment.pct}%
                </motion.text>
              </motion.g>
            );
          })}
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.25 }}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2"
            >
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: segment.color }} />
              <span className="text-sm text-slate-700">{segment.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
