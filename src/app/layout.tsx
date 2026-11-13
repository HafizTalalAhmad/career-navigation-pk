import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'CareerPath PK - Career Guidance for Pakistani Youth',
  description: 'Discover the perfect career path, scholarships, and opportunities after Matric, Inter, or Bachelor\'s in Pakistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Global Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Brand Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">CareerPath PK</h3>
                <p className="text-sm text-gray-400">
                  Empowering Pakistani youth to make informed career and educational decisions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                  <li><Link href="/opportunities" className="hover:text-blue-400 transition">Opportunities</Link></li>
                  <li><Link href="/after/matric" className="hover:text-blue-400 transition">After Matric</Link></li>
                  <li><Link href="/after/inter" className="hover:text-blue-400 transition">After Inter</Link></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
                <ul className="space-y-2 text-sm">
                  <li>📧 contact@careerpath.pk</li>
                  <li>📱 WhatsApp Alerts: Coming Soon!</li>
                  <li>📍 Pakistan</li>
                </ul>
              </div>

            </div>
            
            {/* Copyright Bar */}
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} CareerPath PK. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
