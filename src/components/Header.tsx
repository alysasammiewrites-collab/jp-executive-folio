import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const navKeys = [
  { key: "nav.about", href: "#about" },
  { key: "nav.expertise", href: "#expertise" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.achievements", href: "#achievements" },
  { key: "nav.education", href: "#education" },
  { key: "nav.references", href: "#references" },
  { key: "nav.contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-3 font-display text-lg font-semibold text-primary-foreground tracking-wide">
          <img src={profilePhoto} alt="Juan Pablo García Huizi" className="w-8 h-8 rounded-full object-cover object-top border border-gold/40" />
          <span>Juan Pablo <span className="text-gold">García Huizi</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-primary-foreground/70 hover:text-gold transition-colors duration-300 font-medium"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/10"
        >
          <nav className="flex flex-col items-center gap-4 py-6">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-widest text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <LanguageToggle />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
