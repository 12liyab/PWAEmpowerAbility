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

    // Greetings
    if (lowerMessage.match(/\b(hello|hi|hey|good morning|good afternoon|good evening|greetings)\b/)) {
      return "Hello! It's great to meet you. I'm here to help you learn about empowerAbility Org — our products, programs, team, partners, and how to get involved. What would you like to know?";
    }

    // abilityMARKET
    if (lowerMessage.includes('abilitymarket') || (lowerMessage.includes('market') && lowerMessage.includes('place'))) {
      return "abilityMARKET — 'Empowering Inclusion, Access, and Opportunity'\n\nA comprehensive online marketplace connecting people with disabilities to resources, products, and services.\n\n🛒 Key Features:\n• Product Marketplace for assistive technology & adaptive products\n• Service Directory for disability-related services\n• Community Forum for connection & support\n• Job Board connecting talent with inclusive employers\n\n🎯 Target: Promoting economic independence for 1,000+ individuals with disabilities across Ghana.\n\nWould you like to know about our other products?";
    }

    // abilityFARMTECH
    if (lowerMessage.includes('abilityfarmtech') || lowerMessage.includes('farmtech') || (lowerMessage.includes('farm') && lowerMessage.includes('tech'))) {
      return "abilityFARMTECH — 'Technology-Driven Agriculture'\n\nEmpowering small landholder farmers (<5 acres), including youth with disabilities, through agricultural innovation.\n\n🌱 Key Activities:\n• Agricultural training & capacity building\n• Assistive agricultural technologies\n• Demonstration farms\n• Digital platforms for market access & financial inclusion\n\n📊 Benefits: Climate-resilient practices, adaptive farming tools, precision agriculture, drip irrigation, market linkage, and entrepreneurship skills.\n\n🎯 Impact: Supporting 500+ farmers across 50+ communities.\n\nWant to learn about our agriculture program?";
    }

    // abilityVOICE
    if (lowerMessage.includes('abilityvoice') || (lowerMessage.includes('voice') && !lowerMessage.includes('invoice'))) {
      return "abilityVOICE — 'Amplifying the Voices of Ability'\n\nA multimedia platform empowering people with disabilities to share stories, challenge stereotypes, and advocate for inclusive policies.\n\n🎤 Content Types:\n• Video Stories & Audio Content\n• Articles & Blogs\n• Community Platform\n\n🎯 Impact: Reaching 10,000+ monthly visitors with stories that change perceptions and drive policy change.\n\nLed by Wilhermina Dansoa Ametepeh (abilityVOICE Lead / PR Officer). Would you like to contribute your story?";
    }

    // abilityHEALTH
    if (lowerMessage.includes('abilityhealth') || (lowerMessage.includes('health') && !lowerMessage.includes('wealth'))) {
      return "abilityHEALTH — 'Inclusive Healthcare for All'\n\nComprehensive healthcare focusing on sexual & reproductive health for youth with disabilities.\n\n❤️ Key Areas:\n• Healthcare Access\n• Sexual Reproductive Health Services\n• Health Education tailored for PWDs\n• Wellness & Mental Health Programs\n• Training for healthcare providers on disability inclusion\n\n🎯 Impact: Improving health outcomes for 2,000+ youth with disabilities.\n\nLed by Cece Abotsi (Head of Policy Influencing & Advocacy / abilityHEALTH Lead). What health services interest you?";
    }

    // abilityEDU
    if (lowerMessage.includes('abilityedu') || (lowerMessage.includes('education') && !lowerMessage.includes('health education'))) {
      return "abilityEDU — 'Education Without Barriers'\n\nInclusive educational programs & training opportunities.\n\n📚 Key Features:\n• Skills Training in ICT, agriculture, entrepreneurship\n• Digital Learning with assistive technology support\n• Industry-recognized Certification Programs\n• Career Coaching & Job Placement Support\n• Mentorship with successful professionals\n\n🎯 Impact: Training 800+ individuals annually with 70% job placement rate.\n\nEmail training@enabledability.org for more info. What skills would you like to develop?";
    }

    // Products overview
    if (lowerMessage.includes('product') || lowerMessage.includes('service') || lowerMessage.includes('offering')) {
      return "We have 5 flagship products & services:\n\n🔵 abilityMARKET — Online marketplace for assistive tech & services\n🟢 abilityFARMTECH — Technology-driven agriculture\n🟣 abilityVOICE — Multimedia advocacy platform\n🔴 abilityHEALTH — Inclusive healthcare\n🟠 abilityEDU — Education without barriers\n\nAsk about any specific product to learn more!";
    }

    // Programs
    if (lowerMessage.includes('program') || lowerMessage.includes('initiative') || lowerMessage.includes('project')) {
      return "Our 3 core programs:\n\n🌾 Agriculture Program — 'Employment in Agriculture Value Chain'\nCreating dignified employment through training, business services, tech, and market linkages.\n\n🌍 Climate Change Program — 'Mitigation & Adaptation'\nEmpowering youth with disabilities in climate resilience with sustainable technologies.\n\n💜 Sexual Reproductive Health Program — 'Health & Well-being'\nImproving access to SRH services through awareness, tailored services, and policy advocacy.\n\nWe also have innovative programs like 3D-Printed Prosthetics, Mental Wellness Support, and ICT Skills Training. Which interests you?";
    }

    // Agriculture specific
    if (lowerMessage.includes('agriculture') || lowerMessage.includes('farming') || lowerMessage.includes('agribusiness')) {
      return "Our Agriculture Program empowers youth with disabilities in farming:\n\n🌾 Strategy: Training, business services, technology development, and market linkages.\n🎯 Goal: Create dignified employment in the agriculture value chain.\n📊 Fact: 80% of Ghana's agricultural production comes from smallholder farmers.\n\nabilityFARMTECH supports 500+ farmers across 50+ communities with climate-resilient practices, adaptive tools, precision agriculture, and digital market access.\n\nWould you like to learn about abilityFARMTECH in detail?";
    }

    // Climate
    if (lowerMessage.includes('climate') || lowerMessage.includes('environment') || lowerMessage.includes('sustainability')) {
      return "Our Climate Change Mitigation & Adaptation program:\n\n🌍 Objective: Empower youth with disabilities in climate resilience\n📋 Strategy: Climate-resilient practices, sustainable technologies, youth policy dialogue\n✅ Outcome: Enhanced resilience ensuring sustained participation in climate action\n\nWe believe persons with disabilities must be active participants in addressing climate challenges. Want to know about our enabling factors?";
    }

    // Sexual reproductive health
    if (lowerMessage.includes('sexual') || lowerMessage.includes('reproductive') || lowerMessage.includes('srh')) {
      return "Sexual Reproductive Health Program — 'Health & Well-being':\n\n💜 Objective: Improve access to SRH services for youth with disabilities\n📋 Strategy: Awareness raising, tailored services, policy advocacy, community education\n✅ Outcome: Better SRH outcomes contributing to overall well-being\n\nabilityHEALTH leads this initiative, improving outcomes for 2,000+ youth. Contact us to learn more!";
    }

    // Team / staff / leadership
    if (lowerMessage.match(/\b(team|staff|leader|director|founder|who works|personnel|management)\b/)) {
      return "Our Leadership Team:\n\n👤 Joseph Lawrence Hammond — Executive Director / Head of Innovation & Digital Inclusion\n👤 Agede Mawuena — Deputy Executive Director / Operations Manager\n👤 Joana Eliza Kofie — Non-Executive Director / UK Representative\n👤 Stanley Anku — Head of Fintech & Business Development\n👤 Cece Abotsi — Head of Policy Influencing & Advocacy / abilityHEALTH Lead\n👤 Stephen Quarcoo — Social Media & Content Manager\n👤 Caesar Seade — Head of Research, Monitoring & Evaluation\n👤 Wilhermina Dansoa Ametepeh — abilityVOICE Lead / PR Officer\n\nPlus fundraising leads, marketing specialists, job coaches, mentors, and volunteers!";
    }

    // Partners
    if (lowerMessage.includes('partner') || lowerMessage.includes('collaborat') || lowerMessage.includes('sponsor')) {
      return "Our Valued Partners include:\n\n🤝 Ghana Federation of Disability Organisations (GFD)\n🤝 Sacrefilms Multimedia\n🤝 PrimeLinQ\n🤝 theprintpalace\n🤝 thenovus.solutions\n🤝 Japan Plant Factory Association\n🤝 National Council for Persons with Disabilities (NCPWD)\n🤝 Green Gold Global Group (4G) Biotech Co.\n\nWe also collaborate with Government Agencies, NGOs, Academic Institutions, and the Private Sector. Interested in becoming a partner? Contact us!";
    }

    // Contact info
    if (lowerMessage.match(/\b(contact|reach|call|phone|email|address|location|where|find us|office)\b/)) {
      return "📍 Location: 61 Avenue D West Road, North Legon, near Wisconsin University College, Accra, Ghana\n📮 Digital Address: GM-059-9581\n\n📞 Phone:\n• +233 54 326 2211\n• +233 20 811 8539\n\n✉️ Email:\n• info@enabledability.org\n• training@enabledability.org\n• accessibility@enabledability.org\n\n📱 Social Media: @enabledability on Facebook, Twitter, Instagram, YouTube & LinkedIn\n\nOur team is ready to assist you!";
    }

    // Donation
    if (lowerMessage.match(/\b(donat|give|contribute|fund|support financ|money|payment|mobile money|momo)\b/)) {
      return "Thank you for your generosity! Here's how to donate:\n\n📱 Mobile Money:\n• MTN MoMo: +233 54 326 2211\n• Vodafone Cash: +233 20 811 8539\n• AirtelTigo Money: Available on request\n\n🏦 Bank Transfer & International Transfer: Contact info@enabledability.org for details.\n\n💰 Your Impact:\n• GHS 300 → Trains 1 youth in agriculture for 3 months\n• GHS 300 → Provides ICT training for 1 youth\n• GHS 200 → Supports 1 climate action project\n• Any amount supports our mission!\n\nCall +233 54 326 2211 for more info.";
    }

    // Volunteer / join
    if (lowerMessage.match(/\b(volunteer|join|get involved|help out|intern|work with)\b/)) {
      return "We'd love to have you join our mission! Ways to get involved:\n\n🙋 Volunteering — Support our programs directly\n🤝 Partnerships — Corporate or organizational collaboration\n💰 Donations — Financial support (Mobile Money, bank transfer)\n📢 Spread Awareness — Share our work on social media @enabledability\n🎓 Mentorship — Guide youth with disabilities\n\nContact info@enabledability.org or call +233 54 326 2211 to discuss how you can contribute!";
    }

    // About / mission / vision
    if (lowerMessage.match(/\b(about|mission|vision|who are|what is empower|motto|organization|org)\b/)) {
      return "empowerAbility Org\n🏷️ Motto: 'Empower the Ability, Not the Disability'\n\n🎯 Mission: To shatter barriers and foster inclusive opportunities in Agriculture & Agribusiness, Climate Change Mitigation & Adaptation, and Sexual & Reproductive Health for Differently Abled Persons, especially the youth in Ghana.\n\n🔭 Vision: A world where youth with disabilities have equal access to opportunities, resources, and support, enabling them to thrive through innovation, technology, and advocacy.\n\n📊 Key Stats:\n• 1,000+ youth to be empowered\n• 50+ communities\n• 5 key programs\n• 2026-2030 strategic roadmap\n\nWhat aspect would you like to explore?";
    }

    // Events / launch
    if (lowerMessage.match(/\b(event|launch|british council|accra declaration|conference|dialogue|march 24)\b/)) {
      return "🎉 Major Event — March 24, 2026:\n'Ghana's Inclusive Future: Empowering PWDs in Agribusiness, Technology and Health'\n\n📍 Venue: British Council, Accra\n\n📋 Activities:\n• Official Launch of empowerAbility Org\n• Inclusive Youth Policy Dialogue with policymakers\n• Accra Declaration on an Inclusive Future (signing ceremony)\n• Panel discussions on Agribusiness, Technology & Healthcare\n• Keynote speakers including Ashesi University representatives\n\nInternational and local partners were in attendance! Check our Gallery page for photos.";
    }

    // SDG / sustainable development goals
    if (lowerMessage.match(/\b(sdg|sustainable development|goals|united nations|un goals)\b/)) {
      return "We're committed to the UN Sustainable Development Goals:\n\n🎯 SDG 1 — No Poverty\n🎯 SDG 2 — Zero Hunger\n🎯 SDG 3 — Good Health & Well-being\n🎯 SDG 4 — Quality Education\n🎯 SDG 8 — Decent Work & Economic Growth\n🎯 SDG 10 — Reduced Inequalities\n🎯 SDG 11 — Sustainable Cities & Communities\n\nAll our programs align with these goals to create lasting impact for youth with disabilities in Ghana.";
    }

    // Accessibility
    if (lowerMessage.match(/\b(accessibility|accessible|wcag|screen reader|keyboard|assistive)\b/)) {
      return "Our Accessibility Commitment:\n\n♿ WCAG 2.1 Level AA compliance\n⌨️ Full keyboard navigation support\n🔊 Screen reader compatible (JAWS, NVDA, VoiceOver)\n🎨 High contrast color schemes\n🔤 Readable fonts & adjustable text sizing\n🖼️ Descriptive alt text for all images\n🔍 Browser zoom up to 200%\n\n📄 Alternative Formats:\n• Large print documents\n• Audio descriptions\n• Plain text versions\n• Sign language interpretation (on request)\n\n📧 Contact: accessibility@enabledability.org\n📞 Phone: +233 54 326 2211 (Response: 2 business days)";
    }

    // Privacy / data
    if (lowerMessage.match(/\b(privacy|data|personal information|cookies|gdpr)\b/)) {
      return "Our Privacy & Data Protection Policy:\n\n📋 Data Collected: Name, contact details, email, program participation, disability info (with consent), plus IP address & browser info automatically.\n\n🔒 Your Rights:\n• Access your personal information\n• Correct inaccurate data\n• Request data deletion\n• Withdraw consent anytime\n• Opt-out of communications\n\n⚠️ We NEVER sell or rent your data to third parties.\n\nVisit our Privacy Policy page for full details, or contact info@enabledability.org.";
    }

    // Terms
    if (lowerMessage.match(/\b(terms|conditions|rules|agreement|legal)\b/)) {
      return "Our Terms & Conditions cover:\n\n📜 Program Participation:\n• Meet eligibility requirements\n• Complete application/assessment processes\n• Adhere to program rules & guidelines\n\nFor intellectual property, website use, and full legal details, visit our Terms & Conditions page.\n\nQuestions? Contact info@enabledability.org.";
    }

    // Challenges / disability stats / unemployment
    if (lowerMessage.match(/\b(challenge|barrier|unemploy|problem|disability stat|discrimination|stigma)\b/)) {
      return "Challenges We Address:\n\n📊 African Youth Unemployment Crisis:\n• ⅓ of African youths are unemployed\n• ⅓ are vulnerably employed\n• Ghana youth unemployment: 19.7% (2021)\n• Youth with disabilities face even greater barriers\n\n🚧 Barriers Faced by Youth with Disabilities:\n• Limited access to education & training\n• Discrimination & social stigma\n• Physical barriers & lack of assistive technologies\n• Limited support services\n\nempowerAbility Org works to shatter these barriers across agriculture, climate action, health, and education.";
    }

    // Innovation / AI / technology
    if (lowerMessage.match(/\b(innovation|ai|artificial intelligence|technology|digital|3d print|prosthetic|ict)\b/)) {
      return "Innovation & Technology at empowerAbility:\n\n🤖 AI & Digital Platforms:\n• Digital platforms for training delivery\n• AI for personalized learning\n• Online agricultural markets\n• Market readiness support\n\n🦿 3D-Printed Prosthetics:\nAffordable, locally produced solutions for amputees\n\n💻 ICT Skills Training:\nInformation & Communication Technology for employability\n\n🧠 Mental Wellness Support:\nComprehensive mental health care & rehabilitation\n\nTechnology is a key enabler in all our programs!";
    }

    // Focus areas / impact areas
    if (lowerMessage.match(/\b(focus area|impact|independent living|economic empower|social inclusion|well-being)\b/)) {
      return "Our 4 Focus Areas:\n\n🏠 Independent Living: Accessible housing, assistive tech, life skills, case management\n💼 Economic Empowerment: Vocational training, entrepreneurship, decent work, financial inclusion\n🤝 Social Inclusion: Community participation, reduced stigma, rights advocacy, justice access\n❤️ Health & Well-being: Healthcare access, mental health, prosthetics, holistic wellness\n\n🎯 Specific Targets:\n• 2-3 new accessibility solutions annually\n• Reach 5,000 through educational programs\n• Employment for 50+ in mainstream sectors\n• 10 community support groups across regions";
    }

    // Campaign / awareness
    if (lowerMessage.match(/\b(campaign|awareness|world hearing|independence day|nothing about us)\b/)) {
      return "Our Campaigns & Awareness Initiatives:\n\n👂 World Hearing Day 2026 (March 24) — 'From Communities to Classrooms: hearing care for all children'\n🌾 Accessible Agriculture Campaign — Highlighting smallholder farmers with disabilities\n✊ 'Nothing About Us Without Us' — Representation and inclusion advocacy\n🇬🇭 Ghana Independence Day — Emphasizing inclusion as a national priority\n\nFollow us @enabledability on social media to stay updated!";
    }

    // Gallery / media / photos / videos
    if (lowerMessage.match(/\b(gallery|photo|video|media|picture|image)\b/)) {
      return "Our Media & Gallery:\n\n🎥 Video Content:\n• empowerAbility Org Introduction\n• Agricultural Training Program\n• ICT Skills Development\n\n📸 Photo Gallery: Agricultural training, climate action initiatives, community events, team photos, Official Launch at British Council\n\n📄 Available Documents:\n• Ghana Country Report 2021 (Disability Rights)\n• Disability in Ghana Overview\n• Disability Rights in Ghana (Legal Framework)\n\nVisit our Gallery page to explore!";
    }

    // Safeguarding
    if (lowerMessage.match(/\b(safeguard|protect|abuse|safe|child protection)\b/)) {
      return "Safeguarding at empowerAbility:\n\n🛡️ We ensure:\n• Safe and supportive environments for all participants\n• Protection from abuse and exploitation\n• Public engagement and awareness on safeguarding\n• Community mobilization for safety\n\nSafeguarding is a core enabling factor across all our programs. Contact us if you have any concerns.";
    }

    // Policy
    if (lowerMessage.match(/\b(policy|advocacy|government|legislation|inclusive polic)\b/)) {
      return "Policy Engagement & Advocacy:\n\n📢 We advocate for:\n• Inclusive policies at local and national levels\n• Stakeholder engagement with government agencies\n• Policy change influence for disability rights\n• Inclusive practice commitments from institutions\n\nLed by Cece Abotsi (Head of Policy Influencing & Advocacy). We also signed the Accra Declaration on an Inclusive Future at our Official Launch!";
    }

    // Funding / investment
    if (lowerMessage.match(/\b(funding|grant|investment|sponsor|csr|corporate social)\b/)) {
      return "Investment & Funding Strategies:\n\n💰 Grant Applications from international & local foundations\n🏢 Corporate Partnerships for CSR initiatives\n❤️ Individual Giving through targeted campaigns\n🏪 Social Enterprise models for revenue generation\n\nWant to fund or sponsor our work? Contact info@enabledability.org or call +233 54 326 2211.";
    }

    // Ghana specific
    if (lowerMessage.match(/\b(ghana|accra|legon|west africa)\b/)) {
      return "empowerAbility Org is based in Accra, Ghana:\n\n📍 61 Avenue D West Road, North Legon, near Wisconsin University College\n📮 Digital Address: GM-059-9581\n\nWe operate in 50+ communities across Ghana, with a 2026-2030 strategic roadmap to expand our impact. Our focus is on youth with disabilities in Ghana through agriculture, climate action, health, and education.";
    }

    // Stories / testimonial
    if (lowerMessage.includes('stories') || lowerMessage.includes('testimonial') || lowerMessage.includes('experience')) {
      return "abilityVOICE shares powerful stories of people with disabilities:\n\n🎤 Video Stories — Visual documentaries and personal narratives\n🎧 Audio Content — Podcasts and audio testimonials\n✍️ Articles & Blogs — Written stories and advocacy pieces\n👥 Community Platform — Connect and share your journey\n\nWould you like to contribute your story? Visit our abilityVOICE section or contact us!";
    }

    // Disability types
    if (lowerMessage.match(/\b(disability|disabilities|pwd|differently abled|special needs|impair|blind|deaf|wheelchair|amputee)\b/)) {
      return "empowerAbility Org serves youth with all types of disabilities in Ghana.\n\nOur inclusive approach covers:\n• Physical disabilities (mobility, amputees — we even offer 3D-printed prosthetics!)\n• Visual & hearing impairments\n• Intellectual & developmental disabilities\n• Multiple disabilities\n\nOur motto: 'Empower the Ability, Not the Disability'\n\nAll our products and programs are designed to be accessible. How can we help you?";
    }

    // Social media
    if (lowerMessage.match(/\b(social media|facebook|twitter|instagram|youtube|linkedin|follow)\b/)) {
      return "Follow us @enabledability:\n\n📘 Facebook: facebook.com/empowerabilityOrg\n🐦 Twitter: twitter.com/enabledability\n📸 Instagram: instagram.com/enabledability\n🎥 YouTube: youtube.com/@enabledability\n💼 LinkedIn: linkedin.com/company/enabledability\n\nStay updated on our programs, events, and impact stories!";
    }

    // Thank you
    if (lowerMessage.match(/\b(thank|thanks|appreciate)\b/)) {
      return "You're very welcome! I'm here whenever you need assistance. Remember, at empowerAbility Org, we believe in empowering the ability, not the disability. Is there anything else I can help you with?";
    }

    // Goodbye
    if (lowerMessage.match(/\b(bye|goodbye|see you|take care|good night)\b/)) {
      return "Goodbye! Thank you for your interest in empowerAbility Org. Remember, you can always come back and ask me anything. Empower the Ability, Not the Disability! 💜";
    }

    // Help / what can you do
    if (lowerMessage.match(/\b(help|what can you|menu|options|what do you know)\b/)) {
      return "I can help you with:\n\n📦 Products — abilityMARKET, abilityFARMTECH, abilityVOICE, abilityHEALTH, abilityEDU\n📋 Programs — Agriculture, Climate Change, Health\n👥 Team & Leadership\n🤝 Partners & Collaborations\n📍 Contact Information\n💰 Donations & Support\n🙋 Volunteering & Getting Involved\n🎉 Events & Launch\n🎯 SDGs & Impact\n♿ Accessibility Features\n🔒 Privacy & Terms\n📸 Media & Gallery\n🤖 Innovation & Technology\n📢 Campaigns & Awareness\n\nJust ask about any topic!";
    }

    // Default fallback
    return "Thank you for your question! I can help you with many topics about empowerAbility Org. Try asking about:\n\n• Our products (abilityMARKET, abilityFARMTECH, abilityVOICE, abilityHEALTH, abilityEDU)\n• Programs & initiatives\n• Team & leadership\n• Partners\n• Donations & how to support\n• Events & campaigns\n• Contact information\n• Accessibility features\n• SDGs & impact areas\n\nOr type 'help' to see all topics I can assist with!";
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
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg z-50 transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} flex items-center justify-center animate-pulse`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Enhanced Chat Window with Better Layout */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-80 h-[min(500px,85vh)] shadow-xl z-50 flex flex-col animate-scale-in">
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
