import { useState } from "react";
import { Plus, Minus, Scale, Leaf, Shield, Heart } from "lucide-react";

interface TestItem {
  id: string;
  name: string;
  description: string;
  genderIcon?: "male" | "female";
}

interface TestCategory {
  title: string;
  icon: typeof Scale;
  items: TestItem[];
}

const testCategories: TestCategory[] = [
  {
    title: "Hormonelles Gleichgewicht",
    icon: Scale,
    items: [
      {
        id: "1",
        name: "Östrogen (Östradiol E2)",
        description:
          "Östrogen ist ein wichtiges Hormon bei Männern und Frauen, das die reproduktive Gesundheit, Stimmung, Knochengesundheit und das allgemeine hormonelle Gleichgewicht unterstützt.",
      },
      {
        id: "2",
        name: "Progesteron",
        description:
          "Progesteron hilft dabei, Hormone im Gleichgewicht zu halten und unterstützt Schlaf, Stimmung und die allgemeine Stabilität im Körper.",
        genderIcon: "female",
      },
      {
        id: "3",
        name: "SHBG",
        description:
          "SHBG kontrolliert, wie viel aktives Östrogen und Testosteron dein Körper nutzen kann, was Einfluss auf Energie, Stimmung und Libido hat.",
      },
      {
        id: "4",
        name: "TSH",
        description:
          "Ein Hormon, das die Schilddrüse reguliert. Es steuert Stoffwechsel, Energie und die Temperaturregulation.",
      },
      {
        id: "5",
        name: "Gesamt und freies Testosteron",
        description:
          "Testosteron beeinflusst Muskelmasse, Energie, Stimmung, Libido und Knochengesundheit.",
        genderIcon: "male",
      },
    ],
  },
  {
    title: "Herzgesundheit",
    icon: Heart,
    items: [
      {
        id: "6",
        name: "ApoB",
        description:
          "ApoB zeigt, wie gut dein Körper Fette im Blut transportiert. Es beeinflusst Energielevel, Konzentration und wie belastbar du dich im Alltag fühlst.",
      },
      {
        id: "7",
        name: "LDL-Cholesterin",
        description:
          "LDL bringt Cholesterin zu den Zellen, um Hormone aufzubauen und Gewebe zu reparieren. Es spielt eine wichtige Rolle für tägliche Energie, Erholung und die allgemeine Körperfunktion.",
      },
      {
        id: "8",
        name: "CRP (Entzündung)",
        description:
          "CRP ist ein Marker für Entzündungen und kann auf Stress, Infektionen oder ein erhöhtes kardiovaskuläres Risiko hinweisen.",
      },
      {
        id: "9",
        name: "HDL-Cholesterin",
        description:
          "HDL hilft dabei, Cholesterin aus dem Blutkreislauf zu transportieren und unterstützt klare Arterien, stabile Durchblutung und eine effiziente Herz-Kreislauf-Funktion.",
      },
      {
        id: "10",
        name: "Triglyceride",
        description:
          "Eine Art Fett im Blut, das bei erhöhten Werten das Risiko für Herzerkrankungen erhöhen kann.",
      },
    ],
  },
  {
    title: "Stoffwechseleffizienz",
    icon: Leaf,
    items: [
      {
        id: "11",
        name: "Ferritin (Eisen)",
        description:
          "Zeigt deine gespeicherten Eisenwerte an. Essenziell für den Sauerstofftransport und eine konstante Energieproduktion.",
      },
      {
        id: "12",
        name: "Albumin",
        description:
          "Ein Protein, das den Flüssigkeitshaushalt reguliert und Hormone sowie Vitamine im Blut transportiert.",
      },
      {
        id: "13",
        name: "Free T3 (Schilddrüse)",
        description:
          "Free T3 ist das aktive Schilddrüsenhormon und reguliert Stoffwechsel, Energie und Körpertemperatur.",
      },
      {
        id: "14",
        name: "Vitamin D",
        description:
          "Vitamin D unterstützt das Immunsystem, die Knochengesundheit und die Hormonregulation.",
      },
      {
        id: "15",
        name: "Triglyceride",
        description:
          "Triglyceride sind eine Fettart im Blut und zeigen, wie dein Körper Energie speichert und verarbeitet.",
      },
      {
        id: "16",
        name: "LDL-C / ApoB (Partikelgröße)",
        description:
          "Dieses Verhältnis zeigt, wie effektiv dein Körper Cholesterin verarbeitet. Es unterstützt stabile Energie, gute Durchblutung und langfristige Vitalität.",
      },
      {
        id: "17",
        name: "Triglyceride / HDL",
        description:
          "Dieses Verhältnis ist ein wichtiger Marker für Insulinsensitivität und die metabolische Gesundheit.",
      },
    ],
  },
  {
    title: "Langlebigkeit",
    icon: Shield,
    items: [
      {
        id: "18",
        name: "Biologisches Alter",
        description:
          "Das biologische Alter zeigt anhand deiner Laborwerte, wie gut dein Körper tatsächlich funktioniert. Es liefert einen tieferen Einblick darin, wie sich deine Gesundheit im Vergleich zu deinem tatsächlichen Alter entwickelt.",
      },
      {
        id: "19",
        name: "STELY Score",
        description:
          "Der STELY Score fasst wichtige Gesundheitsindikatoren zusammen, damit du deinen gesamten Zustand und deine Fortschritte leichter verfolgen kannst.",
      },
      {
        id: "20",
        name: "Personalisierte Ausgangswerte",
        description:
          "Personalisierte Ausgangswerte zeigen dein echtes Normal, indem sie Durchschnittswerte über 3, 6 und 12 Monate abbilden. So erkennst du echte Veränderungen in deiner Gesundheit im Laufe der Zeit.",
      },
    ],
  },
];

export default function WhatWeTest() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      id="what-we-test"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Was wir jeden Monat testen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title}>
                <div className="flex flex-col items-center mb-6">
                  <CategoryIcon className="w-6 h-6 text-gray-400 mb-2" />
                  <h3 className="text-2xl font-semibold text-center text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-gray-300 transition"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        <span className="text-sm font-medium text-gray-900">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-3">
                          {item.genderIcon === "female" && (
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2Fce73db9ef8034802acd120660441905d?format=webp&width=800"
                              alt="Female"
                              className="w-4 h-4 flex-shrink-0 object-cover"
                              style={{ objectPosition: "center top" }}
                            />
                          )}
                          {item.genderIcon === "male" && (
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F35abe8a5af4d4ea892c58c979786750e?format=webp&width=800"
                              alt="Male"
                              className="w-4 h-4 flex-shrink-0 object-cover"
                              style={{ objectPosition: "center top" }}
                            />
                          )}
                          {expandedItems.includes(item.id) ? (
                            <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      {expandedItems.includes(item.id) && (
                        <div className="px-4 py-3 bg-gray-50">
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
