import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const experienceKeys = [
  { companyEN: "CyD Ingeniería", location: "Chile", bulletCount: 4 },
  { companyEN: "CyD Ingeniería – Mainstream Renewable Power", location: "Chile", bulletCount: 4 },
  { companyEN: "Bechtel – MLP-INCO Mining Project", location: "Chile", bulletCount: 3 },
  { companyEN: "Chevron Nigeria – Funiwa Gas Project (Offshore)", location: "Nigeria", bulletCount: 4 },
  { companyEN: "J.P. Environmental Consulting & Construction", location: "Latin America & Caribbean", bulletCount: 4 },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">{t("exp.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">{t("exp.title")}</h2>
          <div className="w-12 h-px bg-gold mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />
          {experienceKeys.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-10 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 md:left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-gold border-2 border-background" />
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">{t(`exp.${i}.period`)}</p>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{t(`exp.${i}.title`)}</h3>
              <p className="text-sm text-muted-foreground mb-1">{exp.companyEN} · {exp.location}</p>
              <span className="inline-block text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full mb-4">
                {t(`exp.${i}.highlight`)}
              </span>
              <ul className="space-y-2">
                {Array.from({ length: exp.bulletCount }, (_, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-gold mt-1.5 shrink-0">–</span>
                    {t(`exp.${i}.b${j}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-gold-light/30 to-gold/50 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <Button
              variant="hero"
              size="lg"
              asChild
              className="relative bg-gradient-to-r from-gold to-gold-light text-navy font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 gap-2"
            >
              <Link to="/experience">
                {t("exp.viewFull")}
                <ArrowRight size={16} />
                <motion.span
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
