import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GroupExplorer from './components/GroupExplorer';
import InteractiveRoadmap from './components/InteractiveRoadmap';
import AIQuiz from './components/AIQuiz';
import AIChatbot from './components/AIChatbot';
import CourseComparison from './components/CourseComparison';
import ExamDirectory from './components/ExamDirectory';
import EligibilityChecker from './components/EligibilityChecker';
import VerifiedSourcesView from './components/VerifiedSourcesView';
import Footer from './components/Footer';

const MUTED_EDITORIAL_DEFAULT_THEME = {
  bgColor: '#F0F5F5',
  textColor: 'rgb(21, 53, 83)',
  accentColor: 'rgb(249, 2, 2)',
  secondaryAccent: '#577C8E',
  fontFamily: 'Inter, sans-serif',
  isDark: false
};

export default function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [selectedGroupId, setSelectedGroupId] = useState('cs-maths');
  const [chatPrompt, setChatPrompt] = useState('');
  const [language, setLanguage] = useState('en'); // 'en' | 'ta'

  const [customTheme, setCustomTheme] = useState(() => {
    const saved = localStorage.getItem('careerpulse_user_theme');
    if (!saved) return MUTED_EDITORIAL_DEFAULT_THEME;
    try {
      const parsed = JSON.parse(saved);
      if (parsed.bgColor === 'hsl(264, 89%, 47%)' || parsed.bgColor === '#F8F7F3' || parsed.isDark) {
        return MUTED_EDITORIAL_DEFAULT_THEME;
      }
      return parsed;
    } catch {
      return MUTED_EDITORIAL_DEFAULT_THEME;
    }
  });

  useEffect(() => {
    localStorage.setItem('careerpulse_user_theme', JSON.stringify(customTheme));
    
    document.body.className = "bg-[#F0F5F5] text-[#1E2933] font-sans antialiased selection:bg-[#C7D9E5] selection:text-[#2F4157] overflow-x-hidden min-h-screen";
    document.body.style.backgroundColor = customTheme.bgColor;
    document.body.style.color = customTheme.textColor;
    document.body.style.fontFamily = customTheme.fontFamily;
    
    document.documentElement.classList.remove('dark');
  }, [customTheme]);

  const resetCustomTheme = () => {
    setCustomTheme(MUTED_EDITORIAL_DEFAULT_THEME);
  };

  const handleSelectGroup = (groupId) => {
    setSelectedGroupId(groupId);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChatWithPrompt = (promptText) => {
    setChatPrompt(promptText);
    setActiveTab('chat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans antialiased transition-colors duration-200 bg-[#F0F5F5]"
      style={{
        backgroundColor: customTheme.bgColor,
        color: customTheme.textColor,
        fontFamily: customTheme.fontFamily
      }}
    >
      
      {/* Navbar with Customizer & Bilingual Language Switcher */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        customTheme={customTheme}
        setCustomTheme={setCustomTheme}
        resetCustomTheme={resetCustomTheme}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {activeTab === 'explorer' && (
          <GroupExplorer
            onSelectGroup={handleSelectGroup}
            onStartQuiz={() => setActiveTab('quiz')}
            onOpenAssistant={() => setActiveTab('chat')}
            customTheme={customTheme}
            language={language}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'roadmap' && (
          <InteractiveRoadmap
            selectedGroupId={selectedGroupId}
            setSelectedGroupId={setSelectedGroupId}
            onOpenChatWithPrompt={handleOpenChatWithPrompt}
            customTheme={customTheme}
            language={language}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'quiz' && (
          <AIQuiz
            onSelectGroup={handleSelectGroup}
            customTheme={customTheme}
            language={language}
          />
        )}

        {activeTab === 'chat' && (
          <AIChatbot
            initialPrompt={chatPrompt}
            onSelectGroup={handleSelectGroup}
            customTheme={customTheme}
            language={language}
          />
        )}

        {activeTab === 'compare' && (
          <CourseComparison
            onSelectGroup={handleSelectGroup}
            customTheme={customTheme}
            language={language}
          />
        )}

        {activeTab === 'exams' && (
          <ExamDirectory customTheme={customTheme} language={language} />
        )}

        {activeTab === 'checker' && (
          <EligibilityChecker
            onSelectGroup={handleSelectGroup}
            customTheme={customTheme}
            language={language}
          />
        )}

        {activeTab === 'sources' && (
          <VerifiedSourcesView
            customTheme={customTheme}
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectGroup={handleSelectGroup}
        customTheme={customTheme}
        language={language}
      />

    </div>
  );
}
