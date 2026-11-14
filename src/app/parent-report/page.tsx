"use client";
import { useState } from 'react';
import Link from 'next/link';

const careerData: Record<string, { cost: string; time: string; market: string; risk: string }> = {
  "Engineering": { cost: "High (Public & Private)", time: "4 Years (BSc Eng)", market: "Competitive, requires PEC accreditation", risk: "High merit for public unis. Private is expensive." },
  "Medical (MBBS)": { cost: "Very High", time: "5 Years + 1 Year House Job", market: "Extremely competitive", risk: "MDCAT trauma. High cost if private admission." },
  "Computer Science / IT": { cost: "Low to High (Many free paths)", time: "4 Years (or 6-month bootcamps)", market: "Very High Demand (Local & Remote)", risk: "Need to build real coding skills, not just get a degree." },
  "Business / CA": { cost: "Moderate", time: "4 Years (BBA) or 3-4 Years (CA)", market: "High Demand in Finance/Corporate", risk: "CA is tough to pass, requires articleship." },
  "Arts / Design": { cost: "Moderate", time: "4 Years (BFA)", market: "Growing Demand (Digital Media)", risk: "Requires strong portfolio, not just degree." },
};

export default function ParentReportPage() {
  const [studentChoice, setStudentChoice] = useState("");
  const [parentChoice, setParentChoice] = useState("");
  const [showReport, setShowReport] = useState(false);

  const generateReport = () => {
    if (!studentChoice || !parentChoice) {
      alert("Please select both options to generate a comparison.");
      return;
    }
    setShowReport(true);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Parent Confidence Report</h2>
          <p className="text-lg md:text-xl text-blue-100">Comparing your choice with family expectations based on facts, not arguments.</p>
        </div>
      </section>

      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
          
          {!showReport ? (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">What does the Student want to do?</label>
                <select value={studentChoice} onChange={(e) => setStudentChoice(e.target.value)} className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select Career...</option>
                  {Object.keys(careerData).map(key => <option key={key} value={key}>{key}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">What do the Parents prefer?</label>
                <select value={parentChoice} onChange={(e) => setParentChoice(e.target.value)} className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select Career...</option>
                  {Object.keys(careerData).map(key => <option key={key} value={key}>{key}</option>)}
                </select>
              </div>

              <button onClick={generateReport} className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition">
                Generate Comparison Report
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Side-by-Side Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Student's Choice: {studentChoice}</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>💰 Cost:</strong> {careerData[studentChoice].cost}</li>
                    <li><strong>⏳ Time:</strong> {careerData[studentChoice].time}</li>
                    <li><strong>📈 Job Market:</strong> {careerData[studentChoice].market}</li>
                    <li><strong>⚠️ Risk/Reality:</strong> {careerData[studentChoice].risk}</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-700 mb-4">Parent's Choice: {parentChoice}</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>💰 Cost:</strong> {careerData[parentChoice].cost}</li>
                    <li><strong>⏳ Time:</strong> {careerData[parentChoice].time}</li>
                    <li><strong>📈 Job Market:</strong> {careerData[parentChoice].market}</li>
                    <li><strong>⚠️ Risk/Reality:</strong> {careerData[parentChoice].risk}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">💬 Suggested Conversation with Parents:</h4>
                <p className="text-gray-700 italic">
                  "Aap ki concern job security aur investment hai. Agar hum compare karein, toh {studentChoice} mein {careerData[studentChoice].market} hai. Cost bhi {careerData[studentChoice].cost} hai. Iske comparison mein {parentChoice} ka time {careerData[parentChoice].time} hai. Dono ka risk samajh kar mil kar decision lete hain."
                </p>
              </div>

              <button onClick={() => setShowReport(false)} className="mt-6 text-blue-600 hover:underline font-medium">
                ← Generate New Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
