
import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About <span className="text-green-600">empowerAbility</span> Org
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          empowerAbility Org is a pioneering initiative aimed at creating dignified and fulfilling lives for Differently Abled Persons, especially the youth in Ghana! Our mission is to shatter barriers and foster inclusive opportunities in Agriculture & Agribusiness, Climate Change Mitigation & Adaptation, and Sexual & Reproductive Health.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Through innovation, tech, and advocacy, we're driving self-sufficiency, equality, and sustainable livelihoods for differently abled persons. Let's unlock their potential together!
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
