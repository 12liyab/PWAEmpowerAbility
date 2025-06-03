
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                To shatter barriers and foster inclusive opportunities in Agriculture & Agribusiness, 
                Climate Change Mitigation & Adaptation, and Sexual & Reproductive Health for 
                Differently Abled Persons, especially the youth in Ghana.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 flex items-center">
                <span className="text-3xl mr-3">👁️</span>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                A world where youth or individuals with disabilities have equal access to opportunities, 
                resources, and support, enabling them to thrive and reach their full potential 
                through innovation, technology, and advocacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
