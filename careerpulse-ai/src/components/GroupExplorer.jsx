import React, { useState } from 'react';
import { GROUPS, TN_OFFICIAL_GROUPS, VERIFIED_SOURCES_DATA } from '../data/careerData';
import { Cpu, Dna, TrendingUp, Palette, Microscope, ArrowRight, Sparkles, Search, Compass, Hash, FileText, X, ShieldCheck, GitBranch, Layers, CheckCircle2, RefreshCw } from 'lucide-react';

const ICON_MAP = {
  Cpu,
  Dna,
  TrendingUp,
  Palette,
  Microscope
};

export default function GroupExplorer({ onSelectGroup, onStartQuiz, onOpenAssistant, customTheme, language, setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCodeLookup, setShowCodeLookup] = useState(false);
  const [codeFilterStream, setCodeFilterStream] = useState('All');
  const [selectedDirectionGroup, setSelectedDirectionGroup] = useState('cs-maths');

  const isTa = language === 'ta';

  const filteredGroups = GROUPS.filter(g =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (g.nameTa && g.nameTa.toLowerCase().includes(searchQuery.toLowerCase())) ||
    g.officialCodes.some(c => c.includes(searchQuery)) ||
    g.coreSubjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTNCodes = TN_OFFICIAL_GROUPS.filter(g => {
    const matchesSearch = g.code.includes(searchQuery) ||
                          g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          g.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStream = codeFilterStream === 'All' || g.stream === codeFilterStream;
    return matchesSearch && matchesStream;
  });

  const directionGroupObj = GROUPS.find(g => g.id === selectedDirectionGroup) || GROUPS[0];

  return (
    <div className="space-y-16 pb-20">
      
      {/* HERO SECTION - Student First Educational Navigation */}
      <section className="py-10 sm:py-16 border-b border-[#D5DFE3]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C7D9E5]/50 border border-[#577C8E]/30 text-[#2F4157] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#577C8E]" />
            <span>{isTa ? 'தமிழ்நாடு அரசுப் பள்ளி 11ஆம் வகுப்பு பாடப்பிரிவு வழிசெலுத்தி' : 'Tamil Nadu 11th-Standard Education Pathway Navigator'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-heading text-[#2F4157] tracking-tight leading-[1.15]">
            {isTa ? (
              <>
                உங்கள் 11ஆம் வகுப்பு பாடப்பிரிவு ஒரு ஆரம்பப் புள்ளி மட்டுமே,{' '}
                <span className="text-[#577C8E]">முடிவு அல்ல.</span>
              </>
            ) : (
              <>
                Your 11th-standard group is a starting point,{' '}
                <span className="text-[#577C8E]">not the end.</span>
              </>
            )}
          </h1>

          <p className="text-[#607482] text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
            {isTa
              ? 'தமிழ்நாடு மேல்நிலைப் பள்ளிப் பாடப்பிரிவுகள் (குரூப் கோடுகள் 2501–2962) உங்கள் எதிர்காலத்திற்கு எந்தெந்த நுழைவுத் தேர்வுகள், படிப்புகள் மற்றும் வேலை வாய்ப்புகளைத் திறக்கின்றன என்பதை ஆராயுங்கள்.'
              : 'Explore where each Tamil Nadu higher-secondary group can lead — from subjects and admission routes to courses, higher studies and careers.'}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#group-selection-grid"
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#F0F5F5] bg-[#2F4157] hover:bg-[#577C8E] transition-all shadow-xs"
            >
              <span>{isTa ? 'பாடப்பிரிவுகளை ஆராய்க' : 'Explore Groups'}</span>
              <ArrowRight className="w-4 h-4 text-[#F0F5F5]" />
            </a>

            <button
              onClick={onStartQuiz}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#F4EFEB] hover:bg-[#C7D9E5]/50 text-[#2F4157] border border-[#D5DFE3] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#577C8E]" />
              <span>{isTa ? 'எனக்கான பாதையைக் கண்டறி' : 'Find My Pathways'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* HOW CAREERPULSE WORKS - Visual Horizontal Stage Journey */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
              {isTa ? 'இயங்கும் முறை' : 'System Workflow'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#2F4157]">
              {isTa ? 'காரியர்பல்ஸ் இயங்கும் முறை' : 'How CareerPulse AI Works'}
            </h2>
          </div>
          <span className="text-xs text-[#607482]">
            {isTa ? '10ஆம் வகுப்பு மாணவர்களுக்கான படிப்படியான வழிகாட்டுதல்' : 'Step-by-step guidance for Class 10 & 11 students'}
          </span>
        </div>

        {/* Visual Timeline Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 pt-2">
          {[
            { step: '01', title: '10th Standard', sub: 'Foundation' },
            { step: '02', title: 'Choose Group', sub: 'Official Code' },
            { step: '03', title: 'Subjects', sub: 'Core 4 Subjects' },
            { step: '04', title: 'Eligibility', sub: 'Rules Check' },
            { step: '05', title: 'Admission Route', sub: 'TNEA / NEET / Entrance' },
            { step: '06', title: 'UG Courses', sub: 'Degree Programs' },
            { step: '07', title: 'Higher Studies & Career', sub: 'Future Scope' }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#D5DFE3] flex flex-col justify-between space-y-2 shadow-xs relative">
              <span className="text-[10px] font-mono font-bold text-[#577C8E] px-2 py-0.5 rounded bg-[#C7D9E5]/40 w-max border border-[#577C8E]/20">
                {item.step}
              </span>
              <div>
                <h4 className="text-xs font-bold text-[#2F4157] font-heading">{item.title}</h4>
                <span className="text-[10px] text-[#607482] block">{item.sub}</span>
              </div>
              {idx < 6 && (
                <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#577C8E] z-10 font-bold">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURE: CHOOSE A GROUP TO EXPLORE */}
      <section id="group-selection-grid" className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div>
            <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
              {isTa ? 'முதன்மை அம்சம்' : 'Central Feature'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#2F4157]">
              {isTa ? 'உங்கள் 11ஆம் வகுப்பு பாடப்பிரிவு எங்கு கொண்டு செல்லக்கூடும்?' : 'Where can your 11th-standard group take you?'}
            </h2>
            <p className="text-[#607482] text-sm mt-1">
              {isTa ? 'ஆராய பாடப்பிரிவைத் தேர்ந்தெடுக்கவும் (தமிழ்நாடு அரசு குரூப் கோடுகள்)' : 'Choose a Group to Explore official Tamil Nadu higher-secondary streams below:'}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowCodeLookup(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#F4EFEB] hover:bg-[#C7D9E5]/50 text-[#2F4157] border border-[#D5DFE3] flex items-center space-x-1.5 transition-colors shrink-0"
            >
              <Hash className="w-3.5 h-3.5 text-[#577C8E]" />
              <span>{isTa ? '40 அரசு கோடுகள்' : 'View 40 Official TN Group Codes'}</span>
            </button>

            {/* Search Filter */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="w-4 h-4 text-[#577C8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isTa ? "குரூப் தேடுக..." : "Search group or code (e.g. 2502)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#D5DFE3] text-xs text-[#1E2933] placeholder-[#607482] focus:outline-none focus:border-[#577C8E]"
              />
            </div>
          </div>
        </div>

        {/* Group Explorer Clean Rows */}
        <div className="divide-y divide-[#D5DFE3] border-y border-[#D5DFE3]">
          {filteredGroups.map((group) => {
            const IconComponent = ICON_MAP[group.icon] || Compass;

            return (
              <div
                key={group.id}
                onClick={() => onSelectGroup(group.id)}
                className="group py-6 px-4 -mx-4 rounded-xl hover:bg-[#C7D9E5]/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left Section: Info */}
                <div className="space-y-3 max-w-3xl flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C7D9E5] border border-[#577C8E]/20 flex items-center justify-center text-[#2F4157] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-[#2F4157] group-hover:text-[#577C8E] transition-colors">
                      {isTa ? group.nameTa || group.name : group.name}
                    </h3>

                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#2F4157] text-[#F0F5F5]">
                      {group.shortCode}
                    </span>

                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F4EFEB] text-[#2F4157] border border-[#D5DFE3]">
                      {isTa ? group.badgeTa || group.badge : group.badge}
                    </span>
                  </div>

                  <p className="text-[#607482] text-xs leading-relaxed">
                    {isTa ? group.descriptionTa || group.description : group.description}
                  </p>

                  {/* Core Subjects & Admission Routes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div>
                      <span className="font-bold text-[#1E2933] block text-[10px] uppercase">Core School Subjects:</span>
                      <span className="text-[#607482]">
                        {isTa ? (group.coreSubjectsTa || group.coreSubjects).join(', ') : group.coreSubjects.join(', ')}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-[#1E2933] block text-[10px] uppercase">Popular Career Areas:</span>
                      <span className="text-[#577C8E] font-medium">{group.popularCareers.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Right Section: Node Impact Counts & Action */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:pl-6 shrink-0 border-t md:border-t-0 border-[#D5DFE3] pt-3 md:pt-0">
                  <div className="text-left md:text-right text-xs space-y-0.5">
                    <span className="text-[10px] text-[#577C8E] font-bold block uppercase">Opens Opportunities</span>
                    <span className="font-bold text-[#2F4157]">{group.impactCounts?.courseCategories || 12}+ UG Courses</span>
                    <span className="text-[#607482] block text-[10px]">{group.impactCounts?.careerDomains || 15}+ Career Domains</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D5DFE3] group-hover:bg-[#2F4157] group-hover:border-[#2F4157] text-[#577C8E] group-hover:text-[#F0F5F5] flex items-center justify-center transition-all shadow-xs">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURE: PATHWAY IMPACT VIEW ("See What This Choice Opens") */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[#D5DFE3] space-y-6 shadow-xs">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
            {isTa ? 'வாய்ப்பு பகுப்பாய்வு' : 'Opportunity Tree Analysis'}
          </span>
          <h2 className="text-2xl font-bold font-heading text-[#2F4157]">
            {isTa ? 'பாடப்பிரிவின் மூலம் திறக்கப்படும் வாய்ப்புகள்' : 'See What This Choice Opens'}
          </h2>
          <p className="text-xs text-[#607482]">
            {isTa ? 'ஒவ்வொரு பாடப்பிரிவும் பலதரப்பட்ட எதிர்காலப் பாதைகளை உருவாக்குகிறது.' : 'Visualize how a single 11th standard group expands into multiple entrance routes, undergraduate courses, higher studies, and career domains without artificial compatibility percentages.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-1">
            <span className="text-2xl font-bold text-[#2F4157] font-heading">30+</span>
            <span className="text-xs font-semibold text-[#577C8E] block">Entrance & Counselling Routes</span>
            <span className="text-[10px] text-[#607482] block">TNEA, NEET, TNCASA, CLAT, TNAU</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-1">
            <span className="text-2xl font-bold text-[#2F4157] font-heading">60+</span>
            <span className="text-xs font-semibold text-[#577C8E] block">UG Degree Programs</span>
            <span className="text-[10px] text-[#607482] block">B.E / B.Tech / MBBS / B.Com / B.A</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-1">
            <span className="text-2xl font-bold text-[#2F4157] font-heading">40+</span>
            <span className="text-xs font-semibold text-[#577C8E] block">Higher Study Specializations</span>
            <span className="text-[10px] text-[#607482] block">M.Tech, MD/MS, CA, LL.M, MBA</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-1">
            <span className="text-2xl font-bold text-[#2F4157] font-heading">100+</span>
            <span className="text-xs font-semibold text-[#577C8E] block">Career Domains</span>
            <span className="text-[10px] text-[#607482] block">AI, Medicine, Audit, Law, Governance</span>
          </div>
        </div>
      </section>

      {/* FEATURE: "WHAT IF I CHANGE MY MIND?" BRANCH EXPLORER */}
      <section className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
              {isTa ? 'நெகிழ்வுத்தன்மை பார்வை' : 'Pathway Flexibility'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#2F4157]">
              {isTa ? 'நான் எனது விருப்பத்தை மாற்றினால் என்ன செய்வது?' : 'What if I change my direction?'}
            </h2>
            <p className="text-xs text-[#607482] mt-1">
              {isTa ? '11ஆம் வகுப்பில் ஒரு பாடப்பிரிவைத் தேர்ந்தெடுப்பது உங்கள் முழு வாழ்க்கையையும் முடக்காது.' : 'Explore alternative career branches still open if your interest shifts after choosing a group.'}
            </p>
          </div>

          {/* Group Switcher Pills */}
          <div className="flex overflow-x-auto space-x-2 py-1 no-scrollbar border-b border-[#D5DFE3] pb-2">
            {GROUPS.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedDirectionGroup(g.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedDirectionGroup === g.id
                    ? 'bg-[#2F4157] text-[#F0F5F5]'
                    : 'bg-white text-[#607482] border border-[#D5DFE3] hover:text-[#2F4157]'
                }`}
              >
                {g.shortCode}
              </button>
            ))}
          </div>
        </div>

        {/* Direction Change Branch Cards */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D5DFE3] space-y-4 shadow-xs">
          <div className="flex items-center space-x-2 pb-2 border-b border-[#D5DFE3]">
            <GitBranch className="w-5 h-5 text-[#577C8E]" />
            <h3 className="text-sm font-bold font-heading text-[#2F4157]">
              Starting from: <span className="text-[#577C8E]">{directionGroupObj.name}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {directionGroupObj.directionChangeOptions?.map((option, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2F4157]">
                    Interested in: {isTa ? option.targetInterestTa || option.targetInterest : option.targetInterest}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">Alternative Route</span>
                </div>

                <div className="text-xs text-[#577C8E] font-semibold">
                  Possible Courses: {option.possibleCourses.join(', ')}
                </div>

                <p className="text-xs text-[#607482] leading-relaxed">
                  <strong className="text-[#1E2933]">Why still possible:</strong> {option.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE: SOURCE-VERIFIED INFORMATION BANNER */}
      <section className="bg-[#C7D9E5]/30 p-6 sm:p-8 rounded-2xl border border-[#577C8E]/30 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-xl bg-[#2F4157] text-[#F0F5F5] shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#577C8E] block">
                {isTa ? 'உண்மைச் சரிபார்ப்பு அமைப்பு' : 'Source Verification System'}
              </span>
              <h3 className="text-lg font-bold font-heading text-[#2F4157]">
                {isTa ? 'அதிகாரப்பூர்வ அரசு வழிகாட்டுதல்கள்' : 'Verified State & National Guidelines'}
              </h3>
              <p className="text-xs text-[#607482] mt-1 max-w-2xl leading-relaxed">
                {isTa 
                  ? 'தமிழ்நாடு அரசுத் தேர்வுகள் இயக்ககம் (DGE), TNEA, NEET மற்றும் பல்கலைக்கழக விதிகளின்படி தகவல்கள் வழங்கப்படுகின்றன.'
                  : 'All eligibility requirements, entrance cutoff formulas, and subject conditions are grounded in official board regulations.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('sources')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2F4157] text-[#F0F5F5] hover:bg-[#577C8E] shrink-0 transition-colors shadow-xs"
          >
            {isTa ? 'ஆதாரங்களைப் பார்க்கவும்' : 'View Verified Sources'}
          </button>
        </div>
      </section>

      {/* OFFICIAL TAMIL NADU CODE DIRECTORY MODAL */}
      {showCodeLookup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E2933]/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl border border-[#D5DFE3] shadow-xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#D5DFE3] flex items-center justify-between bg-[#F0F5F5]">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#577C8E] uppercase tracking-widest">
                    Directorate of Government Examinations, Tamil Nadu
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#2F4157]">
                    Official 11th Standard Group Code Directory (40 Codes)
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowCodeLookup(false)}
                className="p-2 rounded-xl bg-white hover:bg-[#F0F5F5] text-[#607482] border border-[#D5DFE3] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stream Filter Pills */}
            <div className="p-4 bg-[#F0F5F5] border-b border-[#D5DFE3] flex overflow-x-auto space-x-2 no-scrollbar">
              {['All', 'Science', 'Commerce', 'Humanities', 'Vocational'].map(s => (
                <button
                  key={s}
                  onClick={() => setCodeFilterStream(s)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    codeFilterStream === s
                      ? 'bg-[#2F4157] text-[#F0F5F5]'
                      : 'bg-white text-[#607482] border border-[#D5DFE3] hover:text-[#2F4157]'
                  }`}
                >
                  {s} Stream
                </button>
              ))}
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-3 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredTNCodes.map(item => (
                  <div
                    key={item.code}
                    onClick={() => {
                      setShowCodeLookup(false);
                      onSelectGroup(item.categoryId);
                    }}
                    className="p-4 rounded-xl bg-white hover:bg-[#C7D9E5]/30 border border-[#D5DFE3] hover:border-[#577C8E] cursor-pointer space-y-2 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-[#C7D9E5] text-[#2F4157] border border-[#577C8E]/20">
                        Group Code {item.code}
                      </span>
                      <span className="text-[10px] font-semibold text-[#607482] uppercase">
                        {item.stream} Stream
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#2F4157]">
                      {item.title}
                    </h4>

                    <div className="space-y-1">
                      <span className="text-[10px] text-[#607482] uppercase font-semibold block">Part III 4 Subjects:</span>
                      <div className="flex flex-wrap gap-1">
                        {item.subjects.map((sub, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#2F4157] border border-[#D5DFE3]">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-[#577C8E]">
                      <span>View Career Pathway →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
