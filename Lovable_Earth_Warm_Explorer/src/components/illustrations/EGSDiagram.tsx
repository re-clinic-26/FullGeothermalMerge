import { motion } from "framer-motion";

export function EGSDiagram() {
  const surfaceY = 50;
  const reservoirY = 200;

  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-2 text-center">Enhanced Geothermal System (EGS)</h4>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Creating artificial reservoirs in hot dry rock
      </p>
      <svg viewBox="0 0 360 280" className="w-full h-56">
        <defs>
          <linearGradient id="egsGround" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="40%" stopColor="hsl(var(--thermal-warm) / 0.4)" />
            <stop offset="100%" stopColor="hsl(var(--thermal-hot) / 0.6)" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="360" height={surfaceY} fill="hsl(var(--background))" />
        {/* Underground */}
        <rect x="0" y={surfaceY} width="360" height="230" fill="url(#egsGround)" />
        {/* Surface line */}
        <line x1="0" y1={surfaceY} x2="360" y2={surfaceY} stroke="hsl(var(--border))" strokeWidth="2" />

        {/* Power plant */}
        <motion.g
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <rect x="145" y="15" width="70" height="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" rx="3" />
          <text x="180" y="34" textAnchor="middle" fontSize="8" fontWeight="600" fill="hsl(var(--foreground))">Power Plant</text>
          {/* Steam wisp */}
          {[0, 1, 2].map(i => (
            <motion.circle
              key={i}
              cx={155 + i * 15}
              r="3"
              fill="hsl(var(--muted-foreground) / 0.3)"
              animate={{ cy: [12, 2], opacity: [0.6, 0] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </motion.g>

        {/* Injection well (left) */}
        <motion.rect
          x="95" y={surfaceY} width="8" height={reservoirY - surfaceY}
          fill="hsl(var(--primary) / 0.6)"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          rx="2"
          initial={{ height: 0 }}
          whileInView={{ height: reservoirY - surfaceY }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <text x="99" y={surfaceY - 5} textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Injection</text>

        {/* Production well (right) */}
        <motion.rect
          x="257" y={surfaceY} width="8" height={reservoirY - surfaceY}
          fill="hsl(var(--thermal-hot) / 0.6)"
          stroke="hsl(var(--thermal-hot))"
          strokeWidth="1"
          rx="2"
          initial={{ height: 0 }}
          whileInView={{ height: reservoirY - surfaceY }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <text x="261" y={surfaceY - 5} textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Production</text>

        {/* Fracture zone */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <ellipse cx="180" cy={reservoirY + 15} rx="90" ry="35" fill="hsl(var(--thermal-hot) / 0.15)" stroke="hsl(var(--thermal-hot) / 0.4)" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Fracture lines */}
          {[
            "M 110 195 Q 140 210 170 200 Q 200 190 230 205 Q 250 215 260 200",
            "M 115 215 Q 145 225 175 218 Q 205 210 235 222 Q 255 228 258 220",
            "M 120 230 Q 150 240 180 235 Q 210 228 240 238 Q 255 242 255 235",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="hsl(var(--thermal-hot) / 0.5)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 + i * 0.2 }}
            />
          ))}
          <text x="180" y={reservoirY + 50} textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">
            Engineered Fracture Zone
          </text>
        </motion.g>

        {/* Injection flow (cold water down) */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={`inj${i}`}
            r="4"
            fill="hsl(var(--primary))"
            initial={{ cx: 99, cy: surfaceY, opacity: 0 }}
            animate={{ cy: [surfaceY, reservoirY], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Production flow (hot water up) */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={`prod${i}`}
            r="4"
            fill="hsl(var(--thermal-hot))"
            initial={{ cx: 261, cy: reservoirY, opacity: 0 }}
            animate={{ cy: [reservoirY, surfaceY], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: i * 1 + 0.5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Legend */}
        <g transform="translate(10, 260)">
          <circle cx="5" cy="5" r="4" fill="hsl(var(--primary))" />
          <text x="14" y="8" fontSize="7" fill="hsl(var(--muted-foreground))">Cold water in</text>
          <circle cx="90" cy="5" r="4" fill="hsl(var(--thermal-hot))" />
          <text x="99" y="8" fontSize="7" fill="hsl(var(--muted-foreground))">Hot water out</text>
        </g>
      </svg>
    </div>
  );
}

export default EGSDiagram;
