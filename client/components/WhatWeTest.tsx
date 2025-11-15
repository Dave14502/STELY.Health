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
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section id="what-we-test" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Was wir jeden Monat testen</h2>

        <div className="space-y-4">
          {testCategories.map((category) => (
            <div key={category.title} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-black">{category.title}</h3>
                {expandedCategories.includes(category.title) ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedCategories.includes(category.title) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.id} className="text-gray-700">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
