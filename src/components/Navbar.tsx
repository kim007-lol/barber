'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, buttonVariants } from './ui/button'

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Galeri', href: '#gallery' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="#home" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#FAFAFA]">
          GENTLEMEN&apos;S CUT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#booking" className={buttonVariants({ variant: 'default', className: "bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide" })}>
            Reservasi
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#FAFAFA]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4 shadow-lg md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-[#FAFAFA] hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)} className={buttonVariants({ variant: 'default', className: "w-full bg-primary text-primary-foreground mt-2" })}>
              Reservasi
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
