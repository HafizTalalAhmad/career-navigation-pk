"use client";
import { useState } from 'react';
import Link from 'next/link';

const degreeData: Record<string, { 
  risk: 'Low' | 'Medium' | 'High'; 
  riskColor: string; 
  reality: string; 
  plan: { year: string; action: string }[] 
}> = {
  "BS Computer Science / IT": {
    risk: 'Low',
    riskColor: 'bg-green-100 text-green-700',
    reality: 'High demand, but a degree alone isn't enough. You need practical coding skills and a portfolio. Avoid weak/unaccredited institutes.",
    plan: [
      { year: 'Year 1', action: 'Master programming fundamentals (C++, Java, or Python) and basic Data Structures.' },
      { year: 'Year 2', action: 'Pick a track (Web, Mobile, or AI). Start building small personal projects on GitHub.' },
      { year: 'Year 3', action: 'Apply for summer internships. Contribute to open-source or do freelance work.' },
      { year: 'Year 4', action: 'Polish your resume, prepare for technical interviews (LeetCode), and secure a full-time job before graduation.' }
    ]
  },
  "B.Com / General Business Studies": {
    risk: 'High',
    riskColor: 'bg-red-100 text-red-700',
    reality: 'Highly saturated market. A simple BCom leads to low-paying clerical jobs. You must pair it with professional skills.',
    plan: [
      { year: 'Year 1', action: 'Master Advanced Excel, Tally/QuickBooks, and basic business communication.' },
      { year: 'Year 2', action: 'Start a professional qualification (ACCA, CMA, or CA) alongside your BCom.' },
      { year: 'Year 3', action: 'Learn digital marketing, ERP systems (SAP), or data analytics to stand out. Get an internship in a corporate finance dept.' },
      { year: 'Year 4', action: 'Network heavily. Secure articleship or an entry-level management/finance role.' }
    ]
  },
  "BS Physics / Chemistry / Math": {
    risk: 'Medium',
    riskColor: 'bg-yellow-100 text-yellow-700',
    reality: 'No direct industry job with just a BS. You must specialize in tech, education, or research.',
    plan: [
      { year: 'Year 1', action: 'Focus on core concepts and maintain a high GPA for future scholarships/MS.' },
      { year: 'Year 2', action: 'Learn a complementary skill: Programming (Python for Data Science) or Lab Instrumentation.' },
      { year: 'Year 3', action: 'Apply for research assistant positions or teaching internships. Consider competitive exams (CSS).' },
      { year: 'Year 4', action: 'Apply for fully funded MS/PhD programs abroad (DAAD, Fulbright) or enter EdTech/Data Science.' }
    ]
  }
};

export default function DegreePlannerPage() {
  const [selectedDegree, setSelectedDegree] = useState<keyof typeof degreeData | null>(null);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Degree Risk & Skill Planner</h2>
          <p className="text-lg md:text-xl text-blue-100">Avoid the "Useless Degree" trap. Build a 4-year employment action plan.</p>
        </div>
      </section>

      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {!selectedDegree ? (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Select a Degree to Analyze:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.keys(degreeData).map((degree) => (
                  <button 
                    key={degree} 
                    onClick={() => setSelectedDegree(degree as keyof typeof degreeData)}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition text-left"
                  >
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${degreeData[degree].riskColor}`}>
                      Risk: {degreeData[degree].risk}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900">{degree}</h4>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedDegree}</h3>
                <button onClick={() => setSelectedDegree(null)} className="text-blue-600 hover:underline text-sm font-medium">
                  ← Choose Different Degree
                </button>
              </div>

              <div className={`${degreeData[selectedDegree].riskColor} p-4 rounded-xl mb-8`}>
                <strong>Reality Check:</strong> {degreeData[selectedDegree].reality}
              </div>

              <h4 className="text-xl font-bold mb-4 text-gray-900">Your 4-Year Employment Action Plan:</h4>
              <div className="space-y-4">
                {degreeData[selectedDegree].plan.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
                      {index < 3 && <div className="w-1 h-full bg-gray-200 mt-1"></div>}
                    </div>
                    <div className="pb-4">
                      <h5 className="font-bold text-blue-700">{step.year}</h5>
                      <p className="text-gray-600">{step.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
