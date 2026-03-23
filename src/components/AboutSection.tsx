import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Executive Summary
          </h2>
          <div className="w-12 h-px bg-gold mb-10" />

          <div className="space-y-6 text-muted-foreground leading-relaxed font-body text-base md:text-lg">
            <p>
              Senior Contract Management and Commercial Leader with over 30 years of international experience spanning Oil & Gas, Mining, Infrastructure, Renewable Energy, and Data Center projects. Recognized for deep expertise in EPCM/EPC contract structures, claims management, risk allocation, and high-stakes commercial negotiations.
            </p>
            <p>
              Proven track record managing contracts valued up to <span className="text-foreground font-semibold">$3B+</span>, leading cross-functional teams, and delivering measurable commercial outcomes through strategic contract planning, rigorous cost control, and effective dispute resolution.
            </p>
            <p>
              Extensive global exposure across <span className="text-foreground font-semibold">Latin America, the United States, Nigeria</span>, and the <span className="text-foreground font-semibold">Caribbean</span>, with a demonstrated ability to navigate complex multinational stakeholder environments, regulatory frameworks, and contractor ecosystems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
