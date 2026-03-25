import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Languages } from "lucide-react";

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
            Education & Professional Development
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="space-y-10">
            {/* Formal Education */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Formal Education</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-foreground">Magister in Advanced Management</h4>
                    <p className="text-sm text-muted-foreground">IESA (Instituto de Estudios Superiores de Administración) – Venezuela</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-foreground">Bachelor of Science in Industrial Engineering</h4>
                    <p className="text-sm text-muted-foreground">Universidad Nacional Experimental Politécnica (UNEXPO) – Venezuela</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Postgraduate & Specialized Diplomas */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Postgraduate & Specialized Diplomas</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <Award size={18} className="text-gold" />
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground">International Procurement & Materials Management – World Trade Institute, USA</li>
                    <li className="text-sm text-muted-foreground">Project Formulation & Evaluation – Venezuelan Board of Engineers (CIV)</li>
                    <li className="text-sm text-muted-foreground">International Commerce (Import-Export) – AVEX, Venezuela</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Training */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Professional Training & Certifications</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">30+ Professional Training Courses</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Project Controls, Contract Management, Cost Engineering, Risk Management, HSE, and Procurement
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Institutions include: Bechtel, Chevron, Project Control Academy, CyD Ingeniería, and others
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Languages</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <Languages size={18} className="text-gold" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm bg-gold/10 text-foreground px-4 py-1.5 rounded-full">Spanish – Native</span>
                  <span className="text-sm bg-gold/10 text-foreground px-4 py-1.5 rounded-full">English – Fluent</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground italic border-l-2 border-gold pl-4">
            Continuous professional development across a 35+ year international career spanning multiple industries and continents.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
