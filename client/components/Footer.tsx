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
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Mitglieder-Login<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Karrieren<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition relative group">Creator-Partnerschaften<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></a></li>
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
            Rythm Health ist ein Gesundheitstechnologieunternehmen und keine Laboratoriums- oder Arztpraxis. Alle Labor- und medizinischen Dienste werden von unabhängigen Drittanbietern bereitgestellt. Diese Labor- und medizinischen Dienstleister legen ihre eigenen Preise fest. Obwohl Rythm Health möglicherweise einen einfachen Zugang zu bestimmten Labor- und medizinischen Dienstleistern in Ihrem Namen erleichtert, empfiehlt Rythm Health Sie nicht an Gesundheitsdienstleister weiter oder verweist Sie nicht an diese, und Sie können frei einen Gesundheitsdienstleister wählen und Rythm Health's Services weiterhin nutzen.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Rythm Health bietet keine medizinischen Ratschläge, Laborservices, Diagnosen, medizinische Behandlung oder irgendeine Form von medizinischer Meinung durch unsere Services oder auf andere Weise.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            Rythm Health's Services sind kein Ersatz für medizinische Versorgung, medizinische Ratschläge und/oder ein ausführliches Gespräch mit deinem Hausarzt oder einem anderen zugelassenen Anbieter. Wenn du Fragen zu Testergebnissen hast, empfehlen wir dir, diese mit deinem Hausarzt oder einem anderen zugelassenen Anbieter zu besprechen.
          </p>
        </div>
      </div>
    </footer>
  );
}
