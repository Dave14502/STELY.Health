import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import WhatWeTest from '@/components/WhatWeTest';
import Testimonials from '@/components/Testimonials';
import WayBetter from '@/components/WayBetter';
import CustomerStories from '@/components/CustomerStories';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        {/* Hero Image Background */}
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=800&fit=crop"
            alt="Blood test kit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* HSA/FSA Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">HSA/FSA berechtigt</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-gray-900 mb-6">
              Dein monatlicher Bluttest
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Jeden Monat. Ein umfassender Test zu Hause, kostenlose Abholung und verwertbare Ergebnisse in Tagen. Alles für nur <span className="font-bold">$79.</span>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-12">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl">
                Hol dir deinen ersten Test
              </button>
            </div>

            {/* Certification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">✓</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">FDA FREIGEGEBEN</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">HIPAA-KONFORM</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">📋</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">CLIA-ZERTIFIZIERT</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">🏥</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">CAP-AKKREDITIERT</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl">✓</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">FDA FREIGEGEBEN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Sections */}
      <HowItWorks />
      <WhatWeTest />
      <Testimonials />
      <WayBetter />
      <CustomerStories />
      <Pricing />

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Häufig gestellte Fragen</h2>
          <p className="text-gray-600 text-lg mb-8">
            Haben Sie Fragen? Schauen Sie sich unsere Häufig gestellten Fragen an oder wenden Sie sich an unser Support-Team.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition">
            Alle Häufig gestellten Fragen anzeigen
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
