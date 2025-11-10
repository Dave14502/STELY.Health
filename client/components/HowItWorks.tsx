export default function HowItWorks() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>

        <div className="space-y-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-lg mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-blue-500 mb-8">Collect from home</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                alt="Collect from home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-lg mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-blue-500 mb-8">Send your sample</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop"
                alt="Send your sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-lg mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-blue-500 mb-8">Get results in days</h3>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Get results in days"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
