
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empower the <span className="text-purple-600">Ability</span>,
                Not the <span className="text-orange-500">Disability</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A pioneering initiative creating dignified and fulfilling lives for Differently Abled Persons, 
                especially the youth in Ghana through opportunities in Agriculture & Agribusiness, 
                Climate Change Mitigation & Adaptation, and Sexual & Reproductive Health.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
                  Get Involved
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Youth Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">5</div>
                <div className="text-sm text-gray-600">Key Programs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/0eca6f8f-189c-4fe0-b5ef-e81c706fc99d.png"
                  alt="Woman with vegetables representing agricultural empowerment"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/9feece13-da05-4484-bd16-7ca495d87879.png"
                  alt="Person in wheelchair showing accessibility"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/lovable-uploads/56bdeb80-c403-405b-934f-4617baee1a40.png"
                  alt="Hands tending to plants representing care and growth"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="/lovable-uploads/cee1dca5-925d-4b21-9e2f-a4a99f9869f3.png"
                  alt="Woman working in field representing agricultural empowerment"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
