import React, { useState, useRef, useEffect } from 'react';
import { AI_CHATBOT_KNOWLEDGE, GROUPS } from '../data/careerData';
import { sendChatMessageAPI } from '../services/apiService';
import { Bot, User, Send, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function AIChatbot({ initialPrompt, onSelectGroup, customTheme, language }) {
  const isTa = language === 'ta';

  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: isTa 
        ? `வணக்கம்! நான் உங்கள் **காரியர்பல்ஸ் பாதை விளக்கக் குழு (Pathway Explainer)**. 🎓
        
தமிழ்நாடு 11ஆம் வகுப்பு பாடப்பிரிவுகள், தகுதிகள் மற்றும் உயர்கல்வி வழிகள் பற்றிய உங்கள் கேள்விகளைக் கேட்கலாம்.

உதாரணக் கேள்விகள்:
- *"குரூப் 2502 தேர்ந்தெடுத்தால் டேட்டா சயின்டிஸ்ட் ஆக முடியுமா?"*
- *"பயோ-மேத்ஸ் மாணவர் NEET மற்றும் JEE இரண்டையும் எழுத முடியுமா?"*
- *"TNEA கட்-ஆஃப் மதிப்பெண் எவ்வாறு கணக்கிடப்படுகிறது?"*`
        : `Hello! I am your **CareerPulse AI Pathway Explainer**. 🎓

You can ask me questions about Tamil Nadu 11th-standard groups, subject prerequisites, entrance exams, and career pathways:

- *"What can I do after Group Code 2502?"*
- *"Can I study Computer Science after Bio-Mathematics?"*
- *"What entrance exams are relevant for my group?"*
- *"How is the TNEA engineering aggregate cutoff calculated?"*
- *"Why is this course available to me?"*

How can I help you explore your education options today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialPrompt) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend = inputValue) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const userMsg = {
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (textToSend === inputValue) setInputValue('');
    setIsTyping(true);

    const backendResult = await sendChatMessageAPI(trimmed);

    let responseText = '';
    let relatedGroup = null;

    if (backendResult && backendResult.reply) {
      responseText = backendResult.reply;
      relatedGroup = backendResult.related_group;
    } else {
      const matchedItem = AI_CHATBOT_KNOWLEDGE.find(item =>
        item.keywords.some(kw => trimmed.toLowerCase().includes(kw))
      );

      if (matchedItem) {
        responseText = matchedItem.answer;
        relatedGroup = matchedItem.relatedGroup;
      } else {
        if (trimmed.toLowerCase().includes('data science') || trimmed.toLowerCase().includes('computer')) {
          responseText = `**Computer Science + Mathematics (Group Code 2502)** is the primary pathway for Data Science, Software Engineering, AI & Cyber Security under Tamil Nadu board rules. Target courses like **B.Tech AI&DS** or **B.E. CSE** via JEE Main or TNEA single-window counselling.`;
          relatedGroup = 'cs-maths';
        } else if (trimmed.toLowerCase().includes('doctor') || trimmed.toLowerCase().includes('medical') || trimmed.toLowerCase().includes('biology')) {
          responseText = `To pursue medical degree programs (MBBS, BDS, AYUSH) or Biological Research (Biotechnology, Microbiology), select **Bio-Mathematics (Group Code 2503)** or **Pure Science (Group Code 2608)** in 11th standard. Clear **NEET-UG** for MBBS/BDS or apply via **TNEA** for B.Tech Biotech.`;
          relatedGroup = 'bio-maths';
        } else if (trimmed.toLowerCase().includes('commerce') || trimmed.toLowerCase().includes('ca') || trimmed.toLowerCase().includes('finance')) {
          responseText = `Choosing **Commerce (Group Code 2708)** allows you to attempt **CA Foundation**, **IPMAT for IIMs**, and **B.Com (Hons)** in top institutions. Core subjects include Accountancy, Business Studies, Economics, and Business Maths.`;
          relatedGroup = 'commerce';
        } else if (trimmed.toLowerCase().includes('law') || trimmed.toLowerCase().includes('arts') || trimmed.toLowerCase().includes('upsc')) {
          responseText = `**Arts / Humanities (Group Code 2804)** opens powerful pathways into Civil Services (IAS/IPS), Integrated Law (CLAT / B.A. LL.B), Economics, Psychology, and Media. Over 70% of UPSC syllabus overlaps with humanities subjects.`;
          relatedGroup = 'arts-humanities';
        } else {
          responseText = `Great question! CareerPulse AI maps every 11th standard group (CS+Maths, Bio-Maths, Commerce, Arts, Pure Science) to entrance exams, UG degrees, and job opportunities. Would you like to explore the interactive visual roadmap for one of these groups?`;
        }
      }
    }

    const aiMsg = {
      sender: 'ai',
      text: responseText,
      relatedGroup,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const samplePrompts = [
    'What can I do after Group Code 2502?',
    'Can a Bio-Maths student write both NEET and JEE?',
    'How is Tamil Nadu TNEA cutoff calculated?',
    'Why is B.E CSE available to my group?'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#C7D9E5]/50 border border-[#577C8E]/30 text-[#2F4157] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#577C8E]" />
          <span>{isTa ? 'அரசு விதிகளுடன் கூடிய AI பாதை விளக்கக் குழு' : 'Pathway Explainer Powered by Verified TN Rules'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          {isTa ? 'AI பாதை விளக்கக் குழு' : 'AI Pathway Explainer'}
        </h1>
        <p className="text-sm text-[#607482]">Ask any question about 11th standard groups, entrance exams, and career pathways.</p>
      </div>

      {/* Quick Prompts Carousel */}
      <div className="flex overflow-x-auto space-x-2 py-1 no-scrollbar">
        {samplePrompts.map((promptText, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(promptText)}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-[#C7D9E5]/40 border border-[#D5DFE3] hover:border-[#577C8E] text-[#2F4157] text-xs whitespace-nowrap transition-colors shrink-0 shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#577C8E]" />
            <span>{promptText}</span>
          </button>
        ))}
      </div>

      {/* Chat Messages Area */}
      <div className="min-h-[420px] max-h-[550px] overflow-y-auto space-y-4 py-4 border-y border-[#D5DFE3]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-3 ${
              msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-[#2F4157] text-[#F0F5F5]'
                  : 'bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4 text-[#F0F5F5]" /> : <Bot className="w-4 h-4 text-[#2F4157]" />}
            </div>

            <div className="max-w-[85%] sm:max-w-[75%] space-y-2">
              <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                msg.sender === 'user'
                  ? 'bg-white border border-[#D5DFE3] text-[#1E2933] rounded-tr-none shadow-xs'
                  : 'bg-[#C7D9E5]/30 border border-[#577C8E]/20 text-[#1E2933] rounded-tl-none'
              }`}>
                {msg.text}
              </div>

              {msg.relatedGroup && (
                <div className="pt-1">
                  <button
                    onClick={() => onSelectGroup(msg.relatedGroup)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#D5DFE3] text-[#577C8E] hover:bg-[#C7D9E5]/40 hover:text-[#2F4157] text-xs font-semibold transition-colors shadow-xs"
                  >
                    <span>Launch {GROUPS.find(g => g.id === msg.relatedGroup)?.shortCode} Visual Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <span className="text-[10px] text-[#607482] block px-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin text-[#577C8E]" />
            </div>
            <div className="bg-[#C7D9E5]/30 border border-[#577C8E]/20 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs text-[#607482] flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#577C8E] animate-ping" />
              <span>CareerPulse AI Pathway Explainer is analyzing rules...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center space-x-2"
      >
        <input
          type="text"
          placeholder="Ask AI Pathway Explainer (e.g. Can I do Data Science after CS?)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-5 py-3.5 rounded-2xl bg-white border border-[#D5DFE3] text-xs sm:text-sm text-[#1E2933] placeholder-[#607482] focus:outline-none focus:border-[#577C8E] shadow-xs"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="px-5 py-3.5 rounded-2xl disabled:opacity-50 bg-[#2F4157] text-[#F0F5F5] font-semibold text-xs sm:text-sm flex items-center space-x-1.5 hover:bg-[#577C8E] transition-colors shadow-xs"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
