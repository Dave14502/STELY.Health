export default function WayBetter() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Viel besseres Erlebnis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Way Less Blood */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Viel weniger Blut</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Wie 10x weniger.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">10x</div>
                <p className="text-gray-500">Weniger Blutentnahme erforderlich</p>
              </div>
            </div>
          </div>

          {/* Way Less Time */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Viel weniger Zeit</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Warte nicht auf deinen Kaffee und überspringe nicht dein Training.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">⏱️</div>
                <p className="text-gray-500">Schnelle Probenentnahme</p>
              </div>
            </div>
          </div>

          {/* Way More Efficient */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Viel effizienter</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Wir verfolgen die Marker, die wichtig sind.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">📊</div>
                <p className="text-gray-500">Umfassende Gesundheitsmarker</p>
              </div>
            </div>
          </div>

          {/* Way More Effective */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Viel effektiver</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Monatliches Tracking macht es einfach, dein Bestes zu zeigen.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">💪</div>
                <p className="text-gray-500">Laufende Gesundheitsoptimierung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
