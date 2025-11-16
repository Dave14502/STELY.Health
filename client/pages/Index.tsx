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
      <Header onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Monatliche Blutanalyse. Maximale Kontrolle über deine Performance.
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Ein Test zu Hause. Ein klarer Bericht. Ein System, das dir zeigt, wie dein Körper wirklich funktioniert.
              </p>

              {/* Price */}
              <p className="text-lg text-gray-900 mb-4">
                <span className="font-bold">Für nur 79 Euro im Monat.</span>
              </p>

              <p className="text-base text-gray-600 mb-8">
                Kein Arztbesuch. Kein Warten. Keine Bürokratie.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl text-lg mb-4"
              >
                Jetzt starten
              </button>
              <p className="text-sm text-gray-600">
                Inklusive CE-zertifiziertem Bluttest und Auswertung durch EU-Labore
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fc1d22e5a8bc046eba05dd0a959880b63?format=webp&width=800"
                alt="STELY Bluttest-Kit"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* EU Validation Section */}
        <div className="w-full bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl font-light text-gray-400">✓</span>
                <p className="text-gray-700 font-medium text-sm text-center">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl font-light text-gray-400">✓</span>
                <p className="text-gray-700 font-medium text-sm text-center">Analyse in DAkkS-akkreditiertem Labor (DIN EN ISO 15189)</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl font-light text-gray-400">✓</span>
                <p className="text-gray-700 font-medium text-sm text-center">Datenschutz nach DSGVO – sichere Verarbeitung auf EU-Servern</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl font-light text-gray-400">✓</span>
                <p className="text-gray-700 font-medium text-sm text-center">Medizinisch validierte Auswertung durch Fachpersonal</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl font-light text-gray-400">✓</span>
                <p className="text-gray-700 font-medium text-sm text-center">Getestet in führenden deutschen Partnerlaboren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Sections */}
      <HowItWorks />
      <WhatWeTest />
      <WayBetter />
      <Pricing onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <FAQ />

      <Footer />
      <CookieConsent />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
