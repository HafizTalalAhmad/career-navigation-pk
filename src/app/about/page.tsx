import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">CareerPath PK</Link>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/opportunities" className="text-gray-600 hover:text-blue-600">Opportunities</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-2">About CareerPath PK</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We are on a mission to empower Pakistani youth with the clarity and resources they need to make informed career and educational decisions.
          </p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Millions of students in Pakistan complete their Matric, Inter, and Bachelor&apos;s degrees without knowing what options they actually have. Whether it&apos;s understanding the difference between BS Computer Science and BS Software Engineering, figuring out how to apply for the Stipendium Hungaricum, or finding out what a DAE is.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CareerPath PK aims to bridge this gap by providing clear, step-by-step roadmaps, localized opportunities, and verified guidance—all in one modern platform.
          </p>
        </div>

        {/* Contact Area */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have a question, want to contribute, or need career advice? Reach out to us!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:contact@careerpath.pk" className="text-blue-600 hover:underline text-sm">contact@careerpath.pk</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600 text-sm">Pakistan 🇵🇰</p>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            Send Us a Message
          </button>
        </div>
      </section>
    </div>
  );
}
