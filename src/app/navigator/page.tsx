"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function NavigatorPage() {
  const [marks, setMarks] = useState('');
  const [group, setGroup] = useState('');
  const [result, setResult] = useState(null as any);

  const calculatePath = () => {
    const m = parseInt(marks);
    if (isNaN(m) || m > 1100 || !group) {
      alert("Please enter valid marks (out of 1100) and select your Matric group.");
      return;
    }

    let paths: any[] = [];

    if (group === 'Science') {
      if (m >= 800) {
        paths.push({ stream: 'FSc Pre-Engineering', desc: 'Leads to BSc Engineering, BS Computer Science, Architecture.', budget: 'Public & Private options available' });
        paths.push({ stream: 'FSc Pre-Medical', desc: 'Leads to MBBS, BDS, Pharm-D, Biotechnology. Highly competitive.', budget: 'High merit in Public sector' });
        paths.push({ stream: 'ICS (Physics/Math)', desc: 'Direct path to BS Computer Science & IT. Highly recommended for tech careers.', budget: 'Affordable options available' });
      } else if (m >= 600) {
        paths.push({ stream: 'ICS (Stats/Math)', desc: 'Excellent route to IT, Software, and Data Analytics.', budget: 'Many affordable public colleges' });
        paths.push({ stream: 'DAE (Diploma of Associate Engineer)', desc: '3-year practical technical diploma. Great for immediate jobs in industry.', budget: 'Very affordable TEVTA/PSB options' });
      } else {
        paths.push({ stream: 'FA (General Science)', desc: 'Keeps options open for BBA, Mass Comm, IT diplomas.', budget: 'Affordable' });
        paths.push({ stream: 'DAE (Technical)', desc: 'Focus on technical skills for immediate employment.', budget: 'Affordable' });
      }
    } else if (group === 'Computer Science') {
       if (m >= 700) {
        paths.push({ stream: 'ICS (Computer Science)', desc: 'Fast track to BS Software Engineering and BS IT.', budget: 'Public & Private options' });
        paths.push({ stream: 'I.Com', desc: 'Path to Chartered Accountancy (CA), B.Com, and Banking.', budget: 'Affordable' });
      } else {
        paths.push({ stream: 'FA (General Science)', desc: 'General pathway to business or arts.', budget: 'Affordable' });
        paths.push({ stream: 'DAE (IT/Civil)', desc: 'Technical skill development for jobs.', budget: 'Affordable' });
      }
    } else {
      // Arts / Commerce / Others
      paths.push({ stream: 'I.Com', desc: 'Leads to B.Com, BBA, ACCA, and banking sector.', budget: 'Affordable' });
      paths.push({ stream: 'FA (Humanities)', desc: 'Leads to LLB, Mass Communication, Psychology, English Literature.', budget: 'Affordable' });
    }

    setResult({ marks: m, group, paths });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/quiz" className="text-gray-600 hover:text-blue-600">Take Quiz</Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Matric-to-Career Navigator</h2>
          <p className="text-lg md:text-xl text-blue-100">"Mere marks ke hisaab se mujhe kya mil sakta hai?"</p>
        </div>
      </section>

      <div className="flex-grow flex items-center justify-center container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl w-full">
          
          {!result ? (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">1. Enter your Matric Marks (Out of 1100)</label>
                <input 
                  type="number" 
                  value={marks} 
                  onChange={(e) => setMarks(e.target.value)}
                  placeholder="e.g. 850" 
                  className="w-full p-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">2. Select your Matric Group</label>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setGroup('Science')} className={`p-4 rounded-xl border-2 font-semibold ${group === 'Science' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'}`}>Science (Bio/Physics)</button>
                  <button onClick={() => setGroup('Computer Science')} className={`p-4 rounded-xl border-2 font-semibold ${group === 'Computer Science' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'}`}>Computer Science</button>
                  <button onClick={() => setGroup('Arts/Commerce')} className={`p-4 rounded-xl border-2 font-semibold col-span-2 ${group === 'Arts/Commerce' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'}`}>Arts / Commerce / Others</button>
                </div>
              </div>

              <button onClick={calculatePath} className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition">
                Show My Pathways
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Based on {result.marks} marks in {result.group}:</h3>
              <div className="space-y-4">
                {result.paths.map((path: any, index: number) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-xl font-bold text-blue-700 mb-1">{path.stream}</h4>
                    <p className="text-gray-600 mb-2">{path.desc}</p>
                    <p className="text-sm text-green-600 font-semibold">💰 Budget: {path.budget}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setResult(null)} className="mt-6 text-blue-600 hover:underline font-medium">
                ← Check for different marks/group
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
