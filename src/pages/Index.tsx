import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Microscope, BookOpen, ArrowRight, Award, Users, FileText, Stethoscope } from "lucide-react";
import heroEye from "@/assets/hero-eye.jpg";

const specializations = [
  {
    icon: Eye,
    title: "Chirurgia Refrattiva",
    desc: "Correzione laser di miopia, ipermetropia e astigmatismo con tecniche SMILE e FS-LASIK di ultima generazione.",
  },
  {
    icon: Stethoscope,
    title: "Chirurgia della Cataratta",
    desc: "Intervento di facoemulsificazione con impianto di cristallini artificiali premium per un recupero visivo ottimale.",
  },
  {
    icon: Microscope,
    title: "Cheratocono",
    desc: "Diagnosi precoce e trattamento del cheratocono con cross-linking corneale e tecniche personalizzate.",
  },
  {
    icon: Award,
    title: "Trapianti di Cornea",
    desc: "Tecniche di cheratoplastica lamellare e DMEK, con approccio mini-invasivo basato su ricerca propria.",
  },
];

const publications = [
  { title: "Corneal Epithelial Remodeling Following SMILE or FS-LASIK", journal: "PubMed 2024" },
  { title: "Ex Vivo Lenticule Customization for Stromal Lenticule Addition Keratoplasty", journal: "IOVS 2024" },
  { title: "Banking of post-SMILE stromal lenticules for additive keratoplasty", journal: "Int Ophthalmol 2024" },
  { title: "Bioengineered Human Stromal Lenticule for rhNGF Release", journal: "Front Bioeng 2022" },
];

const stats = [
  { number: "150+", label: "Pubblicazioni Scientifiche" },
  { number: "20+", label: "Anni di Esperienza" },
  { number: "63+", label: "Studi PubMed Indicizzati" },
  { number: "5000+", label: "Pazienti Trattati" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroEye} alt="Occhio umano in dettaglio" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan-glow text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan/20">
                Centro Cornea e Superficie Oculare
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                La Scienza al servizio
                <br />
                <span className="text-gradient">della tua Vista</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
                Il Prof. Mario Nubile unisce oltre 20 anni di ricerca scientifica internazionale 
                all'eccellenza chirurgica, per offrirti le cure oculistiche più avanzate e basate sulle evidenze.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contatti">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-cyan-light gap-2 text-base px-8">
                    Prenota una Consulenza
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/ricerca">
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base">
                    <BookOpen className="w-4 h-4" />
                    Le Pubblicazioni
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="grid gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-xl px-6 py-4 text-right">
                <p className="font-heading text-2xl font-bold text-cyan-glow">{stat.number}</p>
                <p className="text-primary-foreground/60 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats mobile */}
      <section className="xl:hidden bg-navy py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-2xl font-bold text-cyan-glow">{stat.number}</p>
                <p className="text-primary-foreground/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi sono */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-4">
                Il Professore
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Prof. Mario Nubile
              </h2>
              <p className="text-muted-foreground text-sm mt-1 mb-6">
                MD, PhD — Professore Associato in Oftalmologia
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Responsabile del Centro Cornea e Superficie Oculare presso il Centro Nazionale di Alta Tecnologia 
                in Oftalmologia dell'Università "G. d'Annunzio" di Chieti-Pescara. Con oltre 150 pubblicazioni 
                scientifiche internazionali su riviste peer-reviewed, il Prof. Nubile è un punto di riferimento 
                nella ricerca sulla cornea, le cellule staminali limbali e le tecniche innovative di trapianto corneale.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La sua attività clinica integra le più recenti scoperte della ricerca con un approccio 
                chirurgico d'avanguardia, garantendo ai pazienti trattamenti basati sulle ultime evidenze 
                scientifiche (Evidence-Based Medicine).
              </p>
              <Link to="/ricerca" className="inline-flex items-center gap-2 text-secondary font-medium mt-6 hover:gap-3 transition-all">
                Scopri la Ricerca Scientifica <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-muted rounded-2xl p-8 lg:p-12 shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Award, label: "Centro Nazionale Alta Tecnologia" },
                    { icon: FileText, label: "150+ Pubblicazioni Internazionali" },
                    { icon: Users, label: "Università G. d'Annunzio" },
                    { icon: Microscope, label: "Ricerca su Cornea e Superficie Oculare" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-3 p-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializzazioni */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            tag="Specializzazioni"
            title="Eccellenza Chirurgica e Diagnostica"
            subtitle="Un approccio integrato che unisce la più avanzata ricerca scientifica alla pratica clinica quotidiana."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to="/specializzazioni"
                  className="group block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-secondary/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <spec.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{spec.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{spec.desc}</p>
                  <span className="inline-flex items-center gap-1 text-secondary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Scopri di più <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ricerca Preview */}
      <section className="py-20 lg:py-28 bg-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            tag="News dalla Ricerca"
            title="Pubblicazioni Recenti"
            subtitle="Le ultime scoperte scientifiche del Prof. Nubile, pubblicate su riviste internazionali peer-reviewed."
            light
          />

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6"
              >
                <p className="text-primary-foreground/90 text-sm font-medium leading-relaxed">{pub.title}</p>
                <p className="text-cyan-glow text-xs mt-3">{pub.journal}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/ricerca">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <BookOpen className="w-4 h-4" />
                Tutte le Pubblicazioni
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              tag="Prenota"
              title="La tua Vista merita il Meglio"
              subtitle="Affidati a un professionista che unisce competenza clinica e ricerca scientifica d'eccellenza."
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contatti">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-cyan-light gap-2 text-base px-8">
                  Prenota una Consulenza
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/tecnologie">
                <Button size="lg" variant="outline" className="gap-2 text-base">
                  <Microscope className="w-4 h-4" />
                  Scopri le Tecnologie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
