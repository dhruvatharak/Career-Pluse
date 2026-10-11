import React, { useState } from 'react';
import { GROUPS } from '../data/careerData';
import { CheckCircle2, AlertCircle, HelpCircle, Calculator, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EligibilityChecker({ onSelectGroup, customTheme, language }) {
  const [currentClass, setCurrentClass] = useState('10th');
  const [selectedGroup, setSelectedGroup] = useState('cs-maths');
  const [targetDegree, setTargetDegree] = useState('B.E. Computer Science (CSE)');
  
  // TN Cutoff Calculator States
  const [mathsMark, setMathsMark] = useState(90);
  const [physicsMark, setPhysicsMark] = useState(88);
  const [chemistryMark, setChemistryMark] = useState(86);

  const isTa = language === 'ta';
  const tneaCutoff = (parseFloat(mathsMark) || 0) + ((parseFloat(physicsMark) || 0) / 2) + ((parseFloat(chemistryMark) || 0) / 2);

  const groupObj = GROUPS.find(g => g.id === selectedGroup) || GROUPS[0];

  const degreeRequirements = [
    {
      degree: 'B.E. Computer Science (CSE) / B.Tech AI & DS',
      allowedGroups: ['cs-maths', 'bio-maths'],
      requiredSubjects: ['Mathematics', 'Physics', 'Chemistry'],
      status: 'ELIGIBLE',
      exams: 'TNEA Single-Window Cutoff / JEE Main',
      reasoning: 'Because your selected group contains Mathematics, Physics, and Chemistry, you fulfill all TNEA Engineering prerequisite criteria.',
      source: 'Directorate of Technical Education (DoTE) Tamil Nadu'
    },
    {
      degree: 'MBBS / BDS / Dental Surgery',
      allowedGroups: ['bio-maths', 'pure-science'],
      requiredSubjects: ['Physics', 'Chemistry', 'Biology (Botany/Zoology)'],
      status: 'ELIGIBLE',
      exams: 'NEET-UG Qualification mandatory',
      reasoning: 'Because your selected group contains Biology, Physics, and Chemistry, you fulfill NEET-UG eligibility for TN State Medical Quota seats.',
      source: 'TN DME Medical Selection Committee & NTA NEET'
    },
    {
      degree: 'B.Tech Biotechnology / Biomedical Engineering',
      allowedGroups: ['bio-maths', 'cs-maths', 'pure-science'],
      requiredSubjects: ['Physics', 'Chemistry', 'Biology OR Mathematics'],
      status: 'ELIGIBLE',
      exams: 'TNEA Cutoff / University Entrance',
      reasoning: 'Bio-Maths and CS-Maths students are both eligible for Biomedical and Biotech engineering admissions via TNEA.',
      source: 'Anna University Admission Regulation'
    },
    {
      degree: 'Integrated B.A. LL.B (5-Year Law)',
      allowedGroups: ['arts-humanities', 'commerce', 'cs-maths', 'bio-maths', 'pure-science'],
      requiredSubjects: ['Pass in 12th Board from ANY stream (Min 45% aggregate)'],
      status: 'ELIGIBLE',
      exams: 'CLAT / AILET / TNDALU Counselling',
      reasoning: '5-Year Integrated Law degrees in Tamil Nadu Law Universities are open to students from all 11th standard streams.',
      source: 'Tamil Nadu Dr. Ambedkar Law University (TNDALU)'
    },
    {
      degree: 'Chartered Accountancy (CA) / B.Com (Hons)',
      allowedGroups: ['commerce', 'cs-maths', 'bio-maths', 'arts-humanities'],
      requiredSubjects: ['Pass in 12th Board from any stream'],
      status: 'ELIGIBLE',
      exams: 'CA Foundation (ICAI)',
      reasoning: 'Direct entry into ICAI CA Foundation registration is allowed for all 12th board pass candidates.',
      source: 'Institute of Chartered Accountants of India (ICAI)'
    },
    {
      degree: 'B.Sc (Hons) Agriculture / B.V.Sc Veterinary',
      allowedGroups: ['pure-science', 'bio-maths'],
      requiredSubjects: ['Physics', 'Chemistry', 'Biology/Botany/Zoology'],
      status: 'ELIGIBLE',
      exams: 'TNAU Single Window / TANUVAS Counselling',
      reasoning: 'Physics, Chemistry, and Biology/Botany/Zoology subjects fulfill TNAU & TANUVAS single window admission cutoffs.',
      source: 'TNAU & TANUVAS State Admission Boards'
    }
  ];

  const currentReq = degreeRequirements.find(d => d.degree === targetDegree) || degreeRequirements[0];
  const isEligible = currentReq.allowedGroups.includes(selectedGroup);
  const statusLabel = isEligible ? 'ELIGIBLE' : 'NOT DIRECTLY ELIGIBLE';

  return (
    <div className="space-y-12 pb-20 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
          {isTa ? 'சேர்க்கைத் தகுதி இயந்திரம்' : 'Transparent Admission Rule Engine'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          {isTa ? 'பாடப்பிரிவு தகுதிச் சரிபார்ப்பு' : 'Eligibility Check Engine'}
        </h1>
        <p className="text-[#607482] text-sm max-w-2xl leading-relaxed">
          {isTa
            ? 'உங்கள் 11ஆம் வகுப்பு பாடப்பிரிவு நீங்கள் விரும்பும் பட்டப்படிப்பிற்குத் தகுதியானதா என்பதை வெளிப்படையான விதிகளுடன் சரிபார்க்கவும்.'
            : 'Select your current class, group, and target undergraduate course to evaluate transparent admission rules without black-box AI scores.'}
        </p>
      </div>

      {/* Main Eligibility Assessment Form */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D5DFE3] space-y-6 shadow-xs">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#577C8E] uppercase tracking-wider block">
              1. Current Class:
            </label>
            <select
              value={currentClass}
              onChange={(e) => setCurrentClass(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-semibold focus:outline-none focus:border-[#577C8E]"
            >
              <option value="10th">Class 10 (Preparing to Choose Group)</option>
              <option value="11th">Class 11 (Currently Enrolled)</option>
              <option value="12th">Class 12 (Preparing for Admissions)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#577C8E] uppercase tracking-wider block">
              2. 11th Standard Group:
            </label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-semibold focus:outline-none focus:border-[#577C8E]"
            >
              {GROUPS.map(g => (
                <option key={g.id} value={g.id}>{g.shortCode} - {g.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#577C8E] uppercase tracking-wider block">
              3. Target Course:
            </label>
            <select
              value={targetDegree}
              onChange={(e) => setTargetDegree(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-semibold focus:outline-none focus:border-[#577C8E]"
            >
              {degreeRequirements.map((d, i) => (
                <option key={i} value={d.degree}>{d.degree}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Status Result Card */}
        <div className={`p-6 rounded-2xl border space-y-3 transition-all ${
          isEligible
            ? 'bg-[#C7D9E5]/30 border-[#577C8E] text-[#1E2933]'
            : 'bg-[#F0F5F5] border-[#D5DFE3] text-[#1E2933]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              {isEligible ? (
                <CheckCircle2 className="w-6 h-6 text-[#577C8E]" />
              ) : (
                <AlertCircle className="w-6 h-6 text-[#607482]" />
              )}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#577C8E] block">
                  Status
                </span>
                <h3 className="text-lg font-bold font-heading text-[#2F4157]">
                  {statusLabel}
                </h3>
              </div>
            </div>

            {isEligible && (
              <button
                onClick={() => onSelectGroup(selectedGroup)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#2F4157] text-[#F0F5F5] hover:bg-[#577C8E] transition-colors shadow-xs hidden sm:block"
              >
                View Full Pathway →
              </button>
            )}
          </div>

          <div className="space-y-2 text-xs pt-1 border-t border-[#577C8E]/20">
            <div>
              <strong className="text-[#2F4157]">Reasoning:</strong>{' '}
              <span className="text-[#607482]">{isEligible ? currentReq.reasoning : `Target program ${targetDegree} requires subject prerequisites not present in ${groupObj.shortCode}.`}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#607482]">
              <span><strong>Required Subjects:</strong> {currentReq.requiredSubjects.join(', ')}</span>
              <span><strong>Admission Route:</strong> {currentReq.exams}</span>
            </div>
          </div>
        </div>

        {/* Source Footer Notice */}
        <div className="flex items-center justify-between text-[11px] text-[#607482] pt-1">
          <div className="flex items-center space-x-1 text-[#577C8E]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Source: {currentReq.source}</span>
          </div>

          <span className="italic">"Rules may change. Always verify with official admission authority."</span>
        </div>

      </div>

      {/* Tamil Nadu TNEA Engineering Aggregate Cutoff Calculator Widget */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D5DFE3] shadow-xs space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-[#2F4157]">
              Tamil Nadu TNEA Engineering Cutoff Calculator
            </h3>
            <p className="text-xs text-[#607482]">Calculate your 12th TNEA aggregate score out of 200 marks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#607482]">12th Mathematics (Out of 100):</label>
            <input
              type="number"
              min="0"
              max="100"
              value={mathsMark}
              onChange={(e) => setMathsMark(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-bold focus:outline-none focus:border-[#577C8E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#607482]">12th Physics (Out of 100):</label>
            <input
              type="number"
              min="0"
              max="100"
              value={physicsMark}
              onChange={(e) => setPhysicsMark(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-bold focus:outline-none focus:border-[#577C8E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#607482]">12th Chemistry (Out of 100):</label>
            <input
              type="number"
              min="0"
              max="100"
              value={chemistryMark}
              onChange={(e) => setChemistryMark(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] font-bold focus:outline-none focus:border-[#577C8E]"
            />
          </div>
        </div>

        {/* Calculated Cutoff Result Box */}
        <div className="bg-[#C7D9E5]/30 p-5 rounded-xl border border-[#577C8E]/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#577C8E] tracking-wider block">
              Calculated TNEA Cutoff Aggregate
            </span>
            <span className="text-3xl font-bold text-[#2F4157] font-heading">
              {tneaCutoff.toFixed(2)} <span className="text-sm font-semibold text-[#607482]">/ 200</span>
            </span>
          </div>

          <div className="text-right text-xs text-[#607482] font-mono">
            Maths + (Physics / 2) + (Chemistry / 2)
          </div>
        </div>
      </div>

    </div>
  );
}
