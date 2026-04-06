import { motion } from 'motion/react';

const phases = [
  {
    step: '1',
    title: 'Site Survey',
    description: 'Evaluate geology, buildings, and utility infrastructure',
    className: 'border-blue-200 bg-blue-50',
  },
  {
    step: '2',
    title: 'Demand Analysis',
    description: 'Assess heating and cooling loads across likely network nodes',
    className: 'border-cyan-200 bg-cyan-50',
  },
  {
    step: '3',
    title: 'System Design',
    description: 'Draft preliminary network layout and capacity needs',
    className: 'border-emerald-200 bg-emerald-50',
  },
  {
    step: '4',
    title: 'Cost Estimate',
    description: 'Model capital costs, operations, and payback timing',
    className: 'border-orange-200 bg-orange-50',
  },
  {
    step: '5',
    title: 'Report',
    description: 'Summarize findings, tradeoffs, and recommendations',
    className: 'border-slate-200 bg-slate-50',
  },
];

export function ScopingStudyProcessDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <h4 className="text-xl font-bold text-slate-800">Scoping study process</h4>
      <p className="mt-2 text-sm text-slate-600">
        A scoping study moves from field conditions and building demand to system design, cost modeling, and a final set of recommendations.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.25 }}
            className={`rounded-2xl border p-4 text-center ${phase.className}`}
          >
            <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
              {phase.step}
            </div>
            <h5 className="text-sm font-bold text-slate-800">{phase.title}</h5>
            <p className="mt-2 text-xs leading-5 text-slate-600">{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
