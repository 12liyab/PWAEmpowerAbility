
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FloatingAccessibilityWidget from '@/components/FloatingAccessibilityWidget';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import ChallengeSection from '@/components/about/ChallengeSection';
import TeamSection from '@/components/about/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <MissionVision />
      <ChallengeSection />
      <TeamSection />
      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default About;
