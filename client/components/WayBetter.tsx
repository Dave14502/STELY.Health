export default function WayBetter() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">Deutlich besser als alles andere</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Less Blood */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Weniger Blut</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">10-mal weniger Blut als beim Arzt</p>
            <p className="text-base text-gray-700 text-center mb-8">Nur ein paar Tropfen statt mehrere Röhrchen. Einfacher. Schneller. Weniger unangenehm.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Ffd07ec78d8904dcab7a5bc989d5a1baf?format=webp&width=800"
                alt="Weniger Blut"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Less Time */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Weniger Zeit</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">Keine Wartezeiten</p>
            <p className="text-base text-gray-700 text-center mb-8">Kein Termin beim Arzt. Keine Wartezimmer. Kein verpasstes Training. Mach es, wann es dir passt.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F9b6446b54be7401284ff957faa7f3a5b?format=webp&width=800"
                alt="Weniger Zeit"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* More Efficient */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Effizienter</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">Nur die Marker, die zählen</p>
            <p className="text-base text-gray-700 text-center mb-8">Keine überflüssigen Tests. Wir messen, was wirklich Einfluss auf deine Performance, Energie und Gesundheit hat.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fdd3c5d81b6eb4ffe8646c21c5363f1d7?format=webp&width=800"
                alt="Effizienter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* More Effective */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Effektiver</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">Monatliches Tracking zeigt Muster</p>
            <p className="text-base text-gray-700 text-center mb-8">Einmalige Tests zeigen nur Momentaufnahmen. Monatliche Tests zeigen Trends – wie du dein Training trackst.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F712d11f95b84492cb7f64880d9d1e9d5?format=webp&width=800"
                alt="Effektiver"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
