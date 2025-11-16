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
            100% { transform: translateX(calc(-270px * 4 - 1.5rem * 4)); }
          }
          .carousel-wrapper {
            overflow: hidden;
          }
          .carousel-container {
            display: flex;
            gap: 1.5rem;
            padding: 0.5rem 0;
            animation: autoScroll 30s linear infinite;
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
              100% { transform: translateX(calc(-230px * 4 - 1.5rem * 4)); }
            }
          }
        `}</style>
        <div className="w-full bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="carousel-wrapper">
              <div className="carousel-container">
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="carousel-item">
                <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm0 5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7.46-2.89c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.38-.39.38-1.02 0-1.41zM5.95 5.11L4.54 6.52c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0zM1 12c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1H1zm20 0c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm-1.46 4.89l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41zM6.96 18.9l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41z" />
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
                  <path d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z" />
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
                  <path d="M12 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm0 5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7.46-2.89c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.38-.39.38-1.02 0-1.41zM5.95 5.11L4.54 6.52c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0zM1 12c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1H1zm20 0c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm-1.46 4.89l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41zM6.96 18.9l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41z" />
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
                  <path d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3z" />
                </svg>
                <p className="text-gray-700 font-medium text-sm text-center">Medizinisch geprüfte und klar erklärte Ergebnisse</p>
              </div>
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
