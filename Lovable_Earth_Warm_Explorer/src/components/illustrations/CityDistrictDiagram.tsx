import { motion } from "framer-motion";

const buildings = [
  { x: 30, w: 35, h: 55, label: "Apts" },
  { x: 80, w: 28, h: 40, label: "Office" },
  { x: 120, w: 22, h: 30, label: "Shop" },
  { x: 155, w: 40, h: 65, label: "Hospital" },
  { x: 210, w: 30, h: 35, label: "School" },
  { x: 255, w: 25, h: 45, label: "Hotel" },
];

export function CityDistrictDiagram() {
  const streetY = 130;
  const pipeY = 160;

  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-4 text-center">District Thermal Network</h4>
      <svg viewBox="0 0 310 220" className="w-full h-52">
        <defs>
          <linearGradient id="cdUnderground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="100%" stopColor="hsl(var(--thermal-warm) / 0.3)" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="310" height={streetY} fill="hsl(var(--background))" />
        {/* Underground */}
        <rect x="0" y={streetY} width="310" height="90" fill="url(#cdUnderground)" />
        {/* Street surface */}
        <rect x="0" y={streetY - 4} width="310" height="8" fill="hsl(var(--border))" rx="1" />

        {/* Buildings */}
        {buildings.map((b, i) => (
          <motion.g key={b.label}>
            <motion.rect
              x={b.x}
              y={streetY - 4 - b.h}
              width={b.w}
              height={b.h}
              fill="hsl(var(--card))"
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              rx="2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ transformOrigin: `${b.x + b.w / 2}px ${streetY - 4}px` }}
            />
            {/* Windows */}
            {Array.from({ length: Math.floor(b.h / 15) }).map((_, wi) => (
              <rect
                key={wi}
                x={b.x + 4}
                y={streetY - 4 - b.h + 8 + wi * 15}
                width={b.w - 8}
                height={8}
                fill="hsl(var(--primary) / 0.15)"
                rx="1"
              />
            ))}
            {/* Label */}
            <text
              x={b.x + b.w / 2}
              y={streetY - 4 - b.h - 5}
              textAnchor="middle"
              fontSize="7"
              fill="hsl(var(--muted-foreground))"
            >
              {b.label}
            </text>
            {/* Vertical connector */}
            <motion.line
              x1={b.x + b.w / 2}
              y1={streetY + 4}
              x2={b.x + b.w / 2}
              y2={pipeY}
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="2"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
            />
          </motion.g>
        ))}

        {/* Main supply pipe */}
        <motion.line
          x1="15"
          y1={pipeY}
          x2="295"
          y2={pipeY}
          stroke="hsl(var(--thermal-hot))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* Return pipe */}
        <motion.line
          x1="15"
          y1={pipeY + 14}
          x2="295"
          y2={pipeY + 14}
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Flow particles - supply */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`s${i}`}
            r="3.5"
            fill="hsl(var(--thermal-hot))"
            initial={{ cx: 15, cy: pipeY, opacity: 0 }}
            animate={{ cx: [15, 295], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: "linear" }}
          />
        ))}
        {/* Flow particles - return */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`r${i}`}
            r="3.5"
            fill="hsl(var(--primary))"
            initial={{ cx: 295, cy: pipeY + 14, opacity: 0 }}
            animate={{ cx: [295, 15], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay: i * 1 + 0.5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Central plant icon */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, type: "spring" }}
        >
          <rect x="0" y={pipeY - 10} width="18" height="30" fill="hsl(var(--primary))" rx="3" />
          <text x="9" y={pipeY + 8} textAnchor="middle" fontSize="8" fill="hsl(var(--primary-foreground))">⚡</text>
          <text x="9" y={pipeY + 32} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">Plant</text>
        </motion.g>

        {/* Legend */}
        <g transform="translate(200, 195)">
          <rect x="0" y="0" width="8" height="3" fill="hsl(var(--thermal-hot))" rx="1" />
          <text x="12" y="4" fontSize="6" fill="hsl(var(--muted-foreground))">Hot supply</text>
          <rect x="55" y="0" width="8" height="3" fill="hsl(var(--primary))" rx="1" />
          <text x="67" y="4" fontSize="6" fill="hsl(var(--muted-foreground))">Cool return</text>
        </g>
      </svg>
    </div>
  );
}

export default CityDistrictDiagram;
