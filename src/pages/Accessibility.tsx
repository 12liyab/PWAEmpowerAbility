import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from "@/components/ChatBot";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Accessibility Statement</h1>
            <p className="text-gray-600 text-center mb-12">
              Our commitment to digital inclusion and accessibility
            </p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    empowerAbility Org is committed to ensuring digital accessibility for people with disabilities. 
                    We are continually improving the user experience for everyone and applying the relevant 
                    accessibility standards to achieve these goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Accessibility Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. 
                    Our website features include:
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Keyboard navigation support</li>
                    <li>• Screen reader compatibility</li>
                    <li>• High contrast color schemes</li>
                    <li>• Descriptive alt text for images</li>
                    <li>• Clear heading structure</li>
                    <li>• Consistent navigation</li>
                    <li>• Readable fonts and appropriate text sizing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Assistive Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Our website is designed to be compatible with:</p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>• Voice recognition software</li>
                    <li>• Keyboard-only navigation</li>
                    <li>• Browser zoom functionality up to 200%</li>
                    <li>• High contrast display settings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Known Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    While we strive for full accessibility, we acknowledge some current limitations:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Some third-party embedded content may not meet all accessibility standards</li>
                    <li>• Complex data visualizations may require alternative formats</li>
                    <li>• Some PDF documents may not be fully accessible (we are working to address this)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Alternative Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you encounter content that is not accessible or need information in an alternative format, 
                    we can provide:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Large print documents</li>
                    <li>• Audio descriptions</li>
                    <li>• Plain text versions</li>
                    <li>• Sign language interpretation (upon request)</li>
                    <li>• Accessible PDF versions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Feedback and Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We welcome your feedback on the accessibility of our website. If you encounter 
                    accessibility barriers, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📧 accessibility@enabledability.org</p>
                    <p>📞 +233 50 292 4450</p>
                    <p>📍 61 Avenue D West Road, North Legon, Accra</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    We aim to respond to accessibility feedback within 2 business days.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Ongoing Improvements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We are committed to ongoing accessibility improvements through regular audits, 
                    user testing with people with disabilities, and staff training on accessibility 
                    best practices. This statement is reviewed and updated annually.
                  </p>
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

export default Accessibility;
