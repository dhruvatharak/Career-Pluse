import React, { useState } from 'react';
import { QUIZ_QUESTIONS, GROUPS } from '../data/careerData';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, RotateCcw, ArrowRight, Sparkles, Compass } from 'lucide-react';

export default function AIQuiz({ onSelectGroup, customTheme, language }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const isTa = language === 'ta';

  const handleOptionSelect = (option) => {
    const newAnswers = { ...answers, [currentStep]: option.scores };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    const groupTotals = {
      'cs-maths': 0,
      'bio-maths': 0,
      'commerce': 0,
      'arts-humanities': 0,
      'pure-science': 0
    };

    Object.values(finalAnswers).forEach(scores => {
      Object.entries(scores).forEach(([groupId, score]) => {
        if (groupTotals[groupId] !== undefined) {
          groupTotals[groupId] += score;
        }
      });
    });

    const sortedGroups = GROUPS.map(g => {
      const rawScore = groupTotals[g.id] || 0;
      return {
        ...g,
        rawScore
      };
    }).sort((a, b) => b.rawScore - a.rawScore);

    setResults(sortedGroups);

    confetti({
      particleCount: 50,
      spread: 40,
      origin: { y: 0.6 }
    });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      
      {/* Quiz Banner Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
          {isTa ? 'தனிப்பயனாக்கப்பட்ட ஆய்வு வினாடி வினா' : 'Personalized Exploration Assistant'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          {isTa ? 'நீங்கள் எதை ஆராய விரும்புகிறீர்கள் என்பதை எங்களுக்குப் புரிய வையுங்கள்' : 'Help us understand what you want to explore'}
        </h1>
        <p className="text-[#607482] text-sm max-w-2xl leading-relaxed">
          {isTa 
            ? 'நாங்கள் ஒற்றைத் தொழிலைக் கட்டாயப்படுத்த மாட்டோம். உங்கள் பாட விருப்பங்களின் அடிப்படையில் ஆராயத் தகுந்த பாடப்பிரிவுகளைக் காண்பிப்போம்.'
            : 'CareerPulse does not force a single career prediction. Answer a few questions about your favorite subjects and interests to discover group pathways worth exploring.'}
        </p>
      </div>

      {/* Main Quiz Flow */}
      {!results ? (
        <div className="space-y-8 pt-4">
          
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-[#577C8E]">Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="text-[#607482]">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#D5DFE3] overflow-hidden">
              <div
                className="h-full bg-[#577C8E] transition-all duration-300"
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#2F4157] leading-snug">
              {QUIZ_QUESTIONS[currentStep].question}
            </h3>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-white hover:bg-[#C7D9E5]/40 border border-[#D5DFE3] hover:border-[#577C8E] text-left transition-all shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#F4EFEB] border border-[#D5DFE3] text-[#2F4157] group-hover:bg-[#2F4157] group-hover:text-[#F0F5F5] flex items-center justify-center shrink-0 font-bold text-xs transition-colors mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-sm font-medium text-[#1E2933] leading-relaxed">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-fadeIn">
          
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#D5DFE3] text-center space-y-3 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20 flex items-center justify-center mx-auto">
              <Compass className="w-7 h-7 text-[#577C8E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#2F4157]">
              {isTa ? 'நீங்கள் ஆராயத் தகுந்த பாடப்பிரிவுகள்' : 'Groups and pathways worth exploring'}
            </h2>
            <p className="text-[#607482] text-xs sm:text-sm max-w-xl mx-auto">
              Based on your responses, here are the top Tamil Nadu 11th standard group pathways you should explore in detail:
            </p>
          </div>

          {/* Sorted Recommended Group List */}
          <div className="space-y-4">
            {results.map((group, rank) => (
              <div
                key={group.id}
                className={`p-6 rounded-2xl border ${
                  rank === 0 ? 'border-[#577C8E] bg-[#C7D9E5]/30' : 'border-[#D5DFE3] bg-white'
                } flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all shadow-xs`}
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      rank === 0
                        ? 'bg-[#2F4157] text-[#F0F5F5]'
                        : 'bg-[#F4EFEB] text-[#607482] border border-[#D5DFE3]'
                    }`}>
                      Option #{rank + 1} Worth Exploring
                    </span>
                    <span className="text-xs font-bold text-[#577C8E]">
                      {group.shortCode}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#2F4157]">
                    {isTa ? group.nameTa || group.name : group.name}
                  </h3>

                  <p className="text-xs text-[#607482]">
                    {isTa ? group.descriptionTa || group.description : group.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.coreSubjects.map((sub, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#2F4157] border border-[#D5DFE3]">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end border-t sm:border-t-0 sm:border-l border-[#D5DFE3] pt-4 sm:pt-0 sm:pl-6 shrink-0">
                  <button
                    onClick={() => onSelectGroup(group.id)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2F4157] text-[#F0F5F5] hover:bg-[#577C8E] flex items-center space-x-1.5 transition-colors shadow-xs"
                  >
                    <span>Explore Visual Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#F0F5F5] text-[#2F4157] border border-[#D5DFE3] transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#577C8E]" />
              <span>Retake Exploration Quiz</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
