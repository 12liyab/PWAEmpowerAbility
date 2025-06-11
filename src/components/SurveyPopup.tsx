import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Clock, Users, Heart } from "lucide-react";

const SurveyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the survey popup
    const hasSeenSurvey = localStorage.getItem('hasSeenSurvey');
    
    if (!hasSeenSurvey) {
      // Show popup after 3 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleTakeSurvey = () => {
    // Mark as seen and open survey in new tab
    localStorage.setItem('hasSeenSurvey', 'true');
    window.open('http://bit.ly/abilitySURVEY', '_blank');
    setIsOpen(false);
  };

  const handleDismiss = () => {
    // Mark as seen and close popup
    localStorage.setItem('hasSeenSurvey', 'true');
    setIsOpen(false);
  };

  const handleRemindLater = () => {
    // Close popup but don't mark as seen (will show again on next visit)
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg border-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 shadow-2xl animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-orange-100/20 rounded-lg"></div>
        
        <DialogHeader className="relative z-10 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
            <Heart className="h-8 w-8 text-white" />
          </div>
          
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Help Us Improve Together
          </DialogTitle>
          
          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            Your voice matters! Share your experiences to help us better serve the disability community in Ghana.
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative z-10 space-y-6 py-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-purple-100 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground leading-relaxed">
                Your insights will help us understand the unique needs and challenges facing youth with disabilities, enabling us to improve our programs and services.
              </p>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
              <Clock className="h-4 w-4 text-orange-600 flex-shrink-0" />
              <p className="text-sm text-orange-800 font-medium">
                Takes only 5-10 minutes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600 font-semibold text-sm">1</span>
              </div>
              <p className="text-xs text-muted-foreground">Anonymous</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600 font-semibold text-sm">2</span>
              </div>
              <p className="text-xs text-muted-foreground">Confidential</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600 font-semibold text-sm">3</span>
              </div>
              <p className="text-xs text-muted-foreground">Impactful</p>
            </div>
          </div>
        </div>

        <DialogFooter className="relative z-10 flex flex-col sm:flex-row gap-3 pt-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button
              variant="ghost"
              onClick={handleRemindLater}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              Remind Me Later
            </Button>
            <Button
              variant="outline"
              onClick={handleDismiss}
              className="text-muted-foreground border-muted-foreground/20 hover:bg-muted/50 hover:text-foreground transition-all duration-200"
            >
              <X className="h-4 w-4 mr-2" />
              No Thanks
            </Button>
          </div>
          
          <Button
            onClick={handleTakeSurvey}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-glow"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Take Survey
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyPopup;
