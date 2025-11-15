export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Probe zu Hause sammeln",
      image: "https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fa45689e701334367a30714c49da70164?format=webp&width=800",
      alt: "Probe zu Hause sammeln"
    },
    {
      number: 2,
      title: "Sende deine Probe",
      image: "https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fd64d3967479e42ac847590a4cd5c0967?format=webp&width=800",
      alt: "Sende deine Probe"
    },
    {
      number: 3,
      title: "Ergebnisse in Tagen erhalten",
      image: "https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fadad71577d2c4fcc8b20831845929acf?format=webp&width=800",
      alt: "Ergebnisse in Tagen erhalten"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Wie es funktioniert</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Step Number */}
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-semibold text-lg mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold text-blue-500 text-center mb-6">
                {step.title}
              </h3>

              {/* Step Image */}
              <div className="w-full rounded-2xl overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
