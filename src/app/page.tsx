import Link from 'next/link';

const tools = [
  { title: 'Matric-to-Career Navigator', desc: 'Enter your marks and group to see exactly which pathways are open to you.', href: '/navigator', icon: '🧭', color: 'bg-blue-50 text-blue-600' },
  { title: 'Degree Risk & Skill Planner', desc: 'Avoid the "useless degree" trap. See realistic 4-year employment plans.', href: '/degree-planner', icon: '📈', color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Funding & Scholarships', desc: 'Find verified financial aid, loans, and free IT training programs.', href: '/funding', icon: '💰', color: 'bg-amber-50 text-amber-600' },
  { title: 'Parent Confidence Report', desc: 'Generate a side-by-side comparison to help your family understand your choices.', href: '/parent-report', icon: '🤝', color: 'bg-purple-50 text-purple-600' },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 opacity-90"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl text-center">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 mb-6 border border-white/20">
            🇵🇰 Built for Pakistani Students
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Confused about your future?<br/>Find the right path.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Discover the perfect career path, scholarships, and opportunities after Matric, Inter, or Bachelor&rsquo;s — based on your marks, budget, and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/navigator" className="bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition shadow-lg">
              Find My Pathway →
            </Link>
            <Link href="/quiz" className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition border border-white/30">
              Take Career Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How we help you decide</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We don't just list universities. We give you the tools to make a confident, informed decision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Link 
              key={tool.title} 
              href={tool.href} 
              className="card p-8 flex flex-col group"
            >
              <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center text-3xl mb-5`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{tool.title}</h3>
              <p className="text-slate-600 flex-grow">{tool.desc}</p>
              <span className="mt-6 text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Now <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Worried about admission deadlines?</h2>
          <p className="text-lg text-slate-600 mb-8">Stay updated with the latest universities, admissions, and government job opportunities.</p>
          <Link href="/opportunities" className="btn-primary">
            View Latest Opportunities
          </Link>
        </div>
      </section>

    </div>
  );
}
