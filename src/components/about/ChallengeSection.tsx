
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChallengeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Challenge We Address
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-600">Youth Unemployment in Africa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">⅓</span>
                  </div>
                  <span className="text-gray-700">African youths are unemployed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">⅓</span>
                  </div>
                  <span className="text-gray-700">Are vulnerably employed</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-orange-600">Ghana Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">19.7%</span>
                  </div>
                  <span className="text-gray-700">Youth unemployment rate (2021)</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Youth with disabilities face even greater challenges with higher rates of unemployment 
                  and additional barriers to employment.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Barriers Faced by Youth with Disabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Limited access to education and training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Discrimination and social stigma</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Physical barriers and lack of assistive technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Limited support services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
