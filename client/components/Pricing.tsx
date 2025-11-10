import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50 p-12 mb-12">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
            alt="STELY-Produkt"
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <h2 className="text-4xl font-bold text-center mb-2">Die STELY-Mitgliedschaft</h2>
          <div className="text-center mb-8">
            <span className="text-4xl font-bold text-gray-900">ab 89€</span>
            <span className="text-gray-600 ml-2">/Monat</span>
            <p className="text-sm text-gray-600 mt-2">+ Versand & Bearbeitung</p>
          </div>

          <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-black transition mb-4 text-lg">
            Hol dir deinen ersten Test
          </button>

          <p className="text-center text-sm text-gray-600 space-y-1">
            <span className="block">Pro Test abgerechnet</span>
            <span className="block">HSA/FSA berechtigt</span>
            <span className="block">Jederzeit überspringen oder kündigen</span>
          </p>
        </div>

        {/* What's Included */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Was ist enthalten</h3>
          <div className="space-y-4">
            {[
              'Ein neuer STELY-Test jeden Monat',
              'Schneller Versand',
              'Kostenloser Probenabholservice',
              'Schneller, menschlicher Kundenservice',
              'STELY-Vorteile',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
