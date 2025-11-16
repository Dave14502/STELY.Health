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

        {/* Validation Carousel Section */}
        <style>{`
          @keyframes autoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-260px * 8 - 1.5rem * 8)); }
          }
          .carousel-container {
            display: flex;
            gap: 1.5rem;
            overflow: hidden;
            padding: 0.5rem 0;
            animation: autoScroll 40s linear infinite;
          }
          .carousel-container:hover {
            animation-play-state: paused;
          }
          .carousel-item {
            flex: 0 0 auto;
            width: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
          @media (max-width: 768px) {
            .carousel-item {
              width: 220px;
            }
            @keyframes autoScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-220px * 8 - 1.5rem * 8)); }
            }
          }
        `}</style>
        <div className="w-full bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="carousel-container">
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zm-2 3h4c.552 0 1 .448 1 1v2h2c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1h-10c-.552 0-1-.448-1-1v-7c0-.552.448-1 1-1h2v-2c0-.552.448-1 1-1zm1 2v2h2v-2h-2zm-3 3h8v6h-8v-6z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Analyse in deutschen Partnerlaboren</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Datenschutz nach DSGVO mit EU-Servern</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9h-2.5v2.5h-2v-2.5H8v-2h2.5V8h2v2.5h2.5v2z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Medizinisch geprüfte und klar erklärte Ergebnisse</p>
              </div>

              {/* Duplicate items for infinite loop */}
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zm-2 3h4c.552 0 1 .448 1 1v2h2c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1h-10c-.552 0-1-.448-1-1v-7c0-.552.448-1 1-1h2v-2c0-.552.448-1 1-1zm1 2v2h2v-2h-2zm-3 3h8v6h-8v-6z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Analyse in deutschen Partnerlaboren</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Datenschutz nach DSGVO mit EU-Servern</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9h-2.5v2.5h-2v-2.5H8v-2h2.5V8h2v2.5h2.5v2z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Medizinisch geprüfte und klar erklärte Ergebnisse</p>
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
