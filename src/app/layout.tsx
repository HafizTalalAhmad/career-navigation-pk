import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'CareerPath PK - Find Your Right Path',
  description: 'A trusted education decision platform for Pakistani youth. Navigate careers, funding, and universities based on your marks, budget, and interests.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50">
        
        {/* Sticky Modern Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
            <Link href="/" className="text-xl font-bold text-slate-900">
              CareerPath <span className="text-blue-600">PK</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/navigator" className="nav-link">Navigator</Link>
              <Link href="/degree-planner" className="nav-link">Degree Planner</Link>
              <Link href="/funding" className="nav-link">Funding</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/about" className="nav-link">About</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Modern Footer */}
        <footer className="bg-slate-900 text-slate-400">
          <div className="container mx-auto px-6 py-12 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">CareerPath PK</h3>
                <p className="text-sm max-w-md">
                  "Har student ke liye sahi raasta — marks, budget aur interest ke mutabiq." 
                  Empowering Pakistani youth to make informed career decisions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/navigator" className="hover:text-white transition">Matric Navigator</Link></li>
                  <li><Link href="/parent-report" className="hover:text-white transition">Parent Report</Link></li>
                  <li><Link href="/degree-planner" className="hover:text-white transition">Degree Planner</Link></li>
                  <li><Link href="/funding" className="hover:text-white transition">Funding Finder</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>📍 Pakistan 🇵🇰</li>
                  <li>📧 contact@careerpath.pk</li>
                </ul>
              </div>

            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} CareerPath PK. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
