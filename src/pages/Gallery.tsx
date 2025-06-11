import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from "@/components/ChatBot";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/251653fa-c152-49a5-80ed-fb1653d427b9.png",
      alt: "Youth with disabilities working in agriculture",
      title: "Agricultural Training Program"
    },
    {
      src: "/lovable-uploads/56bdeb80-c403-405b-934f-4617baee1a40.png",
      alt: "ICT training session",
      title: "ICT Skills Development"
    },
    {
      src: "/lovable-uploads/6a693b96-6a85-479a-aff8-b926bf48c6bc.png",
      alt: "Climate action project",
      title: "Climate Action Initiative"
    },
    {
      src: "/lovable-uploads/862bbedd-be53-4e26-b1e5-32232af193d9.png",
      alt: "Food systems training",
      title: "Food Systems Program"
    },
    {
      src: "/lovable-uploads/9feece13-da05-4484-bd16-7ca495d87879.png",
      alt: "Community engagement",
      title: "Community Outreach"
    },
    {
      src: "/lovable-uploads/c7bf5932-3fc8-43fb-a749-cbc7c430b8d4.png",
      alt: "Skill development workshop",
      title: "Skills Workshop"
    }
  ];

  const videos = [
    {
      id: "bsq44Jg6CrM?si=X5GiGOrCZGi-e_qn",
      title: "empowerAbility Org Introduction",
      description: "Learn about our mission and impact"
    },
    {
      id: "SGDg0QBW3Mk?si=u24qI7SqoEXPxAgO",
      title: "Agricultural Training Program",
      description: "See our youth in action in agriculture"
    },
    {
      id: "MY-TIMVpRj4?si=I3VKuMkCJYoT2N48",
      title: "ICT Skills Development",
      description: "Technology training for youth with disabilities"
    }
  ];

  const pdfs = [
    {
      filename: "CR_Ghana_2021-d32.pdf",
      title: "Ghana Country Report 2021",
      description: "Comprehensive report on disability rights and policies in Ghana for 2021"
    },
    {
      filename: "Disability in Ghana.pdf",
      title: "Disability in Ghana",
      description: "An overview of disability issues, challenges, and opportunities in Ghana"
    },
    {
      filename: "disability_rights_in_ghana.pdf",
      title: "Disability Rights in Ghana",
      description: "Legal framework and rights protection for persons with disabilities in Ghana"
    }
  ];

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (filename: string) => {
    window.open(`/${filename}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our programs, see the impact we're making, and watch stories 
            of transformation in the lives of youth with disabilities in Ghana.
          </p>
        </div>

        {/* Images Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Gallery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <CardContent className="p-0">
                  <div className="relative pb-9/16">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-64 rounded-t-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PDF Documents Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((pdf, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{pdf.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{pdf.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          onClick={() => handleView(pdf.filename)}
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          View
                        </Button>
                        <Button
                          onClick={() => handleDownload(pdf.filename)}
                          size="sm"
                          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-purple-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Every photo and video represents a life transformed. Join us in creating more stories 
            of empowerment and inclusion for youth with disabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Support Our Mission
            </a>
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default Gallery;
