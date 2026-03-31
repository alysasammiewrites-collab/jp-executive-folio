import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">{t("about.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{t("about.title")}</h2>
          <div className="w-12 h-px bg-gold mb-10" />

          <div className="space-y-6 text-muted-foreground leading-relaxed font-body text-base md:text-lg">
            <p>{t("about.p1")}</p>
            <p>
              {t("about.p2")} <span className="text-foreground font-semibold">{t("about.p2value")}</span>{t("about.p2rest")}
            </p>
            <p>
              {t("about.p3a")} <span className="text-foreground font-semibold">{t("about.p3regions")}</span>{t("about.p3and")} <span className="text-foreground font-semibold">{t("about.p3caribbean")}</span>{t("about.p3rest")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
