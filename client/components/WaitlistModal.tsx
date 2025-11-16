import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      // Submit to Netlify Forms
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail('');

        // Close modal after success message
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2500);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in scale-95 fade-in duration-300">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200 hover:bg-gray-100 rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {success ? (
            <div className="text-center py-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Geschafft!</h2>
              <p className="text-gray-600 leading-relaxed">
                Überprüfe deine E-Mail für deinen 10 Prozent Rabattcode. 🎉
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
                  Sichere dir 10 Prozent Rabatt auf deinen ersten STELY Test.
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Trag dich ein und erfahre als Erstes, wenn die Performance-Kits starten. Kein Spam.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200 text-gray-900 placeholder-gray-400"
                />

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition duration-200 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Wird hinzugefügt...
                    </span>
                  ) : (
                    'Rabatt sichern'
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mb-6 leading-relaxed">
                Mit deiner Anmeldung stimmst du der Verarbeitung deiner Daten nach DSGVO und unserer Datenschutzerklärung zu.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>10 Prozent auf den ersten Test</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Kein Spam</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>EU-Datenschutz</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
