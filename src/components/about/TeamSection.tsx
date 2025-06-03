
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  position: string;
  firstName: string;
  image?: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    { 
      name: 'Joseph Lawrence Hammond', 
      position: 'Executive Director', 
      firstName: 'joseph',
      image: '/lovable-uploads/Jolah.png'
    },
    { 
      name: 'Agede Mawuena', 
      position: 'Deputy Executive Director/Operations', 
      firstName: 'agede',
      image: '/lovable-uploads/Agede 2.png'
    },
    { 
      name: 'Stanley Anku', 
      position: 'Business Development', 
      firstName: 'stanley',
      image: '/lovable-uploads/Stanley 2.png'
    },
    { 
      name: 'Cece Abotsi', 
      position: 'Head of Policy, Influence, and Advocacy/abilityHEALTH Lead', 
      firstName: 'cece',
      image: '/lovable-uploads/'
    },
    { 
      name: 'Michael Kumordzi Tetteh', 
      position: 'Head of Programs & Communications', 
      firstName: 'michael',
      image: '/lovable-uploads/Michael 2.png'
    },
    { 
      name: 'Caesar Seade', 
      position: 'Head of Research, Monitoring and Evaluation', 
      firstName: 'caesar',
      image: '/lovable-uploads/Caesar 2.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Dedicated professionals working together to create meaningful change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Our team also includes fundraising leads, marketing specialists, administrative staff, 
            job coaches, advocates, mentors, volunteers, and board members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
