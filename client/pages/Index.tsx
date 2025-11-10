import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import WhatWeTest from '@/components/WhatWeTest';
import Testimonials from '@/components/Testimonials';
import WayBetter from '@/components/WayBetter';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* HSA/FSA Badge */}
              <div className="flex items-center gap-2 mb-8">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700">HSA/FSA berechtigt</span>
              </div>

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
                Alles für nur <span className="font-bold">$79.</span>
              </p>

              {/* CTA Button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl text-lg">
                Hol dir deinen ersten Test
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                alt="Rythm Bluttest-Kit"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="w-full bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-gray-700">HIPAA-KONFORM</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-gray-700">CLIA-ZERTIFIZIERT</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-gray-700">CAP-AKKREDITIERT</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-gray-700">FDA-FREIGEGEBEN</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-gray-700">HIPAA-KONFORM</p>
              </div>
            </div>
          </div>
        </div>

        {/* EU Validation Section */}
        <div className="w-full bg-gray-50 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Validierung & Zertifizierungen</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 font-medium">CE-gekennzeichnetes Testkit nach EU-IVDR</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 font-medium">Analyse in DAkkS-akkreditiertem Labor (DIN EN ISO 15189)</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 font-medium">Datenschutz nach DSGVO – sichere Verarbeitung auf EU-Servern</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 font-medium">Medizinisch validierte Auswertung durch Fachpersonal</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 font-medium">Getestet in führenden deutschen Partnerlaboren</p>
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
      <Pricing />
      <FAQ />

      <Footer />
    </div>
  );
}
