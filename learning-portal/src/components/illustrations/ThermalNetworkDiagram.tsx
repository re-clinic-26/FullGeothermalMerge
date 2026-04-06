import { motion } from 'motion/react';
import { Building2, Factory, Home, Store } from 'lucide-react';

export function ThermalNetworkDiagram() {
  const buildings = [
    { id: 'source', icon: Factory, label: 'Shared plant', x: 44, y: 34, color: 'text-orange-600' },
    { id: 'home1', icon: Home, label: 'Homes', x: 198, y: 18, color: 'text-blue-600' },
    { id: 'office', icon: Building2, label: 'Offices', x: 314, y: 50, color: 'text-blue-600' },
    { id: 'store', icon: Store, label: 'Stores', x: 252, y: 124, color: 'text-blue-600' },
    { id: 'home2', icon: Home, label: 'Apartments', x: 110, y: 132, color: 'text-blue-600' },
  ];

  const pipes = [
    'M 76 66 Q 140 28 198 46',
    'M 76 66 Q 92 102 140 144',
    'M 224 48 Q 268 32 320 72',
    'M 344 82 Q 324 106 284 134',
    'M 258 152 Q 204 162 162 150',
    'M 116 152 Q 70 128 62 88',
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-6 shadow-lg">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-slate-800">How a shared thermal network connects buildings</h4>
          <p className="text-sm text-slate-600">
            Energy moves through buried pipes so connected buildings can share heating and cooling resources.
          </p>
        </div>
        <div className="hidden rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 md:block">
          Network concept
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="absolute bottom-0 left-0 right-0 h-8 border-t border-emerald-200 bg-emerald-100/70" />

        <svg className="h-72 w-full" viewBox="0 0 400 200">
          {pipes.map((path, index) => (
            <g key={path}>
              <motion.path
                d={path}
                stroke="#cbd5e1"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.08 }}
              />
              <motion.path
                d={path}
                stroke="#93c5fd"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.08 + 0.1 }}
              />
            </g>
          ))}

          {pipes.map((path, pipeIndex) =>
            [0, 1].map((particleIndex) => (
              <motion.circle
                key={`${pipeIndex}-${particleIndex}`}
                r="3"
                fill={pipeIndex === 0 || pipeIndex === 5 ? '#f97316' : '#06b6d4'}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0], offsetDistance: ['0%', '100%'] }}
                transition={{ duration: 3, delay: pipeIndex * 0.25 + particleIndex, repeat: Infinity, ease: 'linear' }}
                style={{ offsetPath: `path('${path}')` }}
              />
            ))
          )}
        </svg>

        {buildings.map((building, index) => (
          <motion.div
            key={building.id}
            className="absolute"
            style={{ left: building.x, top: building.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <div className="relative">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm ${building.color}`}>
                <building.icon className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-slate-500">
                {building.label}
              </div>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-10 right-4 rounded-xl bg-white/95 px-3 py-2 shadow ring-1 ring-slate-200">
          <div className="text-xs font-semibold text-slate-700">Flow legend</div>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            Hot supply
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
            <span className="h-3 w-3 rounded-full bg-cyan-500" />
            Cooler return
          </div>
        </div>
      </div>
    </div>
  );
}
