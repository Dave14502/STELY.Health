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
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Member login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Creator Partnerships</a></li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="font-semibold mb-4">Partnerships</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Practitioner Partnerships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">General Partnerships</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Refund and Skip Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 text-sm leading-relaxed">
            Rythm Health is a Healthcare Technology Company and not a Laboratory or Medical Provider. All laboratory and medical services are provided by independent third parties. These laboratory and medical service providers set their own pricing. Although Rythm Health may facilitate easy access to certain laboratory and medical service providers on your behalf, Rythm Health does not recommend or refer you to any healthcare providers, and you are free to choose any healthcare provider and to continue to use Rythm Health's services.
          </p>
        </div>
      </div>
    </footer>
  );
}
