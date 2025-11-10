import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface TestItem {
  id: string;
  name: string;
  icon: string;
}

interface TestCategory {
  title: string;
  icon: string;
  items: TestItem[];
}

const testCategories: TestCategory[] = [
  {
    title: 'Hormone Balance',
    icon: '⚖️',
    items: [
      { id: '1', name: 'Estrogen (Estradiol E2)', icon: '♀️' },
      { id: '2', name: 'Progesterone', icon: '♀️' },
      { id: '3', name: 'SHBG', icon: '' },
      { id: '4', name: 'TSH (Thyroid)', icon: '' },
      { id: '5', name: 'Total & Free Testosterone', icon: '♂️' },
    ],
  },
  {
    title: 'Heart Health',
    icon: '❤️',
    items: [
      { id: '6', name: 'ApoB', icon: '' },
      { id: '7', name: 'LDL Cholesterol', icon: '' },
      { id: '8', name: 'CRP (Inflammation)', icon: '' },
      { id: '9', name: 'HDL Cholesterol', icon: '' },
    ],
  },
  {
    title: 'Metabolic Efficiency',
    icon: '🏥',
    items: [
      { id: '10', name: 'Ferritin (Iron)', icon: '' },
      { id: '11', name: 'Albumin', icon: '' },
      { id: '12', name: 'Free T3 (Thyroid)', icon: '' },
      { id: '13', name: 'Vitamin D', icon: '' },
      { id: '14', name: 'Triglycerides', icon: '' },
      { id: '15', name: 'LDL-C / ApoB (Particle Size)', icon: '' },
      { id: '16', name: 'Triglycerides / HDL', icon: '' },
    ],
  },
  {
    title: 'Longevity',
    icon: '🎂',
    items: [
      { id: '17', name: 'Biological Age', icon: '' },
      { id: '18', name: 'Rythm Score', icon: '' },
      { id: '19', name: 'Personalized Baselines', icon: '' },
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
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What we test every month</h2>

        <div className="space-y-4">
          {testCategories.map((category) => (
            <div key={category.title} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-black">{category.title}</h3>
                </div>
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
                      <li key={item.id} className="flex items-center gap-3 text-gray-700">
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.name}</span>
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
