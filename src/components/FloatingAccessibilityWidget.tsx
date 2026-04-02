
import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import ReadAloudButton from '@/components/ReadAloudButton';
import FontSizeAdjuster from '@/components/FontSizeAdjuster';

const FloatingAccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            size="lg"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
            aria-label="Accessibility options"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Settings className="h-6 w-6" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          align="start" 
          className="w-[calc(100vw-2rem)] sm:w-80 p-4 bg-white shadow-xl border border-gray-200 rounded-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility Options</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text-to-Speech
                </label>
                <ReadAloudButton />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Size
                </label>
                <FontSizeAdjuster />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingAccessibilityWidget;
