import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const fullExperiences = [
  { companyKey: "fexp.company.0", location: "Chile", bulletCount: 6, hasKeyProjects: false },
  { companyKey: "fexp.company.1", location: "Chile", bulletCount: 6, hasKeyProjects: false },
  { companyKey: "fexp.company.2", location: "Chile", bulletCount: 4, hasKeyProjects: false },
  { companyKey: "fexp.company.3", location: "USA, Mexico, Venezuela", bulletCount: 4, hasKeyProjects: true, kpCount: 3 },
  { companyKey: "fexp.company.4", location: "Nigeria", bulletCount: 6, hasKeyProjects: false },
  { companyKey: "fexp.company.5", location: "Peru, Colombia, Caribbean", bulletCount: 5, hasKeyProjects: false },
  { companyKey: "fexp.company.6", location: "Venezuela, Panama, Colombia", bulletCount: 7, hasKeyProjects: false },
];

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-gold">{part}</span>
    ) : (
      part
    )
  );
};

const FullExperience = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-gold gap-2 mb-8">
            <Link to="/"><ArrowLeft size={16} /> {t("fullexp.back")}</Link>
          </Button>

          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">{t("fullexp.label")}</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">{t("fullexp.title")}</h1>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {renderBold(t("fullexp.intro"))}
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />
          {fullExperiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-10 pb-16 last:pb-0"
            >
              <div className="absolute left-2.5 md:left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-gold border-2 border-background" />
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">{t(`fexp.${i}.period`)}</p>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">{t(`fexp.${i}.title`)}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t(exp.companyKey)} · {exp.location}</p>
              <ul className="space-y-2.5">
                {Array.from({ length: exp.bulletCount }, (_, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-gold mt-0.5 shrink-0">▸</span>
                    <span>{renderBold(t(`fexp.${i}.b${j}`))}</span>
                  </li>
                ))}
              </ul>
              {exp.hasKeyProjects && (
                <div className="mt-5 pl-4 border-l-2 border-gold/20">
                  <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">{t("fullexp.keyProjects")}</p>
                  <ul className="space-y-2">
                    {Array.from({ length: exp.kpCount || 0 }, (_, k) => (
                      <li key={k} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-gold mt-0.5 shrink-0">◆</span>
                        <span>{renderBold(t(`fexp.${i}.kp${k}`))}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            {t("fullexp.closing")}
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-gold gap-2">
            <Link to="/"><ArrowLeft size={16} /> {t("fullexp.back")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullExperience;
