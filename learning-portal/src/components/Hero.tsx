import { motion } from 'motion/react';
import { Flame, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1766934697093-ff901db75402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMGVhcnRoJTIwbGF5ZXJzfGVufDF8fHx8MTc2OTIxMjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Earth layers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-emerald-900/60 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Flame className="w-12 h-12 text-orange-400" />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Geothermal Basics
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-blue-100 mb-6"
        >
          Understanding Heating and Cooling Energy
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto mb-10"
        >
          Learn how geothermal systems work, and discover the benefits and costs 
          for your household, your community, and the planet.
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
