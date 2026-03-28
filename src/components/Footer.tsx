import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Prof. Mario Nubile</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professore Associato in Oftalmologia. Responsabile Centro Cornea e Superficie Oculare presso l'Università "G. d'Annunzio" Chieti-Pescara.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Specializzazioni</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/specializzazioni" className="hover:text-cyan transition-colors">Chirurgia Refrattiva</Link></li>
              <li><Link to="/specializzazioni" className="hover:text-cyan transition-colors">Chirurgia della Cataratta</Link></li>
              <li><Link to="/specializzazioni" className="hover:text-cyan transition-colors">Cheratocono</Link></li>
              <li><Link to="/specializzazioni" className="hover:text-cyan transition-colors">Trapianti di Cornea</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan" />
                <a href="tel:+393385937806" className="hover:text-cyan transition-colors">(+39) 338 593 7806</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:studio@marionubileoculista.it" className="hover:text-cyan transition-colors">studio@marionubileoculista.it</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan mt-0.5" />
                <span>Via D'Ilio 34, 66020 San Giovanni Teatino (CH)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Prof. Mario Nubile — Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
