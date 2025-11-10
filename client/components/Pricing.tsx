import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50 p-12 mb-12">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
            alt="Rythm product"
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <h2 className="text-4xl font-bold text-center mb-2">The Rythm Membership</h2>
          <div className="text-center mb-8">
            <span className="text-4xl font-bold text-gray-900">$79</span>
            <span className="text-gray-600 ml-2">/mo</span>
            <p className="text-sm text-gray-600 mt-2">+ shipping & handling</p>
          </div>

          <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-black transition mb-4">
            Get your first test
          </button>

          <p className="text-center text-sm text-gray-600 space-y-1">
            <span className="block">Billed per test</span>
            <span className="block">HSA/FSA eligible</span>
            <span className="block">Skip or cancel anytime</span>
          </p>
        </div>

        {/* What's Included */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">What's Included</h3>
          <div className="space-y-4">
            {[
              'A new Rythm test every month',
              'Fast shipping',
              'Free Sample pick up service',
              'Fast, human customer service',
              'Rythm perks',
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
