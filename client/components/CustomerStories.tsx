export default function CustomerStories() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Monatlich macht Sinn</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Story 1 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Verbessere deine Stimmung und Libido</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ich dachte, meine schlechte Laune und mangelnde Libido seien einfach Teil eines arbeitsreichen Lebens. Aber Rythm half mir, ein Hormonungleichgewicht zu entdecken. Mit ein paar einfachen Änderungen fühle ich mich wieder wie ich selbst—klarer, leichter und verbundener.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– James A</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Freies Testosteron</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Okt</span>
              <span>Nov</span>
              <span>Dez</span>
            </div>
          </div>

          {/* Story 2 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Maximiere deine Energie</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ich war den ganzen Tag schlecht drauf, egal wie viel ich ruhte. Rythm erkannte niedriges freies T3. Nach ein paar Anpassungen ist meine Energie stabil—und ich bin endlich wieder konsistent ins Fitnessstudio gehen, nachdem ich die Arbeit beende.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– Sarah Jones</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Freies T3</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Okt</span>
              <span>Nov</span>
              <span>Dez</span>
            </div>
          </div>

          {/* Story 3 */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Sehen und fühle dich am besten</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mir ging es nicht schlecht, ich fühlte mich einfach nicht ganz wie ich selbst. Rythm gab mir echte Einblicke—und nach ein paar kleinen Änderungen fühle ich mich ausgeglichener und wieder in meinem Groove. Bonus: mein biologisches Alter ist jetzt jünger als das meines kleinen Bruders.
            </p>
            <p className="text-sm text-gray-600 font-semibold mb-4">– Stephanie Charles</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Biologisches Alter</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sep</span>
              <span>Okt</span>
              <span>Nov</span>
              <span>Dez</span>
            </div>
          </div>
        </div>

        {/* Baseline Chart */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Mache optimale Gesundheit zur deiner neuen Baseline</h3>

          <div className="space-y-6">
            {[
              { label: '12 Monate', indicator: '⚠️ Warnung', value: '0.7 ng/mL' },
              { label: '6 Monate', indicator: '⚠️ Durchschnitt', value: '0.7 ng/mL' },
              { label: '3 Monate', indicator: '✓ Optimal', value: '0.5 ng/mL', highlighted: true },
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
