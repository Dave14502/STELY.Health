import { useState } from 'react';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import WhatWeTest from '@/components/WhatWeTest';
import WayBetter from '@/components/WayBetter';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import WaitlistModal from '@/components/WaitlistModal';

export default function Index() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
        {/* Decorative shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Monatlich macht Sinn mit dem einfachsten Bluttest der Welt
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Jeden Monat. Ein umfassender Test zu Hause, kostenlose Abholung und verwertbare Ergebnisse in Tagen.
              </p>

              {/* Price */}
              <p className="text-lg text-gray-900 mb-8">
                <span className="font-bold">Ab 89€ im Monat</span>
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl text-lg"
              >
                Hol dir deinen ersten Test
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                alt="STELY Bluttest-Kit"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* EU Validation Section */}
        <div className="w-full bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200/50 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏷️</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-200/50 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔬</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Analyse in DAkkS-akkreditiertem Labor (DIN EN ISO 15189)</p>
              </div>
              <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200/50 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Datenschutz nach DSGVO – sichere Verarbeitung auf EU-Servern</p>
              </div>
              <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-200/50 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍⚕️</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Medizinisch validierte Auswertung durch Fachpersonal</p>
              </div>
              <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl border border-rose-200/50 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🇩🇪</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Getestet in führenden deutschen Partnerlaboren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Sections */}
      <HowItWorks />
      <WhatWeTest />
      <WayBetter />
      <Pricing />
      <FAQ />

      <Footer />
      <CookieConsent />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
