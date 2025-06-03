
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import CookieConsent from "@/components/CookieConsent";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PWAInstallPrompt />
      <Header />
      <Hero />
      <ProductsSection />
      <Footer />
      <ChatBot />
      <CookieConsent />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default Index;
