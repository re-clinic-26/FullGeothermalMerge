import { motion } from "framer-motion";

const buildings = [
  { x: 60, y: 50, w: 50, h: 35, label: "Library", color: "var(--primary)" },
  { x: 170, y: 30, w: 60, h: 45, label: "Science Hall", color: "var(--thermal-warm)" },
  { x: 290, y: 50, w: 45, h: 30, label: "Dorms", color: "var(--accent)" },
  { x: 100, y: 150, w: 55, h: 40, label: "Gym", color: "var(--thermal-cool)" },
  { x: 245, y: 155, w: 50, h: 35, label: "Admin", color: "var(--secondary)" },
];

const centralPlant = { x: 180, y: 115 };

export function CampusNetworkDiagram() {
  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-2 text-center">Campus Geothermal Network</h4>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Central plant distributes thermal energy across campus buildings
      </p>
      <svg viewBox="0 0 380 220" className="w-full h-48">
        {/* Background grid dots */}
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 19 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 20 + 10}
              cy={row * 22 + 10}
              r="1"
              fill="hsl(var(--border))"
            />
          ))
        )}

        {/* Pipes from central plant to buildings */}
        {buildings.map((b, i) => {
          const bx = b.x + b.w / 2;
          const by = b.y + b.h / 2;
          return (
            <motion.line
              key={`pipe-${i}`}
              x1={centralPlant.x}
              y1={centralPlant.y}
              x2={bx}
              y2={by}
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            />
          );
        })}

        {/* Flow particles along pipes */}
        {buildings.map((b, i) => {
          const bx = b.x + b.w / 2;
          const by = b.y + b.h / 2;
          return (
            <motion.circle
              key={`flow-${i}`}
              r="4"
              fill="hsl(var(--thermal-hot))"
              animate={{
                cx: [centralPlant.x, bx, centralPlant.x],
                cy: [centralPlant.y, by, centralPlant.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: "linear" }}
            />
          );
        })}

        {/* Buildings */}
        {buildings.map((b, i) => (
          <motion.g
            key={b.label}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring" }}
          >
            <rect
              x={b.x} y={b.y} width={b.w} height={b.h}
              fill="hsl(var(--card))"
              stroke={`hsl(${b.color})`}
              strokeWidth="2"
              rx="4"
            />
            <text
              x={b.x + b.w / 2} y={b.y + b.h / 2 + 3}
              textAnchor="middle" fontSize="7" fontWeight="500"
              fill="hsl(var(--foreground))"
            >
              {b.label}
            </text>
          </motion.g>
        ))}

        {/* Central plant */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <circle cx={centralPlant.x} cy={centralPlant.y} r="22" fill="hsl(var(--primary))" />
          <motion.circle
            cx={centralPlant.x} cy={centralPlant.y} r="22"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            animate={{ r: [22, 30, 22], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x={centralPlant.x} y={centralPlant.y - 2} textAnchor="middle" fontSize="7" fontWeight="700" fill="hsl(var(--primary-foreground))">
            Central
          </text>
          <text x={centralPlant.x} y={centralPlant.y + 8} textAnchor="middle" fontSize="6" fill="hsl(var(--primary-foreground) / 0.8)">
            Plant
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

export default CampusNetworkDiagram;
