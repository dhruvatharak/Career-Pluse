import React from 'react';
import { VERIFIED_SOURCES_DATA } from '../data/careerData';
import { ShieldCheck, CheckCircle2, Info, ExternalLink, Calendar, BookOpen } from 'lucide-react';

export default function VerifiedSourcesView({ customTheme, language }) {
  const isTa = language === 'ta';

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold text-[#577C8E] uppercase tracking-wider block">
          {isTa ? 'அதிகாரப்பூர்வ ஆதாரங்கள் & சரிபார்க்கப்பட்ட தகவல்கள்' : 'Official Governance & Rule Verification Engine'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          {isTa ? 'சரிபார்க்கப்பட்ட கல்வித் தகவல்கள்' : 'Source-Verified Education Rules'}
        </h1>
        <p className="text-[#607482] text-sm max-w-3xl leading-relaxed">
          {isTa 
            ? 'தமிழ்நாடு அரசுத் தேர்வுகள் இயக்ககம் (DGE), TNEA, NEET மற்றும் பல்கலைக்கழக வழிகாட்டுதல்களின் அடிப்படையில் அனைத்து சேர்க்கை விதிகளும் சரிபார்க்கப்படுகின்றன.'
            : 'CareerPulse AI strictly separates official government facts from AI analytical explanations. Admission rules, cutoff formulas, and subject prerequisites are grounded in official state policy.'}
        </p>
      </div>

      {/* Trust Philosophy Banner */}
      <div className="p-6 rounded-2xl bg-[#C7D9E5]/30 border border-[#577C8E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-[#2F4157] text-[#F0F5F5] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#577C8E] block">
              {isTa ? 'உண்மை சரிபார்ப்பு கொள்கை' : 'Trust System Principle'}
            </span>
            <h3 className="text-lg font-bold font-heading text-[#2F4157]">
              {isTa ? 'அதிகாரப்பூர்வ தகவல்களுக்கும் AI விளக்கங்களுக்கும் உள்ள வேறுபாடு' : 'Verified Fact vs AI Explanation'}
            </h3>
            <p className="text-xs text-[#607482] mt-1 leading-relaxed">
              {isTa 
                ? 'அதிகாரப்பூர்வ விதிகளை AI ஒருபோதும் கற்பனை செய்யாது. விதிகளுக்கு ஆதாரமும் சரிபார்க்கப்பட்ட தேதியும் வழங்கப்படுகிறது.'
                : 'The AI model never invents eligibility rules. Facts are backed by official board notices and last verified dates.'}
            </p>
          </div>
        </div>
      </div>

      {/* Verified Sources Cards List */}
      <div className="space-y-6">
        {VERIFIED_SOURCES_DATA.map((source) => (
          <div
            key={source.id}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D5DFE3] space-y-5 shadow-xs"
          >
            {/* Source Title & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D5DFE3] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#577C8E] block">
                  {source.authority}
                </span>
                <h3 className="text-xl font-bold font-heading text-[#2F4157]">
                  {source.document}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center space-x-1 font-mono text-[#607482] bg-[#F4EFEB] px-2.5 py-1 rounded-md border border-[#D5DFE3]">
                  <Calendar className="w-3.5 h-3.5 text-[#577C8E]" />
                  <span>Checked: {source.lastChecked}</span>
                </span>
                <span className="font-semibold text-[#2F4157] bg-[#C7D9E5] px-2.5 py-1 rounded-md border border-[#577C8E]/20">
                  {source.cycle}
                </span>
              </div>
            </div>

            {/* Verified Facts List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#2F4157] uppercase tracking-wider flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#577C8E]" />
                <span>{isTa ? 'சரிபார்க்கப்பட்ட உண்மைகள் (VERIFIED FACT)' : 'Verified Facts (Official Data)'}</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#1E2933]">
                {source.verifiedFacts.map((fact, i) => (
                  <li key={i} className="flex items-start space-x-2 bg-[#F0F5F5] p-3 rounded-xl border border-[#D5DFE3]">
                    <span className="text-[#577C8E] font-bold">✓</span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Explanation Note */}
            <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#D5DFE3] text-xs text-[#2F4157] space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-[#577C8E] uppercase text-[10px] tracking-wider">
                <Info className="w-3.5 h-3.5 text-[#577C8E]" />
                <span>{isTa ? 'AI விளக்கம் (AI EXPLANATION)' : 'AI Explanation & Context'}</span>
              </div>
              <p className="text-[#607482] italic leading-relaxed">
                "{source.aiExplanationNote}"
              </p>
            </div>

            {/* Source Link Action */}
            <div className="pt-2 flex justify-end">
              <a
                href={source.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#577C8E] hover:text-[#2F4157] transition-colors"
              >
                <span>{isTa ? 'அதிகாரப்பூர்வ இணையதளத்தைப் பார்க்கவும்' : 'View Official Authority Source'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
