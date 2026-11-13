import Link from 'next/link';
import { notFound } from 'next/navigation';

// Static data for the CSS article
const articleData: Record<string, { title: string; content: string[] }> = {
  'css-exam-guide': {
    title: 'Complete Guide to CSS Exam in Pakistan',
    content: [
      'The Central Superior Services (CSS) exam is one of the most prestigious competitive exams in Pakistan, conducted by the Federal Public Service Commission (FPSC).',
      'To appear in the CSS exam, a candidate must hold a Bachelor\'s degree with at least 2nd division from a recognized university. The age limit is generally 21 to 30 years, though there are age relaxations for specific categories like government employees.',
      'The exam consists of written tests, a medical examination, and a psychological assessment, followed by a viva voce (interview). It is highly competitive, requiring months of dedicated preparation.'
    ]
  }
  // You can add more articles here later!
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug];

  if (!article) {
    notFound(); // Shows a 404 if the article doesn't exist
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Back to Blog</Link>
          </nav>
        </div>
      </header>

      <article className="container mx-auto px-6 py-16 max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
        
        <div className="prose lg:prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-blue-600 hover:underline font-medium">
            ← Read more articles
          </Link>
        </div>
      </article>
    </div>
  );
}
