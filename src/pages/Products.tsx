import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FloatingAccessibilityWidget from '@/components/FloatingAccessibilityWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span> & <span className="text-green-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive solutions designed to empower youth with disabilities across multiple sectors
          </p>
        </div>
      </section>

      {/* abilityMARKET */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">abilityMARKET</h2>
              <p className="text-lg text-blue-600 mb-6 italic">"Empowering Inclusion, Access, and Opportunity"</p>
              <p className="text-gray-600 mb-6">
                A comprehensive online marketplace that connects people with disabilities to resources, 
                products, and services while promoting independence, accessibility, and inclusivity.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Product Marketplace for assistive technology and adaptive products</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Service Directory for disability-related services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Community Forum for connection and support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Job Board connecting talent with opportunities</span>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                Visit abilityMARKET
              </Button>
            </div>
            <div>
              <img 
                src="/lovable-uploads/0eca6f8f-189c-4fe0-b5ef-e81c706fc99d.png"
                alt="Woman with vegetables representing marketplace and economic empowerment"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* abilityFARMTECH */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/6a693b96-6a85-479a-aff8-b926bf48c6bc.png"
                alt="Farmer with tractor representing agricultural technology"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">abilityFARMTECH</h2>
              <p className="text-lg text-green-600 mb-6 italic">"Technology-Driven Agriculture"</p>
              <p className="text-gray-600 mb-6">
                Empowering small landholder farmers, including youth with disabilities, to improve 
                agricultural productivity, income, and overall well-being through technology and innovation.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Activities:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Agricultural training and capacity building programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Provision of assistive agricultural technologies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Establishment of demonstration farms</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Digital platforms for market access and financial inclusion</span>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-green-500 hover:bg-green-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* abilityVOICE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">abilityVOICE</h2>
              <p className="text-lg text-purple-600 mb-6 italic">"Amplifying the Voices of Ability"</p>
              <p className="text-gray-600 mb-6">
                A platform that empowers people with disabilities to share their stories, access resources, 
                and connect with a supportive community while promoting inclusivity and challenging stereotypes.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Content Types:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Video Stories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Audio Content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Articles & Blogs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Community Platform</span>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 bg-purple-500 hover:bg-purple-600">
                Visit abilityVOICE
              </Button>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9feece13-da05-4484-bd16-7ca495d87879.png"
                alt="Person in wheelchair representing voice and empowerment"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* abilityHEALTH & abilityEDU */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* abilityHEALTH Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/251653fa-c152-49a5-80ed-fb1653d427b9.png"
                  alt="Healthcare and medical support representing inclusive health services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">abilityHEALTH</h3>
                <p className="text-lg text-red-600 italic mb-4">"Inclusive Healthcare for All"</p>
                <p className="text-gray-600 mb-4">
                  Focusing on health and well-being of youth with disabilities, including sexual 
                  reproductive health services and comprehensive healthcare access.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Areas:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Healthcare Access</li>
                    <li>• Sexual Reproductive Health</li>
                    <li>• Health Education</li>
                    <li>• Wellness Programs</li>
                  </ul>
                </div>
                <Button className="mt-4 bg-red-500 hover:bg-red-600 w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* abilityEDU Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/56bdeb80-c403-405b-934f-4617baee1a40.png"
                  alt="Students learning with technology representing inclusive education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">abilityEDU</h3>
                <p className="text-lg text-orange-600 italic mb-4">"Education Without Barriers"</p>
                <p className="text-gray-600 mb-4">
                  Educational programs and training opportunities designed for inclusive learning, 
                  providing skills development and career support.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Skills Training</li>
                    <li>• Digital Learning</li>
                    <li>• Certification Programs</li>
                    <li>• Career Support</li>
                  </ul>
                </div>
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 w-full">
                  Learn More
                </Button>
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

export default Products;
