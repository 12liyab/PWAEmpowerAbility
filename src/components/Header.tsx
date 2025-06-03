
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DonateButton from '@/components/DonateButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fb66e078-4170-4f7e-8c18-82306eb73b0d.png"
              alt="empowerAbility Org Logo"
              className="h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Our Products</Link>
            <Link to="/programs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Programs</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Media</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</Link>
          </nav>

          {/* Desktop Donate Button */}
          <div className="hidden lg:flex items-center">
            <DonateButton />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="lg:hidden text-purple-600 hover:bg-purple-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-purple-100">
            <nav className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link 
                to="/programs" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/gallery" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Donate Button */}
              <div className="pt-4">
                <DonateButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
