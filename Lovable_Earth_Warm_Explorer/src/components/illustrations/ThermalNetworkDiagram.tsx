import { motion } from "framer-motion";
import { Factory, Home, Building2, Store } from "lucide-react";

export function ThermalNetworkDiagram() {
  const buildings = [
    { id: "source", icon: Factory, label: "Heat Source", x: 50, y: 40, color: "text-thermal-hot" },
    { id: "home1", icon: Home, label: "Home", x: 200, y: 20, color: "text-primary" },
    { id: "office", icon: Building2, label: "Office", x: 320, y: 50, color: "text-primary" },
    { id: "store", icon: Store, label: "Store", x: 260, y: 120, color: "text-primary" },
    { id: "home2", icon: Home, label: "Home", x: 120, y: 130, color: "text-primary" },
  ];

  const pipes = [
    { from: "source", to: "home1", path: "M 75 70 Q 140 30 200 50" },
    { from: "source", to: "home2", path: "M 75 70 Q 90 100 145 140" },
    { from: "home1", to: "office", path: "M 225 50 Q 270 30 320 70" },
    { from: "office", to: "store", path: "M 345 80 Q 320 100 285 130" },
    { from: "store", to: "home2", path: "M 260 150 Q 200 160 170 150" },
    { from: "home2", to: "source", path: "M 120 150 Q 60 130 60 90" },
  ];

  return (
    <div className="relative w-full h-72 bg-gradient-to-br from-muted/20 to-secondary/10 rounded-xl overflow-hidden">
      {/* Underground layer hint */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-secondary/20 border-t border-secondary/30" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
        {/* Main distribution pipes */}
        {pipes.map((pipe, index) => (
          <g key={pipe.from + pipe.to}>
            {/* Pipe background */}
            <motion.path
              d={pipe.path}
              stroke="hsl(var(--border))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
            {/* Pipe inner */}
            <motion.path
              d={pipe.path}
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.1 }}
            />
          </g>
        ))}

        {/* Animated flow particles */}
        {pipes.map((pipe, pipeIndex) => (
          [0, 1, 2].map((particleIndex) => (
            <motion.circle
              key={`${pipe.from}-${pipe.to}-${particleIndex}`}
              r="3"
              fill={pipeIndex === 0 || pipeIndex === 5 ? "hsl(var(--thermal-hot))" : "hsl(var(--thermal-cool))"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                delay: pipeIndex * 0.3 + particleIndex * 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path('${pipe.path}')`,
              }}
            />
          ))
        ))}
      </svg>

      {/* Buildings */}
      {buildings.map((building, index) => (
        <motion.div
          key={building.id}
          className="absolute"
          style={{ left: building.x, top: building.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`w-12 h-12 rounded-lg bg-card shadow-md border border-border flex items-center justify-center ${building.color}`}>
              <building.icon className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
              {building.label}
            </div>
            
            {/* Connection pulse for heat source */}
            {building.id === "source" && (
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-thermal-hot"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Legend */}
      <motion.div
        className="absolute bottom-10 right-4 bg-card/90 rounded-lg p-3 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="text-xs font-semibold mb-2">Energy Flow</div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-thermal-hot" />
          <span className="text-muted-foreground">Hot Supply</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-1">
          <div className="w-3 h-3 rounded-full bg-thermal-cool" />
          <span className="text-muted-foreground">Return</span>
        </div>
      </motion.div>

      {/* Network status */}
      <motion.div
        className="absolute top-4 left-4 bg-success/10 rounded-lg px-3 py-2 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-success"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-xs font-medium text-success">Network Active</span>
      </motion.div>
    </div>
  );
}

export default ThermalNetworkDiagram;
