import { motion } from "framer-motion";
import { FileText, Video, BarChart3, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Moving Heat Fundamentals",
    description: "A comprehensive leaflet exploring how thermal energy is captured, moved, and repurposed.",
    type: "leaflet",
    icon: FileText,
    link: "#",
    linkText: "Read Leaflet",
  },
  {
    title: "The Science of Thermodynamics",
    description: "An exploration of conduction, convection, and radiation principles.",
    type: "video",
    icon: Video,
    link: "#",
    linkText: "Watch Video",
  },
  {
    title: "Water-Source Heat Pumps",
    description: "Technical details on how wastewater systems serve as continuous thermal energy sources.",
    type: "factsheet",
    icon: FileText,
    link: "#",
    linkText: "View Fact Sheet",
  },
  {
    title: "District Heating Systems",
    description: "A look at the community benefits of centralized energy networks.",
    type: "video",
    icon: Video,
    link: "#",
    linkText: "Watch Overview",
  },
  {
    title: "TENs Opportunities Chart",
    description: "Interactive tool to identify thermal energy network opportunities in your community.",
    type: "tool",
    icon: BarChart3,
    link: "#",
    linkText: "Download Chart",
  },
  {
    title: "Ladder of Engagement",
    description: "Framework to guide supporters from passive interest to active leadership.",
    type: "presentation",
    icon: FileText,
    link: "#",
    linkText: "View Presentation",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Project Resources
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of foundational research, technical studies, and community planning 
          documents to support your geothermal learning journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.a
            key={index}
            href={resource.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="content-card group hover:shadow-md transition-shadow"
          >
            <div className="h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
              <resource.icon className="w-12 h-12 text-muted-foreground/50" />
            </div>
            
            <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {resource.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              {resource.description}
            </p>
            
            <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              {resource.linkText}
              <ExternalLink className="w-4 h-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default ResourcesSection;
