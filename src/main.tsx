
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from "react-ga4";

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

ReactGA.initialize("G-ZLBYC6K5BS"); // your GA4 Measurement ID

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

