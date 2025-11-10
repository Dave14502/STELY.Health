export default function WayBetter() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">Viel besseres Erlebnis</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Way Less Blood */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel weniger Blut</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Wie 10x weniger.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-light text-gray-300 mb-3">10x</div>
                <p className="text-sm text-gray-500">Weniger Blutentnahme erforderlich</p>
              </div>
            </div>
          </div>

          {/* Way Less Time */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel weniger Zeit</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Warte nicht auf deinen Kaffee und überspringe nicht dein Training.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-light text-gray-300 mb-3">⏱️</div>
                <p className="text-sm text-gray-500">Schnelle Probenentnahme</p>
              </div>
            </div>
          </div>

          {/* Way More Efficient */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel effizienter</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Wir verfolgen die Marker, die wichtig sind.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-light text-gray-300 mb-3">📊</div>
                <p className="text-sm text-gray-500">Umfassende Gesundheitsmarker</p>
              </div>
            </div>
          </div>

          {/* Way More Effective */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel effektiver</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Monatliches Tracking macht es einfach, dein Bestes zu zeigen.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-light text-gray-300 mb-3">💪</div>
                <p className="text-sm text-gray-500">Laufende Gesundheitsoptimierung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
