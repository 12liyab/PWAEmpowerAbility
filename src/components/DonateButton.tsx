
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonateButton = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/donate');
  };

  return (
    <Button
      onClick={handleDonate}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
      aria-label="Donate to empowerAbility Org"
    >
      <Heart className="h-5 w-5" />
      <span>Donate</span>
    </Button>
  );
};

export default DonateButton;
