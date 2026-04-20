'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Scissors, Skull } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonVariants } from './ui/button'

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Tim', href: '#team' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-black/50 py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Skull size={20} className="absolute z-10" />
            <Scissors size={28} className="opacity-30 absolute rotate-45" />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#FAFAFA] group-hover:text-accent transition-colors">
            NICE CIRCLES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm font-sans tracking-wide text-muted-foreground hover:text-accent transition-colors uppercase">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#booking" className={buttonVariants({ variant: 'default', className: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold tracking-widest font-serif uppercase transition-colors" })}>
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                className="text-lg font-sans uppercase text-[#FAFAFA] hover:text-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)} className={buttonVariants({ variant: 'default', className: "w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold tracking-widest font-serif uppercase mt-2 transition-colors" })}>
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
