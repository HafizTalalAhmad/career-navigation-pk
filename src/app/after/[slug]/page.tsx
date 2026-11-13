import Link from 'next/link';
import { notFound } from 'next/navigation';

// Static data for now so the pages work immediately
const careerData: Record<string, { title: string; paths: { title: string; description: string; steps: string[] }[] }> = {
  matric: {
    title: 'Matric (SSC)',
    paths: [
      {
        title: 'FSc Pre-Engineering',
        description: 'The path to becoming an engineer or pursuing computer science.',
        steps: ['Take Physics, Chemistry, Math in Inter', 'Prepare for ECAT', 'Apply to UET, NUST, FAST']
      },
      {
        title: 'ICS (Computer Science)',
        description: 'Direct path to Software Engineering and IT.',
        steps: ['Take Computer Science + Math in Inter', 'Learn basic programming', 'Apply to BS CS/IT programs']
      },
      {
        title: 'DAE (Diploma of Associate Engineer)',
        description: '3-year technical diploma leading to practical jobs.',
        steps: ['Choose specialization (Civil, Mech, Electrical)', 'Complete 3-year diploma', 'Join field or continue to B-Tech']
      }
    ]
  },
  inter: {
    title: 'Inter (HSSC)',
    paths: [
      {
        title: 'BS Computer Science (4 Years)',
        description: 'Highly in-demand software engineering and development degrees.',
        steps: ['Pass NTS/NAT or University Test', 'Apply to HEC recognized universities', 'Secure internships in 3rd year']
      },
      {
        title: 'Chartered Accountancy (CA)',
        description: 'For business and finance minds. Highly paid but requires dedication.',
        steps: ['Register with ICAP', 'Pass Assessment tests', 'Articleship at an audit firm']
      }
    ]
  },
  bachelor: {
    title: 'Bachelor\'s Degree',
    paths: [
      {
        title: 'Civil Services (CSS/PMS)',
        description: 'Join the bureaucracy and administrative forces of Pakistan.',
        steps: ['Check age eligibility (up to 30)', 'Choose optional subjects wisely', 'Start prep 1 year in advance']
      },
      {
        title: 'Master\'s Abroad (Scholarships)',
        description: 'Pursue higher education on fully funded scholarships.',
        steps: ['Prepare for IELTS/TOEFL', 'Look for DAAD, Stipendium Hungaricum, Fulbright', 'Build strong Statement of Purpose']
      }
    ]
  },
  master: {
    title: 'Master\'s Degree',
    paths: [
      {
        title: 'PhD / Academia',
        description: 'For those who want to teach or do research.',
        steps: ['Publish research papers', 'Find a supervisor', 'Apply for HEC Indigenous or Foreign Scholarships']
      },
      {
        title: 'Corporate Leadership',
        description: 'Transition into management roles.',
        steps: ['Gain 3-5 years work experience', 'Network with industry leaders', 'Consider Executive MBA (LUMS/IBA)']
      }
    ]
  }
};

export default function CareerPathsPage({ params }: { params: { slug: string } }) {
  const data = careerData[params.slug];

  // If the user types a word that doesn't exist in our data, show 404 page
  if (!data) {
    notFound();
  }

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
          <h2 className="text-4xl font-bold mb-2">Careers After {data.title}</h2>
          <p className="text-xl text-blue-100">Explore your options and find the right path for your future.</p>
        </div>
      </section>

      {/* Career Paths Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.paths.map((path, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{path.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{path.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex-grow">
                <h4 className="text-sm font-bold text-gray-700 mb-2">Key Steps:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {path.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full bg-blue-50 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-100 transition">
                View Full Roadmap
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
