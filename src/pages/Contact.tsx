import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FloatingAccessibilityWidget from '@/components/FloatingAccessibilityWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Format message for WhatsApp
      const whatsappMessage = `*New Contact Form Submission*\n\n` +
        `*Name:* ${formData.firstName} ${formData.lastName}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone || 'Not provided'}\n` +
        `*Subject:* ${formData.subject || 'General Inquiry'}\n\n` +
        `*Message:*\n${formData.message}\n\n` +
        `*Sent from:* empowerAbility Contact Form`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = '233208118539';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Your message has been prepared for WhatsApp. Please send it to complete your inquiry.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was an error preparing your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with empowerAbility Org. We're here to answer your questions and discuss how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700">61 Avenue D West Road</p>
                    <p className="text-gray-700">North Legon, near Wisconsin University College</p>
                    <p className="text-gray-700">Accra, Ghana</p>
                    <p className="text-sm text-gray-500 mt-2">Digital Address: GM-059-9581</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-700">Phone:</p>
                    <p className="text-blue-600">+233 54 326 2211</p>
                    <p className="text-blue-600">+233 20 811 8539</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Email:</p>
                    <p className="text-blue-600">info@enabledability.org</p>
                    <p className="text-blue-600">training@enabledability.org</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Connect with us on social media:</p>
                  <p className="text-blue-600 font-semibold">@enabledability</p>
                  <div className="flex space-x-4 mt-4">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+233 XX XXX XXXX" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this about?" 
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Preparing Message...' : 'Send via WhatsApp'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600">
              There are many ways to support our mission and make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Share your expertise and experience to guide youth with disabilities on their journey.
                </p>
                <Button variant="outline" className="w-full">
                  Become a Mentor
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🙋</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contribute your time and skills to support our programs and community initiatives.
                </p>
                <Button variant="outline" className="w-full">
                  Join as Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Collaborate with us to create lasting impact and expand our reach.
                </p>
                <Button variant="outline" className="w-full">
                  Partner with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <FloatingAccessibilityWidget />
    </div>
  );
};

export default Contact;
