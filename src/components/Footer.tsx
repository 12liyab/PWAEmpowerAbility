
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Footer = () => {
  const [api, setApi] = useState<any>();
  
  const partners = [
    { name: 'Ghana Federation of Disability Organisations (GFD)', logo: '/lovable-uploads/08758381-66c8-4b31-9958-535e6aa19235.png' },
    { name: 'Sacrefilms Multimedia', logo: '/lovable-uploads/ea56cb5b-edbf-4c79-884c-8084621f19eb.png' },
    { name: 'UNPRPD', logo: null },
    { name: 'UNFPA', logo: null },
    { name: 'UNDP', logo: null },
    { name: 'FAO', logo: null },
    { name: 'NCPD', logo: null },
    { name: 'Ministry of Gender and Protection Agency', logo: null },
    { name: 'TechSoup', logo: null },
    { name: 'Master Card Foundation', logo: null },
    { name: 'thenovus.solutions', logo: null }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/7d84e363-74f6-4d65-a79a-1b167f536488.png"
                alt="empowerAbility Org Logo"
                className="h-12 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Creating dignified and fulfilling lives for youth with disabilities in Ghana through 
              opportunities in food systems, agriculture, ICT, and climate action.
            </p>
            <div className="space-y-2 text-sm">
              <p>📍 61 Avenue D West Road, North Legon, Accra</p>
              <p>📞 +233 50 292 4450 | +233 20 811 8539</p>
              <p>✉️ info@enabledability.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Our Products</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-orange-400 transition-colors">Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">Media</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-orange-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Legal & Social</h4>
            <ul className="space-y-2 text-sm mb-4">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-orange-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <p className="text-gray-300">Follow Us</p>
                <p className="text-gray-300">@enabledability</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.facebook.com/empowerabilityOrg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/enabledability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/enabledability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/@enabledability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/enabledability" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section with Carousel */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold mb-6 text-purple-300 animate-fade-in">Our Valued Partners</h4>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                    <div className="group flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      {partner.logo ? (
                        <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center group-hover:shadow-md transition-shadow">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:shadow-md transition-shadow">
                          {partner.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                        </div>
                      )}
                      <span className="text-xs text-gray-300 text-center leading-tight group-hover:text-white transition-colors">
                        {partner.name}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-6">
              <p className="text-gray-400 text-sm animate-fade-in" style={{ animationDelay: '1.2s' }}>
                Together, we're building a more inclusive future for all
              </p>
            </div>
          </div>
        </div>

        {/* SDG Goals Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Our Commitment to the UN Sustainable Development Goals</h4>
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <img 
                src="/lovable-uploads/c5a9f6e4-736c-4b4a-9d58-e1b2ea5bd923.png"
                alt="UN Sustainable Development Goals - No Poverty, Zero Hunger, Good Health and Well-being"
                className="mx-auto max-w-full h-auto max-h-24 object-contain filter drop-shadow-sm"
              />
            </div>
            <p className="text-gray-400 text-sm mt-6 max-w-3xl mx-auto leading-relaxed">
              Aligned with SDGs 1, 2, 3, 4, 8, 10 and 11 - working towards eliminating poverty, achieving zero hunger, and ensuring good health and well-being for all through our comprehensive programs for youth with disabilities.
            </p>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © 2025 thenovus.solutuons. All rights reserved. | enabledability.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
