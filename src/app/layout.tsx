import './globals.css'

export const metadata = {
  title: 'CareerPath PK',
  description: 'Career guidance for Pakistani youth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
