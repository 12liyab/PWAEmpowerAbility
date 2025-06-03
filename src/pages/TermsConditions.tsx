import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from "@/components/ChatBot";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms and Conditions</h1>
            <p className="text-gray-600 text-center mb-12">
              Last updated: December 2024
            </p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Agreement to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    By accessing and using the empowerAbility Org website and services, you accept and agree 
                    to be bound by the terms and provision of this agreement. If you do not agree to abide 
                    by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Use License</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Permission is granted to temporarily download one copy of the materials on empowerAbility Org's 
                    website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Modify or copy the materials</li>
                    <li>• Use the materials for any commercial purpose or for any public display</li>
                    <li>• Attempt to reverse engineer any software contained on the website</li>
                    <li>• Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Program Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Participation in empowerAbility Org programs is subject to:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Eligibility requirements as defined by each program</li>
                    <li>• Completion of application and assessment processes</li>
                    <li>• Adherence to program rules and guidelines</li>
                    <li>• Respectful conduct towards staff, volunteers, and other participants</li>
                    <li>• Commitment to program attendance and participation requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Privacy and Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We are committed to protecting participant privacy and maintaining confidentiality 
                    of personal information. All personal data is handled in accordance with our Privacy Policy 
                    and applicable data protection laws. Participants consent to the collection and use of 
                    information necessary for program delivery and evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The materials on empowerAbility Org's website are provided on an 'as is' basis. 
                    empowerAbility Org makes no warranties, expressed or implied, and hereby disclaims and 
                    negates all other warranties including without limitation, implied warranties or conditions 
                    of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                    property or other violation of rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    In no event shall empowerAbility Org or its suppliers be liable for any damages 
                    (including, without limitation, damages for loss of data or profit, or due to business 
                    interruption) arising out of the use or inability to use the materials on empowerAbility Org's 
                    website, even if empowerAbility Org or its authorized representative has been notified 
                    orally or in writing of the possibility of such damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Code of Conduct</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    All participants, staff, and stakeholders are expected to:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Treat all individuals with respect and dignity</li>
                    <li>• Maintain a safe and inclusive environment</li>
                    <li>• Respect confidentiality and privacy</li>
                    <li>• Report any concerns or incidents promptly</li>
                    <li>• Follow all applicable laws and regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    empowerAbility Org may revise these terms of service at any time without notice. 
                    By using this website and our services, you are agreeing to be bound by the current 
                    version of these terms and conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📧 info@enabledability.org</p>
                    <p>📞 +233 50 292 4450 | +233 20 811 8539</p>
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

export default TermsConditions;
