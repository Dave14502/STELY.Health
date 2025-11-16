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
    'Persönlicher Support – keine Callcenterantworten',
  ];

  const flexibility = [
    'Pro Test abgerechnet',
    'Jederzeit pausieren oder kündigen',
    'Keine Mindestlaufzeit',
    'Volle Kostenkontrolle',
  ];

  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fe68beefb6f194086a94ad4f680f90310?format=webp&width=800"
                alt="STELY-Produkt"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-gray-900">STELY Mitgliedschaft</h2>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">ab 89 €</span>
                    <span className="text-lg text-gray-600">/Monat</span>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">Einfach. Schnell. Klar.</p>
                  <p className="text-gray-600">Monatliche Blutanalyse für echte Performance.</p>
                </div>

                <button
                  onClick={onOpenWaitlist}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition mb-8 text-base"
                >
                  Jetzt ersten Test sichern
                </button>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Was du bekommst</h3>
                <div className="space-y-3 mb-8">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-4 text-gray-900">Flexibel und ohne Risiko</h3>
                <div className="space-y-3">
                  {flexibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
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
