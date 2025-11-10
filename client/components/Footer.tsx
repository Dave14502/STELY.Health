import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">rythm</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Mitglieder-Login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Karrieren</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Creator-Partnerschaften</a></li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="font-semibold mb-4">Partnerschaften</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Fachleute-Partnerschaften</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Allgemeine Partnerschaften</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtlich</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Rückerstattungs- und Übersprungrichtlinie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Allgemeine Geschäftsbedingungen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Datenschutzrichtlinie</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 text-sm leading-relaxed">
            Rythm Health ist ein Gesundheitstechnologieunternehmen und keine Laboratoriums- oder Arztpraxis. Alle Labor- und medizinischen Dienste werden von unabhängigen Drittanbietern bereitgestellt. Diese Labor- und medizinischen Dienstleister legen ihre eigenen Preise fest. Obwohl Rythm Health möglicherweise einen einfachen Zugang zu bestimmten Labor- und medizinischen Dienstleistern in Ihrem Namen erleichtert, empfiehlt Rythm Health Sie nicht an Gesundheitsdienstleister weiter oder verweist Sie nicht an diese, und Sie können frei einen Gesundheitsdienstleister wählen und Rythm Health's Services weiterhin nutzen.
          </p>
        </div>
      </div>
    </footer>
  );
}
