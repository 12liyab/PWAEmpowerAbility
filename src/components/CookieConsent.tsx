
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-slide-in-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences in our{' '}
              <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-gray-600 hover:text-gray-700 border-gray-300"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Accept All
            </Button>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
              aria-label="Close cookie consent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
