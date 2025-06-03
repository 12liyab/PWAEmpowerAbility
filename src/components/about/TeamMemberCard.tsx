
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  firstName: string;
  image?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Avatar className="w-20 h-20">
            {member.image ? (
              <AvatarImage 
                src={member.image} 
                alt={member.name}
                className="object-cover"
              />
            ) : null}
            <AvatarFallback className="bg-green-100 text-green-600 text-lg font-bold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-lg font-bold text-gray-900">
          {member.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{member.position}</p>
        <div className="flex justify-center items-center space-x-3 mb-3">
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`${member.name} Twitter`}
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{member.firstName}@enabledability.org</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
