import { Check } from 'lucide-react';

interface PricingProps {
  onOpenWaitlist: () => void;
}

export default function Pricing({ onOpenWaitlist }: PricingProps) {
  const features = [
    'Ein neues Testkit jeden Monat',
    'Schneller Versand und einfacher Rückversand',
    'Analyse in deutschen Partnerlaboren',
    'Klar verständliche Ergebnisse im Dashboard',
    'Monatliche Trendlinien statt einer Momentaufnahme',
    'Persönlicher Support',
  ];

  const metadata = [
    'Pro Test abgerechnet',
    'Jederzeit pausieren oder kündigen',
    'Keine Mindestlaufzeit',
  ];

  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Image */}
            <div className="flex items-start justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fe68beefb6f194086a94ad4f680f90310?format=webp&width=800"
                alt="STELY-Produkt"
                className="w-full h-auto rounded-lg object-cover max-h-96"
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-start">
              {/* Header and Price */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">STELY Mitgliedschaft</h2>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold text-gray-900">89 €</span>
                    <span className="text-lg text-gray-600">/Monat</span>
                  </div>
                  <p className="text-sm text-gray-500">+ Versand & Bearbeitung</p>
                </div>
              </div>

              {/* Subheading */}
              <p className="text-gray-700 mb-8">
                <span className="font-semibold">Einfach. Schnell. Klar.</span>
                <br />
                <span className="text-gray-600">Monatliche Blutanalyse für echte Performance.</span>
              </p>

              {/* CTA Button */}
              <button
                onClick={onOpenWaitlist}
                className="bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-bold transition mb-4 text-base w-full sm:w-auto"
              >
                Jetzt ersten Test sichern
              </button>

              {/* Metadata Tags */}
              <div className="flex gap-3 mb-8 text-xs text-gray-600">
                {metadata.map((tag, index) => (
                  <span key={index}>{tag}{index < metadata.length - 1 && ' •'}</span>
                ))}
              </div>

              {/* What's Included */}
              <div>
                <h3 className="font-bold mb-4 text-gray-900 text-lg">Was ist enthalten</h3>
                <div className="space-y-3">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
