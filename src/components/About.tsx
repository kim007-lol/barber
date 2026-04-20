'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none"
          >
            <div className="absolute inset-0 border-2 border-primary/30 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
              alt="Barber at work" 
              className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Tentang Kami</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#FAFAFA] mb-6 leading-tight">
              Lebih Dari Sekadar <br/> Potong Rambut
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Didirikan dengan satu tujuan: mengembalikan era keemasan tata rambut pria. Di GENTLEMEN&apos;S CUT, kami percaya bahwa penampilan adalah cerminan dari karakter. 
              </p>
              <p>
                Setiap barber master kami dilatih untuk memberikan presisi tingkat tinggi. Dari classic pompadour hingga modern fade, kami memadukan teknik tradisional dengan tren terkini menggunakan produk grooming premium bernilai tinggi.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">10+</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">5K+</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Klien Puas</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">3</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Master Barber</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
