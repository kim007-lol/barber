'use client'

import { motion } from 'framer-motion'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { Anchor } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2074")' }}
      >
        {/* Motif Ombak / Texture Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/80 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex justify-center mb-6 text-accent opacity-80">
             <Anchor size={48} />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FAFAFA] mb-6 leading-tight tracking-wider uppercase drop-shadow-[0_0_15px_rgba(215,0,0,0.5)]">
            Find Your Style. <br/><span className="text-primary">Own The Sea.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
            Barbershop terpercaya di Surabaya sejak 2020 | Jl. Bratang Gede No. 24-26
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#booking" className={buttonVariants({ size: 'lg', className: "bg-primary text-primary-foreground hover:bg-red-800 text-lg px-8 h-14 uppercase tracking-widest font-serif font-bold shadow-[0_0_15px_rgba(215,0,0,0.3)] transition-all" })}>
              Booking Sekarang
            </Link>
            <Link href="#services" className={buttonVariants({ variant: 'outline', size: 'lg', className: "border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 h-14 uppercase tracking-widest font-serif font-bold bg-transparent transition-all" })}>
              Lihat Layanan
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
