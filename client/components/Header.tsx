import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">
            STELY
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition">Wie es funktioniert</a>
            <a href="#what-we-test" className="text-gray-700 hover:text-black transition">Was wir testen</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition">Preisgestaltung</a>
            <a href="#footer" className="text-gray-700 hover:text-black transition">Partner mit uns</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-black hover:text-gray-700 transition font-medium">
              Anmelden
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition font-medium">
              STELY erhalten
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition">Wie es funktioniert</a>
            <a href="#what-we-test" className="text-gray-700 hover:text-black transition">Was wir testen</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition">Preisgestaltung</a>
            <a href="#footer" className="text-gray-700 hover:text-black transition">Partner mit uns</a>
            <hr className="my-2" />
            <button className="text-left text-gray-700 hover:text-black transition font-medium">
              Anmelden
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition font-medium text-left">
              STELY erhalten
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
