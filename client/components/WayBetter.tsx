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
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F25792850322d4b9a9ed606a74d2e2f2c?format=webp&width=800"
                alt="Viel weniger Blut"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Way Less Time */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel weniger Zeit</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Warte nicht auf deinen Kaffee und überspringe nicht dein Training.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F9b6446b54be7401284ff957faa7f3a5b?format=webp&width=800"
                alt="Viel weniger Zeit"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Way More Efficient */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel effizienter</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Wir verfolgen die Marker, die wichtig sind.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F9087e8fd80f345c7892f0b313a483e98?format=webp&width=800"
                alt="Viel effizienter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Way More Effective */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Viel effektiver</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">Monatliches Tracking macht es einfach, dein Bestes zu zeigen.</h3>
            <div className="w-full h-80 lg:h-96 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fe5252cc6a6b5499289bfa37a6b2ce459?format=webp&width=800"
                alt="Viel effektiver"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
