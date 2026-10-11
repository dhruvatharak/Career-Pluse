import React, { useState } from 'react';
import { Compass, GitFork, HelpCircle, Bot, SlidersHorizontal, BookOpen, CheckCircle, Sparkles, GraduationCap, Palette, ShieldCheck, Languages } from 'lucide-react';
import ThemeCustomizerModal from './ThemeCustomizerModal';

export default function Navbar({ activeTab, setActiveTab, customTheme, setCustomTheme, resetCustomTheme, language, setLanguage }) {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const isTa = language === 'ta';

  const navItems = [
    { id: 'explorer', label: isTa ? 'குழுக்கள்' : 'Explore Groups', icon: Compass },
    { id: 'roadmap', label: isTa ? 'பாதை வரைபடம்' : 'Visual Pathways', icon: GitFork, badge: 'Interactive' },
    { id: 'compare', label: isTa ? 'ஒப்பீடு' : 'Compare Pathways', icon: SlidersHorizontal },
    { id: 'checker', label: isTa ? 'தகுதிச் சரிபார்ப்பு' : 'Eligibility Engine', icon: CheckCircle },
    { id: 'sources', label: isTa ? 'ஆதாரங்கள்' : 'Verified Sources', icon: ShieldCheck },
    { id: 'chat', label: isTa ? 'AI உதவி' : 'AI Assistant', icon: Bot, badge: 'AI' },
    { id: 'quiz', label: isTa ? 'ஆர்வ வினாடி வினா' : 'Interest Quiz', icon: HelpCircle }
  ];

  const accentColor = customTheme?.accentColor || '#2F4157';

  return (
    <header className="sticky top-0 z-40 bg-[#F0F5F5]/95 backdrop-blur-md border-b border-[#D5DFE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand & Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('explorer')}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#F0F5F5] font-bold shadow-xs transition-colors"
              style={{ backgroundColor: accentColor }}
            >
              <GraduationCap className="w-5 h-5 text-[#F0F5F5]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#2F4157] tracking-tight">
                  CareerPulse
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border bg-[#C7D9E5] text-[#2F4157] border-[#577C8E]/30"
                >
                  TN Pathway Navigator
                </span>
              </div>
              <p className="text-[10px] text-[#607482] font-medium hidden sm:block">
                {isTa ? '11ஆம் வகுப்பு பாடப்பிரிவு மற்றும் உயர்கல்வி பாதை வழிசெலுத்தல்' : 'Tamil Nadu 11th Group Selection & Education Pathway Navigator'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#2F4157] border-b-2 border-[#577C8E] pb-1 font-semibold'
                      : 'text-[#607482] hover:text-[#2F4157] pb-1'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? '#577C8E' : '#607482' }} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Switcher, Theme Customizer & Action CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Bilingual Switcher (EN | தமிழ்) */}
            <button
              onClick={() => setLanguage(isTa ? 'en' : 'ta')}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-[#C7D9E5]/50 text-[#2F4157] border border-[#D5DFE3] transition-colors"
              title="Switch Language / மொழியை மாற்றுக"
            >
              <Languages className="w-3.5 h-3.5 text-[#577C8E]" />
              <span>{isTa ? 'English' : 'தமிழ்'}</span>
            </button>

            {/* Appearance Customizer */}
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-[#F4EFEB] hover:bg-[#C7D9E5]/50 text-[#2F4157] border border-[#D5DFE3] transition-colors"
              title="Customize Fonts & Colors"
            >
              <Palette className="w-3.5 h-3.5 text-[#577C8E]" />
              <span className="hidden md:inline text-[#2F4157]">{isTa ? 'வண்ணங்கள்' : 'Theme'}</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#F0F5F5] bg-[#2F4157] hover:bg-[#577C8E] shadow-xs transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F0F5F5]" />
              <span>{isTa ? 'ஆர்வ வினாடி வினா' : 'Find My Pathways'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex xl:hidden overflow-x-auto py-2 space-x-1.5 no-scrollbar border-t border-[#D5DFE3]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#2F4157] text-[#F0F5F5] font-semibold'
                    : 'bg-[#F4EFEB] text-[#607482] border border-[#D5DFE3] hover:bg-[#C7D9E5]/50 hover:text-[#2F4157]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Theme Customizer Modal */}
      <ThemeCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        customTheme={customTheme}
        setCustomTheme={setCustomTheme}
        resetCustomTheme={resetCustomTheme}
      />
    </header>
  );
}
