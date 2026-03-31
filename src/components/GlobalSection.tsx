import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const regionKeys = ["latam", "usa", "nigeria", "caribbean"];

const GlobalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">{t("global.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{t("global.title")}</h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {regionKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 border border-border rounded-md hover:border-gold/30 transition-colors"
              >
                <Globe size={24} className="text-gold shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-foreground">{t(`global.${key}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`global.${key}Detail`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalSection;
