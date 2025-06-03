
import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{outcome: 'accepted' | 'dismissed'}>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the install banner
      setShowInstallBanner(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // Hide for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if user already dismissed or if no prompt available
  if (!showInstallBanner || !deferredPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-purple-600 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Download className="h-5 w-5" />
          <div>
            <p className="font-semibold">Install empowerAbility App</p>
            <p className="text-sm text-purple-100">Add to your home screen for quick access</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleInstallClick}
            variant="secondary"
            size="sm"
            className="bg-white text-purple-600 hover:bg-purple-50"
          >
            Install
          </Button>
          <Button
            onClick={handleDismiss}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
