import { motion } from "framer-motion";
import { BookOpen, Cog, Wrench, Building2, FileText, CheckCircle2, Lightbulb } from "lucide-react";

interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  subsections?: { id: string; label: string }[];
}

interface SideNavigationProps {
  activeSection: string;
  completedSections: string[];
  onNavigate: (id: string) => void;
}

const navSections: NavSection[] = [
  {
    id: "key-concepts",
    label: "Key Concepts",
    icon: <Lightbulb className="w-4 h-4" />,
    subsections: [
      { id: "ground-battery", label: "Ground as Battery" },
      { id: "refrigerator-reverse", label: "Heat Pump Basics" },
      { id: "efficiency", label: "400% Efficiency" },
      { id: "cost-savings", label: "Cost Over Time" },
      { id: "environment", label: "Environmental Impact" },
    ],
  },
  {
    id: "chapter1",
    label: "Ch. 1: Basics",
    icon: <BookOpen className="w-4 h-4" />,
    subsections: [
      { id: "what-is-geothermal", label: "1.1 What is Geothermal Energy?" },
      { id: "how-heating-works", label: "1.2 How Geothermal Heating Works" },
      { id: "district-heating", label: "1.3 District Heating & Cooling" },
      { id: "geothermal-electricity", label: "1.4 Geothermal Electricity" },
      { id: "benefits", label: "1.5 Benefits of Geothermal" },
      { id: "costs-economics", label: "1.6 Costs & Economics" },
      { id: "quiz-1", label: "Quiz: Chapter 1" },
    ],
  },
  {
    id: "chapter2",
    label: "Ch. 2: Process",
    icon: <Cog className="w-4 h-4" />,
    subsections: [
      { id: "building-coalition", label: "2.1 Building a Coalition" },
      { id: "feasibility-studies", label: "2.2 Feasibility Studies" },
      { id: "system-design", label: "2.3 System Design" },
      { id: "financing-ownership", label: "2.4 Financing & Ownership" },
      { id: "quiz-2", label: "Quiz: Chapter 2" },
    ],
  },
  {
    id: "chapter3",
    label: "Ch. 3: Site & Community",
    icon: <Wrench className="w-4 h-4" />,
    subsections: [
      { id: "site-selection", label: "3.1 Site Selection" },
      { id: "scoping-studies", label: "3.2 Scoping Studies" },
      { id: "building-retrofits", label: "3.3 Building Retrofits" },
      { id: "engagement", label: "3.4 Community Engagement" },
    ],
  },
  {
    id: "chapter4",
    label: "Ch. 4: Case Studies",
    icon: <Building2 className="w-4 h-4" />,
    subsections: [
      { id: "university-campuses", label: "4.1 University Campuses" },
      { id: "city-systems", label: "4.2 City-Wide Systems" },
      { id: "international-projects", label: "4.3 International Projects" },
      { id: "map-explore", label: "Interactive Map" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    icon: <FileText className="w-4 h-4" />,
  },
];

export function SideNavigation({ activeSection, completedSections, onNavigate }: SideNavigationProps) {
  return (
    <nav className="fixed left-0 top-16 bottom-0 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto hidden lg:block z-40">
      <div className="p-4 space-y-2">
        {navSections.map((section, sectionIndex) => (
          <motion.div 
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <button
              onClick={() => onNavigate(section.id)}
              className={`side-nav-item w-full text-left ${
                activeSection.startsWith(section.id) || 
                section.subsections?.some(s => activeSection === s.id)
                  ? "side-nav-item-active"
                  : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {section.icon}
              </motion.div>
              <span className="flex-1">{section.label}</span>
              {section.subsections?.every(s => completedSections.includes(s.id)) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </motion.div>
              )}
            </button>
            
            {section.subsections && (
              <motion.div
                initial={false}
                animate={{ height: "auto", opacity: 1 }}
                className="ml-6 mt-1 space-y-1 border-l border-border pl-3"
              >
                {section.subsections.map((sub, subIndex) => (
                  <motion.button
                    key={sub.id}
                    onClick={() => onNavigate(sub.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + subIndex * 0.05 }}
                    whileHover={{ x: 4 }}
                    className={`side-nav-item w-full text-left text-xs py-1.5 ${
                      activeSection === sub.id ? "side-nav-item-active" : ""
                    }`}
                  >
                    <span className="flex-1">{sub.label}</span>
                    {completedSections.includes(sub.id) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-success" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </nav>
  );
}

export default SideNavigation;
