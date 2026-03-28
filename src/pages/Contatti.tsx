import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contatti = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato",
      description: "Riceverai una risposta il prima possibile. Grazie!",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan-glow text-xs font-semibold tracking-wider uppercase mb-6 border border-cyan/20"
          >
            Contatti
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight"
          >
            Prenota una
            <br />
            <span className="text-gradient">Consulenza</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Informazioni di Contatto</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Si riceve per appuntamento. Per prenotazioni chiamare il lunedì e mercoledì pomeriggio, 
                oppure compilare il modulo.
              </p>

              <div className="space-y-4 pt-4">
                <a href="tel:+393385937806" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefono</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">(+39) 338 593 7806</p>
                  </div>
                </a>

                <a href="mailto:studio@marionubileoculista.it" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">studio@marionubileoculista.it</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sede</p>
                    <p className="text-sm font-medium text-foreground">Via D'Ilio 34</p>
                    <p className="text-sm text-muted-foreground">66020 San Giovanni Teatino (CH)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Orari Prenotazione</p>
                    <p className="text-sm font-medium text-foreground">Lunedì e Mercoledì pomeriggio</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.5!2d14.18!3d42.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+D'Ilio+34%2C+San+Giovanni+Teatino!5e0!3m2!1sit!2sit!4v1700000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sede studio Prof. Nubile"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Richiedi un Appuntamento</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Nome e Cognome *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Telefono</label>
                      <Input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+39 333 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="mario@email.it"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Messaggio *</label>
                    <Textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Descrivi brevemente il motivo della visita..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-cyan-light gap-2">
                    <Send className="w-4 h-4" />
                    Invia Richiesta
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Sarai ricontattato entro 48 ore lavorative.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
