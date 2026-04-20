'use client'

import { motion } from 'framer-motion'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074")' }}
      >
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-b from-background/40 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Premium Grooming
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#FAFAFA] mb-6 leading-tight">
            A Cut Above The Rest
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Pengalaman grooming eksklusif untuk pria modern. Presisi, gaya, dan kenyamanan dalam setiap potongan.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="#booking" className={buttonVariants({ size: 'lg', className: "bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-none" })}>
              Reservasi Sekarang
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
