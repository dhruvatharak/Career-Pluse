import React, { useState } from 'react';
import { GROUPS, ROADMAP_DATA, VISUAL_BRANCHING_TREE } from '../data/careerData';
import { GraduationCap, BookOpen, FileCheck, Award, Layers, Briefcase, Sparkles, X, HelpCircle, MapPin, GitBranch, CheckCircle2, ShieldCheck, ChevronRight, Info } from 'lucide-react';

const STAGE_ICONS = {
  GraduationCap,
  BookOpen,
  FileCheck,
  Award,
  Layers,
  Briefcase
};

export default function InteractiveRoadmap({ selectedGroupId, setSelectedGroupId, onOpenChatWithPrompt, customTheme, language, setActiveTab }) {
  const [activeNode, setActiveNode] = useState(null);
  const [disclosureLevel, setDisclosureLevel] = useState(1); // 1: Simple, 2: Detailed, 3: Eligibility, 4: Official Source
  const isTa = language === 'ta';

  const currentGroup = GROUPS.find(g => g.id === selectedGroupId) || GROUPS[0];
  const roadmapInfo = ROADMAP_DATA[selectedGroupId] || ROADMAP_DATA['cs-maths'];
  const visualTree = VISUAL_BRANCHING_TREE[selectedGroupId] || VISUAL_BRANCHING_TREE['cs-maths'];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Top Header & Group Selector Tabs */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block mb-1">
              {isTa ? 'செயல்முறை பாதை வரைபடம்' : 'Interactive Visual Pathway Graph'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
              {isTa ? `${currentGroup.nameTa || currentGroup.name} பாதை` : `${currentGroup.name} Pathway Graph`}
            </h1>
            <p className="text-[#607482] text-sm mt-1 max-w-3xl">
              {isTa 
                ? 'ஒரு பாடப்பிரிவு பலதரப்பட்ட எதிர்காலப் பாதைகளை எப்படி உருவாக்குகிறது என்பதை வரைபடம் மூலம் காணுங்கள்.'
                : 'Visually explore how one group branches into multiple entrance routes, undergraduate courses, higher studies, and career opportunities.'}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onOpenChatWithPrompt(`Can you explain why ${currentGroup.name} opens so many career branches?`)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#F4EFEB] hover:bg-[#C7D9E5]/50 text-[#2F4157] border border-[#D5DFE3] flex items-center space-x-2 transition-colors shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-[#577C8E]" />
              <span>{isTa ? 'AI உதவி பெறுக' : 'Ask AI Explainer'}</span>
            </button>
          </div>
        </div>

        {/* Group Selector Pill Bar */}
        <div className="flex overflow-x-auto py-2 space-x-2 no-scrollbar border-b border-[#D5DFE3] pb-3">
          {GROUPS.map((group) => {
            const isSelected = group.id === selectedGroupId;
            return (
              <button
                key={group.id}
                onClick={() => {
                  setSelectedGroupId(group.id);
                  setActiveNode(null);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-[#2F4157] text-[#F0F5F5] font-bold'
                    : 'bg-white text-[#607482] border border-[#D5DFE3] hover:text-[#2F4157] hover:bg-[#F0F5F5]'
                }`}
              >
                <span>{group.shortCode}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURE: "WHY CAN I CHOOSE THIS?" EXPLANATION BANNER */}
      <div className="p-6 rounded-2xl bg-[#C7D9E5]/30 border border-[#577C8E]/30 space-y-3 shadow-xs">
        <div className="flex items-center space-x-2 text-[#577C8E]">
          <Info className="w-5 h-5 shrink-0 text-[#577C8E]" />
          <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-[#2F4157]">
            {isTa ? 'ஏன் இந்த பாடப்பிரிவு கிடைக்கிறது?' : 'Why can I choose this pathway?'}
          </h3>
        </div>

        <p className="text-xs text-[#2F4157] leading-relaxed">
          <strong>Reasoning:</strong> Because your selected group (<strong>{currentGroup.shortCode}</strong>) contains the required subjects (<strong>{currentGroup.coreSubjects.join(', ')}</strong>), the following higher-secondary pathways may be available to you, subject to current Tamil Nadu admission rules.
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#607482] pt-1">
          <span className="flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#577C8E]" />
            <span>Required Subjects Fulfilled</span>
          </span>
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#577C8E]" />
            <span>Source: {currentGroup.officialSource}</span>
          </span>
          <span>Last verified: {currentGroup.lastVerified}</span>
        </div>
      </div>

      {/* FEATURE: VISUAL BRANCHING TREE (ONE GROUP -> MANY FUTURES) */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#D5DFE3] space-y-8 shadow-xs">
        <div>
          <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
            {isTa ? 'கிளைகள் வரைபடம்' : 'Branching Pathway Graph'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#2F4157] mt-1">
            One Group → Multiple Futures ({currentGroup.shortCode})
          </h2>
          <p className="text-xs text-[#607482]">
            Explore the branching opportunities opened by this group. Click any course or route to inspect eligibility details.
          </p>
        </div>

        {/* Tree Root & Branch Display */}
        <div className="space-y-6">
          
          {/* Root Stage */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3]">
            <div className="px-3 py-1 rounded-lg bg-[#2F4157] text-[#F0F5F5] text-xs font-bold font-mono">
              10th Standard
            </div>
            <ChevronRight className="w-4 h-4 text-[#577C8E] hidden sm:block" />
            <div className="px-3 py-1 rounded-lg bg-[#C7D9E5] text-[#2F4157] text-xs font-bold border border-[#577C8E]/30">
              11th Group Code {currentGroup.officialCodes[0]} ({currentGroup.name})
            </div>
            <ChevronRight className="w-4 h-4 text-[#577C8E] hidden sm:block" />
            <div className="text-xs font-medium text-[#607482]">
              Subjects: {currentGroup.coreSubjects.join(' + ')}
            </div>
          </div>

          {/* Branching Subtrees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {visualTree.branches.map((branch, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[#D5DFE3] bg-white space-y-4 shadow-xs">
                
                <div className="flex items-center space-x-2 border-b border-[#D5DFE3] pb-3">
                  <GitBranch className="w-5 h-5 text-[#577C8E]" />
                  <h3 className="text-sm font-bold font-heading text-[#2F4157]">
                    {branch.routeName}
                  </h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#577C8E] uppercase tracking-wider block">Admission Route:</span>
                  <span className="text-xs font-semibold text-[#1E2933] block">{branch.admission}</span>
                </div>

                {/* Course Nodes Branch List */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#607482] uppercase tracking-wider block">Undergraduate Course Branches:</span>
                  <div className="space-y-2">
                    {branch.ugCourses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        onClick={() => {
                          setActiveNode({
                            name: course.name,
                            step: 'Branch',
                            tagline: `TN Admission Cutoff Range: ${course.tnCutoff}`,
                            details: `Course available because: ${course.why}. Official Route: ${branch.admission}. College Counselling: ${branch.collegeCounselling}`,
                            tnRoute: branch.collegeCounselling,
                            whyReason: course.why,
                            source: currentGroup.officialSource,
                            lastVerified: currentGroup.lastVerified
                          });
                          setDisclosureLevel(1);
                        }}
                        className="p-3 rounded-xl bg-[#F0F5F5] hover:bg-[#C7D9E5]/40 border border-[#D5DFE3] hover:border-[#577C8E] cursor-pointer text-xs space-y-1 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4157]">{course.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">{course.tnCutoff}</span>
                        </div>
                        <span className="text-[11px] text-[#607482] block">{course.why}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Careers */}
                <div className="pt-2 border-t border-[#D5DFE3] flex flex-wrap gap-1">
                  {branch.careers.map((car, carIdx) => (
                    <span key={carIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#2F4157] border border-[#D5DFE3]">
                      {car}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* STAGE TIMELINE GRAPH FLOW */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold font-heading text-[#2F4157]">
          Complete Stage-by-Stage Journey ({currentGroup.name})
        </h2>

        {/* Vertical Stages */}
        <div className="space-y-4">
          {roadmapInfo.stages.map((stage) => {
            const IconComp = STAGE_ICONS[stage.icon] || GraduationCap;
            const isSelected = activeNode?.id === stage.id;

            return (
              <div
                key={stage.id}
                onClick={() => {
                  setActiveNode({
                    ...stage,
                    source: currentGroup.officialSource,
                    lastVerified: currentGroup.lastVerified
                  });
                  setDisclosureLevel(1);
                }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#577C8E] bg-[#C7D9E5]/30 shadow-xs'
                    : 'border-[#D5DFE3] bg-white hover:border-[#577C8E]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-3 rounded-xl bg-[#C7D9E5] border border-[#577C8E]/20 text-[#2F4157] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#577C8E]">
                        Stage 0{stage.step}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-[#2F4157]">
                        {stage.name}
                      </h3>
                      <p className="text-xs text-[#607482] mt-0.5">
                        {stage.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#F4EFEB] hover:bg-[#C7D9E5] text-[#2F4157] border border-[#D5DFE3] shrink-0 self-start sm:self-center transition-colors">
                    Click to Explore →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROGRESSIVE DISCLOSURE SLIDE-OUT MODAL (LEVEL 1 -> LEVEL 2 -> LEVEL 3 -> LEVEL 4) */}
      {activeNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E2933]/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl border border-[#D5DFE3] shadow-xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#D5DFE3] flex items-center justify-between bg-[#F0F5F5]">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">
                  <Sparkles className="w-5 h-5 text-[#577C8E]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#577C8E] uppercase tracking-widest">
                    Pathway Node Inspection
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#2F4157]">
                    {activeNode.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveNode(null)}
                className="p-2 rounded-xl bg-white hover:bg-[#F0F5F5] text-[#607482] border border-[#D5DFE3] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 4-Level Progressive Disclosure Tabs Header */}
            <div className="p-3 bg-[#F4EFEB] border-b border-[#D5DFE3] flex space-x-1 overflow-x-auto no-scrollbar">
              {[
                { level: 1, label: 'Level 1: Overview' },
                { level: 2, label: 'Level 2: Detailed Pathway' },
                { level: 3, label: 'Level 3: Eligibility & Rules' },
                { level: 4, label: 'Level 4: Official Source' }
              ].map(tab => (
                <button
                  key={tab.level}
                  onClick={() => setDisclosureLevel(tab.level)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    disclosureLevel === tab.level
                      ? 'bg-[#2F4157] text-[#F0F5F5]'
                      : 'bg-white text-[#607482] border border-[#D5DFE3] hover:text-[#2F4157]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body Content depending on Disclosure Level */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#1E2933] bg-white">
              
              {disclosureLevel === 1 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-[#2F4157] text-sm uppercase">Simple Summary</h4>
                  <p className="bg-[#F0F5F5] p-4 rounded-xl border border-[#D5DFE3] leading-relaxed text-[#1E2933] text-sm">
                    {activeNode.tagline || activeNode.details}
                  </p>
                  {activeNode.whyReason && (
                    <div className="p-3 rounded-xl bg-[#C7D9E5]/30 border border-[#577C8E]/20 text-[#2F4157]">
                      <strong>Why available:</strong> {activeNode.whyReason}
                    </div>
                  )}
                </div>
              )}

              {disclosureLevel === 2 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-[#2F4157] text-sm uppercase">Detailed Pathway Roadmap</h4>
                  <p className="leading-relaxed text-[#607482]">
                    {activeNode.details || 'Explore the exact sequential steps required for this education stage.'}
                  </p>

                  {activeNode.routes && (
                    <div className="space-y-2">
                      <span className="font-bold text-[#577C8E] block">Target Entrance Routes:</span>
                      {activeNode.routes.map((r, i) => (
                        <div key={i} className="p-3 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] flex justify-between">
                          <span className="font-bold text-[#2F4157]">{r.name}</span>
                          <span className="text-[#607482]">{r.target}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeNode.options && (
                    <div className="space-y-2">
                      <span className="font-bold text-[#577C8E] block">Undergraduate Options:</span>
                      {activeNode.options.map((o, i) => (
                        <div key={i} className="p-3 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-1">
                          <div className="font-bold text-[#2F4157]">{o.name} ({o.duration})</div>
                          <p className="text-[#607482]">{o.focus}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {disclosureLevel === 3 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-[#2F4157] text-sm uppercase">Eligibility & Admission Rules</h4>
                  <div className="p-4 rounded-xl bg-white border border-[#D5DFE3] space-y-2">
                    <div className="flex items-center space-x-2 text-[#577C8E] font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Configured Admission Prerequisite</span>
                    </div>
                    <p className="text-[#1E2933]">
                      Because your group includes the mandatory subjects, you satisfy the baseline cutoff requirement for state single-window counselling.
                    </p>
                    <div className="pt-2 text-[11px] text-[#607482]">
                      Always verify specific minimum mark aggregate percentages published during the current academic cycle.
                    </div>
                  </div>
                </div>
              )}

              {disclosureLevel === 4 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-[#2F4157] text-sm uppercase">Official Source Verification</h4>
                  <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#D5DFE3] space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#577C8E]">Authority: {activeNode.source || currentGroup.officialSource}</span>
                      <span className="font-mono text-[#607482]">Verified: {activeNode.lastVerified || currentGroup.lastVerified}</span>
                    </div>
                    <p className="text-xs text-[#1E2933]">
                      Rules sourced directly from Directorate of Government Examinations (DGE) Tamil Nadu and Directorate of Technical Education (DoTE).
                    </p>
                    <button
                      onClick={() => {
                        setActiveNode(null);
                        setActiveTab('sources');
                      }}
                      className="text-xs font-semibold text-[#577C8E] hover:underline"
                    >
                      View All Source Documents →
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#D5DFE3] bg-[#F0F5F5] flex items-center justify-between">
              <button
                onClick={() => {
                  const title = activeNode.name;
                  setActiveNode(null);
                  onOpenChatWithPrompt(`Can you explain more about ${title} for ${currentGroup.name}?`);
                }}
                className="text-xs font-semibold text-[#577C8E] hover:text-[#2F4157] flex items-center space-x-1.5"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ask AI Assistant about this node</span>
              </button>

              <button
                onClick={() => setActiveNode(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#2F4157] text-[#F0F5F5] hover:bg-[#577C8E] transition-colors"
              >
                Close Inspection
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
