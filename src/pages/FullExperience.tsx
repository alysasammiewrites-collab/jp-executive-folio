import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const experiences = [
  {
    company: "CyD Ingeniería",
    location: "Chile",
    title: "Contract Team Lead",
    period: "2023 – Present",
    bullets: [
      "Leading contract management for a **$250M** data center project",
      "Managing vendor performance, compliance, and contract execution",
      "Driving risk identification and mitigation strategies",
      "Overseeing budgeting, cost control, and contract documentation",
      "Acting as key interface between stakeholders, contractors, and leadership",
      "Supporting dispute resolution and contract negotiations",
    ],
  },
  {
    company: "Mainstream Renewable Power",
    location: "Chile",
    title: "Senior Contract Administrator",
    period: "2021 – 2023",
    bullets: [
      "Managed contracts for a **$100M** solar energy project",
      "Administered contract amendments, including COVID-related adjustments",
      "Managed **$24M** in bonds and financial securities",
      "Resolved **29** contractual claims and breaches",
      "Controlled payment processes and financial tracking",
      "Led negotiations on delay damages and EOT (Extension of Time)",
    ],
  },
  {
    company: "Bechtel",
    location: "Chile",
    title: "Project Controls Engineer (PEMS)",
    period: "2019 – 2020",
    bullets: [
      "Managed equipment forecasting, tracking, and cost reporting systems",
      "Supported construction equipment planning and scheduling",
      "Delivered performance reporting and utilization analysis",
      "Provided technical system support and training to project teams",
    ],
  },
  {
    company: "J.P. Environmental Consulting & Construction",
    location: "International",
    title: "Managing Director / Lead Project Consultant",
    period: "2014 – 2017",
    bullets: [
      "Led multi-country consultancy projects across USA, Mexico, Venezuela",
      "Delivered cost estimation, feasibility studies, and investment planning",
      "Managed engineering evaluations, procurement, and project execution",
      "Secured and executed multiple private and commercial contracts",
    ],
    keyProjects: [
      "**$25.2M** Drilling Rigs Evaluation (83 rigs)",
      "**$2.2M** Fracking Wells Evaluation (USA)",
      "**$500K** Private Investment Project (Mexico)",
    ],
  },
  {
    company: "Chevron Nigeria",
    location: "Nigeria",
    title: "Lead Project Control Specialist",
    period: "2013 – 2014",
    bullets: [
      "Delivered project controls for **$3B** offshore gas supply project",
      "Managed cost estimation methodologies (Class III & IV)",
      "Oversaw scheduling, forecasting, and reporting systems",
      "Coordinated change order management and compliance tracking",
    ],
  },
  {
    company: "J.P. Environmental Consulting",
    location: "Peru / Caribbean",
    title: "Managing Director / Lead Consultant",
    period: "2010 – 2013",
    bullets: [
      "Delivered feasibility and engineering consultancy across multiple regions",
      "Led development of **$125M** biomass power plant project",
      "Managed financial structuring, PPA agreements, and negotiations",
      "Delivered project controls, cost analysis, and technical documentation",
    ],
  },
];

const additionalRoles = [
  "Lead Cost Estimator / Procurement – Oil & Gas Projects",
  "General Manager – Engineering & Construction Operations",
  "Contracts Coordinator – EPCM Projects",
  "Operations Manager – Mining & Logistics",
  "Procurement Manager – Oil Drilling Operations",
  "International Purchasing & Logistics Manager – Infrastructure Projects",
];

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-gold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const FullExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-8 text-muted-foreground hover:text-gold">
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>

            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
              Complete Career History
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Full Career Experience
            </h1>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              Over <span className="font-bold text-foreground">35 years</span> of progressive experience across contract management, project controls, procurement, and commercial leadership within global Oil & Gas, Mining, Energy, and Infrastructure projects.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-10 pb-16 last:pb-0"
              >
                <div className="absolute left-2.5 md:left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-gold border-2 border-background" />

                <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">
                  {exp.period}
                </p>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.company} · {exp.location}
                </p>

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
                    <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
                      Key Projects
                    </p>
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

          {/* Additional Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 p-8 rounded-lg border border-border bg-card"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-6">
              Additional Leadership Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {additionalRoles.map((role, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-gold mt-0.5 shrink-0">▸</span>
                  {role}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
              Extensive experience managing multi-million and billion-dollar projects, delivering contract strategy, commercial leadership, and project execution across complex international environments.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FullExperience;
