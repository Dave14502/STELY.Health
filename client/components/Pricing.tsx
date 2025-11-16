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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">STELY Mitgliedschaft</h2>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-5xl font-bold text-gray-900">ab 89 €</span>
            <span className="text-lg text-gray-600">pro Monat</span>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            <span className="font-semibold">Einfach. Schnell. Klar.</span>
            <br />
            <span className="text-gray-600">Monatliche Blutanalyse für echte Performance.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* What you get */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Was du bekommst</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flexible and risk-free */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexibel und ohne Risiko</h3>
            <div className="space-y-4">
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

        <div className="text-center">
          <button
            onClick={onOpenWaitlist}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-12 py-4 rounded-full transition shadow-lg hover:shadow-xl text-lg"
          >
            Jetzt ersten Test sichern
          </button>
        </div>
      </div>
    </section>
  );
}
