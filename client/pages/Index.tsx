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
        <style>{`
          @keyframes slideWave {
            0% { transform: translateX(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-slide-wave {
            animation: slideWave 8s ease-in-out infinite;
          }
          .animate-slide-wave-1 { animation-delay: 0s; }
          .animate-slide-wave-2 { animation-delay: 1s; }
          .animate-slide-wave-3 { animation-delay: 2s; }
          .animate-slide-wave-4 { animation-delay: 3s; }
          .animate-slide-wave-5 { animation-delay: 4s; }
        `}</style>
        <div className="w-full bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-6 md:gap-12 min-h-32">
              <div className="flex flex-col items-center gap-3 animate-slide-wave animate-slide-wave-1 absolute md:relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm text-center max-w-40">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-slide-wave animate-slide-wave-2 absolute md:relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm text-center max-w-40">Analyse in DAkkS-akkreditierten Laboren nach DIN EN ISO 15189</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-slide-wave animate-slide-wave-3 absolute md:relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm text-center max-w-40">Datenschutz nach DSGVO mit Verarbeitung auf EU-Servern</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-slide-wave animate-slide-wave-4 absolute md:relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0h-2m2 0V8m0 2v2m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm text-center max-w-40">Medizinisch validierte Auswertung durch qualifiziertes Fachpersonal</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-slide-wave animate-slide-wave-5 absolute md:relative">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 100-4 2 2 0 000 4zM9 7h.01M9 3a1 1 0 11-2 0 1 1 0 012 0zm5 4a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm text-center max-w-40">Zusammenarbeit mit geprüften deutschen Partnerlaboren</p>
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
