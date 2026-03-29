import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const fullExperiences = [
  {
    company: "CyD Ingeniería",
    location: "Chile",
    title: "Contract Team Lead",
    period: "Nov 2023 – Present",
    bullets: [
      "Leading contract management for a **$250M** data center project (40MW infrastructure)",
      "Drafting, negotiating, and administering EPCM and supplier contracts",
      "Driving risk identification and mitigation strategies across the full project lifecycle",
      "Overseeing budgeting, cost control, and contract documentation",
      "Acting as key interface between stakeholders, contractors, and senior leadership",
      "Supporting dispute resolution and contract negotiations",
    ],
  },
  {
    company: "CyD Ingeniería – Mainstream Renewable Power",
    location: "Chile",
    title: "Senior Contract Administrator",
    period: "Jul 2021 – Sep 2023",
    bullets: [
      "Managed contracts for a **$100M** solar energy project (105MW plant)",
      "Administered contract amendments, including COVID-related adjustments",
      "Managed **$24M** in performance and advance payment bonds",
      "Resolved **29** contractual claims and breaches",
      "Controlled payment processes and financial tracking",
      "Led negotiations on delay damages and Extension of Time (EOT) claims",
    ],
  },
  {
    company: "Bechtel – MLP-INCO Mining Project",
    location: "Chile",
    title: "Project Controls Engineer (PEMS)",
    period: "Oct 2019 – Jul 2020",
    bullets: [
      "Managed project equipment data using PEMS asset management system",
      "Supported construction equipment planning, forecasting, and scheduling",
      "Delivered performance reporting and utilization analysis",
      "Provided technical system support and training to project teams",
    ],
  },
  {
    company: "J.P. Environmental Consulting & Construction",
    location: "USA, Mexico, Venezuela",
    title: "Managing Director / Lead Project Consultant",
    period: "Jan 2014 – Jan 2017",
    bullets: [
      "Led multi-country consultancy projects across the United States, Mexico, and Venezuela",
      "Delivered cost estimation, feasibility studies, and investment planning",
      "Managed engineering evaluations, procurement, and project execution",
      "Secured and executed multiple private and commercial contracts",
    ],
    keyProjects: [
      "**$25.2M** Drilling Rigs Evaluation (83 rigs) – Venezuela",
      "**$2.2M** Fracking Wells Evaluation – Corsicana, Texas",
      "**$500K** Private Investment Project – Mexico",
    ],
  },
  {
    company: "Chevron Nigeria – Funiwa Gas Project (Offshore)",
    location: "Nigeria",
    title: "Lead Project Control Specialist",
    period: "Jul 2013 – Aug 2014",
    bullets: [
      "Delivered project controls for **$3B** offshore gas supply project",
      "Implemented cost control frameworks (WBS, CBS, KPI, EVA)",
      "Managed cost estimation methodologies (Class III & IV)",
      "Oversaw scheduling, forecasting, and reporting systems",
      "Coordinated change order management and compliance tracking",
      "Supported FEED and Pre-FEED project phases",
    ],
  },
  {
    company: "J.P. Environmental Consulting",
    location: "Peru, Colombia, Caribbean",
    title: "Managing Director / Lead Consultant",
    period: "Jan 2010 – Dec 2013",
    bullets: [
      "Delivered feasibility and engineering consultancy across multiple regions",
      "Led development of **$125M** biomass power plant project",
      "Managed financial structuring, PPA agreements, and commercial negotiations",
      "Delivered project controls, cost analysis, and technical documentation",
      "Managed EPC, EPCM, BOT, and PPA contract structures",
    ],
  },
  {
    company: "Various Organizations",
    location: "Venezuela, Panama, Colombia",
    title: "Senior Engineering & Commercial Roles",
    period: "1988 – 2010",
    bullets: [
      "Progressive career across engineering, procurement, operations, and commercial management",
      "Lead Cost Estimator and Procurement Manager for major Oil & Gas projects",
      "General Manager of Engineering & Construction operations",
      "Contracts Coordinator for EPCM projects",
      "Operations Manager in Mining & Logistics sectors",
      "International Purchasing & Logistics Manager for infrastructure projects",
      "Directed multidisciplinary teams across engineering and commercial functions",
    ],
  },
];

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-gold">{part}</span>
    ) : (
      part
    )
  );
};

const FullExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-gold gap-2 mb-8">
            <Link to="/"><ArrowLeft size={16} /> Back to Home</Link>
          </Button>

          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Career</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Full Career Experience
          </h1>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Over <span className="font-bold text-foreground">35 years</span> of progressive experience across contract management, project controls, procurement, and commercial leadership within global Oil & Gas, Mining, Energy, and Infrastructure projects.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />
          {fullExperiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-10 pb-16 last:pb-0"
            >
              <div className="absolute left-2.5 md:left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-gold border-2 border-background" />
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">{exp.period}</p>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{exp.company} · {exp.location}</p>
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-gold mt-0.5 shrink-0">▸</span>
                    <span>{renderBold(bullet)}</span>
                  </li>
                ))}
              </ul>
              {exp.keyProjects && (
                <div className="mt-5 pl-4 border-l-2 border-gold/20">
                  <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">Key Projects</p>
                  <ul className="space-y-2">
                    {exp.keyProjects.map((project, k) => (
                      <li key={k} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-gold mt-0.5 shrink-0">◆</span>
                        <span>{renderBold(project)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            A career built on delivering results — managing multi-million and billion-dollar projects with integrity, precision, and commercial discipline across complex international environments.
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-gold gap-2">
            <Link to="/"><ArrowLeft size={16} /> Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullExperience;
