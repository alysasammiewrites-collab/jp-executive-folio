import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Education & Development
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Magister in Advanced Management</h3>
                <p className="text-sm text-muted-foreground">IESA – Venezuela</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                <Award size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Postgraduate Diplomas</h3>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-muted-foreground">International Procurement & Materials Management – World Trade Institute, USA</li>
                  <li className="text-sm text-muted-foreground">Project Formulation & Evaluation – Venezuelan Board of Engineers</li>
                  <li className="text-sm text-muted-foreground">International Commerce (Import-Export) – AVEX, Venezuela</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                <BookOpen size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">30+ Professional Trainings</h3>
                <p className="text-sm text-muted-foreground">
                  Project Controls, Contract Management, Cost Engineering, Risk Management, and HSE
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">Bechtel, Chevron, Project Control Academy, CyD Ingeniería</p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground italic border-l-2 border-gold pl-4">
            Continuous professional development across a 30+ year international career.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
