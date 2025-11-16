import { useState } from 'react';
import { Plus, Minus, Scale, Leaf, Shield } from 'lucide-react';

interface TestItem {
  id: string;
  name: string;
  description: string;
  genderIcon?: 'male' | 'female';
}

interface TestCategory {
  title: string;
  icon: typeof Scale;
  items: TestItem[];
}

const testCategories: TestCategory[] = [
  {
    title: 'Hormonelles Gleichgewicht',
    icon: Scale,
    items: [
      { id: '1', name: 'Östrogen (Östradiol E2)', description: 'Östrogen ist ein wichtiges Hormon bei Männern und Frauen, das die reproduktive Gesundheit, Stimmung, Knochengesundheit und das allgemeine hormonelle Gleichgewicht unterstützt.' },
      { id: '2', name: 'Progesteron', description: 'Progesteron hilft dabei, Hormone im Gleichgewicht zu halten und unterstützt Schlaf, Stimmung und die allgemeine Stabilität im Körper.', genderIcon: 'female' },
      { id: '3', name: 'SHBG (Sexualhormon bindendes Globulin)', description: 'SHBG kontrolliert, wie viel aktives Östrogen und Testosteron dein Körper nutzen kann, was Einfluss auf Energie, Stimmung und Libido hat.' },
      { id: '4', name: 'TSH (Thyreoidea stimulierendes Hormon)', description: 'Ein Hormon, das die Schilddrüse reguliert. Es steuert Stoffwechsel, Energie und die Temperaturregulation.' },
      { id: '5', name: 'Gesamt und freies Testosteron', description: 'Testosteron beeinflusst Muskelmasse, Energie, Stimmung, Libido und Knochengesundheit.', genderIcon: 'male' },
    ],
  },
  {
    title: 'Herzgesundheit',
    icon: Scale,
    items: [
      { id: '6', name: 'ApoB', description: 'Apolipoprotein B ist ein starker Indikator für das Herzinfarkt- und Schlaganfallrisiko.' },
      { id: '7', name: 'LDL-Cholesterin', description: 'Das "schlechte" Cholesterin, das sich in den Arterien ansammeln und das Herzerkrankungsrisiko erhöhen kann.' },
      { id: '8', name: 'CRP (Entzündung)', description: 'C-reaktives Protein ist ein Marker für Entzündung, die mit Herzerkrankungen und anderen chronischen Erkrankungen verbunden ist.' },
      { id: '9', name: 'HDL-Cholesterin', description: 'Das "gute" Cholesterin, das Arterien schützt und das Herzerkrankungsrisiko senkt.' },
      { id: '10', name: 'Triglyceride', description: 'Eine Art Fett im Blut, das bei erhöhten Werten das Risiko für Herzerkrankungen erhöhen kann.' },
    ],
  },
  {
    title: 'Stoffwechseleffizienz',
    icon: Zap,
    items: [
      { id: '11', name: 'Ferritin (Eisen)', description: 'Ein Protein, das Eisen speichert und für die Sauerstofftransport- und Energieproduktion wichtig ist.' },
      { id: '12', name: 'Albumin', description: 'Das Hauptblutprotein, das Nährstoffe transportiert und die Gesundheit unterstützt.' },
      { id: '13', name: 'Freies T3 (Schilddrüse)', description: 'Das aktive Schilddrüsenhormon, das den Stoffwechsel und die Energieproduktion reguliert.' },
      { id: '14', name: 'Vitamin D', description: 'Ein essentielles Vitamin für Knochengesundheit, Immunfunktion und allgemeines Wohlbefinden.' },
      { id: '15', name: 'Triglyceride', description: 'Eine Art Fett im Blut, das bei erhöhten Werten das Risiko für Herzerkrankungen erhöhen kann.' },
      { id: '16', name: 'LDL-C / ApoB (Partikelgröße)', description: 'Das Verhältnis zeigt die Größe und Zusammensetzung der LDL-Partikel, was das Risiko für Herzerkrankungen beeinflusst.' },
      { id: '17', name: 'Triglyceride / HDL', description: 'Dieses Verhältnis ist ein wichtiger Marker für die metabolische Gesundheit und das Herzerkrankungsrisiko.' },
    ],
  },
  {
    title: 'Langlebigkeit',
    icon: Flame,
    items: [
      { id: '18', name: 'Biologisches Alter', description: 'Eine Einschätzung deines physiologischen Alters basierend auf Gesundheitsmarkern, nicht nur der Anzahl der Jahre.' },
      { id: '19', name: 'STELY-Punktzahl', description: 'Ein umfassender Gesundheitsscore, der alle deine Messwerte kombiniert, um deine allgemeine Gesundheit zu bewerten.' },
      { id: '20', name: 'Personalisierte Baselines', description: 'Individuelle Referenzwerte, die deine Ausgangsmessungen verfolgen und Verbesserungen im Laufe der Zeit zeigen.' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title}>
                <div className="flex flex-col items-center mb-6">
                  <CategoryIcon className="w-6 h-6 text-gray-400 mb-2" />
                  <h3 className="text-2xl font-semibold text-center text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-gray-300 transition">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                        <div className="flex items-center gap-3">
                          {item.genderIcon === 'female' && (
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M12 12v7M9 19h6" />
                            </svg>
                          )}
                          {item.genderIcon === 'male' && (
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="15" cy="8" r="4" />
                              <path d="M15 12v7M12 19h6M15 12l-5-5" />
                            </svg>
                          )}
                          {expandedItems.includes(item.id) ? (
                            <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
