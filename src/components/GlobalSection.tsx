import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

const regions = [
  { name: "Latin America", detail: "Chile, Venezuela, Peru, Colombia, Mexico, Panama" },
  { name: "United States", detail: "Corsicana, Texas – Fracking Wells Consultancy" },
  { name: "Nigeria (MEA)", detail: "Chevron Offshore Operations" },
  { name: "Caribbean", detail: "Sint Maarten – Environmental & Energy Projects" },
];

const GlobalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Reach</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Global Experience
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 border border-border rounded-md hover:border-gold/30 transition-colors"
              >
                <Globe size={24} className="text-gold shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-foreground">{region.name}</h3>
                  <p className="text-sm text-muted-foreground">{region.detail}</p>
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
