import { motion } from "framer-motion";
import { Snowflake, Flame } from "lucide-react";

export function HeatFlowDiagram() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-thermal-cool/20 via-muted to-thermal-hot/20 rounded-lg overflow-hidden">
      {/* Cold side */}
      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Snowflake className="w-10 h-10 text-thermal-cool" />
        </motion.div>
        <span className="text-sm font-medium mt-2 text-thermal-cool">Cold</span>
        <span className="text-xs text-muted-foreground">32°F</span>
      </motion.div>

      {/* Hot side */}
      <motion.div
        className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Flame className="w-10 h-10 text-thermal-hot" />
        </motion.div>
        <span className="text-sm font-medium mt-2 text-thermal-hot">Hot</span>
        <span className="text-xs text-muted-foreground">150°F</span>
      </motion.div>

      {/* Animated heat particles flowing from hot to cold */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Flow arrows */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.g key={i}>
            <motion.circle
              r="6"
              fill="url(#heatGradient)"
              initial={{ opacity: 0 }}
              animate={{
                cx: ["85%", "15%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              cy="50%"
            />
          </motion.g>
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="heatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--thermal-hot))" />
            <stop offset="100%" stopColor="hsl(var(--thermal-warm))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center label */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 px-4 py-2 rounded-full shadow-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-sm font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Heat Flow →
          </motion.span>
        </div>
      </motion.div>

      {/* Equilibrium note */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Heat flows from hot to cold until equilibrium
      </motion.div>
    </div>
  );
}

export default HeatFlowDiagram;
