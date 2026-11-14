"use client";
import { useState } from 'react';
import Link from 'next/link';

const fundingOptions = [
  { title: 'PEEF (Punjab Educational Endowment Fund)', type: 'Scholarship', level: 'Inter, Bachelor, Master', desc: 'For students with 60%+ marks and income < 35,000/month. Covers full tuition and stipend.', url: 'https://www.peef.org.pk' },
  { title: 'HEC Need-Based Scholarship', type: 'Scholarship', level: 'Bachelor, Master', desc: 'For students enrolled in selected public universities. Covers tuition and living allowance.', url: 'https://hec.gov.pk' },
  { title: 'Saylani Mass IT Training (SMIT)', type: 'Free IT Training', level: 'Matric, Inter, Bachelor', desc: 'Free IT and software development training with monthly stipend. No degree required for admission.', url: 'https://smit.smit.edu.pk' },
  { title: 'NAVTTC Free Courses', type: 'Free IT Training', level: 'Matric, Inter, Bachelor', desc: 'Government-funded 3-6 month technical and IT courses. Includes monthly stipend.', url: 'https://navttc.gov.pk' },
  { title: 'Akhuwat Foundation Qarz-e-Hasna', type: 'Interest-Free Loan', level: 'Bachelor, Master', desc: 'Interest-free loans for students who cannot afford university tuition. Payable after graduation/job.', url: 'https://akhwuat.org.pk' },
  { title: 'Stipendium Hungaricum', type: 'International Scholarship', level: 'Bachelor, Master, PhD', desc: 'Fully funded scholarship by the Government of Hungary for Pakistani students.', url: 'https://stipendiumhungaricum.hu' },
  { title: 'DPMS (Degree Program for Marginalized Students)', type: 'Scholarship', level: 'Bachelor', desc: 'HEC program for students from low-income backgrounds studying in public sector universities.', url: 'https://hec.gov.pk' },
  { title: 'e-Rozgaar Training Program', type: 'Free IT Training', level: 'Bachelor, Master', desc: 'Free 3-month freelancing and digital skills training by Punjab IT Board for youth.', url: 'https://erozgaar.pitb.gov.pk' }
];

export default function FundingPage() {
  const [filter, setFilter] = useState('All');

  const filteredOptions = filter === 'All' 
    ? fundingOptions 
    : fundingOptions.filter(opt => opt.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/navigator" className="text-gray-600 hover:text-blue-600">Navigator</Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-2">Funding & Scholarship Finder</h2>
          <p className="text-xl text-blue-100">Budget shouldn't stop your dreams. Explore verified financial aid.</p>
        </div>
      </section>

      <div className="flex-grow container mx-auto px-6 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Scholarship', 'Free IT Training', 'Interest-Free Loan', 'International Scholarship'].map((type) => (
            <button 
              key={type} 
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-semibold transition ${filter === type ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Funding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOptions.map((fund, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-50 rounded-full mb-3 w-fit">
                {fund.type}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{fund.title}</h3>
              <p className="text-gray-500 text-sm mb-3 flex-grow">{fund.desc}</p>
              <p className="text-xs text-gray-400 mb-4">Eligible Levels: {fund.level}</p>
              <a href={fund.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-600 hover:underline font-semibold text-sm">
                Apply / Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
