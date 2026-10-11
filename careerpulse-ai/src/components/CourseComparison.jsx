import React, { useState } from 'react';
import { COMPARISON_MATRIX, GROUPS } from '../data/careerData';
import { SlidersHorizontal, ArrowRightLeft, Info, CheckCircle2 } from 'lucide-react';

export default function CourseComparison({ onSelectGroup, customTheme, language }) {
  const [selectedGroupA, setSelectedGroupA] = useState('cs-maths');
  const [selectedGroupB, setSelectedGroupB] = useState('bio-maths');
  const isTa = language === 'ta';

  const groupAObj = GROUPS.find(g => g.id === selectedGroupA);
  const groupBObj = GROUPS.find(g => g.id === selectedGroupB);

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header - Open Page Layout */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
          {isTa ? 'சுயசார்பு ஒப்பீட்டுக் கருவி' : 'Objective Pathway Comparison'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          {isTa ? 'பாடப்பிரிவுகளின் ஒப்பீடு' : 'Compare Pathways Side-by-Side'}
        </h1>
        <p className="text-[#607482] text-sm max-w-3xl leading-relaxed">
          {isTa 
            ? 'எந்தவொரு பாடப்பிரிவையும் "சிறந்தது" அல்லது "மோசமானது" என்று முத்திரை குத்தாமல், பாடங்கள், நுழைவுத் தேர்வுகள் மற்றும் பட்டப் படிப்புகளை நடுநிலையாக ஒப்பிடுங்கள்.'
            : 'Explore differences in school subjects, admission routes, UG course options, higher studies, and career scope across groups without labeling one as "better".'}
        </p>
      </div>

      {/* Neutral Comparison Banner */}
      <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#D5DFE3] flex items-center space-x-3 text-xs text-[#2F4157]">
        <Info className="w-5 h-5 text-[#577C8E] shrink-0" />
        <span>
          <strong>Explore, Don't Predict:</strong> CareerPulse AI does not rank or score groups. The goal is to help you understand how different choices align with your personal learning style and future goals.
        </span>
      </div>

      {/* Head-to-Head Comparison Selector */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#D5DFE3]">
          <h3 className="text-xl font-bold font-heading text-[#2F4157] flex items-center space-x-2">
            <ArrowRightLeft className="w-5 h-5 text-[#577C8E]" />
            <span>Head-to-Head Group Comparison</span>
          </h3>
          <span className="text-xs text-[#607482]">Select any 2 groups to evaluate side-by-side</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Select Group A */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#577C8E] uppercase tracking-wider block">
              Pathway 1:
            </label>
            <select
              value={selectedGroupA}
              onChange={(e) => setSelectedGroupA(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DFE3] text-sm text-[#1E2933] font-semibold focus:outline-none focus:border-[#577C8E] shadow-xs"
            >
              {GROUPS.map(g => (
                <option key={g.id} value={g.id}>{g.shortCode} - {g.name}</option>
              ))}
            </select>
          </div>

          {/* Select Group B */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#577C8E] uppercase tracking-wider block">
              Pathway 2:
            </label>
            <select
              value={selectedGroupB}
              onChange={(e) => setSelectedGroupB(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#D5DFE3] text-sm text-[#1E2933] font-semibold focus:outline-none focus:border-[#577C8E] shadow-xs"
            >
              {GROUPS.map(g => (
                <option key={g.id} value={g.id}>{g.shortCode} - {g.name}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Head-to-Head Comparison Grid Cards */}
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-3 gap-3 text-xs font-bold text-[#607482] px-4">
            <div>Feature / Dimension</div>
            <div className="text-[#2F4157] font-heading">{groupAObj?.shortCode}</div>
            <div className="text-[#577C8E] font-heading">{groupBObj?.shortCode}</div>
          </div>

          <div className="space-y-3">
            {COMPARISON_MATRIX.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-[#D5DFE3] text-xs shadow-xs">
                <div className="font-bold text-[#2F4157]">{row.feature}</div>
                <div className="text-[#607482] leading-relaxed">{row[selectedGroupA]}</div>
                <div className="text-[#607482] leading-relaxed">{row[selectedGroupB]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Master Comparison Table for All Groups */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold font-heading text-[#2F4157]">
          Full Master Comparison Matrix (All 5 Groups)
        </h3>

        <div className="overflow-x-auto rounded-2xl bg-white border border-[#D5DFE3] shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F0F5F5] text-[#2F4157] font-heading border-b border-[#D5DFE3]">
              <tr>
                <th className="p-4 min-w-[160px]">Feature</th>
                {GROUPS.map(g => (
                  <th key={g.id} className="p-4 min-w-[180px]">
                    <div className="font-bold text-[#2F4157] text-sm">{g.shortCode}</div>
                    <span className="text-[10px] text-[#577C8E] font-medium">{g.badge}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D5DFE3] text-[#607482]">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F0F5F5] transition-colors">
                  <td className="p-4 font-bold text-[#2F4157] bg-white">{row.feature}</td>
                  {GROUPS.map(g => (
                    <td key={g.id} className="p-4 leading-relaxed">
                      {row[g.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
