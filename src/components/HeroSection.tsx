import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Subtle radial glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative top element */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles size={14} className="text-gold animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 tracking-tight">
            Juan Pablo
            <br />
            <span className="relative inline-block">
              <span className="text-gold">García Huizi</span>
              {/* Shimmer effect on name */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
              />
            </span>
          </h1>

          {/* Title badge */}
          <motion.div
            className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-5 py-2 mb-4 bg-gold/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <p className="font-body text-sm md:text-base text-gold tracking-wide font-medium">
              Senior Contract Management & Commercial Leader
            </p>
          </motion.div>

          <p className="font-body text-sm text-primary-foreground/50 tracking-widest uppercase mb-4">
            30+ Years Experience &nbsp;·&nbsp; EPCM, EPC, Energy & Infrastructure &nbsp;·&nbsp; Contracts up to $3B+
          </p>

          <p className="font-body text-base text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Delivering commercial strategy, contract leadership, and risk-managed outcomes across global projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#experience">
                <ArrowDown size={16} />
                View Experience
              </a>
            </Button>

            {/* Premium download button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/60 via-gold-light/40 to-gold/60 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <Button
                variant="hero"
                size="lg"
                asChild
                className="relative bg-gradient-to-r from-gold to-gold-light text-navy font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40"
              >
                <a href="/Juan_Pablo_Garcia_Huizi_CV.pdf" download className="gap-2">
                  <Download size={16} />
                  Download CV
                  <motion.span
                    className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  />
                </a>
              </Button>
            </motion.div>
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
