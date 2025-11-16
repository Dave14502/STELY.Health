import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samantha",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "Ich hatte schon lange auf ein Produkt wie dieses gehofft, und nachdem ich Rythm entdeckt habe, wurden meine Erwartungen übertroffen. Das Erlebnis ist nahtlos (eigentlich ziemlich spaßig!). Was dies revolutionär macht, ist, dass alle Tests auf Krankenhauspflege-Niveau bleiben. Der einzige Unterschied ist nun die Möglichkeit, dein eigenes Blut von zu Hause aus zu entnehmen.",
    rating: 5,
  },
  {
    id: 2,
    name: "Matt Rabasco",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote:
      "Das Rythm-Team war unglaublich gründlich in seiner Kommunikation und äußerst unterstützend bei jedem Schritt von Versand, Sammlung, Lieferung und Ergebnissen, was mir geholfen hat, meine Gesundheit zum Besseren zu wenden.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gino",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote:
      "Die Qualität des Service und die schnelle Verarbeitung der Ergebnisse waren beeindruckend. Ich konnte meine Gesundheit besser verstehen und entsprechend handeln.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Was Kunden sagen
        </h2>

        <div className="flex items-center justify-between gap-8">
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition text-gray-600"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentTestimonial.quote}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="font-semibold text-black">
                {currentTestimonial.name}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition text-gray-600"
            aria-label="Nächste Bewertung"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Bewertung ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
