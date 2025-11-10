import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Wie unterscheidet sich STELY?',
    answer: 'STELY ist das einfachste Bluttest-System der Welt. Mit nur wenigen Tropfen Blut von zu Hause aus kannst du umfassende Gesundheitsmetriken verfolgen - kein Arzt, kein Termin, kein Problem. Alle Tests bleiben auf Krankenhauspflege-Niveau.',
  },
  {
    id: 2,
    question: 'Ist STELY HIPAA-konform?',
    answer: 'Ja, STELY ist HIPAA-konform und erfüllt alle geltenden Datenschutzbestimmungen. Deine Daten sind sicher und privat.',
  },
  {
    id: 3,
    question: 'Akzeptiert STELY HSA/FSA-Zahlungen?',
    answer: 'Ja, STELY-Tests sind HSA/FSA berechtigt, was bedeutet, dass du mit vor Steuern abgezogenen Mitteln zahlen kannst.',
  },
  {
    id: 4,
    question: 'Wie lange dauert es, bis ich meine Ergebnisse erhalte?',
    answer: 'Du erhältst deine Ergebnisse normalerweise innerhalb von 5-7 Tagen nach Versand deiner Probe an unser Labor.',
  },
  {
    id: 5,
    question: 'Wie genau sind Heimtests?',
    answer: 'STELY-Tests nutzen dieselben Labortests wie Kliniken. Die Genauigkeit ist identisch mit klinischen Tests - es ist nur einfacher von zu Hause aus zu machen.',
  },
  {
    id: 6,
    question: 'Kann ich mein Abonnement kündigen?',
    answer: 'Ja, du kannst dein STELY-Abonnement jederzeit überspringen oder kündigen. Es gibt keine versteckten Gebühren oder Kündigungsstrafen.',
  },
  {
    id: 7,
    question: 'Ist es sicher, wenn ich in der Vergangenheit bei Blutentnahmen ohnmächtig geworden bin?',
    answer: 'Die Rythm-Blutentnahme ist weniger invasiv als traditionelle Venenblutentnahmen. Allerdings solltest du vor Gebrauch einen Arzt konsultieren, wenn du bedenken hast.',
  },
  {
    id: 8,
    question: 'Kann ich meine Daten löschen?',
    answer: 'Ja, du kannst deine Daten jederzeit löschen. Wir bieten vollständige Datenkontrolle und Transparenz bei allen deinen Gesundheitsinformationen.',
  },
  {
    id: 9,
    question: 'Ersetzt STELY meinen Arzt?',
    answer: 'Nein, STELY ist nicht dazu gedacht, einen Arzt zu ersetzen. Es ist ein Tool zur Selbstüberwachung und zur besseren Zusammenarbeit mit deinem Gesundheitsteam. Du solltest deine Ergebnisse mit deinem Arzt besprechen.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Häufig gestellte Fragen</h2>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
