
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProductsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const products = [
    {
      name: 'abilityMARKET',
      description: 'A marketplace connecting people with disabilities to resources, products, and services.',
      tagline: 'Empowering Inclusion, Access, and Opportunity',
      features: ['Product Marketplace', 'Service Directory', 'Community Forum', 'Job Board'],
      color: 'bg-blue-500',
      detailedInfo: {
        overview: 'A comprehensive online marketplace that promotes independence, accessibility, and inclusivity for people with disabilities by connecting them to essential resources, adaptive products, and specialized services.',
        keyBenefits: [
          'Access to curated assistive technology and adaptive products',
          'Connect with disability-focused service providers',
          'Join a supportive community of peers and advocates',
          'Find employment opportunities with inclusive employers',
          'Access educational resources and guides'
        ],
        targetAudience: 'People with disabilities, caregivers, healthcare providers, employers, and disability service organizations',
        impact: 'Promoting economic independence and social inclusion for over 1000+ individuals with disabilities across Ghana'
      }
    },
    {
      name: 'abilityFARMTECH',
      description: 'Empowering small landholder farmers, including youth with disabilities, through agricultural innovation.',
      tagline: 'Technology-Driven Agriculture',
      features: ['Agricultural Training', 'Assistive Technologies', 'Demonstration Farms', 'Digital Platforms'],
      color: 'bg-green-500',
      detailedInfo: {
        overview: 'An innovative agricultural program that leverages technology and adaptive techniques to empower small landholder farmers, with special focus on youth with disabilities, to improve productivity and income.',
        keyBenefits: [
          'Training on climate-resilient agricultural practices',
          'Access to adaptive farming tools and equipment',
          'Precision agriculture techniques and drip irrigation',
          'Market linkage through digital platforms',
          'Business management and entrepreneurship skills'
        ],
        targetAudience: 'Small landholder farmers (less than 5 acres), youth with disabilities interested in agriculture, rural communities',
        impact: 'Supporting 500+ farmers across 50+ communities with increased crop yields and sustainable farming practices'
      }
    },
    {
      name: 'abilityVOICE',
      description: 'A platform amplifying the voices of people with disabilities through stories and advocacy.',
      tagline: 'Amplifying the Voices of Ability',
      features: ['Video Content', 'Audio Stories', 'Articles', 'Community Platform'],
      color: 'bg-purple-500',
      detailedInfo: {
        overview: 'A multimedia platform that empowers people with disabilities to share their stories, challenge stereotypes, and advocate for inclusive policies while building a supportive community.',
        keyBenefits: [
          'Share inspiring stories and experiences',
          'Access disability-related resources and information',
          'Connect with advocates and organizations',
          'Participate in policy discussions and advocacy',
          'Challenge misconceptions about disabilities'
        ],
        targetAudience: 'People with disabilities, advocates, policymakers, media, general public interested in disability rights',
        impact: 'Reaching 10,000+ monthly visitors with stories that change perceptions and drive policy change'
      }
    },
    {
      name: 'abilityHEALTH',
      description: 'Focusing on health and well-being, including sexual reproductive health for youth with disabilities.',
      tagline: 'Inclusive Healthcare for All',
      features: ['Healthcare Access', 'SRH Services', 'Health Education', 'Wellness Programs'],
      color: 'bg-red-500',
      detailedInfo: {
        overview: 'A comprehensive health program addressing the unique healthcare needs of youth with disabilities, with special emphasis on sexual reproductive health rights and accessible healthcare services.',
        keyBenefits: [
          'Accessible sexual reproductive health services',
          'Health education tailored for people with disabilities',
          'Advocacy for inclusive health policies',
          'Wellness and mental health support programs',
          'Training for healthcare providers on disability inclusion'
        ],
        targetAudience: 'Youth with disabilities, healthcare providers, health policymakers, parents and caregivers',
        impact: 'Improving health outcomes for 2,000+ youth with disabilities through accessible healthcare services'
      }
    },
    {
      name: 'abilityEDU',
      description: 'Educational programs and training opportunities designed for inclusive learning.',
      tagline: 'Education Without Barriers',
      features: ['Skills Training', 'Digital Learning', 'Certification', 'Career Support'],
      color: 'bg-orange-500',
      detailedInfo: {
        overview: 'An inclusive education platform providing skills training, digital learning opportunities, and career support specifically designed to meet the diverse learning needs of people with disabilities.',
        keyBenefits: [
          'Accessible skills training in ICT, agriculture, and entrepreneurship',
          'Digital learning platforms with assistive technology support',
          'Industry-recognized certification programs',
          'Career coaching and job placement support',
          'Mentorship programs with successful professionals'
        ],
        targetAudience: 'Youth and adults with disabilities seeking education and skills development, educators, employers',
        impact: 'Training 800+ individuals annually with 70% job placement rate in various sectors'
      }
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Products & Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to empower youth with disabilities across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-purple-100 hover:border-purple-200">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">
                    {product.name.charAt(7).toUpperCase()}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-purple-700">
                  {product.name}
                </CardTitle>
                <p className="text-sm text-orange-600 italic font-medium">{product.tagline}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-700">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {expandedCard === index && (
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg space-y-3">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Overview:</h5>
                      <p className="text-sm text-gray-600">{product.detailedInfo.overview}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Key Benefits:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.detailedInfo.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Target Audience:</h5>
                      <p className="text-sm text-gray-600">{product.detailedInfo.targetAudience}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Impact:</h5>
                      <p className="text-sm text-gray-600 font-medium">{product.detailedInfo.impact}</p>
                    </div>
                  </div>
                )}

                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-purple-600 text-purple-600 hover:bg-purple-50"
                  onClick={() => toggleExpansion(index)}
                >
                  {expandedCard === index ? (
                    <>
                      Show Less <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Learn More <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
