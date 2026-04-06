import { motion } from "framer-motion";

const phases = [
  { label: "Coalition", duration: "3-6 mo", icon: "🤝", color: "bg-secondary" },
  { label: "Feasibility", duration: "6-12 mo", icon: "🔍", color: "bg-primary/20" },
  { label: "Design", duration: "6-12 mo", icon: "📐", color: "bg-accent" },
  { label: "Permitting", duration: "3-6 mo", icon: "📋", color: "bg-thermal-warm/30" },
  { label: "Construction", duration: "12-24 mo", icon: "🏗️", color: "bg-thermal-hot/20" },
  { label: "Operations", duration: "30+ yrs", icon: "✅", color: "bg-success/20" },
];

export function ProjectTimelineDiagram() {
  return (
    <div className="content-card overflow-hidden">
      <h4 className="font-semibold mb-6 text-center">Typical Project Timeline</h4>
      <div className="relative">
        {/* Central line */}
        <motion.div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.2 }}
        />

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              className="flex items-center gap-4 pl-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              {/* Node */}
              <motion.div
                className={`relative z-10 w-9 h-9 rounded-full ${phase.color} border-2 border-border flex items-center justify-center text-base shrink-0`}
                whileHover={{ scale: 1.2 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1, type: "spring", stiffness: 300 }}
              >
                {phase.icon}
              </motion.div>

              {/* Bar */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className={`${phase.color} rounded-lg px-3 py-2 flex justify-between items-center`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm font-medium truncate">{phase.label}</span>
                  <span className="text-xs text-muted-foreground shrink-0 ml-2">{phase.duration}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        Total: ~3–5 years from concept to operation
      </p>
    </div>
  );
}

export default ProjectTimelineDiagram;
