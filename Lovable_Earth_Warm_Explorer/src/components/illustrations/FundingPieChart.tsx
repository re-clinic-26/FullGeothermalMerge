import { motion } from "framer-motion";

const segments = [
  { label: "Federal Tax Credits", pct: 30, color: "hsl(var(--primary))" },
  { label: "State Incentives", pct: 20, color: "hsl(var(--thermal-warm))" },
  { label: "Green Bonds", pct: 25, color: "hsl(var(--success))" },
  { label: "Private Capital", pct: 25, color: "hsl(var(--accent-foreground))" },
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

export function FundingPieChart() {
  const cx = 100, cy = 100, r = 80;
  let cumAngle = 0;

  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-4 text-center">Typical Funding Mix</h4>
      <div className="flex flex-col items-center gap-4">
        <svg viewBox="0 0 200 200" className="w-44 h-44">
          {segments.map((seg, i) => {
            const startAngle = cumAngle;
            const sweep = (seg.pct / 100) * 360;
            cumAngle += sweep;
            const d = describeArc(cx, cy, r, startAngle, startAngle + sweep - 0.5);
            const mid = polarToCartesian(cx, cy, r * 0.6, startAngle + sweep / 2);
            return (
              <motion.g key={seg.label}>
                <motion.path
                  d={d}
                  fill={seg.color}
                  stroke="hsl(var(--background))"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
                <motion.text
                  x={mid.x}
                  y={mid.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  fontWeight="bold"
                  fill="white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4 }}
                >
                  {seg.pct}%
                </motion.text>
              </motion.g>
            );
          })}
        </svg>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5 }}
            >
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-xs text-muted-foreground">{seg.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FundingPieChart;
