import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Languages, ChevronDown, School, Eye, EyeOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showFullEducation, setShowFullEducation] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">{t("edu.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{t("edu.title")}</h2>
          <div className="w-12 h-px bg-gold mb-8" />

          <p className="text-sm text-muted-foreground leading-relaxed mb-8">{t("edu.summary")}</p>

          <button
            onClick={() => setShowFullEducation(!showFullEducation)}
            className="group flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-gold hover:text-gold/80 transition-all duration-300 mb-8 border border-gold/30 hover:border-gold/60 rounded px-5 py-2.5"
          >
            {showFullEducation ? <EyeOff size={14} /> : <Eye size={14} />}
            {showFullEducation ? t("edu.hideDetails") : t("edu.viewDetails")}
            <ChevronDown size={14} className={`transition-transform duration-300 ${showFullEducation ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showFullEducation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.postgrad")}</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <GraduationCap size={18} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-foreground">{t("edu.magister")}</h4>
                        <p className="text-sm text-muted-foreground">{t("edu.iesaLocation")}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">Feb 2003 – Oct 2004</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.undergrad")}</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <GraduationCap size={18} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-foreground">{t("edu.polsci")}</h4>
                        <p className="text-sm text-muted-foreground">{t("edu.liuLocation")}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-xs text-muted-foreground/70">1983 – 1985</p>
                          <span className="text-[10px] uppercase tracking-widest text-gold/80 font-medium border border-gold/30 rounded px-2 py-0.5">
                            {t("edu.incomplete")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.diplomas")}</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <Award size={18} className="text-gold" />
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <p className="text-sm text-foreground font-medium">{t("edu.procurement")}</p>
                          <p className="text-xs text-muted-foreground">{t("edu.procurementLoc")}</p>
                        </li>
                        <li>
                          <p className="text-sm text-foreground font-medium">{t("edu.projectMgmt")}</p>
                          <p className="text-xs text-muted-foreground">{t("edu.projectMgmtLoc")}</p>
                        </li>
                        <li>
                          <p className="text-sm text-foreground font-medium">{t("edu.foreignCommerce")}</p>
                          <p className="text-xs text-muted-foreground">{t("edu.foreignCommerceLoc")}</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.training")}</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <BookOpen size={18} className="text-gold" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t("edu.trainingDesc")}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.highSchool")}</h3>
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

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-gold font-medium mb-6">{t("edu.languages")}</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <Languages size={18} className="text-gold" />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm bg-gold/10 text-foreground px-4 py-1.5 rounded-full">{t("edu.spanish")}</span>
                        <span className="text-sm bg-gold/10 text-foreground px-4 py-1.5 rounded-full">{t("edu.english")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-12 text-sm text-muted-foreground italic border-l-2 border-gold pl-4">
                  {t("edu.closingNote")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
