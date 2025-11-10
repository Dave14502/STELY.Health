import { useState } from 'react';
import { X } from 'lucide-react';

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
      }, 2000);
    } catch (error) {
      console.error('Error joining waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Willkommen!</h2>
              <p className="text-gray-600">
                Du wirst informiert, wenn die Performance-Kits verfügbar sind.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Melde dich für den Early-Access an.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Erfahre als Erster, wenn die Performance-Kits live gehen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition"
                >
                  {isLoading ? 'Wird hinzugefügt...' : 'Join Waitlist'}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
                Mit der Anmeldung stimmst du der Verarbeitung gemäß unserer{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
