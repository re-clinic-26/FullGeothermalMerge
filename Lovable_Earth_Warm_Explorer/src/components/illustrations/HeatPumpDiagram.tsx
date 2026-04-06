import { motion } from "framer-motion";
import { Snowflake, Flame, Home } from "lucide-react";

interface HeatPumpDiagramProps {
  mode?: "heating" | "cooling";
}

export function HeatPumpDiagram({ mode = "heating" }: HeatPumpDiagramProps) {
  const isHeating = mode === "heating";

  return (
    <div className="relative w-full h-80 bg-gradient-to-b from-muted/30 to-secondary/20 rounded-xl overflow-hidden">
      {/* Ground layer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-secondary/60" />
      
      {/* House */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 w-32"
      >
        {/* Roof */}
        <div className="relative">
          <div className="w-0 h-0 border-l-[64px] border-r-[64px] border-b-[40px] border-l-transparent border-r-transparent border-b-foreground/80" />
        </div>
        {/* House body */}
        <div className="w-32 h-20 bg-card border-2 border-border rounded-b-lg flex items-center justify-center relative">
          <Home className="w-8 h-8 text-muted-foreground/50" />
          {/* Indoor temp indicator */}
          <motion.div
            className="absolute -right-2 top-2 px-2 py-1 bg-card rounded shadow-sm text-xs font-semibold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isHeating ? (
              <span className="text-thermal-hot">70°F</span>
            ) : (
              <span className="text-thermal-cool">72°F</span>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Heat Pump Unit */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-card shadow-lg border-2 border-primary/30 flex items-center justify-center z-10"
        animate={{ 
          boxShadow: isHeating 
            ? ["0 0 0 0 rgba(220, 38, 38, 0)", "0 0 20px 10px rgba(220, 38, 38, 0.2)", "0 0 0 0 rgba(220, 38, 38, 0)"]
            : ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 20px 10px rgba(59, 130, 246, 0.2)", "0 0 0 0 rgba(59, 130, 246, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-full border-2 border-dashed border-primary flex items-center justify-center"
        >
          {isHeating ? (
            <Flame className="w-5 h-5 text-thermal-hot" />
          ) : (
            <Snowflake className="w-5 h-5 text-thermal-cool" />
          )}
        </motion.div>
      </motion.div>

      {/* Ground loop pipes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
        {/* Left pipe going down */}
        <motion.path
          d="M 180 180 L 180 260 Q 180 280 200 280 L 260 280 Q 280 280 280 260"
          stroke="hsl(var(--primary))"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        {/* Right pipe going up */}
        <motion.path
          d="M 280 260 L 280 180"
          stroke="hsl(var(--primary))"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        
        {/* Animated flow particles */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill={isHeating ? "hsl(var(--thermal-hot))" : "hsl(var(--thermal-cool))"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath: isHeating 
                ? "path('M 280 260 L 280 180 L 220 180 L 180 180 L 180 260 Q 180 280 200 280 L 260 280 Q 280 280 280 260')"
                : "path('M 180 180 L 180 260 Q 180 280 200 280 L 260 280 Q 280 280 280 260 L 280 180 L 220 180')"
            }}
          />
        ))}
      </svg>

      {/* Pipe to house */}
      <motion.div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-1 h-12 bg-primary/60"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transformOrigin: "bottom" }}
      />

      {/* Heat/cold particles going to house */}
      {isHeating ? (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          animate={{ 
            y: [160, 100],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="w-4 h-4 text-thermal-hot" />
        </motion.div>
      ) : (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          animate={{ 
            y: [100, 160],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="w-4 h-4 text-thermal-hot" />
        </motion.div>
      )}

      {/* Ground temperature label */}
      <motion.div
        className="absolute bottom-4 left-4 px-3 py-2 bg-card/90 rounded-lg shadow-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="text-xs text-muted-foreground">Ground Temp</div>
        <div className="text-lg font-bold text-secondary-foreground">50°F</div>
      </motion.div>

      {/* Mode label */}
      <motion.div
        className={`absolute top-4 right-4 px-3 py-2 rounded-lg shadow-sm ${
          isHeating ? "bg-thermal-hot/20" : "bg-thermal-cool/20"
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          {isHeating ? (
            <>
              <Flame className="w-4 h-4 text-thermal-hot" />
              <span className="text-sm font-semibold text-thermal-hot">Heating Mode</span>
            </>
          ) : (
            <>
              <Snowflake className="w-4 h-4 text-thermal-cool" />
              <span className="text-sm font-semibold text-thermal-cool">Cooling Mode</span>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default HeatPumpDiagram;
