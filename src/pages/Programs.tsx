import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FloatingAccessibilityWidget from '@/components/FloatingAccessibilityWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Programs & <span className="text-green-600">Training</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive programs addressing the core challenges faced by youth with disabilities
          </p>
        </div>
      </section>

      {/* Main Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Agriculture Program */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">Agriculture</CardTitle>
                <p className="text-sm text-gray-500">Employment in Agriculture Value Chain</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objective:</h4>
                  <p className="text-gray-600 text-sm">
                    Create dignified and fulfilling employment opportunities for youth with disabilities in agriculture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategy:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Training programs on agricultural practices</li>
                    <li>• Improve access to business services</li>
                    <li>• Develop resources and technologies</li>
                    <li>• Facilitate market linkages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                  <p className="text-gray-600 text-sm">
                    Increased participation of youth with disabilities in agriculture, leading to improved 
                    livelihoods and economic independence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Climate Change Program */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600">Climate Change</CardTitle>
                <p className="text-sm text-gray-500">Mitigation and Adaptation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objective:</h4>
                  <p className="text-gray-600 text-sm">
                    Empower youth with disabilities to mitigate and adapt to climate change impacts, 
                    enhancing their economic and social participation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategy:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Educate on climate-resilient practices</li>
                    <li>• Support adoption of sustainable technologies</li>
                    <li>• Engage in climate action initiatives</li>
                    <li>• Youth policy dialogue on climate change</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                  <p className="text-gray-600 text-sm">
                    Enhanced resilience to climate change, ensuring sustained participation in 
                    agricultural employment and social life.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Health Program */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <CardTitle className="text-2xl font-bold text-red-600">Sexual Reproductive Health</CardTitle>
                <p className="text-sm text-gray-500">Health and Well-being</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objective:</h4>
                  <p className="text-gray-600 text-sm">
                    Improve access to sexual reproductive health services for youth with disabilities, 
                    supporting their reproductive rights.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategy:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Raise awareness about SRH rights</li>
                    <li>• Provide tailored SRH services</li>
                    <li>• Advocate for inclusive health policies</li>
                    <li>• Community health education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                  <p className="text-gray-600 text-sm">
                    Better SRH outcomes contributing to overall well-being and ability to participate 
                    fully in economic and social activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enabling Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enabling Factors</h2>
            <p className="text-xl text-gray-600">
              Leveraging technology, safeguarding, and policy engagement for sustainable impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <CardTitle className="text-xl font-bold text-purple-600">Innovation ICT & AI Technology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Digital platforms for training delivery</li>
                  <li>• AI for personalized learning</li>
                  <li>• Online agricultural markets</li>
                  <li>• Market readiness support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <CardTitle className="text-xl font-bold text-orange-600">Safeguarding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Safe and supportive environments</li>
                  <li>• Protection from abuse and exploitation</li>
                  <li>• Public engagement and awareness</li>
                  <li>• Community mobilization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <CardTitle className="text-xl font-bold text-indigo-600">Policy Engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Advocate for inclusive policies</li>
                  <li>• Stakeholder engagement</li>
                  <li>• Policy change influence</li>
                  <li>• Inclusive practice commitments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Youth Policy Dialogue Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Youth Policy Dialogue on Climate Change for PWDs
              </h2>
              <p className="text-lg text-gray-600">
                Empowering young persons with disabilities to take leadership roles in climate policy dialogue
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/lovable-uploads/cee1dca5-925d-4b21-9e2f-a4a99f9869f3.png"
                  alt="Woman working in agricultural field representing climate resilience"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Program Activities:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Raise awareness about climate change impacts on persons with disabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Provide platform for sharing experiences and concerns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Discuss accessible climate solutions and innovative technologies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Encourage inclusive policy-making processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Foster collaboration among young leaders with disabilities</span>
                  </li>
                </ul>
              </div>
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

export default Programs;
