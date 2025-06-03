
import React, { useState, useEffect } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FontSizeAdjuster = () => {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    // Load saved font size from localStorage
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      const size = parseInt(savedFontSize);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }
  }, []);

  const adjustFontSize = (change: number) => {
    const newSize = Math.max(75, Math.min(150, fontSize + change));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    localStorage.setItem('fontSize', '100');
  };

  return (
    <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
      <span className="text-sm font-medium text-gray-700">Font Size:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => adjustFontSize(-10)}
        disabled={fontSize <= 75}
        aria-label="Decrease font size"
        className="h-8 w-8 p-0"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-center">
        {fontSize}%
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => adjustFontSize(10)}
        disabled={fontSize >= 150}
        aria-label="Increase font size"
        className="h-8 w-8 p-0"
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={resetFontSize}
        aria-label="Reset font size"
        className="h-8 w-8 p-0"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FontSizeAdjuster;
