import { Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-primary-foreground mb-1">
          Juan Pablo García Huizi
        </p>
        <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-6">
          {t("footer.title")}
        </p>
        <a
          href="https://linkedin.com/in/juan-pablo-garcia-huizi-7520a827"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Juan Pablo García Huizi. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
