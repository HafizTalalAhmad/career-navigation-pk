"use client";
import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: [
      { text: "Mathematics & Physics", value: "engineering" },
      { text: "Biology & Chemistry", value: "medical" },
      { text: "Computers & Logic", value: "cs" },
      { text: "Business & Economics", value: "business" }
    ]
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Building or fixing physical systems", value: "engineering" },
      { text: "Helping and caring for people", value: "medical" },
      { text: "Writing code and building apps", value: "cs" },
      { text: "Analyzing data and managing money", value: "business" }
    ]
  },
  {
    question: "What is your ultimate career goal?",
    options: [
      { text: "Innovating infrastructure or technology", value: "engineering" },
      { text: "Becoming a doctor or healthcare professional", value: "medical" },
      { text: "Becoming a Software Engineer", value: "cs" },
      { text: "Starting my own company or working in finance", value: "business" }
    ]
  }
];

const results = {
  engineering: { title: "Engineering & Technology", desc: "You should consider FSc Pre-Engineering, leading to BSc Engineering, B-Tech, or Architecture.", link: "/after/matric" },
  medical: { title: "Medical & Life Sciences", desc: "You should consider FSc Pre-Medical, leading to MBBS, BDS, Pharm-D, or Biotechnology.", link: "/after/matric" },
  cs: { title: "Computer Science & IT", desc: "You should consider ICS (Computer Science), leading to BS Computer Science, Software Engineering, or IT.", link: "/after/matric" },
  business: { title: "Business & Commerce", desc: "You should consider I.Com or BBA, leading to Chartered Accountancy (CA), Finance, or Management.", link: "/after/inter" }
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ engineering: 0, medical: 0, cs: 0, business: 0 });
  const [showResult, setShowResult] = useState(false);
  const [resultKey, setResultKey] = useState<keyof typeof results>("engineering");

  const handleAnswer = (value: keyof typeof scores) => {
    const newScores = { ...scores, [value]: scores[value] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find the highest score
      const highest = Object.keys(newScores).reduce((a, b) => 
        newScores[a as keyof typeof scores] > newScores[b as keyof typeof scores] ? a : b
      );
      setResultKey(highest as keyof typeof results);
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          </nav>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl w-full text-center">
          {!showResult ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Career Quiz</h2>
              <p className="text-gray-500 mb-8">Question {currentQuestion + 1} of {questions.length}</p>
              <h3 className="text-xl font-semibold mb-8">{questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleAnswer(option.value as keyof typeof scores)}
                    className="bg-blue-50 text-blue-700 font-semibold py-4 px-6 rounded-xl hover:bg-blue-100 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Your Recommended Path:</h2>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{results[resultKey].title}</h3>
              <p className="text-gray-600 mb-8 text-lg">{results[resultKey].desc}</p>
              <div className="flex flex-col gap-4">
                <Link href={results[resultKey].link} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                  Explore This Path
                </Link>
                <button onClick={() => { setShowResult(false); setCurrentQuestion(0); setScores({ engineering: 0, medical: 0, cs: 0, business: 0 }); }} className="text-gray-500 hover:text-gray-700 font-medium">
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
