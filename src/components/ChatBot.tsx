import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm abilityCHATLiVe, your virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 80) + 'px';
    }
  }, [inputMessage]);

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm abilityCHATLiVe, your virtual assistant. How can I help you today?",
        isBot: true,
        timestamp: new Date()
      }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! It's great to meet you. I'm here to help you learn about empowerAbility Org's products and services. What would you like to know?";
    } else if (lowerMessage.includes('abilitymarket') || lowerMessage.includes('marketplace')) {
      return "abilityMARKET is our comprehensive online marketplace that connects people with disabilities to resources, products, and services. It features assistive technology, service directory, community forum, and job opportunities. Would you like to know more about any specific feature?";
    } else if (lowerMessage.includes('abilityfarmtech') || lowerMessage.includes('agriculture') || lowerMessage.includes('farming')) {
      return "abilityFARMTECH empowers small landholder farmers, including youth with disabilities, through technology-driven agriculture. We provide training, assistive agricultural technologies, demonstration farms, and digital platforms for market access. How can we help you with agricultural technology?";
    } else if (lowerMessage.includes('abilityvoice') || lowerMessage.includes('voice') || lowerMessage.includes('stories')) {
      return "abilityVOICE is our platform that amplifies the voices of people with disabilities. It features video stories, audio content, articles, blogs, and a community platform. We believe in sharing inspiring stories and challenging stereotypes. Would you like to contribute your story?";
    } else if (lowerMessage.includes('abilityhealth') || lowerMessage.includes('health') || lowerMessage.includes('healthcare')) {
      return "abilityHEALTH focuses on inclusive healthcare for youth with disabilities, including sexual reproductive health services, health education, and wellness programs. We ensure healthcare access without barriers. What health services are you interested in?";
    } else if (lowerMessage.includes('abilityedu') || lowerMessage.includes('education') || lowerMessage.includes('training')) {
      return "abilityEDU provides education without barriers through skills training, digital learning, certification programs, and career support. We believe everyone deserves quality education. What skills would you like to develop?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('location')) {
      return "You can reach us at info@enabledability.org or call +233 20 811 8539. We're located at 61 Avenue D West Road, North Legon, Accra. Our team is ready to assist you!";
    } else if (lowerMessage.includes('program') || lowerMessage.includes('initiative')) {
      return "Our programs focus on food systems, agriculture, ICT, and climate action for youth with disabilities. We create dignified and fulfilling opportunities across multiple sectors. Which program area interests you most?";
    } else if (lowerMessage.includes('about') || lowerMessage.includes('organization') || lowerMessage.includes('mission')) {
      return "empowerAbility Org creates dignified and fulfilling lives for youth with disabilities in Ghana. Our motto is 'Empower the ability, not the disability.' We work across food systems, agriculture, ICT, and climate action. What aspect of our mission would you like to explore?";
    } else if (lowerMessage.includes('volunteer') || lowerMessage.includes('join') || lowerMessage.includes('support')) {
      return "We'd love to have you join our mission! There are many ways to support empowerAbility Org - volunteering, partnerships, donations, or spreading awareness. Contact us to discuss how you can get involved in empowering youth with disabilities.";
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! I'm here whenever you need assistance. Remember, at empowerAbility Org, we believe in empowering the ability, not the disability. Is there anything else I can help you with?";
    } else {
      return "Thank you for your question! I'm here to help you learn about empowerAbility Org's products and services. Feel free to ask about abilityMARKET, abilityFARMTECH, abilityVOICE, abilityHEALTH, abilityEDU, or how to get involved with our organization.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button with Animation */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg z-50 transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} flex items-center justify-center animate-pulse`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Enhanced Chat Window with Better Layout */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-[500px] shadow-xl z-50 flex flex-col animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg">abilityCHATLiVe</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearChat}
                  className="text-white hover:bg-purple-700 h-8 w-8 transition-colors duration-200"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-purple-700 h-8 w-8 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-purple-100">Ask me anything about our services!</p>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            {/* Enhanced Messages Area with Better Scrolling */}
            <ScrollArea className="flex-1 px-4 py-2">
              <div className="space-y-3 pb-2">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex items-start space-x-2 max-w-[90%]`}>
                      {message.isBot && (
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-3 w-3 text-purple-600" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`p-3 rounded-lg text-sm transition-all duration-200 hover:shadow-md ${
                            message.isBot
                              ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                              : 'bg-purple-600 text-white rounded-tr-none'
                          }`}
                        >
                          <div className="whitespace-pre-wrap leading-relaxed break-words word-wrap">
                            {message.text}
                          </div>
                        </div>
                        <div className={`text-xs text-gray-500 mt-1 px-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                      {!message.isBot && (
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Enhanced Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="flex items-start space-x-2 max-w-[90%]">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-purple-600" />
                      </div>
                      <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Enhanced Input Area with Better Layout */}
            <div className="p-4 border-t bg-gray-50 flex-shrink-0">
              <div className="flex space-x-2 items-end">
                <div className="flex-1">
                  <textarea
                    ref={textareaRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all duration-200 focus:shadow-md overflow-hidden text-sm"
                    rows={1}
                    style={{ 
                      minHeight: '40px', 
                      maxHeight: '80px',
                      lineHeight: '1.4'
                    }}
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
