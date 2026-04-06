import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Thermometer, 
  Home, 
  Building2, 
  Zap, 
  Heart, 
  DollarSign,
  ArrowRight,
  Snowflake,
  Sun,
  Wind,
  Factory,
  Users,
  Shield,
  TrendingDown
} from "lucide-react";
import HeatPumpDiagram from "./illustrations/HeatPumpDiagram";
import HeatFlowDiagram from "./illustrations/HeatFlowDiagram";
import ThermalNetworkDiagram from "./illustrations/ThermalNetworkDiagram";

interface Chapter1ContentProps {
  onComplete: (sectionId: string) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export function Chapter1Content({ onComplete }: Chapter1ContentProps) {
  const [heatPumpMode, setHeatPumpMode] = useState<"heating" | "cooling">("heating");

  return (
    <div className="space-y-32">
      {/* Section 1.1 - What is Geothermal Energy? */}
      <section id="what-is-geothermal" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.1 WHAT IS GEOTHERMAL ENERGY?
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Heat Stored Inside the Earth
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Geothermal energy is heat stored inside the Earth. This heat comes from 
              <span className="text-primary font-medium"> radioactive decay</span> and 
              leftover heat from Earth's formation billions of years ago.
            </p>
            <p className="text-muted-foreground">
              It can be used directly for heating or converted into electricity. 
              Geothermal is renewable, reliable, and produces very low emissions.
            </p>

            <motion.div 
              className="bg-gradient-to-br from-thermal-hot/10 to-thermal-warm/10 p-6 rounded-xl border border-thermal-warm/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Thermometer className="w-6 h-6 text-thermal-hot" />
                </motion.div>
                <span className="font-semibold">Earth's Core Temperature</span>
              </div>
              <p className="text-3xl font-bold text-thermal-hot">~5,400°C</p>
              <p className="text-sm text-muted-foreground mt-1">
                As hot as the surface of the sun!
              </p>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <HeatFlowDiagram />
            <p className="text-sm text-muted-foreground text-center mt-4">
              Heat naturally flows from the Earth's hot interior toward the cooler surface
            </p>
          </motion.div>
        </div>

        <motion.div 
          {...fadeInUp}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Zap className="w-5 h-5" />, label: "Renewable", desc: "Constantly replenished" },
            { icon: <Shield className="w-5 h-5" />, label: "Reliable", desc: "24/7 availability" },
            { icon: <Wind className="w-5 h-5" />, label: "Clean", desc: "Low emissions" },
            { icon: <TrendingDown className="w-5 h-5" />, label: "Stable", desc: "Predictable costs" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="content-card text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="font-semibold">{item.label}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => onComplete("what-is-geothermal")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 1.2 - How Geothermal Heating Works */}
      <section id="how-heating-works" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.2 HOW GEOTHERMAL HEATING WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ground-Source Heat Pumps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buildings use <span className="text-primary font-medium">ground-source heat pumps</span> that 
              exchange heat with the Earth through underground pipes.
            </p>

            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-3 p-4 rounded-lg bg-thermal-cool/10 border border-thermal-cool/20"
                whileHover={{ scale: 1.02 }}
              >
                <Snowflake className="w-5 h-5 text-thermal-cool mt-1" />
                <div>
                  <h4 className="font-semibold">Winter Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Heat is pulled from the ground into buildings
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-4 rounded-lg bg-thermal-hot/10 border border-thermal-hot/20"
                whileHover={{ scale: 1.02 }}
              >
                <Sun className="w-5 h-5 text-thermal-hot mt-1" />
                <div>
                  <h4 className="font-semibold">Summer Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Excess heat is sent back into the ground for cooling
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-2 mt-4">
              <motion.button
                onClick={() => setHeatPumpMode("heating")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  heatPumpMode === "heating" 
                    ? "bg-thermal-hot text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Snowflake className="w-4 h-4 inline mr-2" />
                Winter (Heating)
              </motion.button>
              <motion.button
                onClick={() => setHeatPumpMode("cooling")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  heatPumpMode === "cooling" 
                    ? "bg-thermal-cool text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sun className="w-4 h-4 inline mr-2" />
                Summer (Cooling)
              </motion.button>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <HeatPumpDiagram mode={heatPumpMode} />
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("how-heating-works")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 1.3 - District Heating & Cooling */}
      <section id="district-heating" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.3 DISTRICT HEATING & COOLING
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Thermal Energy Networks
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of individual systems, entire neighborhoods can share a 
              <span className="text-primary font-medium"> heating & cooling network</span>.
            </p>

            <motion.div 
              className="space-y-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: <Factory />, title: "Central Plants", desc: "Distribute hot and cold water through underground pipes" },
                { icon: <Building2 />, title: "Improved Efficiency", desc: "Shared infrastructure reduces waste" },
                { icon: <DollarSign />, title: "Lower Costs", desc: "Economies of scale benefit everyone" },
                { icon: <Wind />, title: "Reduced Emissions", desc: "Cleaner than individual fossil fuel systems" },
              ].map((item) => (
                <motion.div 
                  key={item.title}
                  variants={staggerItem}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card border"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <ThermalNetworkDiagram />
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("district-heating")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 1.4 - Geothermal Electricity */}
      <section id="geothermal-electricity" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.4 GEOTHERMAL ELECTRICITY
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Generating Power from Earth's Heat
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deep geothermal systems use underground <span className="text-primary font-medium">steam and hot water</span> to 
              spin turbines and generate electricity.
            </p>

            <motion.div 
              className="content-card bg-gradient-to-br from-secondary/50 to-accent/50"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Enhanced Geothermal Systems (EGS)
              </h4>
              <p className="text-sm text-muted-foreground">
                EGS technology drills deeper into hot rock, expanding geothermal electricity 
                to more locations beyond traditional volcanic regions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div 
                className="text-center p-4 bg-card rounded-xl border"
                whileHover={{ y: -5 }}
              >
                <motion.p 
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  90%+
                </motion.p>
                <p className="text-xs text-muted-foreground">Capacity Factor</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-card rounded-xl border"
                whileHover={{ y: -5 }}
              >
                <motion.p 
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  24/7
                </motion.p>
                <p className="text-xs text-muted-foreground">Baseload Power</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Animated Power Plant Diagram */}
            <div className="content-card bg-gradient-to-b from-muted to-card overflow-hidden">
              <svg viewBox="0 0 300 200" className="w-full h-48">
                {/* Ground layers */}
                <rect x="0" y="120" width="300" height="80" fill="hsl(var(--thermal-warm) / 0.3)" />
                <rect x="0" y="160" width="300" height="40" fill="hsl(var(--thermal-hot) / 0.3)" />
                
                {/* Power plant building */}
                <rect x="100" y="60" width="100" height="60" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                
                {/* Turbine */}
                <motion.circle
                  cx="150"
                  cy="90"
                  r="20"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 90px" }}
                />
                
                {/* Well pipes */}
                <line x1="120" y1="120" x2="120" y2="180" stroke="hsl(var(--thermal-hot))" strokeWidth="4" />
                <line x1="180" y1="120" x2="180" y2="180" stroke="hsl(var(--thermal-cool))" strokeWidth="4" />
                
                {/* Steam particles */}
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill="hsl(var(--thermal-hot))"
                    initial={{ cx: 120, cy: 180, opacity: 0 }}
                    animate={{
                      cy: [180, 120, 90],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.6,
                      repeat: Infinity,
                    }}
                  />
                ))}
                
                {/* Power lines */}
                <line x1="200" y1="70" x2="280" y2="40" stroke="hsl(var(--primary))" strokeWidth="2" />
                <motion.circle
                  cx="280"
                  cy="40"
                  r="6"
                  fill="hsl(var(--primary))"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </svg>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Steam rises from deep wells to spin turbines
              </p>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("geothermal-electricity")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 1.5 - Benefits of Geothermal */}
      <section id="benefits" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.5 BENEFITS OF GEOTHERMAL ENERGY
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Why Choose Geothermal?
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { icon: <DollarSign />, title: "Lower Energy Bills", desc: "Reduce heating and cooling costs by 30-60%" },
            { icon: <Wind />, title: "Reduced Air Pollution", desc: "No on-site combustion means cleaner air" },
            { icon: <TrendingDown />, title: "Fewer Carbon Emissions", desc: "Minimal greenhouse gas output" },
            { icon: <Shield />, title: "Energy Price Stability", desc: "Protected from fossil fuel price volatility" },
            { icon: <Users />, title: "Local Job Creation", desc: "Installation and maintenance jobs stay local" },
            { icon: <Heart />, title: "Health Benefits", desc: "Better indoor air quality for occupants" },
          ].map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="content-card group"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                {benefit.icon}
              </motion.div>
              <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => onComplete("benefits")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 1.6 - Costs & Economics */}
      <section id="costs-economics" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            1.6 COSTS & ECONOMICS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Investment & Returns
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              High upfront costs come from drilling and infrastructure, but 
              <span className="text-primary font-medium"> operating costs are very low</span>.
            </p>

            <p className="text-muted-foreground">
              Over time, geothermal systems save money and protect users from volatile 
              fossil fuel prices.
            </p>

            {/* Cost comparison chart */}
            <div className="content-card">
              <h4 className="font-semibold mb-4">Cost Comparison Over 20 Years</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Traditional HVAC</span>
                    <span className="text-muted-foreground">Higher long-term</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-destructive/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Geothermal System</span>
                    <span className="text-muted-foreground">Lower long-term</span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-success"
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="content-card bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Financial Benefits
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Payback Period", value: "5-10 years" },
                  { label: "Energy Savings", value: "30-60%" },
                  { label: "System Lifespan", value: "25+ years" },
                  { label: "Tax Credits Available", value: "Up to 30%" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    className="flex justify-between items-center p-3 bg-card/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-success">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("costs-economics")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>
    </div>
  );
}

export default Chapter1Content;
