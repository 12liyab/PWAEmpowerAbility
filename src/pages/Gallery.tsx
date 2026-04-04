import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from "@/components/ChatBot";
import FloatingAccessibilityWidget from "@/components/FloatingAccessibilityWidget";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string; title: string }[]>([]);

  const openLightbox = (images: { src: string; alt: string; title: string }[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);

  const campaigns = [
    {
      src: "/lovable-uploads/campaign 3.jpeg",
      alt: "World Hearing Day - From communities to classrooms: hearing care for all children",
      title: "World Hearing Day 2026",
      context: "🤟✨ From Communities to Classrooms... to Careers.\n\nThis #WorldHearingDay, empowerAbility Org is visualizing the journey of inclusion. When we invest in hearing care and inclusive education for all children today, we are building the economic leaders of Ghana's future.\n\nWe are making this vision a reality on Tuesday, 24th March - #StayTuned!!\n\nLearn more about our mission 👉🏽 bit.ly/empowerAbilityOrg\n\n#empowerAbility #WHD2026 #GhanaInclusiveFuture #HearingCare #AccessibilityNow"
    },
    {
      src: "/lovable-uploads/campaign 2.jpeg",
      alt: "Accessible farming - Did you know farming is now 100% accessible?",
      title: "Accessible Agriculture Campaign",
      context: "Did you know that 80% of Ghana's agricultural production comes from smallholder farmers? At empowerAbility Org, we believe youth with disabilities are the missing link to modernizing this sector. Join us on March 24th to find out how. 🥳\n\n#empowerAbility2026 #enabledAbility #InclusiveFutureGH #AgTech"
    },
    {
      src: "/lovable-uploads/campaign 1.jpeg",
      alt: "Nothing About Us Without Us - Big news coming March 24",
      title: "Nothing About Us Without Us",
      context: "\"Nothing About Us Without Us.\" ✊✨\n\nAt empowerAbility Org, we believe representation isn't just a goal—it's the standard.\n\nWe have some big news dropping on March 24.\n\nStay tuned! 🧵👇\n\n#empowerAbility2026 #InclusiveFutureGH #Inclusion #Accessibility"
    },
    {
      src: "/lovable-uploads/campaign 4.jpeg",
      alt: "Ghana Independence Day - Empowering PWDs is a national priority",
      title: "Ghana at 69 - Independence Day",
      context: "Happy 69th Independence Day, Ghana! 🇬🇭✨\n\nAs we reflect on our journey since 1957, we recognize that our work isn't finished until every citizen is included. True independence is only possible when every youth, regardless of ability, has a seat at the table and a voice in our future.\n\nOn Tuesday, March 24th, we are setting that table at the British Council, Accra.\n\nFor more info. & support, call: +233 54 326 2211\n\n#GhanaAt69 #InclusionMatters #empowerAbilityOrg #InclusiveFutureGH #IndependenceDay"
    }
  ];

  const eventPhotos = [
    {
      src: "/lovable-uploads/DSC04706.jpg",
      alt: "Official Launch & Inclusive Youth Policy Dialogue - Keynote address at British Council, Accra",
      title: "Volunteer Team in Action"
    },
    {
      src: "/lovable-uploads/DSC04713.jpg",
      alt: "Speaker presenting at the Official Launch & Inclusive Youth Policy Dialogue",
      title: "Event Registration"
    },
    {
      src: "/lovable-uploads/DSC04755.jpg",
      alt: "Attendee registration at the Official Launch event",
      title: "Green Gold Global Group(4G) Biotech Team"
    },
    {
      src: "/lovable-uploads/DSC04796.jpg",
      alt: "International guests attending the Inclusive Youth Policy Dialogue",
      title: "International Partners"
    },
     {
      src: "/lovable-uploads/board 3.jpeg",
      alt: "Official Launch & Inclusive Youth Policy Dialogue - Executive Director at podium",
      title: "Executive Director's Address"
    },
    {
      src: "/lovable-uploads/DSC04876.jpg",
      alt: "Distinguished guest delivering remarks at the Official Launch",
      title: "Guest Speaker Presentation" 
    },
    {
      src: "/lovable-uploads/DSC04923.jpg",
      alt: "Speaker from Ashesi University at the Inclusive Youth Policy Dialogue",
      title: "National Council for PWDs' Keynote"
    },
    {
      src: "/lovable-uploads/board 1.jpeg",
      alt: "Accra Declaration on an Inclusive Future - signing ceremony at British Council",
      title: "Accra Declaration Signing"
    },
    {
      src: "/lovable-uploads/board 2.jpeg",
      alt: "Accra Declaration on an Inclusive Future - group signing ceremony",
      title: "Executive Director signing the Accra Declaration on an Inclusive Future"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.55 AM.jpeg",
      alt: "Ashesi University speaker addressing the Official Launch & Inclusive Youth Policy Dialogue",
      title: "Guest Speaker: Millicent Adjei, Ph.D., Director, International Programs and Campus Cohesion, Ashesi University"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.55 AM (1).jpeg",
      alt: "Technology panel discussion - Bridging the digital divide with assistive tools",
      title: "The Tech Leap Panel"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.55 AM (2).jpeg",
      alt: "Youth panelists at the Technology session of the Inclusive Youth Policy Dialogue",
      title: "The Teach Leap Panelists"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.56 AM.jpeg",
      alt: "Panelist speaking on Agribusiness - Food security through accessible innovation",
      title: "The Agri & Health Panelist: Grace Naa Ardua Nelson, Pharmacist and Public Health Advocate"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.56 AM (1).jpeg",
      alt: "Panel moderator facilitating discussion at the Inclusive Youth Policy Dialogue",
      title: "Agri & Health Panel Moderator"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.57 AM.jpeg",
      alt: "Agribusiness panel - Food security through accessible innovation at British Council",
      title: "Agri & Health Panel Discussion"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.57 AM (1).jpeg",
      alt: "Moderator and panelist in conversation during the Policy Dialogue",
      title: "Event Audience"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.57 AM (2).jpeg",
      alt: "Diverse audience of PWDs, partners, and stakeholders at the British Council event",
      title: "Panel Conversation"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.57 AM (3).jpeg",
      alt: "Green Gold panelist speaking on agribusiness and sustainability",
      title: "Agri & Health Panelist: Ishmael Genyah, Head, Information Technology & Communication at NCPD"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2026-04-02 at 11.39.58 AM.jpeg",
      alt: "Stage presentation with sign language interpreter at the Official Launch",
      title: "Rita Adiase, Experience Center & Customer Operations Manager at Telecel Ghana, and her incredible team"
    }
  ];

  const images = [
    {
      src: "/lovable-uploads/251653fa-c152-49a5-80ed-fb1653d427b9.png",
      alt: "Youth with disabilities working in agriculture",
      title: "Agricultural Training Program"
    },
    {
      src: "/lovable-uploads/Adobe Express JPFA.png",
      alt: "Japan Plant Factory Association",
      title: "Japan Plant Factory Association"
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
      src: "/lovable-uploads/TakeTheSurvey_creative2.jpg",
      alt: "Skill development workshop",
      title: "Take the Survey Workshop"
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
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             <span className="text-purple-600">Media</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our programs, see the impact we're making, and watch stories 
            of transformation in the lives of youth with disabilities in Ghana's Inclusive Future.
          </p>
        </div>

        {/* Campaigns Section */}
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Campaigns
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Awareness Campaigns</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our campaigns raising awareness for disability inclusion across Ghana</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover-lift shadow-md rounded-xl border-0">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={campaign.src}
                      alt={campaign.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{campaign.title}</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{campaign.context}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Highlights - Bento Grid */}
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Camera className="h-4 w-4" />
              Event Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Official Launch & Inclusive Youth Policy Dialogue</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">British Council, Accra — March 24th, 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[240px]">
            {eventPhotos.map((photo, index) => {
              const spanClass =
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 7
                  ? "col-span-2"
                  : index === 10
                  ? "col-span-2 row-span-2"
                  : index === 13
                  ? "col-span-2"
                  : index === 17
                  ? "col-span-2"
                  : "";
              return (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-2xl cursor-pointer ${spanClass}`}
                  onClick={() => openLightbox(eventPhotos, index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 md:p-5">
                      <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-lg">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Camera className="h-4 w-4" />
              Programs & Initiatives
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Photo Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our programs in action across agriculture, climate, and community development</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(images, index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-5 text-white">
                    <h3 className="font-semibold text-base drop-shadow-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos Gallery */}
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Video Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Watch stories of transformation and impact</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
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
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Resources & Documents</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Download reports and publications on disability rights in Ghana</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
        <section className="mt-12 md:mt-16 text-center bg-purple-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
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

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[lightboxIndex]?.src}
              alt={lightboxImages[lightboxIndex]?.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {lightboxImages[lightboxIndex]?.title}
            </p>
            <p className="text-white/50 text-center text-sm mt-1">
              {lightboxIndex + 1} / {lightboxImages.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default Gallery;
