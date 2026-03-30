import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Phone, Mail, Building } from "lucide-react";

const references = [
  {
    name: "Cristian Avila Ubilla",
    title: "Project Delivery Manager",
    company: "CyD Ingeniería, Chile",
    phone: "+56 9 6878 8465",
    email: "cavila@cydingenieria.com",
  },
  {
    name: "Pilar Saavedra Aguero",
    title: "Director of Procurement & Contract Management",
    company: "Verano Energy",
    former: "Mainstream Renewable Power Chile",
    phone: "+56 9 3869 5967",
    email: "pilarsaavedra@gmail.com",
  },
  {
    name: "Sharon Fraley",
    title: "Former Project Control Manager",
    company: "Bechtel Chile Ltda.",
    phone: "+1 (423) 355-4343",
    email: "fraleysx@gmail.com",
  },
  {
    name: "Alfredo León",
    title: "Construction Manager",
    company: "Xylem Inc., Houston, Texas",
    former: "Chevron Nigeria & Inelectra",
    phone: "+1 (832) 366-1585",
    email: "Alfredo.leon@xylem.com",
  },
  {
    name: "Ken Johnson",
    title: "Retired – Halliburton Company Nigeria",
    company: "Project Manager – TOTAL Egina (2012–2022)",
    phone: "+1 (281) 727-8401",
    email: "kjohnson0455@gmail.com",
  },
];

const ReferencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="references" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Endorsements</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Professional References
          </h2>
          <div className="w-12 h-px bg-gold mb-12" />

          <div className="grid gap-6 md:grid-cols-2">
            {references.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gold/15 rounded-lg p-6 bg-card/50 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <User size={16} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.title}</p>
                  </div>
                </div>

                <div className="ml-12 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Building size={13} className="text-gold/60 shrink-0" />
                    <p className="text-xs text-muted-foreground">{person.company}</p>
                  </div>
                  {person.former && (
                    <p className="text-xs text-muted-foreground/60 ml-5">Former: {person.former}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-gold/60 shrink-0" />
                    <a href={`tel:${person.phone}`} className="text-xs text-muted-foreground hover:text-gold transition-colors">
                      {person.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-gold/60 shrink-0" />
                    <a href={`mailto:${person.email}`} className="text-xs text-muted-foreground hover:text-gold transition-colors">
                      {person.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-xs text-muted-foreground/60 italic text-center">
            Available upon request for direct verification.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection;
