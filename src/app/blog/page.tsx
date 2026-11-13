import Link from 'next/link';

const articles = [
  { slug: 'css-exam-guide', title: 'Complete Guide to CSS Exam in Pakistan', excerpt: 'Everything you need to know about eligibility, subjects, and preparation for the Central Superior Services (CSS) exam.', date: 'Dec 10, 2024', category: 'Civil Services' },
  { slug: 'study-in-germany', title: 'How to Study in Germany for Free', excerpt: 'A step-by-step guide for Pakistani students to secure admission and visas for German universities.', date: 'Dec 8, 2024', category: 'Scholarships' },
  { slug: 'software-engineering-vs-cs', title: 'BS Software Engineering vs BS Computer Science', excerpt: 'Confused about which degree to choose? Understand the core differences, HEC recognition, and job markets.', date: 'Dec 5, 2024', category: 'Career Advice' }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-2">Career Blog & Guides</h2>
          <p className="text-xl text-blue-100">In-depth articles, tips, and roadmaps for Pakistani students.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3 w-fit">
                {article.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">{article.excerpt}</p>
              <p className="text-xs text-gray-400 mt-auto">Published: {article.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
