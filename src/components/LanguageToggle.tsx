import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
      className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary-foreground/70 hover:text-gold transition-colors duration-300 font-medium"
      title={lang === "EN" ? "Cambiar a Español" : "Switch to English"}
    >
      <Globe size={14} />
      <span>{lang}</span>
    </button>
  );
};

export default LanguageToggle;
