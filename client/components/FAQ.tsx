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
    answer: 'STELY nutzt echtes Blut statt Speichel, arbeitet mit deutschen Laboren und liefert klare Ergebnisse innerhalb weniger Tage. Durch die monatlichen Tests erkennst du Muster und Fortschritte, nicht nur Momentaufnahmen. Deine Daten werden ausschließlich nach DSGVO in der EU verarbeitet.',
  },
  {
    id: 2,
    question: 'Hilft mir STELY wirklich bei der Verbesserung?',
    answer: 'Ja. Du erhältst verständliche Empfehlungen, die dir zeigen, wo du ansetzen kannst: Schlaf, Stress, Ernährung, Training. Mit den monatlichen Trendlinien siehst du, ob deine Anpassungen wirken.',
  },
  {
    id: 3,
    question: 'Kann ich jederzeit kündigen?',
    answer: 'Ja. Du zahlst nur pro Test und kannst jederzeit monatlich kündigen oder einen Monat überspringen. Keine Bindung, kein Kleingedrucktes.',
  },
  {
    id: 4,
    question: 'Sind meine Daten sicher?',
    answer: 'Ja. Alle Daten werden verschlüsselt auf EU-Servern gespeichert und niemals weitergegeben. Du kannst deine Werte jederzeit mit einem Klick löschen. Datenschutz ist ein Kernbestandteil von STELY.',
  },
  {
    id: 5,
    question: 'Wie schnell bekomme ich meine Ergebnisse?',
    answer: 'In der Regel zwei bis vier Tage, nachdem dein Test im Labor eingetroffen ist. Du bekommst automatisch eine Benachrichtigung, sobald dein Dashboard bereitsteht.',
  },
  {
    id: 6,
    question: 'Wie genau ist ein Test zuhause?',
    answer: 'Sehr genau. Das STELY Testkit ist CE-gekennzeichnet und nutzt dieselben Laborverfahren wie ein Arzt. Bluttests sind der Standard für Hormonmessungen und liefern zuverlässige Werte.',
  },
  {
    id: 7,
    question: 'Ersetzt STELY meinen Arzt?',
    answer: 'Nein. STELY liefert dir präzise Daten und klare Einordnung. Medizinische Entscheidungen triffst du zusammen mit deinem Arzt. Viele Kunden nutzen STELY, um bessere Gespräche mit ihrem Arzt zu führen.',
  },
  {
    id: 8,
    question: 'Was ist, wenn mir bei Blutabnahmen schwindelig wird?',
    answer: 'Unser Test benötigt nur eine sehr kleine Menge Blut und du führst ihn in einer ruhigen Umgebung zuhause durch. Viele Kunden mit Nadel-Angst berichten, dass es deutlich angenehmer ist als eine Entnahme beim Arzt.',
  },
  {
    id: 9,
    question: 'Kann ich meine alten Blutwerte integrieren?',
    answer: 'Ja. Du kannst Vorbefunde hochladen und im Dashboard vergleichen, um ein vollständiges Bild deiner Entwicklung zu bekommen.',
  },
  {
    id: 10,
    question: 'Warum monatlich statt vierteljährlich?',
    answer: 'Hormone und Energielevel verändern sich schneller, als viele denken. Monatliche Tests zeigen dir echte Muster, helfen dir schneller zu reagieren und machen Fortschritte klar sichtbar – ähnlich wie beim Tracken deines Trainings.',
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
