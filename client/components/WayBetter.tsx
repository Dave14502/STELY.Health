export default function WayBetter() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Way better experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Way Less Blood */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Way less blood</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Like 10x less.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">10x</div>
                <p className="text-gray-500">Less blood collection required</p>
              </div>
            </div>
          </div>

          {/* Way Less Time */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Way less time</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Don't wait for your coffee or skip your workout.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">⏱️</div>
                <p className="text-gray-500">Quick sample collection</p>
              </div>
            </div>
          </div>

          {/* Way More Efficient */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Way more efficient</span>
            <h3 className="text-2xl font-semibold text-center mb-8">We track the markers that matter.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">📊</div>
                <p className="text-gray-500">Comprehensive health markers</p>
              </div>
            </div>
          </div>

          {/* Way More Effective */}
          <div className="flex flex-col items-center">
            <span className="text-blue-500 font-bold text-sm mb-2 uppercase tracking-widest">Way more effective</span>
            <h3 className="text-2xl font-semibold text-center mb-8">Monthly tracking makes it easy to look and feel your best.</h3>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">💪</div>
                <p className="text-gray-500">Ongoing health optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
