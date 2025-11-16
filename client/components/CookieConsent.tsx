import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">Datenschutz & Cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Wir verwenden Cookies und ähnliche Technologien, um dein Erlebnis zu verbessern, Inhalte und Anzeigen zu personalisieren und Zugriffe zu analysieren. Weitere Informationen findest du in unserer Datenschutzrichtlinie.
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition font-medium text-sm"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition font-medium text-sm"
            >
              Akzeptieren
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-4 right-4 sm:hidden text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
