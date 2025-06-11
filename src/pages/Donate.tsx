import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FloatingAccessibilityWidget from '@/components/FloatingAccessibilityWidget';
import { Heart, CreditCard, Building, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const donationMethods = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Bank Transfer",
      details: [
        "Bank: ",
        "Account Name: ",
        "Account Number: ",
        "Branch: "
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Money",
      details: [
        "MTN Mobile Money: +233 54 326 2211",
        "Vodafone Cash: +233 20 811 8539",
        "AirtelTigo Money: Available on request"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "International Transfer",
      details: [
        "Swift Code: ",
        "Bank Address: ",
        "For international donors"
      ]
    }
  ];

  const impactAreas = [
    {
      title: "Agricultural Training",
      description: "Providing hands-on farming skills and sustainable agriculture techniques",
      amount: "GHS 300 - Trains 1 youth for 3 months"
    },
    {
      title: "ICT Education",
      description: "Digital literacy and technology skills development programs",
      amount: "GHS 300 - Provides ICT training for 1 youth"
    },
    {
      title: "Climate Action Projects",
      description: "Environmental conservation and climate resilience initiatives",
      amount: "GHS 200 - Supports 1 climate project"
    },
    {
      title: "General Support",
      description: "Supporting our overall mission and operational costs",
      amount: "Any amount makes a difference"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-orange-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-orange-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Our Mission
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Your donation helps create dignified and fulfilling lives for youth with disabilities in Ghana
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Where Your Donation Goes
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {impactAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3 text-purple-600">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                    <p className="font-semibold text-orange-600">
                      {area.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                How to Donate
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {donationMethods.map((method, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 hover:border-purple-200 transition-colors">
                    <div className="text-purple-600 mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {method.title}
                    </h3>
                    <ul className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Need Help with Your Donation?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team is here to assist you with any questions about donating or to provide receipts for tax purposes.
              </p>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Email:</strong> info@enabledability.org
                </p>
                <p>
                  <strong>Phone:</strong> +233 54 326 2211 | +233 20 811 8539
                </p>
                <p>
                  <strong>Address:</strong> 61 Avenue D West Road, North Legon, Accra
                </p>
              </div>
              <Button 
                className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                onClick={() => window.location.href = 'mailto:info@enabledability.org?subject=Donation Inquiry'}
              >
                Contact Us About Donating
              </Button>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Thank You for Your Support
              </h2>
              <p className="text-xl text-purple-100">
                Every donation, no matter the size, makes a meaningful difference in the lives of youth with disabilities in Ghana. Together, we're building a more inclusive and empowered future.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default Donate;
