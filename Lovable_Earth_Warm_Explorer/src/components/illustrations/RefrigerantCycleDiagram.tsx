import { motion } from "framer-motion";

const stages = [
  { label: "Evaporator", desc: "Absorbs heat", x: 40, y: 140, color: "var(--thermal-cool)" },
  { label: "Compressor", desc: "Pressurizes gas", x: 200, y: 40, color: "var(--primary)" },
  { label: "Condenser", desc: "Releases heat", x: 360, y: 140, color: "var(--thermal-hot)" },
  { label: "Expansion", desc: "Drops pressure", x: 200, y: 240, color: "var(--thermal-warm)" },
];

const paths = [
  "M 80 140 Q 80 40 200 40",
  "M 240 40 Q 360 40 360 140",
  "M 360 180 Q 360 240 200 240",
  "M 160 240 Q 40 240 40 180",
];

export function RefrigerantCycleDiagram() {
  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-2 text-center">Refrigerant Cycle</h4>
      <p className="text-xs text-muted-foreground text-center mb-4">
        How heat pumps move thermal energy between ground and building
      </p>
      <svg viewBox="0 0 400 280" className="w-full h-56">
        {/* Flow paths */}
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          />
        ))}

        {/* Animated flow particles */}
        {paths.map((d, i) => (
          <motion.circle
            key={`p${i}`}
            r="5"
            fill={`hsl(${stages[i].color})`}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: `path('${d}')` } as any}
          />
        ))}

        {/* Stage nodes */}
        {stages.map((s, i) => (
          <motion.g
            key={s.label}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
          >
            <circle cx={s.x} cy={s.y} r="28" fill={`hsl(${s.color} / 0.2)`} stroke={`hsl(${s.color})`} strokeWidth="2" />
            <text x={s.x} y={s.y - 4} textAnchor="middle" fontSize="8" fontWeight="600" fill="hsl(var(--foreground))">
              {s.label}
            </text>
            <text x={s.x} y={s.y + 8} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">
              {s.desc}
            </text>
          </motion.g>
        ))}

        {/* Direction arrows on paths */}
        {[
          { x: 130, y: 70, r: -50 },
          { x: 310, y: 70, r: 50 },
          { x: 300, y: 220, r: 130 },
          { x: 90, y: 220, r: -130 },
        ].map((a, i) => (
          <motion.polygon
            key={`a${i}`}
            points="0,-5 5,3 -5,3"
            fill="hsl(var(--foreground))"
            transform={`translate(${a.x}, ${a.y}) rotate(${a.r})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}

export default RefrigerantCycleDiagram;
