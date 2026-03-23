import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertiseItems = [
  "Contract Management",
  "Commercial Management",
  "EPCM / EPC Contracts",
  "FIDIC Contracts",
  "Claims & Dispute Resolution",
  "Change Order Management",
  "Risk Management",
  "Cost Control & Budgeting",
  "Procurement & Supplier Management",
  "Project Controls (EVM, KPI, WBS, CBS)",
  "Tendering (RFQ, RFP, ITB)",
  "Stakeholder Management",
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Core Expertise
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-background rounded-md border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
