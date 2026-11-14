import Link from 'next/link';

const educationLevels = [
  { name: 'Matric (SSC)', slug: 'matric', icon: '🎓', desc: 'Science, Computer Science, Arts, Vocational' },
  { name: 'Inter (HSSC)', slug: 'inter', icon: '📚', desc: 'Pre-Eng, Pre-Med, ICS, I.Com, FA' },
  { name: 'Bachelor', slug: 'bachelor', icon: '🏛️', desc: 'BS 4-year programs, BBA, Engineering, Medicine' },
  { name: 'Master', slug: 'master', icon: '🧠', desc: 'MS/MPhil, CSS Exam, Job Market Entry' },
];

const latestOpportunities = [
  { title: 'Stipendium Hungaricum 2025', scope: 'international', deadline: '2025-01-15', desc: 'Fully funded scholarships for Pakistani students to study in Hungary.' },
  { title: 'PPSC Lecturer Jobs', scope: 'local', deadline: '2024-12-20', desc: 'Punjab Public Service Commission announces lecturer vacancies.' },
  { title: 'e-Rozgaar Free Freelancing Course', scope: 'local', deadline: '2024-12-10', desc: 'Free 3-month training by Punjab IT Board.' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CareerPath PK</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/navigator" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition">Find My Pathway</Link>
              <Link href="/quiz" className="text-gray-600 hover:text-blue-600">Take Quiz</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600">Universities</Link>
              <Link href="/opportunities" className="text-gray-600 hover:text-blue-600">Opportunities</Link>
              <Link href="/funding" className="text-gray-600 hover:text-blue-600">Funding</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Confused about your future?</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Discover the perfect career path, scholarships, and opportunities after Matric, Inter, or Bachelor&apos;s.</p>
          <Link href="/navigator" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition">Find My Pathway</Link>
        </div>
      </section>

      {/* "What's Next?" Crossroad Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Select Your Current Education Level</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {educationLevels.map((level) => (
            <Link 
              key={level.slug} 
              href={`/after/${level.slug}`} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100 text-center"
            >
              <div className="text-blue-500 text-5xl mb-4">{level.icon}</div>
              <h4 className="text-xl font-semibold mb-2">After {level.name}</h4>
              <p className="text-gray-500 text-sm">{level.desc}</p>
            </Link>
          ))}

        </div>
      </section>

      {/* Latest Opportunities Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold">Latest Opportunities</h3>
            <Link href="/opportunities" className="text-blue-600 hover:underline font-medium">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestOpportunities.map((opp, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3 ${opp.scope === 'international' ? 'bg-purple-500' : 'bg-green-500'}`}>
                  {opp.scope.charAt(0).toUpperCase() + opp.scope.slice(1)}
                </span>
                <h4 className="text-lg font-bold mb-2">{opp.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{opp.desc}</p>
                {opp.deadline && (
                  <p className="text-xs text-red-500 font-medium">Deadline: {opp.deadline}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
