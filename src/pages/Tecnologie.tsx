import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Scan, Zap, Monitor, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import technologyImg from "@/assets/technology.jpg";

const technologies = [
  {
    icon: Scan,
    title: "Microscopia Confocale In Vivo",
    desc: "Analisi cellulare della cornea e della superficie oculare senza contatto, per diagnosi precoci e monitoraggio della risposta ai trattamenti. Tecnologia utilizzata dal Prof. Nubile in numerosi studi scientifici.",
  },
  {
    icon: Monitor,
    title: "Topografia e Tomografia Corneale",
    desc: "Mappatura tridimensionale completa della cornea (anteriore e posteriore) per la diagnosi del cheratocono, la pianificazione della chirurgia refrattiva e la valutazione pre-trapianto.",
  },
  {
    icon: Zap,
    title: "Piattaforma Laser Femtosecondi + Eccimeri",
    desc: "Tecnologia laser di ultima generazione per procedure SMILE, FS-LASIK e personalizzazione dei lenticoli corneali per trapianto additivo (SLAK).",
  },
  {
    icon: Cpu,
    title: "OCT del Segmento Anteriore",
    desc: "Tomografia a coerenza ottica ad alta risoluzione per l'imaging non invasivo della cornea, della camera anteriore e dell'angolo irido-corneale, essenziale nella pianificazione chirurgica.",
  },
];

const Tecnologie = () => {
  return (
    <Layout>
      <section className="bg-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan-glow text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan/20"
          >
            Tecnologie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
          >
            Strumentazione
            <br />
            <span className="text-gradient">d'Avanguardia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-primary-foreground/70 text-lg"
          >
            Diagnostica e chirurgia con le tecnologie più avanzate disponibili nel panorama oftalmologico internazionale.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={technologyImg}
                alt="Strumentazione chirurgica oftalmologica"
                className="rounded-2xl shadow-elevated w-full sticky top-28"
              />
            </div>
            <div className="space-y-8">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{tech.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Vuoi saperne di più?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Prenota una visita per scoprire come queste tecnologie possono aiutarti.
          </p>
          <Link to="/contatti">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-cyan-light gap-2 px-8">
              Prenota una Consulenza <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Tecnologie;
