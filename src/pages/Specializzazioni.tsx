import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Eye, Microscope, Shield, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import eyeAnatomy from "@/assets/eye-anatomy.jpg";

const specializations = [
  {
    id: "refrattiva",
    icon: Sparkles,
    title: "Chirurgia Refrattiva",
    subtitle: "SMILE, FS-LASIK, PRK",
    description: `La chirurgia refrattiva consente la correzione permanente di miopia, ipermetropia e astigmatismo attraverso il rimodellamento laser della cornea. Il Prof. Nubile utilizza le tecniche più avanzate come SMILE (Small Incision Lenticule Extraction) e FS-LASIK, con risultati eccellenti in termini di precisione e recupero.

Grazie alla sua ricerca sulla biomeccanica corneale e sul rimodellamento epiteliale post-operatorio, ogni intervento è pianificato con estrema accuratezza, tenendo conto delle caratteristiche individuali di ogni paziente.`,
    research: "Lo studio pubblicato su PubMed nel 2024 ('Corneal Epithelial Remodeling Following Cylinder Correction With SMILE or FS-LASIK') dimostra l'impegno del Prof. Nubile nel comprendere a fondo i meccanismi di guarigione corneale, per ottimizzare i risultati della chirurgia refrattiva.",
  },
  {
    id: "cataratta",
    icon: Eye,
    title: "Chirurgia della Cataratta",
    subtitle: "Facoemulsificazione e IOL Premium",
    description: `L'intervento di cataratta è oggi una procedura sicura e mini-invasiva. Attraverso la facoemulsificazione, il cristallino opacizzato viene frammentato e sostituito con un cristallino artificiale (IOL) di ultima generazione, che può correggere anche difetti visivi preesistenti.

Il Prof. Nubile seleziona le lenti intraoculari più appropriate — monofocali, multifocali o toriche — in base alle esigenze visive specifiche del paziente, garantendo il miglior recupero possibile.`,
    research: "La ricerca del Prof. Nubile sulle proprietà ottiche e sulla biocompatibilità dei materiali intraoculari contribuisce alla continua evoluzione di questa tecnica, assicurando ai pazienti l'accesso ai dispositivi più avanzati e sicuri.",
  },
  {
    id: "cheratocono",
    icon: Shield,
    title: "Cheratocono",
    subtitle: "Diagnosi Precoce e Cross-Linking",
    description: `Il cheratocono è una malattia progressiva che assottiglia e deforma la cornea, compromettendo la qualità visiva. La diagnosi precoce mediante topografia e tomografia corneale è fondamentale per intervenire tempestivamente.

Il Prof. Nubile è esperto nel trattamento del cheratocono con cross-linking corneale — una procedura che rafforza la struttura della cornea — e nell'utilizzo di lenti a contatto speciali e, nei casi avanzati, nel trapianto corneale lamellare.`,
    research: "Grazie alla microscopia confocale in vivo, una tecnologia nella quale il Prof. Nubile è riconosciuto a livello internazionale, è possibile studiare la cornea a livello cellulare, individuando i segni più precoci della malattia e monitorando l'efficacia dei trattamenti.",
  },
  {
    id: "trapianti",
    icon: Microscope,
    title: "Trapianti di Cornea",
    subtitle: "Cheratoplastica Lamellare, DMEK, SLAK",
    description: `Quando la cornea è gravemente compromessa, il trapianto rappresenta l'unica soluzione. Le moderne tecniche lamellari (DALK, DMEK, DSAEK) consentono di sostituire solo gli strati corneali danneggiati, riducendo il rischio di rigetto e accelerando il recupero.

Il Prof. Nubile è pioniere della tecnica SLAK (Stromal Lenticule Addition Keratoplasty), un approccio innovativo che utilizza lenticoli corneali bioingegnerizzati per ricostruire la cornea senza necessità di un trapianto tradizionale.`,
    research: "Le pubblicazioni su IOVS e International Ophthalmology (2024) sulla personalizzazione dei lenticoli corneali e sulla loro conservazione in eye bank rappresentano un contributo unico alla frontiera della chirurgia corneale rigenerativa.",
  },
];

const Specializzazioni = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan-glow text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan/20"
              >
                Le Specializzazioni
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
              >
                Chirurgia Oculare
                <br />
                <span className="text-gradient">di Eccellenza</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-primary-foreground/70 text-lg leading-relaxed max-w-xl"
              >
                Ogni trattamento è guidato dalla ricerca scientifica e dalla tecnologia più avanzata, 
                per garantire risultati sicuri e personalizzati.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img src={eyeAnatomy} alt="Anatomia dell'occhio umano" className="rounded-2xl shadow-elevated max-w-sm mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations Detail */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-20">
            {specializations.map((spec, i) => (
              <motion.article
                key={spec.id}
                id={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <spec.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{spec.title}</h2>
                    <p className="text-secondary text-sm font-medium">{spec.subtitle}</p>
                  </div>
                </div>

                {spec.description.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}

                {/* Research box */}
                <div className="mt-6 bg-sky-light border border-secondary/10 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                        L'impegno Scientifico
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{spec.research}</p>
                    </div>
                  </div>
                </div>

                {i < specializations.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Hai bisogno di una consulenza?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Il Prof. Nubile è disponibile per valutare il tuo caso e consigliarti il percorso terapeutico più adatto.
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

export default Specializzazioni;
