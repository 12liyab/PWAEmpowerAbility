
import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
          Beyond Aid <span className="text-green-600"> We Build Ability. </span> 
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 md:mb-8">
         At empowerAbility Org, we are dismantling barriers for Ghana’s disabled youth to access the agricultural economy. Through our hybrid model, we operate as both a lifeline and a launchpad.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Our Nonprofit arm (The "Heart") ensures every youth has the health, education, and advocacy support they need to thrive. Our Social Enterprise arm (The "Engine"), abilityFARMTECH, and abilityMARKET provide the tools and digital marketplace that independent entrepreneurs need to thrive. We aren't just farming crops; we are cultivating independence.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
