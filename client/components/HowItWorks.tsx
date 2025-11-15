export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Collect from home",
      image: "https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F23ee8aa84d2a4bf2b2c0ae7ebc037eaa?format=webp&width=800",
      alt: "Collect from home"
    },
    {
      number: 2,
      title: "Send your sample",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
      alt: "Send your sample"
    },
    {
      number: 3,
      title: "Get results in days",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      alt: "Get results in days"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">How it works</h2>

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
