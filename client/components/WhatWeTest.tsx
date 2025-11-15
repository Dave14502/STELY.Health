import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface TestItem {
  id: string;
  name: string;
  description: string;
}

interface TestCategory {
  title: string;
  items: TestItem[];
}

const testCategories: TestCategory[] = [
  {
    title: 'Hormonelles Gleichgewicht',
    items: [
      { id: '1', name: 'Östrogen (Östradiol E2)', description: 'Östrogen ist ein Schlüsselhormon bei Männern und Frauen, das die reproduktive Gesundheit, Stimmung, Knochenstärke und das allgemeine hormonelle Gleichgewicht unterstützt.' },
      { id: '2', name: 'Progesteron', description: 'Progesteron ist entscheidend für den Menstruationszyklus, die Schwangerschaft und die Aufrechterhaltung des hormonellen Gleichgewichts bei Frauen.' },
      { id: '3', name: 'SHBG', description: 'Sexualhormon-bindendes Globulin reguliert die Verfügbarkeit von Testosteron und Östrogen im Körper.' },
      { id: '4', name: 'TSH (Schilddrüse)', description: 'Das Schilddrüsen-stimulierende Hormon steuert die Schilddrüsenfunktion und den Stoffwechsel.' },
      { id: '5', name: 'Freies Testosteron', description: 'Das biologisch aktive Testosteron, das für Muskelaufbau, Knochengesundheit und sexuelle Funktion bei Männern und Frauen wichtig ist.' },
      { id: '6', name: 'Gesamt-Testosteron', description: 'Die Gesamtmenge an Testosteron im Blut, einschließlich gebundener und freier Form.' },
    ],
  },
  {
    title: 'Herzgesundheit',
    items: [
      { id: '7', name: 'ApoB', description: 'Apolipoprotein B ist ein starker Indikator für das Herzinfarkt- und Schlaganfallrisiko.' },
      { id: '8', name: 'LDL-Cholesterin', description: 'Das "schlechte" Cholesterin, das sich in den Arterien ansammeln und das Herzerkrankungsrisiko erhöhen kann.' },
      { id: '9', name: 'CRP (Entzündung)', description: 'C-reaktives Protein ist ein Marker für Entzündung, die mit Herzerkrankungen und anderen chronischen Erkrankungen verbunden ist.' },
      { id: '10', name: 'HDL-Cholesterin', description: 'Das "gute" Cholesterin, das Arterien schützt und das Herzerkrankungsrisiko senkt.' },
      { id: '11', name: 'Triglyceride', description: 'Eine Art Fett im Blut, das bei erhöhten Werten das Risiko für Herzerkrankungen erhöhen kann.' },
    ],
  },
  {
    title: 'Stoffwechseleffizienz',
    items: [
      { id: '12', name: 'Ferritin (Eisen)', description: 'Ein Protein, das Eisen speichert und für die Sauerstofftransport- und Energieproduktion wichtig ist.' },
      { id: '13', name: 'Albumin', description: 'Das Hauptblutprotein, das Nährstoffe transportiert und die Gesundheit unterstützt.' },
      { id: '14', name: 'Freies T3 (Schilddrüse)', description: 'Das aktive Schilddrüsenhormon, das den Stoffwechsel und die Energieproduktion reguliert.' },
      { id: '15', name: 'Vitamin D', description: 'Ein essentielles Vitamin für Knochengesundheit, Immunfunktion und allgemeines Wohlbefinden.' },
      { id: '16', name: 'Triglyceride', description: 'Eine Art Fett im Blut, das bei erhöhten Werten das Risiko für Herzerkrankungen erhöhen kann.' },
      { id: '17', name: 'LDL-C / ApoB (Partikelgröße)', description: 'Das Verhältnis zeigt die Größe und Zusammensetzung der LDL-Partikel, was das Risiko für Herzerkrankungen beeinflusst.' },
      { id: '18', name: 'Triglyceride / HDL', description: 'Dieses Verhältnis ist ein wichtiger Marker für die metabolische Gesundheit und das Herzerkrankungsrisiko.' },
    ],
  },
  {
    title: 'Langlebigkeit',
    items: [
      { id: '19', name: 'Biologisches Alter', description: 'Eine Einschätzung deines physiologischen Alters basierend auf Gesundheitsmarkern, nicht nur der Anzahl der Jahre.' },
      { id: '20', name: 'STELY-Punktzahl', description: 'Ein umfassender Gesundheitsscore, der alle deine Messwerte kombiniert, um deine allgemeine Gesundheit zu bewerten.' },
      { id: '21', name: 'Personalisierte Baselines', description: 'Individuelle Referenzwerte, die deine Ausgangsmessungen verfolgen und Verbesserungen im Laufe der Zeit zeigen.' },
    ],
  },
];

export default function WhatWeTest() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="what-we-test" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Was wir jeden Monat testen</h2>

        <div className="space-y-12">
          {testCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-gray-300 transition">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
                    >
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      {expandedItems.includes(item.id) ? (
                        <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {expandedItems.includes(item.id) && (
                      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
