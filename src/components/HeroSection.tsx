import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-16 h-px bg-gold mx-auto mb-8" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 tracking-tight">
            Juan Pablo<br />
            <span className="text-gold">García Huizi</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 font-light tracking-wide mb-2">
            Senior Contract Management & Commercial Leader
          </p>

          <p className="font-body text-sm text-primary-foreground/50 tracking-widest uppercase mb-4">
            30+ Years Experience &nbsp;|&nbsp; EPCM, EPC, Energy & Infrastructure &nbsp;|&nbsp; Contracts up to $3B+
          </p>

          <p className="font-body text-base text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Delivering commercial strategy, contract leadership, and risk-managed outcomes across global projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#experience">
                <ArrowDown size={16} />
                View Experience
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/Juan_Pablo_Garcia_Huizi_CV.pdf" download>
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-primary-foreground/30 hover:text-gold transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
