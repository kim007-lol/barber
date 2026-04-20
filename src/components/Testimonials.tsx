'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { REVIEWS } from '../lib/data'
import { ReviewItem } from '../types'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative border-t border-border/50">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Pesan dalam Botol
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase"
          >
            Ulasan <span className="text-accent">Google</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev: ReviewItem, idx: number) => (
            <motion.div 
              key={rev.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#111] border border-border/50 p-8 rounded-xl shadow-lg relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < rev.rating ? "text-accent fill-accent" : "text-muted"} 
                  />
                ))}
              </div>
              <p className="text-[#FAFAFA] font-sans text-lg mb-6 leading-relaxed italic">
                &quot;{rev.review}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                   {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FAFAFA]">{rev.name}</h4>
                  <span className="text-xs text-muted-foreground">Google Maps Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
