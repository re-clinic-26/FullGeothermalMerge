import { motion } from "framer-motion";
import { 
  Thermometer, 
  Home, 
  Leaf, 
  DollarSign, 
  Clock,
  ArrowDown,
  ArrowUp,
  Snowflake,
  Sun,
  Zap,
  ExternalLink
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Key Concept 1: The Ground is a Battery
function GroundBatteryVisualization() {
  return (
    <div className="relative h-64 bg-gradient-to-b from-thermal-cool/20 to-thermal-warm/20 rounded-xl overflow-hidden">
      {/* Sky */}
      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center gap-8">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <Snowflake className="w-6 h-6 text-thermal-cool" />
          <span className="text-sm font-medium">Winter: 20°F</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="flex items-center gap-2"
        >
          <Sun className="w-6 h-6 text-thermal-hot" />
          <span className="text-sm font-medium">Summer: 95°F</span>
        </motion.div>
      </div>

      {/* Ground surface line */}
      <div className="absolute top-20 left-0 right-0 h-1 bg-secondary" />
      
      {/* Underground - stable temperature zone */}
      <div className="absolute top-20 left-0 right-0 bottom-0 bg-gradient-to-b from-secondary/60 to-secondary">
        {/* Temperature stability indicator */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 rounded-xl p-4 shadow-lg border-2 border-primary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Thermometer className="w-8 h-8 mx-auto text-thermal-warm mb-2" />
            </motion.div>
            <p className="text-3xl font-bold text-primary">50-55°F</p>
            <p className="text-sm text-muted-foreground">Year-Round</p>
          </div>
        </motion.div>

        {/* Depth indicator */}
        <div className="absolute left-4 top-4 bottom-4 flex flex-col justify-between text-xs text-muted-foreground">
          <span>Surface</span>
          <span>6 ft</span>
          <span>10+ ft</span>
        </div>
      </div>

      {/* Battery metaphor label */}
      <motion.div
        className="absolute bottom-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        🔋 Earth = Thermal Battery
      </motion.div>
    </div>
  );
}

// Key Concept 2: Heat Pump as a Refrigerator in Reverse
function RefrigeratorAnalogy() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Refrigerator */}
      <motion.div 
        className="content-card text-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-32 bg-gradient-to-b from-thermal-cool/20 to-thermal-cool/40 rounded-lg mb-3 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            🧊
          </motion.div>
          <motion.div
            className="absolute -right-2 top-1/2 -translate-y-1/2"
            animate={{ x: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-6 h-6 text-thermal-hot rotate-90" />
          </motion.div>
        </div>
        <h4 className="font-semibold">Refrigerator</h4>
        <p className="text-xs text-muted-foreground">
          Moves heat <span className="text-thermal-hot font-medium">OUT</span> of the box
        </p>
      </motion.div>

      {/* Heat Pump */}
      <motion.div 
        className="content-card text-center"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-32 bg-gradient-to-b from-thermal-warm/20 to-thermal-warm/40 rounded-lg mb-3 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            🏠
          </motion.div>
          <motion.div
            className="absolute -left-2 top-1/2 -translate-y-1/2"
            animate={{ x: [0, -10, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-6 h-6 text-thermal-hot -rotate-90" />
          </motion.div>
        </div>
        <h4 className="font-semibold">Heat Pump</h4>
        <p className="text-xs text-muted-foreground">
          Moves heat <span className="text-thermal-hot font-medium">INTO</span> your home
        </p>
      </motion.div>
    </div>
  );
}

// Key Concept 3: Efficiency Comparison
function EfficiencyComparison() {
  const systems = [
    { name: "Gas Furnace", efficiency: 95, color: "bg-muted", icon: "🔥" },
    { name: "Electric Heater", efficiency: 100, color: "bg-muted", icon: "⚡" },
    { name: "Heat Pump", efficiency: 400, color: "bg-primary", icon: "🌍", highlight: true },
  ];

  return (
    <div className="space-y-4">
      {systems.map((system, i) => (
        <motion.div 
          key={system.name}
          className={`p-4 rounded-lg ${system.highlight ? 'bg-primary/10 border-2 border-primary' : 'bg-muted/50'}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{system.icon}</span>
              <span className="font-medium">{system.name}</span>
            </div>
            <span className={`font-bold ${system.highlight ? 'text-primary text-xl' : ''}`}>
              {system.efficiency}%
            </span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${system.highlight ? 'bg-primary' : 'bg-foreground/30'}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(system.efficiency / 4, 100)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
            />
          </div>
          {system.highlight && (
            <p className="text-xs text-primary mt-2 font-medium">
              For every 1 unit of electricity → 3-5 units of heat!
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Key Concept 4: Cost Over Time
function CostOverTimeVisualization() {
  return (
    <div className="content-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h4 className="font-semibold flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            Cost Comparison Over 20 Years
          </h4>
        </div>
      </div>
      
      <div className="relative h-48">
        <svg viewBox="0 0 400 160" className="w-full h-full">
          {/* Grid lines */}
          {[0, 1, 2, 3].map((i) => (
            <line 
              key={i} 
              x1="50" 
              y1={20 + i * 40} 
              x2="380" 
              y2={20 + i * 40} 
              stroke="hsl(var(--border))" 
              strokeDasharray="3 3" 
            />
          ))}
          
          {/* Traditional system line (steady increase) */}
          <motion.path
            d="M 50 140 Q 150 130 220 100 T 380 40"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Geothermal line (high start, then lower) */}
          <motion.path
            d="M 50 60 Q 100 65 150 80 T 380 100"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Break-even point */}
          <motion.circle
            cx="180"
            cy="85"
            r="8"
            fill="hsl(var(--success))"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          />
          
          {/* Labels */}
          <text x="55" y="155" fontSize="10" fill="hsl(var(--muted-foreground))">Year 0</text>
          <text x="200" y="155" fontSize="10" fill="hsl(var(--muted-foreground))">Year 10</text>
          <text x="360" y="155" fontSize="10" fill="hsl(var(--muted-foreground))">Year 20</text>
          
          {/* Y-axis label */}
          <text x="15" y="90" fontSize="10" fill="hsl(var(--muted-foreground))" transform="rotate(-90, 15, 90)">Total Cost</text>
        </svg>

        {/* Legend */}
        <div className="absolute top-2 right-2 space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-muted-foreground rounded" />
            <span>Traditional HVAC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-primary rounded" />
            <span>Geothermal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full" />
            <span>Break-even (~7-10 yrs)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Key Concept 5: Environmental Impact
function EnvironmentalImpact() {
  const impacts = [
    { label: "CO₂ Reduction", value: "44%", desc: "lower than gas heating", icon: <Leaf className="w-5 h-5" /> },
    { label: "Lifespan", value: "50+ yrs", desc: "for ground loops", icon: <Clock className="w-5 h-5" /> },
    { label: "Energy Source", value: "Free", desc: "Earth's natural heat", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {impacts.map((impact, i) => (
        <motion.div
          key={impact.label}
          className="content-card text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className="inline-flex p-3 rounded-full bg-success/10 text-success mb-3"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {impact.icon}
          </motion.div>
          <motion.p 
            className="text-2xl font-bold text-primary"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
          >
            {impact.value}
          </motion.p>
          <p className="text-sm font-medium">{impact.label}</p>
          <p className="text-xs text-muted-foreground">{impact.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function KeyConceptsSection() {
  const concepts = [
    {
      id: "ground-battery",
      number: "01",
      title: "The Ground is a Thermal Battery",
      description: "While air temperatures swing wildly between seasons, the ground just 6-10 feet below stays remarkably stable at 50-55°F year-round. This makes it a perfect source for heating in winter and cooling in summer.",
      visualization: <GroundBatteryVisualization />,
    },
    {
      id: "refrigerator-reverse",
      number: "02",
      title: "A Heat Pump is Like a Refrigerator—In Reverse",
      description: "Your refrigerator moves heat out of the cold box. A heat pump does the opposite—it pulls warmth from the ground (even when it's cold!) and moves it into your home. In summer, the process reverses.",
      visualization: <RefrigeratorAnalogy />,
    },
    {
      id: "efficiency",
      number: "03",
      title: "400% Efficiency? Yes, Really.",
      description: "Heat pumps don't create heat—they move it. This means for every 1 unit of electricity used, you get 3-5 units of heat energy. That's 300-500% efficient compared to traditional systems.",
      visualization: <EfficiencyComparison />,
    },
    {
      id: "cost-savings",
      number: "04",
      title: "Higher Upfront, Lower Forever",
      description: "Geothermal systems cost more to install, but operating costs are 30-60% lower. Most homeowners break even within 7-10 years, then enjoy decades of savings.",
      visualization: <CostOverTimeVisualization />,
    },
    {
      id: "environment",
      number: "05",
      title: "Good for Your Wallet, Great for the Planet",
      description: "Geothermal systems dramatically reduce carbon emissions, last for decades, and tap into the Earth's free, renewable heat. It's one of the cleanest ways to heat and cool buildings.",
      visualization: <EnvironmentalImpact />,
    },
  ];

  return (
    <section id="key-concepts" className="scroll-mt-24 py-16">
      <motion.div {...fadeInUp} className="text-center mb-12">
        <div className="section-badge bg-primary/10 text-primary mb-4 inline-block">
          FUNDAMENTALS
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Key Concepts Everyone Should Know
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Geothermal energy might sound complex, but the core ideas are surprisingly simple. 
          Here are five concepts that explain how it works.
        </p>
      </motion.div>

      <div className="space-y-20">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.id}
            id={concept.id}
            className="scroll-mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <motion.div 
                className={index % 2 === 1 ? 'md:col-start-2' : ''}
                {...fadeInUp}
              >
                <span className="text-6xl font-bold text-primary/10">{concept.number}</span>
                <h3 className="text-2xl font-serif font-semibold -mt-6 mb-4">
                  {concept.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.description}
                </p>
              </motion.div>
              
              <motion.div 
                className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                {concept.visualization}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sources Section */}
      <motion.div 
        {...fadeInUp}
        className="mt-16 content-card bg-muted/30"
      >
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          📚 Sources & References
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="font-medium text-muted-foreground">Scientific & Government Sources:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>U.S. Department of Energy — Geothermal Technologies Office</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>EPA — Geothermal Heat Pumps Energy Savings</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>International Energy Agency (IEA) — Geothermal Reports</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-muted-foreground">Educational Resources:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>Geothermal Rising (formerly GRC) — Educational Materials</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>NREL — Ground Source Heat Pump Research</span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                <span>Reference design: notaidven.github.io/GeoThermal-Learning-Portal</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
          <strong>AI Tools Used:</strong> Visualizations, explanations, and code generated with assistance from Claude (Anthropic). 
          Animations powered by Framer Motion. Icons from Lucide React.
        </p>
      </motion.div>
    </section>
  );
}

export default KeyConceptsSection;
