import { motion } from "framer-motion";
import { 
  GraduationCap,
  Building2,
  Globe,
  ArrowRight,
  MapPin,
  Users,
  Zap,
  Thermometer
} from "lucide-react";
import CityDistrictDiagram from "./illustrations/CityDistrictDiagram";
import CampusNetworkDiagram from "./illustrations/CampusNetworkDiagram";

interface Chapter4ContentProps {
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
      staggerChildren: 0.15
    }
  },
  viewport: { once: true }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const caseStudies = {
  universities: [
    {
      name: "Ball State University",
      location: "Indiana, USA",
      stats: { buildings: 47, savings: "50%", capacity: "5.5 MW" },
      description: "One of the largest ground-source geothermal installations in the US, serving the entire campus."
    },
    {
      name: "West Chester University",
      location: "Pennsylvania, USA", 
      stats: { buildings: 12, savings: "40%", capacity: "2.8 MW" },
      description: "Phased implementation demonstrating how universities can transition over time."
    },
    {
      name: "Stanford University",
      location: "California, USA",
      stats: { buildings: 155, savings: "68%", capacity: "23 MW" },
      description: "District energy system replacing natural gas with ground-source heat recovery."
    }
  ],
  cities: [
    {
      name: "Boise, Idaho",
      country: "USA",
      stats: { buildings: 92, population: "230,000", years: "130+" },
      description: "The oldest geothermal district heating system in the US, operating since 1892."
    },
    {
      name: "Reykjavik",
      country: "Iceland",
      stats: { buildings: "95%", population: "130,000", years: "90+" },
      description: "Nearly all buildings heated by geothermal, making it one of the cleanest cities on Earth."
    }
  ],
  international: [
    {
      name: "Paris Basin",
      country: "France",
      stats: { homes: "250,000", depth: "1.5-2 km", temp: "60-85°C" },
      description: "One of the world's largest low-temperature geothermal systems for district heating."
    },
    {
      name: "Munich",
      country: "Germany", 
      stats: { homes: "80,000", depth: "2.5 km", temp: "95°C" },
      description: "Expanding geothermal district heating as part of the city's carbon neutrality goals."
    },
    {
      name: "Rotorua",
      country: "New Zealand",
      stats: { homes: "Direct use", depth: "Shallow", temp: "100°C+" },
      description: "Unique direct use applications including cooking, bathing, and heating in a volcanic region."
    }
  ]
};

export function Chapter4Content({ onComplete }: Chapter4ContentProps) {
  return (
    <div className="space-y-32">
      {/* Section 4.1 - University Campuses */}
      <section id="university-campuses" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            4.1 UNIVERSITY CAMPUSES
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Leading the Way in Higher Education
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Universities are ideal candidates for geothermal networks due to their large, 
            concentrated building portfolios and long-term planning horizons.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {caseStudies.universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              variants={staggerItem}
              className="content-card group"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <GraduationCap className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">{uni.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {uni.location}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{uni.description}</p>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <motion.p 
                    className="text-lg font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {uni.stats.buildings}
                  </motion.p>
                  <p className="text-[10px] text-muted-foreground">Buildings</p>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <motion.p 
                    className="text-lg font-bold text-success"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    {uni.stats.savings}
                  </motion.p>
                  <p className="text-[10px] text-muted-foreground">Savings</p>
                </div>
                <div className="p-2 bg-muted/50 rounded-lg">
                  <motion.p 
                    className="text-lg font-bold text-thermal-hot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {uni.stats.capacity}
                  </motion.p>
                  <p className="text-[10px] text-muted-foreground">Capacity</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Campus Network Diagram */}
        <motion.div {...fadeInUp} className="mt-8">
          <CampusNetworkDiagram />
        </motion.div>

        <motion.button
          onClick={() => onComplete("university-campuses")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 4.2 - City-Wide Systems */}
      <section id="city-systems" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            4.2 CITY-WIDE SYSTEMS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Scaling to Urban Districts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Urban district geothermal projects can serve thousands of buildings, 
            transforming entire neighborhoods with clean, reliable heating and cooling.
          </p>
        </motion.div>

        {/* City District Diagram */}
        <motion.div {...fadeInUp} className="mb-8">
          <CityDistrictDiagram />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.cities.map((city, i) => (
            <motion.div
              key={city.name}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="content-card overflow-hidden"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="p-3 rounded-xl bg-secondary text-secondary-foreground"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Building2 className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.country}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{city.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  className="text-center p-3 bg-muted/30 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Building2 className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{city.stats.buildings}</p>
                  <p className="text-xs text-muted-foreground">Buildings</p>
                </motion.div>
                <motion.div 
                  className="text-center p-3 bg-muted/30 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{city.stats.population}</p>
                  <p className="text-xs text-muted-foreground">Population</p>
                </motion.div>
                <motion.div 
                  className="text-center p-3 bg-muted/30 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{city.stats.years}</p>
                  <p className="text-xs text-muted-foreground">Years Active</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={() => onComplete("city-systems")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 4.3 - International Projects */}
      <section id="international-projects" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-primary/10 text-primary mb-4">
            4.3 INTERNATIONAL PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Global Success Stories
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Countries around the world are embracing geothermal energy, 
            demonstrating its versatility across different climates and geological conditions.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {caseStudies.international.map((project, i) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              className="content-card"
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-accent text-accent-foreground"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Globe className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {project.country}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-center px-4 py-2 bg-muted/30 rounded-lg">
                    <p className="text-sm font-bold text-primary">{project.stats.homes}</p>
                    <p className="text-xs text-muted-foreground">Homes</p>
                  </div>
                  <div className="text-center px-4 py-2 bg-muted/30 rounded-lg">
                    <p className="text-sm font-bold text-thermal-warm">{project.stats.depth}</p>
                    <p className="text-xs text-muted-foreground">Depth</p>
                  </div>
                  <div className="text-center px-4 py-2 bg-muted/30 rounded-lg">
                    <p className="text-sm font-bold text-thermal-hot">{project.stats.temp}</p>
                    <p className="text-xs text-muted-foreground">Temp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* World Map Visualization */}
        <motion.div 
          {...fadeInUp}
          className="mt-12 content-card overflow-hidden"
        >
          <h4 className="font-semibold mb-4">Global Geothermal Hotspots</h4>
          <div className="relative">
            <svg viewBox="0 0 800 400" className="w-full h-48 opacity-30">
              {/* Simplified world map outline */}
              <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
            </svg>
            
            {/* Animated hotspot markers */}
            {[
              { x: 120, y: 150, label: "Iceland" },
              { x: 250, y: 180, label: "France" },
              { x: 280, y: 165, label: "Germany" },
              { x: 680, y: 280, label: "New Zealand" },
              { x: 150, y: 200, label: "USA" },
            ].map((spot, i) => (
              <motion.div
                key={spot.label}
                className="absolute"
                style={{ left: `${(spot.x / 800) * 100}%`, top: `${(spot.y / 400) * 100}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <motion.div
                  className="w-4 h-4 bg-thermal-hot rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <span className="absolute left-6 top-0 text-xs font-medium whitespace-nowrap">
                  {spot.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.button
          onClick={() => onComplete("international-projects")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>
    </div>
  );
}

export default Chapter4Content;
