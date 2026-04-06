import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Compass, 
  Wallet,
  ArrowRight, 
  Building2,
  Handshake,
  ClipboardList,
  PiggyBank,
  Landmark,
  Factory,
  Home,
  GraduationCap,
  Briefcase
} from "lucide-react";
import ProjectTimelineDiagram from "./illustrations/ProjectTimelineDiagram";
import FundingPieChart from "./illustrations/FundingPieChart";

interface Chapter2ContentProps {
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

export function Chapter2Content({ onComplete }: Chapter2ContentProps) {
  return (
    <div className="space-y-32">
      {/* Section 2.1 - Building a Coalition */}
      <section id="building-coalition" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-secondary text-secondary-foreground mb-4">
            2.1 BUILDING A COALITION
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Cooperation is Key
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Successful geothermal projects require cooperation among multiple stakeholders. 
              Strong partnerships help with planning, funding, and public support.
            </p>

            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: <Home className="w-5 h-5" />, label: "Residents" },
                { icon: <Landmark className="w-5 h-5" />, label: "Local Government" },
                { icon: <Factory className="w-5 h-5" />, label: "Utilities" },
                { icon: <Briefcase className="w-5 h-5" />, label: "Engineers" },
                { icon: <Users className="w-5 h-5" />, label: "Community Orgs" },
                { icon: <GraduationCap className="w-5 h-5" />, label: "Educators" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            {/* Coalition Network Diagram */}
            <div className="content-card">
              <svg viewBox="0 0 300 200" className="w-full h-48">
                {/* Central hub */}
                <motion.circle
                  cx="150"
                  cy="100"
                  r="30"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
                <text x="150" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                  PROJECT
                </text>

                {/* Stakeholder nodes */}
                {[
                  { x: 60, y: 50, label: "Gov" },
                  { x: 240, y: 50, label: "Utility" },
                  { x: 60, y: 150, label: "Residents" },
                  { x: 240, y: 150, label: "Engineers" },
                  { x: 150, y: 30, label: "Orgs" },
                  { x: 150, y: 170, label: "Business" },
                ].map((node, i) => (
                  <g key={node.label}>
                    <motion.line
                      x1="150"
                      y1="100"
                      x2={node.x}
                      y2={node.y}
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="20"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    />
                    <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="8" fill="currentColor">
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Building connections across stakeholder groups
              </p>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("building-coalition")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 2.2 - Feasibility Studies */}
      <section id="feasibility-studies" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-secondary text-secondary-foreground mb-4">
            2.2 FEASIBILITY STUDIES
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Analyzing Project Viability
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Engineers analyze multiple factors to determine whether geothermal is 
              practical for a specific location.
            </p>

            <motion.div 
              className="space-y-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: <Search />, title: "Geology", desc: "Underground rock formations and heat availability" },
                { icon: <Building2 />, title: "Energy Demand", desc: "Current and projected heating/cooling needs" },
                { icon: <ClipboardList />, title: "Infrastructure", desc: "Existing pipes, electrical systems, buildings" },
                { icon: <Wallet />, title: "Cost Estimates", desc: "Initial investment and long-term projections" },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border"
                  whileHover={{ x: 8, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-secondary text-secondary-foreground"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            <ProjectTimelineDiagram />
            <div className="content-card bg-gradient-to-br from-secondary/20 to-secondary/5">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-secondary-foreground" />
                Feasibility Checklist
              </h4>
              <div className="space-y-2">
                {[
                  "Site geology assessment complete",
                  "Heat demand analysis performed",
                  "Existing infrastructure mapped",
                  "Cost-benefit analysis prepared",
                  "Environmental impact reviewed",
                  "Stakeholder input gathered",
                ].map((item, i) => (
                  <motion.div 
                    key={item}
                    className="flex items-center gap-3 p-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <motion.div 
                      className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "hsl(var(--primary))" }}
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      />
                    </motion.div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("feasibility-studies")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 2.3 - System Design */}
      <section id="system-design" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-secondary text-secondary-foreground mb-4">
            2.3 SYSTEM DESIGN
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Engineering the Solution
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designing a geothermal system requires careful consideration of 
              multiple engineering factors.
            </p>

            <div className="content-card">
              <h4 className="font-semibold mb-4">Design Components</h4>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {[
                  "Pipe Layout",
                  "Heat Pump Selection",
                  "Network Sizing",
                  "Efficiency Planning",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="p-3 bg-muted/50 rounded-lg text-center text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            {/* System Design Diagram */}
            <div className="content-card overflow-hidden">
              <svg viewBox="0 0 300 180" className="w-full h-44">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="300" height="180" fill="url(#grid)" />

                {/* Buildings */}
                {[50, 150, 250].map((x, i) => (
                  <motion.g key={x}>
                    <motion.rect
                      x={x - 20}
                      y={30}
                      width="40"
                      height="50"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      style={{ transformOrigin: `${x}px 80px` }}
                    />
                    <rect x={x - 10} y={50} width="8" height="10" fill="hsl(var(--primary) / 0.3)" />
                    <rect x={x + 2} y={50} width="8" height="10" fill="hsl(var(--primary) / 0.3)" />
                  </motion.g>
                ))}

                {/* Underground pipes */}
                <motion.path
                  d="M 30 100 L 270 100 M 50 100 L 50 80 M 150 100 L 150 80 M 250 100 L 250 80"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Ground loops */}
                {[50, 150, 250].map((x, i) => (
                  <motion.ellipse
                    key={x}
                    cx={x}
                    cy={140}
                    rx="25"
                    ry="15"
                    fill="none"
                    stroke="hsl(var(--thermal-warm))"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.8 }}
                  />
                ))}

                {/* Flow particles */}
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ cx: 30, cy: 100 }}
                    animate={{ cx: [30, 270] }}
                    transition={{
                      duration: 3,
                      delay: i * 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </svg>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Network design connects multiple buildings efficiently
              </p>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("system-design")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 2.4 - Financing & Ownership */}
      <section id="financing-ownership" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-secondary text-secondary-foreground mb-4">
            2.4 FINANCING & OWNERSHIP MODELS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Funding Your Project
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Projects can be funded through various models. Different approaches 
              impact affordability and long-term sustainability.
            </p>

            <motion.div 
              className="space-y-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: <Factory />, title: "Utility-Owned", desc: "Traditional utility funds and operates the system" },
                { icon: <Landmark />, title: "Government-Funded", desc: "Public investment for community benefit" },
                { icon: <Handshake />, title: "Public-Private Partnership", desc: "Shared risk and reward model" },
                { icon: <Users />, title: "Community Ownership", desc: "Residents own and govern the system" },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border cursor-pointer"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-accent text-accent-foreground"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            <FundingPieChart />
            <motion.div 
              className="p-4 bg-card rounded-lg border border-success/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-success font-medium">
                💡 Tip: Combining multiple funding sources often creates the most 
                sustainable project financing.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => onComplete("financing-ownership")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>
    </div>
  );
}

export default Chapter2Content;
