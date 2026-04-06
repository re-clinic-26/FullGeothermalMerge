import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import TopNavigation from "@/components/TopNavigation";
import SideNavigation from "@/components/SideNavigation";
import HeroSection from "@/components/HeroSection";
import KeyConceptsSection from "@/components/KeyConceptsSection";
import Chapter1Content from "@/components/Chapter1Content";
import Chapter2Content from "@/components/Chapter2Content";
import Chapter3Content from "@/components/Chapter3Content";
import Chapter4Content from "@/components/Chapter4Content";
import { QuizSection, chapter1Quiz, chapter2Quiz, chapter3Quiz } from "@/components/QuizSection";
import MapSection from "@/components/MapSection";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  // Refs for all sections
  const heroRef = useRef<HTMLDivElement>(null);
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);
  const chapter4Ref = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleNavigate = useCallback((id: string) => {
    // Map chapter IDs to actual section IDs
    const sectionMap: Record<string, string> = {
      hero: "hero",
      chapter1: "what-is-geothermal",
      chapter2: "building-coalition",
      chapter3: "geology-heat-flow",
      chapter4: "university-campuses",
      resources: "resources",
    };

    const targetId = sectionMap[id] || id;
    scrollToSection(targetId);
  }, [scrollToSection]);

  const handleComplete = useCallback((sectionId: string) => {
    setCompletedSections((prev) => {
      if (prev.includes(sectionId)) return prev;
      return [...prev, sectionId];
    });
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        // Key Concepts
        "key-concepts",
        // Chapter 1
        "what-is-geothermal",
        "how-heating-works",
        "district-heating",
        "geothermal-electricity",
        "benefits",
        "costs-economics",
        "quiz-1",
        // Chapter 2
        "building-coalition",
        "feasibility-studies",
        "system-design",
        "financing-ownership",
        "quiz-2",
        // Chapter 3
        "geology-heat-flow",
        "drilling-wells",
        "ground-loops",
        "heat-pumps-transfer",
        "drill-sim",
        // Chapter 4
        "university-campuses",
        "city-systems",
        "international-projects",
        "map-explore",
        // Resources
        "resources",
      ];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <TopNavigation onNavigate={handleNavigate} />
      <SideNavigation
        activeSection={activeSection}
        completedSections={completedSections}
        onNavigate={handleNavigate}
      />

      <main className="lg:pl-64">
        {/* Hero Section */}
        <div id="hero" ref={heroRef}>
          <HeroSection onStartLearning={() => handleNavigate("key-concepts")} />
        </div>

        {/* Key Concepts Section - For General Audience */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <KeyConceptsSection />
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="content-card h-64 bg-gradient-to-br from-secondary to-accent flex items-center justify-center"
                >
                  <div className="text-center text-secondary-foreground">
                    <div className="text-6xl mb-2">🌍</div>
                    <p className="text-sm opacity-80">Sustainable Energy</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-badge bg-primary/10 text-primary mb-4">
                  THE VISION
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Redefining Community Comfort
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every building requires thermal energy to provide a healthy and comfortable 
                  indoor environment. Currently, most buildings use individual heating and 
                  cooling systems powered by fossil fuels or electricity. Geothermal technology 
                  offers a cleaner, more efficient alternative by tapping into the Earth's 
                  constant temperature to heat and cool our spaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Chapter 1: Basics */}
        <div ref={chapter1Ref} className="py-24 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Chapter 1: Basics
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Understanding geothermal energy fundamentals—what it is, how it works, 
                and why it matters for our communities.
              </p>
            </motion.div>

            <Chapter1Content onComplete={handleComplete} />

            {/* Chapter 1 Quiz */}
            <div className="mt-24" id="quiz-1">
              <QuizSection
                quizId="quiz-1"
                title="Chapter 1 Quiz"
                questions={chapter1Quiz}
                onComplete={() => handleComplete("quiz-1")}
              />
            </div>
          </div>
        </div>

        {/* Chapter 2: Process */}
        <div ref={chapter2Ref} className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Chapter 2: Process
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Moving toward implementation—building coalitions, conducting studies, 
                and financing your geothermal project.
              </p>
            </motion.div>

            <Chapter2Content onComplete={handleComplete} />

            {/* Chapter 2 Quiz */}
            <div className="mt-24" id="quiz-2">
              <QuizSection
                quizId="quiz-2"
                title="Chapter 2 Quiz"
                questions={chapter2Quiz}
                onComplete={() => handleComplete("quiz-2")}
              />
            </div>
          </div>
        </div>

        {/* Chapter 3: Physical & Engineering */}
        <div ref={chapter3Ref} className="py-24 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Chapter 3: Physical & Engineering
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                The technical foundations—geology, drilling, ground loops, and 
                heat pump systems.
              </p>
            </motion.div>

            <Chapter3Content onComplete={handleComplete} />
          </div>
        </div>

        {/* Chapter 4: Case Studies */}
        <div ref={chapter4Ref} className="py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Chapter 4: Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Real-world examples of successful geothermal implementations 
                across universities, cities, and countries.
              </p>
            </motion.div>

            <Chapter4Content onComplete={handleComplete} />

            {/* Interactive Map */}
            <div className="mt-24" id="map-explore">
              <MapSection />
            </div>
          </div>
        </div>

        {/* Resources */}
        <div ref={resourcesRef} className="py-24 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <ResourcesSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-serif font-semibold text-lg">GEOTHERMAL</span>
              <span className="font-serif font-semibold text-lg text-primary">PORTAL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              An interactive learning platform for geothermal energy education.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
