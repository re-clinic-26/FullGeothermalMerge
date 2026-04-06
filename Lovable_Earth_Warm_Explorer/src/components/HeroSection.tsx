import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onStartLearning: () => void;
}

export function HeroSection({ onStartLearning }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-thermal-warm/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
        >
          Geothermal Energy: The Heat Beneath Your Feet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
        >
          To maintain a comfortable and healthy indoor environment, every home—every
          building—needs to provide heating and cooling. We use thermal energy to
          recycle the heat we already have.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={onStartLearning}
          className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg"
        >
          START LEARNING
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
