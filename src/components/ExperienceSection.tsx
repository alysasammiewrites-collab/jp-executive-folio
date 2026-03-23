import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const experiences = [
  {
    period: "Nov 2023 – Present",
    title: "Contract Team Lead",
    company: "CyD Ingeniería",
    location: "Chile",
    highlight: "$250M+ Data Center Project",
    bullets: [
      "Lead contract management for $250M+ data center project (40MW infrastructure)",
      "Draft, negotiate, and administer EPCM and supplier contracts",
      "Identify and mitigate commercial and contractual risks across project lifecycle",
      "Monitor budgets and implement cost optimization strategies",
    ],
  },
  {
    period: "Jul 2021 – Sep 2023",
    title: "Senior Contract Administrator",
    company: "CyD Ingeniería – Mainstream Renewable Power",
    location: "Chile",
    highlight: "$100M Solar Plant",
    bullets: [
      "Managed contracts for $100M renewable energy project (105MW solar plant)",
      "Secured $24M in performance and advance payment bonds",
      "Managed 29+ contractual claims and breach cases",
      "Controlled delay damages and negotiated extension of time (EOT) claims",
    ],
  },
  {
    period: "Oct 2019 – Jul 2020",
    title: "Project Controls Engineer (PEMS)",
    company: "Bechtel – MLP-INCO Mining Project",
    location: "Chile",
    highlight: "Mining Project",
    bullets: [
      "Managed project equipment data using PEMS asset management system",
      "Supported forecasting, scheduling, and cost tracking activities",
      "Delivered reporting for project planning and execution decisions",
    ],
  },
  {
    period: "Jul 2013 – Aug 2014",
    title: "Lead Project Control Specialist",
    company: "Chevron Nigeria – Funiwa Gas Project (Offshore)",
    location: "Nigeria",
    highlight: "$3B Offshore Gas Project",
    bullets: [
      "Delivered project controls for $3B offshore gas supply project",
      "Implemented cost control frameworks (WBS, CBS, KPI, EVA)",
      "Managed change orders, forecasting, and cost estimation processes",
      "Supported FEED and Pre-FEED project phases",
    ],
  },
  {
    period: "Jan 2010 – Jan 2017",
    title: "Managing Director / Contract & Project Consultant",
    company: "J.P. Environmental Consulting & Construction",
    location: "Latin America & Caribbean",
    highlight: "$125M Project Delivered",
    bullets: [
      "Led contract strategy, procurement, and project controls across multiple projects",
      "Delivered $125M biomass power project feasibility and contract structuring",
      "Managed EPC, EPCM, BOT, and PPA contract structures",
      "Directed multidisciplinary teams across engineering and commercial functions",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Professional Experience
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-10 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 md:left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-gold border-2 border-background" />

              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">{exp.period}</p>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{exp.company} · {exp.location}</p>
              <span className="inline-block text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full mb-4">
                {exp.highlight}
              </span>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-gold mt-1.5 shrink-0">–</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View Full Experience Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-gold-light/30 to-gold/50 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <Button variant="hero" size="lg" asChild className="relative bg-gradient-to-r from-gold to-gold-light text-navy font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40">
              <Link to="/experience" className="gap-2">
                View Full Experience
                <ArrowRight size={16} />
                <motion.span
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
