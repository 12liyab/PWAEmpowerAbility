import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from "@/components/ChatBot";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
            <p className="text-gray-600 text-center mb-12">
              Last updated: May 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    empowerAbility Org ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website or use our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Name and contact information</li>
                      <li>• Email address and phone number</li>
                      <li>• Program participation details</li>
                      <li>• Disability-related information (with consent)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• IP address and browser information</li>
                      <li>• Website usage statistics</li>
                      <li>• Cookies and similar technologies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• To provide and improve our programs and services</li>
                    <li>• To communicate with program participants and stakeholders</li>
                    <li>• To comply with legal obligations</li>
                    <li>• To analyze and improve our website performance</li>
                    <li>• To send newsletters and updates (with consent)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Information Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share information only in the following circumstances:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• With your explicit consent</li>
                    <li>• With service providers who assist in our operations</li>
                    <li>• When required by law or legal process</li>
                    <li>• To protect our rights and safety</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Withdraw consent for data processing</li>
                    <li>• Opt-out of communications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>📧 info@enabledability.org</p>
                    <p>📞 +233 54 326 2211</p>
                    <p>📍 61 Avenue D West Road, North Legon, Accra</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default PrivacyPolicy;
