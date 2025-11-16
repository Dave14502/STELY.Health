import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">STELY</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Mitglieder-Login<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Karrieren<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Creator-Partnerschaften<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span></a></li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="font-semibold mb-4">Partnerschaften</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Fachleute-Partnerschaften<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Allgemeine Partnerschaften<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtlich</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Rückerstattungs- und Übersprungrichtlinie<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Allgemeine Geschäftsbedingungen<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Datenschutzrichtlinie<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            STELY ist ein Gesundheitstechnologieanbieter und keine Arztpraxis. Die Laboranalysen werden von unabhängigen, externen Partnerlaboren durchgeführt. Du bist frei in der Wahl deines Arztes und kannst die STELY Services unabhängig davon nutzen.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            STELY bietet keine medizinischen Diagnosen, Behandlungen oder therapeutischen Empfehlungen an. Alle Inhalte dienen ausschließlich der Information.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            Die STELY Ergebnisse ersetzen nicht die persönliche Beratung durch eine Ärztin oder einen Arzt. Wenn du Fragen zu deinen Werten hast oder medizinische Entscheidungen treffen möchtest, besprich die Ergebnisse bitte mit einem qualifizierten Gesundheitsdienstleister.
          </p>
        </div>
      </div>
    </footer>
  );
}
