import React, { useState } from 'react';
import { ENTRANCE_EXAMS } from '../data/careerData';
import { BookOpen, Search, ExternalLink } from 'lucide-react';

export default function ExamDirectory() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Medical', 'Engineering & Tech', 'Law & Governance', 'Commerce & Finance', 'Arts, Science & Commerce', 'Agriculture & Science'];

  const filteredExams = ENTRANCE_EXAMS.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(search.toLowerCase()) ||
                          exam.eligibility.toLowerCase().includes(search.toLowerCase()) ||
                          exam.targetCourses.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-20">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#2F4157]">
          Entrance Examinations & Counselling Routes
        </h1>
        <p className="text-[#607482] text-sm max-w-3xl">
          Search national & state entrance exams, conducting bodies, eligibility criteria, and admission routes (NEET, JEE, TNEA Tamil Nadu, CLAT, TNAU, CA, etc.).
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#D5DFE3] space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#577C8E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search exam, eligibility or course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F0F5F5] border border-[#D5DFE3] text-xs text-[#1E2933] placeholder-[#607482] focus:outline-none focus:border-[#577C8E]"
            />
          </div>

          <div className="flex overflow-x-auto space-x-2 w-full sm:w-auto py-1 no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#2F4157] text-[#F0F5F5]'
                    : 'bg-[#F4EFEB] text-[#607482] border border-[#D5DFE3] hover:text-[#2F4157]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Searchable Table View */}
      <div className="overflow-x-auto rounded-2xl bg-white border border-[#D5DFE3] shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#F0F5F5] text-[#2F4157] font-heading border-b border-[#D5DFE3]">
            <tr>
              <th className="p-4 min-w-[160px]">Exam Name</th>
              <th className="p-4 min-w-[140px]">Category & Body</th>
              <th className="p-4 min-w-[200px]">Eligibility Criteria</th>
              <th className="p-4 min-w-[180px]">Target Courses</th>
              <th className="p-4 min-w-[160px]">Admission / Counselling Route</th>
              <th className="p-4 min-w-[100px]">Official Portal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D5DFE3] text-[#607482]">
            {filteredExams.map((exam) => (
              <tr key={exam.id} className="hover:bg-[#F0F5F5] transition-colors">
                <td className="p-4 font-bold text-[#2F4157]">
                  {exam.name}
                  <span className="block text-[10px] text-[#607482] font-normal mt-0.5">{exam.frequency}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold text-[#577C8E] block">{exam.category}</span>
                  <span className="text-[11px] text-[#607482]">{exam.conductingBody}</span>
                </td>
                <td className="p-4 text-[#1E2933] leading-relaxed">
                  {exam.eligibility}
                </td>
                <td className="p-4 text-[#1E2933]">
                  {exam.targetCourses}
                </td>
                <td className="p-4 text-[#577C8E] font-medium">
                  {exam.counselling}
                </td>
                <td className="p-4">
                  <a
                    href={exam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 font-semibold text-[#577C8E] hover:text-[#2F4157] transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
