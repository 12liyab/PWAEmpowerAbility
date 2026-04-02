import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Heart, 
  HandHeart, 
  Building2, 
  GraduationCap, 
  Briefcase,
  DollarSign,
  Handshake,
  Zap,
  Shield,
  BarChart3,
  Home,
  Smartphone,
  BookOpen,
  Stethoscope,
  Globe,
  Database
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Support = () => {
  const targets = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Increasing Accessibility Solutions",
      description: "Implement 2-3 new, innovative accessibility solutions in underserved communities annually."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Empowering Through Education",
      description: "Reach 5,000 individuals with disabilities and their families through educational and training programs over the next years."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Fostering Inclusive Employment",
      description: "Facilitate employment opportunities for at least 50 individuals with disabilities in mainstream sectors within the next years."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Building Community Networks",
      description: "Establish 10 new community support groups across different regions to provide peer support and amplify voices."
    }
  ];

  const fundingStrategies = [
    {
      icon: <HandHeart className="h-6 w-6" />,
      title: "Grant Applications",
      description: "Continuously applying for grants from international and local foundations aligned with our mission."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Corporate Partnerships",
      description: "Engaging with corporations to develop mutually beneficial CSR initiatives."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Individual Giving",
      description: "Launching targeted campaigns to engage individual donors and philanthropic organizations."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Social Enterprise",
      description: "Developing sustainable social enterprise models to generate revenue for core programs."
    }
  ];

  const partnerships = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Government Agencies",
      description: "Working with ministries to advocate for policy changes and integrate accessibility into national plans."
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "NGOs & Civil Society",
      description: "Forging alliances with organizations that share our vision to pool resources and expand reach."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Institutions",
      description: "Collaborating with universities for evidence-based interventions and impact assessments."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Private Sector",
      description: "Seeking partnerships with businesses committed to diversity and inclusion."
    }
  ];

  const vehicles = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community-Based Programs",
      description: "Grassroots approach working directly with communities to identify needs and co-create solutions."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Technology & Innovation",
      description: "Leveraging technology to improve impact through digital platforms and assistive technologies."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Advocacy & Policy",
      description: "Engaging in advocacy efforts at all levels to influence policy and promote disability rights."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Monitoring & Evaluation",
      description: "Robust frameworks to track progress, measure impact, and ensure accountability."
    }
  ];

  const focusAreas = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Independent Living",
      areas: ["Accessible Housing", "Assistive Technology", "Life Skills Training", "Case Management Support"]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Economic Empowerment",
      areas: ["Vocational Training", "Entrepreneurship Support", "Access to Decent Work", "Financial Inclusion"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Inclusion",
      areas: ["Community Participation", "Reduced Stigma", "Rights Advocacy", "Access to Justice"]
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Health & Well-being",
      areas: ["Healthcare Access", "Mental Health Support", "Prosthetic Solutions", "Holistic Wellness"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Target className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 text-purple-600 animate-bounce-in" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Our Support Framework
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-delayed-fade-in">
              Discover how empowerAbility Org targets beyond the SDGs and the specific means by which we plan to achieve our transformative goals.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Targets Section */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Targets</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              While our commitment to the SDGs is core to our mission, we have granular internal targets that guide our work.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {targets.map((target, index) => (
              <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white hover:animate-glow">
                    {target.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">{target.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {target.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Means to Achieve Goals Section */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Means to Achieve Our Goals</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategies for achieving these targets through a multi-faceted approach.
            </p>
          </div>

          {/* Investment & Funding */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-center text-purple-600 animate-fade-in">Investment & Funding</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {fundingStrategies.map((strategy, index) => (
                <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-up border-0 bg-white/90 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 text-white hover:animate-glow">
                      {strategy.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {strategy.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnerships & Collaborations */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-center text-orange-600 animate-fade-in">Partnerships & Collaborations</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-up border-0 bg-white/90 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mb-4 text-white hover:animate-glow">
                      {partnership.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800">{partnership.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {partnership.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles to Achieve Targets */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Vehicles to Achieve Targets</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The specific mechanisms and approaches we use to deliver on our commitments.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-gradient-to-br from-white to-purple-50" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-4 text-white hover:animate-glow">
                    {vehicle.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">{vehicle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {vehicle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Focus Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support across multiple domains to ensure holistic empowerment.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5 md:gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-up border-0 bg-white/90 backdrop-blur-sm" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:animate-glow">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {area.areas.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-orange-50 hover:from-purple-100 hover:to-orange-100 transition-colors duration-200">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800"></h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Innovative solutions for our communities.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            <Card className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-left border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white hover:animate-glow">
                  <Smartphone className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-800">3D-Printed Prosthetics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Providing affordable, locally produced 3D-printed prosthetics to transform the lives of amputees with innovative, accessible solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-up border-0 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white hover:animate-glow">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-800">Mental Wellness Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Comprehensive mental health care and rehabilitation services acknowledging the psychological impact and focusing on holistic well-being.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift hover:shadow-xl transition-all duration-300 animate-slide-in-right border-0 bg-gradient-to-br from-purple-50 to-orange-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white hover:animate-glow">
                  <Database className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-800">ICT Skills Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Information and Communication Technology skills training to enhance employability and economic empowerment for sustainable livelihoods.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
