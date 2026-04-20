'use client'

import { motion } from 'framer-motion'
import { Anchor } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <Anchor size={18} className="text-primary" />
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Mulai Petualangan</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-serif text-[#FAFAFA] mb-6 leading-tight uppercase tracking-wider drop-shadow-[0_0_8px_rgba(255,205,0,0.2)]">
              Lebih Dari Sekadar <br/> <span className="text-accent">Potong Rambut</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-sans text-lg">
              <p>
                <strong>Nice Circles Barbershop</strong> adalah tempat di mana setiap potongan adalah petualangan baru. Kami tidak sekadar merapikan rambut, kami mengukir identitas.
              </p>
              <p>
                Buka setiap hari pukul <strong>10:00–22:00</strong>, kami hadir untuk para pejuang penampilan di Surabaya. Bersiaplah mengarungi hari dengan gaya terbaikmu.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              <div>
                <h4 className="text-3xl font-serif text-accent mb-1 drop-shadow-[0_0_5px_rgba(255,205,0,0.5)]">4.656+</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Ulasan Google</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-accent mb-1 drop-shadow-[0_0_5px_rgba(255,205,0,0.5)]">7 Hari</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Buka Non-stop</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-accent mb-1 drop-shadow-[0_0_5px_rgba(255,205,0,0.5)]">2</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Layanan Utama</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-accent mb-1 drop-shadow-[0_0_5px_rgba(255,205,0,0.5)]">1</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Partner (Spa.Tukita)</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none order-1 md:order-2 group"
          >
            <div className="absolute inset-0 border-2 border-primary/50 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1543110903-8d6556e4fc34?auto=format&fit=crop&q=80&w=2074" 
              alt="Nice Circles Barbershop Interior" 
              className="relative z-10 w-full h-full object-cover transition-all duration-500 shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
