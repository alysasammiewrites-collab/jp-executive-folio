import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Connect</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:jpgarciahuizi@gmail.com"
              className="flex items-center gap-3 p-5 bg-background rounded-md border border-border hover:border-gold/30 transition-colors group"
            >
              <Mail size={20} className="text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">jpgarciahuizi@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+56949651719"
              className="flex items-center gap-3 p-5 bg-background rounded-md border border-border hover:border-gold/30 transition-colors group"
            >
              <Phone size={20} className="text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">+56 949 651 719</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/juan-pablo-garcia-huizi-7520a827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-background rounded-md border border-border hover:border-gold/30 transition-colors group"
            >
              <Linkedin size={20} className="text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">Juan Pablo García Huizi</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-5 bg-background rounded-md border border-border">
              <MapPin size={20} className="text-gold" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-foreground">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
