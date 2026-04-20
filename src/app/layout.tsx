import type { Metadata } from 'next'
import { Poppins, Pirata_One } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans' 
})

const pirata = Pirata_One({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-serif' 
})

export const metadata: Metadata = {
  title: "Nice Circles Barbershop",
  description: "Barbershop terpercaya di Surabaya. Find Your Style. Own The Sea.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`dark ${poppins.variable} ${pirata.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  )
}
