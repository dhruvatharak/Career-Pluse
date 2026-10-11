import React from 'react';
import { ShieldCheck, GraduationCap } from 'lucide-react';

export default function Footer({ setActiveTab, onSelectGroup }) {
  return (
    <footer className="border-t border-[#D5DFE3] bg-white text-[#607482] text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#2F4157] flex items-center justify-center text-[#F0F5F5] font-bold">
                <GraduationCap className="w-4 h-4 text-[#F0F5F5]" />
              </div>
              <span className="font-heading font-bold text-xl text-[#2F4157]">
                CareerPulse AI
              </span>
            </div>
            <p className="text-[#607482] leading-relaxed">
              Intelligent 11th standard group selection & career roadmap system. Transforming group selection decisions into visual education-to-career pathways.
            </p>
          </div>

          {/* Core Pathways */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#2F4157] font-heading uppercase text-[11px] tracking-wider">
              11th Standard Groups
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => { setActiveTab('roadmap'); onSelectGroup('cs-maths'); }} className="hover:text-[#577C8E] transition-colors">Computer Science + Maths</button></li>
              <li><button onClick={() => { setActiveTab('roadmap'); onSelectGroup('bio-maths'); }} className="hover:text-[#577C8E] transition-colors">Bio-Mathematics (PCBM)</button></li>
              <li><button onClick={() => { setActiveTab('roadmap'); onSelectGroup('commerce'); }} className="hover:text-[#577C8E] transition-colors">Commerce & Accountancy</button></li>
              <li><button onClick={() => { setActiveTab('roadmap'); onSelectGroup('arts-humanities'); }} className="hover:text-[#577C8E] transition-colors">Arts & Humanities</button></li>
              <li><button onClick={() => { setActiveTab('roadmap'); onSelectGroup('pure-science'); }} className="hover:text-[#577C8E] transition-colors">Pure Science / Vocational</button></li>
            </ul>
          </div>

          {/* Quick Platform Tools */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#2F4157] font-heading uppercase text-[11px] tracking-wider">
              System Tools
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => setActiveTab('quiz')} className="hover:text-[#577C8E] transition-colors">AI Interest Quiz</button></li>
              <li><button onClick={() => setActiveTab('chat')} className="hover:text-[#577C8E] transition-colors">AI Assistant Chat</button></li>
              <li><button onClick={() => setActiveTab('compare')} className="hover:text-[#577C8E] transition-colors">Course & Group Comparison</button></li>
              <li><button onClick={() => setActiveTab('exams')} className="hover:text-[#577C8E] transition-colors">Entrance Exam Directory</button></li>
              <li><button onClick={() => setActiveTab('checker')} className="hover:text-[#577C8E] transition-colors">TN Cutoff & Eligibility Checker</button></li>
            </ul>
          </div>

          {/* Official Disclaimer & Tamil Nadu Note */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#2F4157] font-heading uppercase text-[11px] tracking-wider flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#577C8E]" />
              <span>TN & National Guidance</span>
            </h4>
            <p className="text-[11px] text-[#607482] leading-relaxed">
              Admission policies, cutoff formulas, and entrance examination schedules (NEET, JEE, TNEA, CUET, CLAT, TNAU, TANUVAS) are curated based on official government guidelines. Always verify with respective official admission authorities.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D5DFE3] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#607482]">
          <p>© 2026 CareerPulse AI. Empowering 10th and 11th Standard Students.</p>
          <div className="flex items-center space-x-1 text-[#2F4157]">
            <span>Built with precision for 10th & 11th Students</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
