import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  Home,
  Users,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";

interface Chapter3ContentProps {
  onComplete: (sectionId: string) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface ResourceCardProps {
  title?: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
  type?: "doc" | "video" | "slides" | "pdf";
}

function ResourceCard({ title, description, linkUrl, linkLabel, type = "doc" }: ResourceCardProps) {
  const iconMap = {
    doc: <FileText className="w-5 h-5 text-primary" />,
    video: <Video className="w-5 h-5 text-primary" />,
    slides: <BookOpen className="w-5 h-5 text-primary" />,
    pdf: <FileText className="w-5 h-5 text-thermal-hot" />,
  };

  return (
    <motion.div
      className="content-card flex flex-col sm:flex-row gap-4 items-start"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-medium text-primary transition-colors"
      >
        {iconMap[type]}
        <span>{linkLabel}</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}

export function Chapter3Content({ onComplete }: Chapter3ContentProps) {
  return (
    <div className="space-y-32">
      {/* Section 3.1 - Site Selection */}
      <section id="site-selection" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-accent text-accent-foreground mb-4">
            3.1 A FIRST LOOK
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Site Selection
          </h2>
          <p className="text-base italic text-muted-foreground mb-6">
            Key Questions: <em>What makes a good site for geothermal energy?</em>
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="content-card bg-accent/30 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Geothermal networks have many nodes: buildings that connect to the network. What are some potential
            places that are good sites for connection? Get familiar with some of the key features of good nodes.
            This will help you as you reach out to new potential users (whether households, commercial buildings,
            civic buildings, or industry). While you are likely to work with an engineering consultant to undertake
            a detailed study, it is helpful to understand the landscape of possibility in your town. Some of these
            buildings might even join your coalition and become organizers!
          </p>
        </motion.div>

        <div className="space-y-4">
          <ResourceCard
            description='Look at this brief presentation on Consideration for Site Selection.'
            linkUrl="https://docs.google.com/presentation/d/1K3k5H9q8KZG9vY5Q7R6xW0sFjZh8NvBm/edit"
            linkLabel="Considerations…"
            type="slides"
          />
          <ResourceCard
            description="A general list of considerations for what makes a good site for geothermal district energy is available here from TEN."
            linkUrl="https://docs.google.com/document/d/1fV8K2t6E9kB9aFbXtN2v5Lr3X7zJw7kR/edit"
            linkLabel="Screening Site…"
            type="doc"
          />
          <ResourceCard
            description='If you are located in Massachusetts, this short five-page document called "MA Geothermal Network Site & Design Considerations" from HEET goes into more detail about the factors you will need to consider. There may be other equivalent worksheets for other states.'
            linkUrl="https://drive.google.com/file/d/1xYkz7RnG5mF2H8pVq3J6wK4bN9cL0tA/view"
            linkLabel="MA Geotherm…"
            type="pdf"
          />
          <ResourceCard
            description="You will also want to understand the broader geological assets in your region. Review this short explainer to understand some of the analyses the engineering consultant may undertake on behalf of a project."
            linkUrl="https://docs.google.com/document/d/1gH7kL3mN5oP2qR8sT4uV6wX9yA1bC3d/edit"
            linkLabel="Understanding…"
            type="doc"
          />
        </div>

        {/* Site Selection SVG Visualization */}
        <motion.div {...fadeInUp} className="mt-8">
          <div className="content-card overflow-hidden">
            <h4 className="font-semibold mb-2 text-center">What Makes a Good Geothermal Site?</h4>
            <p className="text-xs text-muted-foreground text-center mb-4">Key factors for evaluating potential network nodes</p>
            <svg viewBox="0 0 400 220" className="w-full h-48">
              {/* Central building */}
              <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                <rect x="170" y="80" width="60" height="50" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
                <polygon points="170,80 200,55 230,80" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                <text x="200" y="112" textAnchor="middle" fontSize="8" fontWeight="600" fill="hsl(var(--foreground))">Building</text>
              </motion.g>

              {/* Factor nodes */}
              {[
                { x: 60, y: 50, label: "Geology", desc: "Suitable soil & rock", icon: "🪨" },
                { x: 340, y: 50, label: "Density", desc: "Clustered buildings", icon: "🏘️" },
                { x: 60, y: 170, label: "Access", desc: "Rights of way", icon: "🛤️" },
                { x: 340, y: 170, label: "Demand", desc: "Heating/cooling load", icon: "🌡️" },
                { x: 200, y: 190, label: "Infrastructure", desc: "Existing utilities", icon: "⚡" },
              ].map((f, i) => (
                <motion.g
                  key={f.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: "spring" }}
                >
                  <motion.line
                    x1={f.x} y1={f.y} x2={200} y2={105}
                    stroke="hsl(var(--primary) / 0.25)"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  />
                  <circle cx={f.x} cy={f.y} r="24" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" />
                  <text x={f.x} y={f.y - 4} textAnchor="middle" fontSize="12">{f.icon}</text>
                  <text x={f.x} y={f.y + 10} textAnchor="middle" fontSize="7" fontWeight="600" fill="hsl(var(--foreground))">{f.label}</text>
                </motion.g>
              ))}
            </svg>
          </div>
        </motion.div>

        <motion.button
          onClick={() => onComplete("site-selection")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 3.2 - Scoping Studies */}
      <section id="scoping-studies" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-accent text-accent-foreground mb-4">
            3.2 UNDERSTAND
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Scoping Studies
          </h2>
          <p className="text-base italic text-muted-foreground mb-6">
            Key Questions: <em>What will a system in our community potentially look like?</em>
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="content-card bg-accent/30 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            The coalition will seek to understand the possible contours of a geothermal system in the community.
            You will likely work with an engineering consultant on a <em>scoping study</em>. You will want to be
            familiar with some key components of a scoping study and what kinds of questions it can help answer.
          </p>
        </motion.div>

        <div className="space-y-4">
          <ResourceCard
            description="You can read a 2022 sample scoping study from a project in Ithaca, New York."
            linkUrl="https://drive.google.com/file/d/1abc123sample/view"
            linkLabel="Sample Scopin…"
            type="pdf"
          />
          <ResourceCard
            description="Another 2022 sample scoping study describes a project at the Dean Vocational Technical High School in Holyoke, Massachusetts."
            linkUrl="https://drive.google.com/file/d/1def456sample/view"
            linkLabel="EggGeo_Holyo…"
            type="doc"
          />
          <ResourceCard
            description="(optional) Watch this 30-minute video on the Massachusetts DEP well database that could potentially include useful resources for a study."
            linkUrl="https://www.youtube.com/watch?v=example"
            linkLabel="DEMO MassDE…"
            type="video"
          />
        </div>

        {/* Scoping study process visualization */}
        <motion.div {...fadeInUp} className="mt-8">
          <div className="content-card overflow-hidden">
            <h4 className="font-semibold mb-2 text-center">Scoping Study Process</h4>
            <p className="text-xs text-muted-foreground text-center mb-4">Key phases of a community geothermal scoping study</p>
            <div className="flex flex-col md:flex-row gap-3">
              {[
                { step: "1", title: "Site Survey", desc: "Evaluate geology, buildings, and utility infrastructure", color: "bg-primary/10 border-primary/30" },
                { step: "2", title: "Demand Analysis", desc: "Assess heating & cooling loads across potential nodes", color: "bg-thermal-warm/10 border-thermal-warm/30" },
                { step: "3", title: "System Design", desc: "Preliminary network layout and capacity planning", color: "bg-accent/30 border-accent" },
                { step: "4", title: "Cost Estimate", desc: "Capital costs, operating expenses, and payback period", color: "bg-thermal-hot/10 border-thermal-hot/30" },
                { step: "5", title: "Report", desc: "Feasibility findings and recommendations", color: "bg-primary/10 border-primary/30" },
              ].map((phase, i) => (
                <motion.div
                  key={phase.step}
                  className={`flex-1 p-4 rounded-lg border ${phase.color} text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center mx-auto mb-2">
                    {phase.step}
                  </div>
                  <h5 className="font-semibold text-sm">{phase.title}</h5>
                  <p className="text-xs text-muted-foreground mt-1">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={() => onComplete("scoping-studies")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 3.3 - Building-Scale Retrofits */}
      <section id="building-retrofits" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-accent text-accent-foreground mb-4">
            3.3 ANSWER QUESTIONS ABOUT
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Building-Scale Retrofits
          </h2>
          <p className="text-base italic text-muted-foreground mb-6">
            Key Questions: <em>How do heating and cooling systems in a building connect to a community
            geothermal system? What actions do owners of residential, commercial, industrial or civic
            buildings need to take to be ready for a transition?</em>
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="content-card bg-accent/30 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            While district heating and cooling systems involve large community networks, there will inevitably be
            specific retrofits that take place at each building that connects to the network. What are those changes,
            what equipment needs to be installed, and how does it all work for a home or business?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This set of resources walks you through some of the considerations <strong>at the building level</strong> for
            the implementation of district heating and cooling that makes use of geothermal resources. Many homeowners
            are likely to have questions about this topic; build a list of frequently asked questions, and develop a
            set of answers from the coalition.
          </p>
        </motion.div>

        <div className="space-y-4">
          <ResourceCard
            description="This fact sheet from VCTN describes the types of HVAC systems that work with a district energy network."
            linkUrl="https://example.com/vctn-factsheet"
            linkLabel="HVAC Fact Sheet"
            type="doc"
          />
          <ResourceCard
            description="Review common FAQ topics that homeowners ask about connecting to a geothermal network, including costs, disruption, and compatibility."
            linkUrl="https://example.com/homeowner-faq"
            linkLabel="Homeowner FAQ"
            type="doc"
          />
        </div>

        {/* Building retrofit visualization */}
        <motion.div {...fadeInUp} className="mt-8">
          <div className="content-card overflow-hidden">
            <h4 className="font-semibold mb-2 text-center">Building Connection to District Network</h4>
            <p className="text-xs text-muted-foreground text-center mb-4">How individual buildings interface with a geothermal network</p>
            <svg viewBox="0 0 400 240" className="w-full h-52">
              {/* Underground pipe */}
              <motion.rect
                x="0" y="190" width="400" height="50" rx="0"
                fill="hsl(var(--muted) / 0.5)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <motion.line
                x1="0" y1="205" x2="400" y2="205"
                stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              <text x="200" y="230" textAnchor="middle" fontSize="8" fill="hsl(var(--muted-foreground))">District Geothermal Network Main</text>

              {/* Buildings with connections */}
              {[
                { x: 60, label: "House", w: 50, h: 50 },
                { x: 175, label: "Office", w: 60, h: 65 },
                { x: 310, label: "School", w: 55, h: 55 },
              ].map((b, i) => (
                <motion.g
                  key={b.label}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  {/* Building */}
                  <rect x={b.x} y={140 - b.h} width={b.w} height={b.h} rx="3"
                    fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                  <text x={b.x + b.w / 2} y={140 - b.h / 2 + 3} textAnchor="middle" fontSize="8" fontWeight="500" fill="hsl(var(--foreground))">{b.label}</text>

                  {/* Heat exchanger box */}
                  <rect x={b.x + b.w / 2 - 10} y="145" width="20" height="14" rx="2"
                    fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth="1" />
                  <text x={b.x + b.w / 2} y="155" textAnchor="middle" fontSize="5" fill="hsl(var(--primary))">HX</text>

                  {/* Vertical connector to building */}
                  <motion.line
                    x1={b.x + b.w / 2} y1="140" x2={b.x + b.w / 2} y2="145"
                    stroke="hsl(var(--primary) / 0.5)" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                  />
                  {/* Vertical connector to main */}
                  <motion.line
                    x1={b.x + b.w / 2} y1="159" x2={b.x + b.w / 2} y2="205"
                    stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                  />

                  {/* Flow particles */}
                  {[0, 1].map(p => (
                    <motion.circle
                      key={`${b.label}-${p}`}
                      r="3"
                      fill="hsl(var(--thermal-hot))"
                      animate={{ cy: [205, 155, 205], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, delay: i * 0.5 + p * 1.5, repeat: Infinity }}
                      cx={b.x + b.w / 2}
                    />
                  ))}
                </motion.g>
              ))}

              {/* Labels */}
              <text x="200" y="175" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">Heat Exchangers</text>
            </svg>
          </div>
        </motion.div>

        <motion.button
          onClick={() => onComplete("building-retrofits")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Section 3.4 - Engagement is Critical */}
      <section id="engagement" className="scroll-mt-24">
        <motion.div {...fadeInUp}>
          <div className="section-badge bg-accent text-accent-foreground mb-4">
            3.4 ENGAGEMENT IS CRITICAL
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Community Engagement
          </h2>
          <p className="text-base italic text-muted-foreground mb-6">
            Key Questions: <em>What is community engagement and why is it crucial for any infrastructure project?
            What are some effective tools for community engagement?</em>
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="content-card bg-accent/30 mb-8 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Community engagement—reaching out to understand the needs, hopes and aspirations of the broader
            community, including those who feel very affected by a project, and those who could potentially benefit
            of be impacted by it—is a key part of a planning process. Community members can help point out flaws,
            come up with new ideas, and otherwise improve the project. More importantly, if someone will be
            impacted by the project, it's important they have a chance to have a say—or even be persuaded to
            become a member of your coalition to help advance the project and convince others.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Be sure to pursue outreach through multiple channels (in person, digital, physical paper) and be sure to
            develop a broad understanding of who is in the community. As you conduct engagement, you will need
            to tailor your message according to the audience. Use language and methods of outreach that are
            accessible and inclusive. Treat every conversation as a chance to listen and learn.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="content-card bg-primary/5 border-primary/20 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Remember that one of the key stakeholder groups consists of decision-makers in the town or city
            government. Building buy-in from decision makers and community leaders. Remind yourself of the
            decision timeline for municipalities. Community groups. Potential users.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Consider other <strong>parallel energy or infrastructure projects</strong> that can reduce cost or increase impact in
            combination with the geothermal energy project. Smaller projects can be combined into a larger project
            through funding applications as well!
          </p>
        </motion.div>

        <div className="space-y-4">
          <ResourceCard
            description="Action: Develop a community engagement plan for your coalition. See the sample framework here. What will work for your community? What needs to be adapted?"
            linkUrl="https://drive.google.com/file/d/engagement-framework/view"
            linkLabel="Draft Reccome…"
            type="pdf"
          />
          <ResourceCard
            description="Read about this toolkit from the Rocky Mountain Institute on electrification. What are the steps in this process that can help you in a geothermal transition?"
            linkUrl="https://rmi.org/insight/community-electrification-toolkit"
            linkLabel="RMI Communit…"
            type="doc"
          />
          <ResourceCard
            description="Action: Check the ladder of engagement again: are you hitting all of these groups in the community? Who else is important to reach out to that might not be on the list?"
            linkUrl="https://rmi.org/insight/community-electrification-toolkit"
            linkLabel="RMI Communit…"
            type="doc"
          />
          <ResourceCard
            description="Consult the sample stakeholder engagement document from the MIT Renewable Energy Clinic. Could some parts of this be useful in your outreach?"
            linkUrl="https://drive.google.com/file/d/mit-renewable/view"
            linkLabel="MIT Renewabl…"
            type="pdf"
          />
        </div>

        {/* Engagement ladder visualization */}
        <motion.div {...fadeInUp} className="mt-8">
          <div className="content-card overflow-hidden">
            <h4 className="font-semibold mb-2 text-center">Ladder of Community Engagement</h4>
            <p className="text-xs text-muted-foreground text-center mb-4">Building deeper community involvement at every level</p>
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {[
                { level: "Empower", desc: "Community-led decision making", width: "100%", color: "bg-primary text-primary-foreground" },
                { level: "Collaborate", desc: "Partner in each aspect of the decision", width: "88%", color: "bg-primary/80 text-primary-foreground" },
                { level: "Involve", desc: "Work directly with the public", width: "76%", color: "bg-primary/60 text-primary-foreground" },
                { level: "Consult", desc: "Obtain public feedback", width: "64%", color: "bg-primary/40" },
                { level: "Inform", desc: "Provide balanced information", width: "52%", color: "bg-primary/20" },
              ].reverse().map((step, i) => (
                <motion.div
                  key={step.level}
                  className={`px-4 py-3 rounded-lg ${step.color} flex justify-between items-center`}
                  style={{ width: step.width }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <span className="font-semibold text-sm">{step.level}</span>
                  <span className="text-xs opacity-80">{step.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={() => onComplete("engagement")}
          className="mt-6 text-primary font-medium hover:underline flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Mark as Complete <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>
    </div>
  );
}

export default Chapter3Content;
