'use client'

import { motion } from 'framer-motion'
import { Scissors } from 'lucide-react'

import { HARDCODED_SERVICES } from '../lib/data'
import { ServiceItem } from '../types'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Layanan Utama Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase"
          >
            Armada <span className="text-primary">Grooming</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HARDCODED_SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div 
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#0A0A0A] border-2 border-primary rounded-xl p-8 relative group hover:shadow-[0_0_20px_rgba(255,205,0,0.4)] hover:border-accent transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-background rounded-full border-2 border-primary flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                 <Scissors size={20} className="text-primary group-hover:text-accent" />
              </div>
              
              <h4 className="text-2xl font-serif text-[#FAFAFA] mb-2 uppercase tracking-wide group-hover:text-accent transition-colors">
                {service.title}
              </h4>
              
              {service.price && (
                <div className="text-2xl font-bold text-primary mb-4 font-sans tracking-tight">
                  {service.price}
                </div>
              )}
              {service.partner && (
                <div className="text-sm font-bold text-accent mb-4 font-sans tracking-wide uppercase">
                  Partner: {service.partner}
                </div>
              )}
              
              <p className="text-muted-foreground font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
