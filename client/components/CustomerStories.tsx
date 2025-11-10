export default function CustomerStories() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Monthly makes sense</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Story 1 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Improve your mood & libido</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I assumed my low mood and lack of libido were just part of a busy life. But Rythm helped me uncover a hormone imbalance. With a few simple changes, I feel like myself again—clearer, lighter, and more connected.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– James A</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Free Testosterone</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Story 2 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Maximize your energy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I was dragging through the day, no matter how much I rested. Rythm flagged low Free T3. After a few tweaks, my energy's solid—and I'm finally back to hitting the gym consistently after work.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– Sarah Jones</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Free T3</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Story 3 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Look and feel your best</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I wasn't feeling bad, just not quite myself. Rythm gave me real insights—and after a few small changes, I feel more balanced and back in my groove. Bonus: my biological age is now younger than my little brother's.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– Stephanie Charles</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Biological Age</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Baseline Chart */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Make optimal health your new baseline</h3>
          
          <div className="space-y-6">
            {[
              { label: '12 months', indicator: '⚠️ Caution', value: '0.7 ng/mL' },
              { label: '6 months', indicator: '⚠️ Average', value: '0.7 ng/mL' },
              { label: '3 months', indicator: '✓ Optimal', value: '0.5 ng/mL', highlighted: true },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{item.label}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.indicator.includes('Optimal')
                      ? 'bg-blue-100 text-blue-700'
                      : item.indicator.includes('Average')
                      ? 'bg-gray-300 text-gray-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.indicator}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.highlighted
                        ? 'bg-gradient-to-r from-blue-300 to-blue-500'
                        : 'bg-gray-400'
                    }`}
                    style={{ width: `${item.highlighted ? '75' : '50'}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>{item.value}</span>
                  {item.highlighted && <span>+16%</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
