import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const achievements = [
  { value: "$3B+", label: "Contracts Managed" },
  { value: "25%", label: "Cost Reduction Achieved" },
  { value: "$1.7M", label: "Funding Secured" },
  { value: "$125M", label: "Project Delivered" },
  { value: "30+", label: "Years Global Experience" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Impact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Key Achievements
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                {item.value}
              </div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
