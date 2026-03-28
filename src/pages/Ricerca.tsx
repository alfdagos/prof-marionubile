import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award, FlaskConical, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchAreas = [
  { icon: Dna, title: "Cornea e Superficie Oculare", desc: "Microscopia confocale in vivo, cellule staminali limbali, rigenerazione corneale" },
  { icon: FlaskConical, title: "Bioingegneria Oculare", desc: "Lenticoli corneali bioingegnerizzati, drug delivery systems, fattore di crescita nervoso (NGF)" },
  { icon: Award, title: "Tecniche Chirurgiche Innovative", desc: "SLAK, cheratoplastica lamellare avanzata, trapianti DMEK personalizzati" },
];

const publications = [
  { year: "2026", title: "Excimer laser-assisted ex vivo model for eccentric keratoconus in human donor corneas", journal: "Exp Eye Res", pmid: "41855254" },
  { year: "2026", title: "Feasibility Study of Decellularized Corneal Lenticule in a Porcine Model for Macular Hole Closure", journal: "Ophthalmol Ther", pmid: "41729365" },
  { year: "2025", title: "In Vivo Confocal Microscopy and AS-OCT Features of Corneal Pseudodendritic Lesions in Hereditary Tyrosinemia Type 1", journal: "Am J Case Rep", pmid: "41455114" },
  { year: "2025", title: "Evaluation of in vitro and in vivo release of recombinant human NGF from bioengineered human stromal lenticule", journal: "Front Bioeng Biotechnol", pmid: "41050442" },
  { year: "2025", title: "Fighting Bleb Fibrosis After Glaucoma Surgery: Novel Targets for Therapy", journal: "Int J Mol Sci", pmid: "40076946" },
  { year: "2024", title: "Corneal Epithelial Remodeling Following Cylinder Correction With SMILE or FS-LASIK", journal: "PubMed", pmid: "39387380" },
  { year: "2024", title: "Ex Vivo Lenticule Customization for Stromal Lenticule Addition Keratoplasty", journal: "Invest Ophthalmol Vis Sci", pmid: "39102261" },
  { year: "2024", title: "Banking of post-SMILE stromal lenticules for additive keratoplasty: A new challenge for eye banks?", journal: "Int Ophthalmol", pmid: "39182212" },
  { year: "2024", title: "Effects of mesenchymal stromal cells and human recombinant NGF on diabetic retinopathy model", journal: "Front Endocrinol", pmid: "39473506" },
  { year: "2023", title: "An approach to reduce Descemet's membrane scrolling: Relevance to DMEK", journal: "Indian J Ophthalmol", pmid: "37602605" },
  { year: "2023", title: "Innovation in Synthetic and Natural Ocular Drug Delivery Systems", journal: "Pharmaceutics", pmid: "36839947" },
  { year: "2022", title: "Bioengineered Human Stromal Lenticule for Recombinant Human NGF Release", journal: "Front Bioeng Biotechnol", pmid: "35813999" },
  { year: "2022", title: "Tear proteomics reveals the molecular basis of NGF treatment for Neurotrophic Keratopathy", journal: "Sci Rep", pmid: "35075190" },
  { year: "2021", title: "Evaluation of Host Defense Peptide (CaD23)-Antibiotic Interaction", journal: "Front Pharmacol", pmid: "34690770" },
  { year: "2021", title: "Hybrid derivative of cathelicidin and human beta defensin-2 against bacterial keratitis", journal: "Sci Rep", pmid: "34526600" },
];

const Ricerca = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan-glow text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan/20"
          >
            Ricerca & Innovazione
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
          >
            Dalla Ricerca alla Cura:
            <br />
            <span className="text-gradient">Scienza Applicata</span>
          </motion.h1>
        </div>
      </section>

      {/* Research narrative */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            tag="Oltre 150 Articoli Scientifici"
            title="Un Percorso di Ricerca Internazionale"
            centered={false}
          />
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              Con oltre 150 pubblicazioni su riviste scientifiche internazionali peer-reviewed e più di 63 studi 
              indicizzati su PubMed, il Prof. Mario Nubile rappresenta una delle voci più autorevoli nel panorama 
              mondiale della ricerca oftalmologica. La sua produzione scientifica abbraccia un arco temporale di 
              oltre vent'anni, durante i quali ha contribuito in modo determinante all'avanzamento delle conoscenze 
              sulla cornea, la superficie oculare e le tecniche di chirurgia rigenerativa.
            </p>
            <p>
              Al centro della sua attività di ricerca vi è lo studio della microscopia confocale in vivo, una 
              tecnologia che consente di osservare la cornea a livello cellulare senza alcun contatto invasivo. 
              Questa metodica, applicata dal Prof. Nubile alla diagnostica del cheratocono, delle distrofie 
              corneali e delle cheratiti infettive, ha aperto nuove frontiere nella comprensione dei meccanismi 
              patologici oculari e nella personalizzazione dei percorsi terapeutici.
            </p>
            <p>
              Un filone di ricerca particolarmente innovativo riguarda la bioingegneria dei lenticoli corneali 
              stromali. Il Prof. Nubile è tra i pionieri della tecnica SLAK (Stromal Lenticule Addition 
              Keratoplasty), che prevede l'utilizzo di lenticoli ottenuti dalla chirurgia SMILE e 
              successivamente personalizzati mediante laser a eccimeri, per essere impiantati in cornee 
              affette da cheratocono o ectasia. Questa linea di ricerca, documentata in pubblicazioni su 
              riviste prestigiose come Investigative Ophthalmology & Visual Science (IOVS), rappresenta 
              un paradigma completamente nuovo nella chirurgia corneale additiva.
            </p>
            <p>
              Altrettanto significativo è il lavoro del Prof. Nubile nel campo del fattore di crescita nervoso 
              ricombinante umano (rhNGF), studiato come agente terapeutico per la cheratopatia neurotrofica 
              e incorporato in piattaforme innovative di drug delivery basate su lenticoli corneali 
              bioingegnerizzati. Queste ricerche, condotte in collaborazione con centri internazionali 
              come il Singapore Eye Research Institute, aprono prospettive rivoluzionarie per il trattamento 
              di patologie oculari finora considerate difficilmente gestibili.
            </p>
            <p>
              La filosofia del Prof. Nubile si riassume nel concetto di "scienza applicata alla cura": ogni 
              scoperta in laboratorio è orientata a un beneficio concreto per il paziente, ogni tecnica 
              chirurgica è validata da dati scientifici rigorosi. Questo approccio, fondato sull'Evidence-Based 
              Medicine, garantisce ai pazienti non solo le cure più aggiornate, ma anche la sicurezza di 
              affidarsi a un professionista il cui operato è costantemente sottoposto al vaglio della 
              comunità scientifica internazionale.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading tag="Aree di Ricerca" title="I Pilastri della Ricerca" />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications list */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionHeading
            tag="PubMed"
            title="Pubblicazioni Scientifiche Selezionate"
            subtitle="Una selezione delle pubblicazioni più recenti indicizzate su PubMed."
          />

          <div className="space-y-3">
            {publications.map((pub, i) => (
              <motion.a
                key={i}
                href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/80 transition-colors border border-transparent hover:border-border"
              >
                <span className="text-secondary font-mono text-sm font-semibold mt-0.5 flex-shrink-0">{pub.year}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-sm font-medium leading-relaxed group-hover:text-secondary transition-colors">{pub.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{pub.journal} • PMID: {pub.pmid}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Mario+Nubile&sort=date"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Vedi tutte su PubMed
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ricerca;
