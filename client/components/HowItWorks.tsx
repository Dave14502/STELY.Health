export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">Wie es funktioniert</h2>

        <div className="space-y-20 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative">
            <div className="w-16 h-16 rounded-full border-3 border-blue-500 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-blue-500 font-bold text-2xl mb-8 shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-bold text-blue-500 mb-10">Probe zu Hause sammeln</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                alt="Probe zu Hause sammeln"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative">
            <div className="w-16 h-16 rounded-full border-3 border-emerald-500 bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center text-emerald-500 font-bold text-2xl mb-8 shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-emerald-500 mb-10">Sende deine Probe</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop"
                alt="Sende deine Probe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative">
            <div className="w-16 h-16 rounded-full border-3 border-purple-500 bg-gradient-to-br from-purple-50 to-white flex items-center justify-center text-purple-500 font-bold text-2xl mb-8 shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-purple-500 mb-10">Ergebnisse in Tagen erhalten</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Ergebnisse in Tagen erhalten"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
