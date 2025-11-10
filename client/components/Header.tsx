import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">
            rythm
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-black transition">Über</a>
            <a href="#" className="text-gray-700 hover:text-black transition">So funktioniert es</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Preise</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Häufig gestellte Fragen</a>
          </nav>

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
            <a href="#" className="text-gray-700 hover:text-black transition">Über</a>
            <a href="#" className="text-gray-700 hover:text-black transition">So funktioniert es</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Preise</a>
            <a href="#" className="text-gray-700 hover:text-black transition">Häufig gestellte Fragen</a>
          </nav>
        )}
      </div>
    </header>
  );
}
