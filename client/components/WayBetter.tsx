export default function WayBetter() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">Besser als der Rest</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Less Blood */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Weniger Blut</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">10-mal weniger Blut als beim Arzt</p>
            <p className="text-base text-gray-700 text-center mb-8">Nur ein paar Tropfen. Keine Nadel-Angst.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fe2776fc833734b14abad9d844ee71225?format=webp&width=800"
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
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F2dac9fcd2d5a47b9a906897ee15b1458?format=webp&width=800"
                alt="Effizienter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* More Effective */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">Effektiver</h3>
            <p className="text-lg font-semibold text-center mb-4 text-gray-900">Monatliches Tracking zeigt Muster</p>
            <p className="text-base text-gray-700 text-center mb-8">Monatliche Tests funktionieren wie dein Trainings-Tracking – sie zeigen dir Fortschritte und Trends über die Zeit.</p>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Ff8588cb95fe442659bc40e06cb4c0bf0?format=webp&width=800"
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
