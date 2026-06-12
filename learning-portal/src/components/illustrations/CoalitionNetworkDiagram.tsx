import { motion } from 'motion/react';

const nodes = [
  { x: 58, y: 54, label: 'Gov' },
  { x: 242, y: 54, label: 'Utility' },
  { x: 58, y: 154, label: 'Residents' },
  { x: 242, y: 154, label: 'Engineers' },
  { x: 150, y: 28, label: 'Groups' },
  { x: 150, y: 180, label: 'Business' },
];

export function CoalitionNetworkDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <h4 className="text-xl font-bold text-slate-800">A coalition works by linking many interests</h4>
      <p className="mt-2 text-sm text-slate-600">
        Strong geothermal campaigns connect public institutions, residents, utilities, and local partners around one shared project.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-4 ring-1 ring-slate-200/70">
        <svg viewBox="0 0 300 210" className="aspect-[300/210] w-full">
          {nodes.map((node, index) => (
            <motion.line
              key={`line-${node.label}`}
              x1="150"
              y1="104"
              x2={node.x}
              y2={node.y}
              stroke="#cbd5e1"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            />
          ))}

          <motion.circle
            cx="150"
            cy="104"
            r="30"
            fill="#2563eb"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220 }}
          />
          <text x="150" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
            GEO
          </text>
          <text x="150" y="114" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
            PROJECT
          </text>

          {nodes.map((node, index) => (
            <g key={node.label}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="21"
                fill="white"
                stroke="#60a5fa"
                strokeWidth="2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.18, type: 'spring', stiffness: 240 }}
              />
              <text
                x={node.x}
                y={node.y + 3}
                textAnchor="middle"
                fontSize={node.label.length > 8 ? '6.5' : '8'}
                fontWeight="600"
                fill="#334155"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
