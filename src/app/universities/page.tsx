import Link from 'next/link';

const universities = [
  { name: 'NUST (National University of Sciences & Technology)', location: 'Islamabad', category: 'Engineering & Tech', url: 'https://www.nust.edu.pk' },
  { name: 'FAST-NUCES', location: 'Multiple Campuses', category: 'Computer Science', url: 'https://www.nu.edu.pk' },
  { name: 'LUMS (Lahore University of Management Sciences)', location: 'Lahore', category: 'Business & Arts', url: 'https://lums.edu.pk' },
  { name: 'University of the Punjab', location: 'Lahore', category: 'Public/Multi-faculty', url: 'http://pu.edu.pk' },
  { name: 'University of Karachi', location: 'Karachi', category: 'Public/Multi-faculty', url: 'http://uok.edu.pk' },
  { name: 'Aga Khan University (AKU)', location: 'Karachi', category: 'Medical', url: 'https://www.aku.edu' },
  { name: 'UET Lahore (University of Engineering & Technology)', location: 'Lahore', category: 'Engineering', url: 'https://uet.edu.pk' },
  { name: 'GIKI (Ghulam Ishaq Khan Institute)', location: 'Swabi', category: 'Engineering', url: 'https://giki.edu.pk' },
  { name: 'IBA Karachi', location: 'Karachi', category: 'Business', url: 'https://iba.edu.pk' },
];

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/quiz" className="text-gray-600 hover:text-blue-600">Take Quiz</Link>
            <Link href="/opportunities" className="text-gray-600 hover:text-blue-600">Opportunities</Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-2">Top Universities in Pakistan</h2>
          <p className="text-xl text-blue-100">Find the right institution for your higher education.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-3 w-fit">
                {uni.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{uni.name}</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">📍 {uni.location}</p>
              <a href={uni.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-600 hover:underline font-semibold text-sm">
                Visit Official Website →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
