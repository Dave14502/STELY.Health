import { useState } from "react";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import WhatWeTest from "@/components/WhatWeTest";
import WayBetter from "@/components/WayBetter";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WaitlistModal from "@/components/WaitlistModal";

export default function Index() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Hidden Netlify Form for submission */}
      <form name="waitlist" method="POST" style={{ display: 'none' }}>
        <input type="hidden" name="form-name" value="waitlist" />
        <input type="email" name="email" />
      </form>

      <Header onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Monatliche Blutanalyse. Kontrolle über deine Performance.
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Ein Test zu Hause. Klare Ergebnisse. Echte Kontrolle.
              </p>

              {/* Price */}
              <p className="text-lg text-gray-900 mb-4">
                <span className="font-bold">Für nur 89 Euro im Monat.</span>
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
                CE-zertifiziert, EU-Labore, monatlich
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
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    CE-gekennzeichnetes Testkit nach EU-IVDR
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fd2be1f409e834d6dada82b4e83238010?format=webp&width=800"
                    alt="Mikroskop"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Analyse in deutschen Partnerlaboren
                  </p>
                </div>
                <div className="carousel-item">
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Datenschutz nach DSGVO mit EU-Servern
                  </p>
                </div>
                <div className="carousel-item">
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="10" y="2" width="4" height="20" rx="1" />
                    <rect x="2" y="10" width="20" height="4" rx="1" />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Medizinisch geprüfte und klar erklärte Ergebnisse
                  </p>
                </div>

                {/* Duplicate items for infinite loop */}
                <div className="carousel-item">
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    CE-gekennzeichnetes Testkit nach EU-IVDR
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fd2be1f409e834d6dada82b4e83238010?format=webp&width=800"
                    alt="Mikroskop"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Analyse in deutschen Partnerlaboren
                  </p>
                </div>
                <div className="carousel-item">
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Datenschutz nach DSGVO mit EU-Servern
                  </p>
                </div>
                <div className="carousel-item">
                  <svg
                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="10" y="2" width="4" height="20" rx="1" />
                    <rect x="2" y="10" width="20" height="4" rx="1" />
                  </svg>
                  <p className="text-gray-700 font-medium text-sm text-center">
                    Medizinisch geprüfte und klar erklärte Ergebnisse
                  </p>
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
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
