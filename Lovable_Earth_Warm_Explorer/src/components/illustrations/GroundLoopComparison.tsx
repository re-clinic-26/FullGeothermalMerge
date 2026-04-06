import { motion } from "framer-motion";

export function GroundLoopComparison() {
  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-4 text-center">Vertical vs. Horizontal Ground Loops</h4>
      <div className="grid grid-cols-2 gap-4">
        {/* Vertical Loop */}
        <div className="relative">
          <svg viewBox="0 0 160 220" className="w-full h-56">
            <defs>
              <linearGradient id="vSoil" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--muted))" />
                <stop offset="100%" stopColor="hsl(var(--thermal-warm))" />
              </linearGradient>
            </defs>
            {/* Ground */}
            <rect x="0" y="40" width="160" height="180" fill="url(#vSoil)" rx="4" />
            {/* Surface */}
            <rect x="0" y="30" width="160" height="14" fill="hsl(var(--muted))" rx="2" />
            {/* House */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <rect x="55" y="10" width="50" height="24" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" rx="2" />
              <polygon points="55,12 80,0 105,12" fill="hsl(var(--primary))" opacity="0.6" />
            </motion.g>
            {/* Borehole - down pipe */}
            <motion.line
              x1="72" y1="44" x2="72" y2="200"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            {/* Borehole - up pipe */}
            <motion.line
              x1="88" y1="200" x2="88" y2="44"
              stroke="hsl(var(--thermal-hot))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            {/* U-bend */}
            <motion.path
              d="M 72 200 Q 80 212 88 200"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
            />
            {/* Flow particles down */}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`vd${i}`}
                r="3"
                fill="hsl(var(--primary))"
                initial={{ cx: 72, cy: 44, opacity: 0 }}
                animate={{ cy: [44, 200], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }}
              />
            ))}
            {/* Flow particles up */}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`vu${i}`}
                r="3"
                fill="hsl(var(--thermal-hot))"
                initial={{ cx: 88, cy: 200, opacity: 0 }}
                animate={{ cy: [200, 44], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, delay: i * 0.8 + 1.2, repeat: Infinity }}
              />
            ))}
            {/* Depth labels */}
            <text x="110" y="80" fontSize="8" fill="hsl(var(--muted-foreground))">50 ft</text>
            <text x="110" y="140" fontSize="8" fill="hsl(var(--muted-foreground))">250 ft</text>
            <text x="110" y="195" fontSize="8" fill="hsl(var(--muted-foreground))">500 ft</text>
          </svg>
          <p className="text-center text-xs font-medium mt-1">Vertical</p>
          <p className="text-center text-[10px] text-muted-foreground">150–500 ft deep</p>
        </div>

        {/* Horizontal Loop */}
        <div className="relative">
          <svg viewBox="0 0 160 220" className="w-full h-56">
            {/* Ground */}
            <rect x="0" y="80" width="160" height="140" fill="hsl(var(--muted))" rx="4" />
            {/* Surface */}
            <rect x="0" y="70" width="160" height="14" fill="hsl(var(--muted))" rx="2" />
            {/* House */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <rect x="55" y="46" width="50" height="28" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" rx="2" />
              <polygon points="55,48 80,36 105,48" fill="hsl(var(--primary))" opacity="0.6" />
            </motion.g>
            {/* Horizontal pipe runs */}
            {[110, 130, 150].map((y, i) => (
              <motion.g key={y}>
                <motion.line
                  x1="15" y1={y} x2="145" y2={y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.25 }}
                />
                {/* Flow particles */}
                <motion.circle
                  r="3"
                  fill="hsl(var(--thermal-warm))"
                  initial={{ cx: 15, cy: y, opacity: 0 }}
                  animate={{ cx: i % 2 === 0 ? [15, 145] : [145, 15], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
              </motion.g>
            ))}
            {/* Connecting bends */}
            <motion.path
              d="M 145 110 Q 155 120 145 130 M 15 130 Q 5 140 15 150"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            {/* Vertical connector to house */}
            <motion.line
              x1="80" y1="74" x2="80" y2="110"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            {/* Depth label */}
            <text x="100" y="105" fontSize="8" fill="hsl(var(--muted-foreground))">4–6 ft</text>
            <text x="8" y="175" fontSize="7" fill="hsl(var(--muted-foreground))">Needs more land area</text>
          </svg>
          <p className="text-center text-xs font-medium mt-1">Horizontal</p>
          <p className="text-center text-[10px] text-muted-foreground">4–6 ft deep</p>
        </div>
      </div>
    </div>
  );
}

export default GroundLoopComparison;
