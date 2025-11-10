import { useState } from 'react';
import { X, Zap, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save to localStorage
      const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
      if (!waitlist.includes(email)) {
        waitlist.push(email);
        localStorage.setItem('waitlist', JSON.stringify(waitlist));
      }

      setSuccess(true);
      setEmail('');

      // Close modal after success message
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2500);
    } catch (error) {
      console.error('Error joining waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in scale-95 fade-in duration-300">
        {/* Gradient Header */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"></div>

        {/* Close Button */}
        <div className="flex justify-end p-5">
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Geschafft!</h2>
              <p className="text-gray-600 leading-relaxed">
                Du wirst als Erste informiert, wenn die Performance-Kits verfügbar sind. 🚀
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-3 mb-5">
                <Zap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    Sei der Erste im Loop.
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-7 leading-relaxed">
                Erfahre als Erster, wenn die Performance-Kits live gehen. Kein Spam – versprochen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200 text-gray-900 placeholder-gray-400 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold py-4 rounded-xl transition duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Wird hinzugefügt...
                    </span>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
                Mit der Anmeldung stimmst du der Verarbeitung gemäß unserer{' '}
                <a href="#" className="text-blue-500 hover:underline font-medium">
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </p>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">✓</p>
                  <p className="text-xs text-gray-600 font-medium">Kostenlos</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">✓</p>
                  <p className="text-xs text-gray-600 font-medium">Kein Spam</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">✓</p>
                  <p className="text-xs text-gray-600 font-medium">Privat</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
