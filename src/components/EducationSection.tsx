import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Languages, ChevronDown, School } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showTrainings, setShowTrainings] = useState(false);
  const [showFullEducation, setShowFullEducation] = useState(false);

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
            Education & Executive Development
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="space-y-10">
            {/* Postgraduate / Executive Education */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Postgraduate & Executive Education</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-foreground">Magister – Advanced Management Program (PAG)</h4>
                    <p className="text-sm text-muted-foreground">Instituto de Estudios Superiores de Administración (IESA) – Venezuela</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Feb 2003 – Oct 2004</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Undergraduate Studies */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Undergraduate Studies</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">
                    Political Science / Minor in International Studies
                  </h4>
                  <p className="text-sm text-muted-foreground">C.W. Post Center, Long Island University – New York, USA</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-muted-foreground/70">1983 – 1985</p>
                    <span className="text-[10px] uppercase tracking-widest text-gold/80 font-medium border border-gold/30 rounded px-2 py-0.5">
                      Incomplete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Postgraduate Diplomas */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Postgraduate Diplomas</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <Award size={18} className="text-gold" />
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <p className="text-sm text-foreground font-medium">International Procurement & Materials Management</p>
                      <p className="text-xs text-muted-foreground">World Trade Institute, World Trade Center – New York, USA (May–Jul 1998)</p>
                    </li>
                    <li>
                      <p className="text-sm text-foreground font-medium">Project Formulation & Evaluation (Project Management)</p>
                      <p className="text-xs text-muted-foreground">Venezuelan Board of Engineers – Caracas, Venezuela (Feb–Jun 1994)</p>
                    </li>
                    <li>
                      <p className="text-sm text-foreground font-medium">Foreign Commerce (Import/Export)</p>
                      <p className="text-xs text-muted-foreground">Venezuelan Export Association (AVEX) – Caracas, Venezuela (Jun–Aug 1988)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Training */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Additional Training & Certifications</h3>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Over 30 professional trainings and certifications across Project Controls, Cost Engineering, Leadership, Compliance, and Safety, including programs delivered by Chevron, Bechtel, Project Control Academy, and other international institutions.
                  </p>
                  <button
                    onClick={() => setShowTrainings(!showTrainings)}
                    className="mt-3 text-xs uppercase tracking-widest text-gold font-medium flex items-center gap-1.5 hover:text-gold/80 transition-colors"
                  >
                    {showTrainings ? "Show Less" : "View Details"}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${showTrainings ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {showTrainings && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-xs text-muted-foreground/70 space-y-1.5 border-l-2 border-gold/20 pl-4"
                      >
                        <p>Contract Management, Cost Engineering, and Risk Management</p>
                        <p>Project Controls & Earned Value Analysis (EVA)</p>
                        <p>Health, Safety & Environment (HSE) Compliance</p>
                        <p>Leadership, Negotiation & Commercial Strategy</p>
                        <p>Procurement & Supply Chain Management</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* High School */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">Secondary Education</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <School size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">Shattuck-St. Mary's School</h4>
                    <p className="text-sm text-muted-foreground">Minnesota, USA</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">1981 – 1983</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <School size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">Blair Academy</h4>
                    <p className="text-sm text-muted-foreground">New Jersey, USA</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">1979 – 1981</p>
                  </div>
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
