
import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReadAloudButton = () => {
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleReadAloud = () => {
    if (isReading) {
      // Stop reading
      speechSynthesis.cancel();
      setIsReading(false);
    } else {
      // Start reading
      const textContent = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(textContent);
      
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsReading(false);
      };
      
      utterance.onerror = () => {
        setIsReading(false);
      };
      
      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <Button
      onClick={toggleReadAloud}
      variant="ghost"
      size="sm"
      className={`
        flex items-center space-x-1 font-medium transition-all duration-300 rounded-md px-3 py-2
        ${isReading 
          ? 'text-red-600 bg-red-50 hover:bg-red-100 border border-red-200' 
          : 'text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-200'
        }
        focus:ring-2 focus:ring-offset-2 
        ${isReading ? 'focus:ring-red-300' : 'focus:ring-purple-300'}
      `}
      aria-label={isReading ? "Stop reading aloud" : "Read page aloud"}
    >
      {isReading ? (
        <>
          <VolumeX className="h-4 w-4 animate-pulse" />
          <span className="hidden sm:inline text-sm">Stop</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Read</span>
        </>
      )}
    </Button>
  );
};

export default ReadAloudButton;
