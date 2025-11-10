import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface TestItem {
  id: string;
  name: string;
}

interface TestCategory {
  title: string;
  items: TestItem[];
}

const testCategories: TestCategory[] = [
  {
    title: 'Hormonelles Gleichgewicht',
    items: [
      { id: '1', name: 'Östrogen (Östradiol E2)' },
      { id: '2', name: 'Progesteron' },
      { id: '3', name: 'SHBG' },
      { id: '4', name: 'TSH (Schilddrüse)' },
      { id: '5', name: 'Freies Testosteron' },
      { id: '6', name: 'Gesamt-Testosteron' },
    ],
  },
  {
    title: 'Herzgesundheit',
    items: [
      { id: '7', name: 'ApoB' },
      { id: '8', name: 'LDL-Cholesterin' },
      { id: '9', name: 'CRP (Entzündung)' },
      { id: '10', name: 'HDL-Cholesterin' },
      { id: '11', name: 'Triglyceride' },
    ],
  },
  {
    title: 'Stoffwechseleffizienz',
    items: [
      { id: '12', name: 'Ferritin (Eisen)' },
      { id: '13', name: 'Albumin' },
      { id: '14', name: 'Freies T3 (Schilddrüse)' },
      { id: '15', name: 'Vitamin D' },
      { id: '16', name: 'Triglyceride' },
      { id: '17', name: 'LDL-C / ApoB (Partikelgröße)' },
      { id: '18', name: 'Triglyceride / HDL' },
    ],
  },
  {
    title: 'Langlebigkeit',
    items: [
      { id: '19', name: 'Biologisches Alter' },
      { id: '20', name: 'STELY-Punktzahl' },
      { id: '21', name: 'Personalisierte Baselines' },
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
