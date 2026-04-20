import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: "GENTLEMEN'S CUT | Premium Barbershop",
  description: "Pengalaman grooming eksklusif untuk pria modern. Presisi, gaya, dan kenyamanan.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`dark ${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  )
}
