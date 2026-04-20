'use client'

import { motion } from 'framer-motion'
import { Anchor, Swords, Map as MapIcon, Star } from 'lucide-react'

import { FEATURES } from '../lib/data'
import { FeatureItem } from '../types'

const iconMap: Record<string, React.ReactNode> = {
  Anchor: <Anchor size={32} className="text-primary" />,
  Swords: <Swords size={32} className="text-primary" />,
  Map: <MapIcon size={32} className="text-primary" />,
  Star: <Star size={32} className="text-primary" />,
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Kenapa Memilih Kami?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase"
          >
            Keunggulan <span className="text-accent">Kru Kami</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {FEATURES.map((feat: any, idx: number) => (
            <motion.div 
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-6 p-6 rounded-xl hover:bg-background/50 transition-colors border border-transparent hover:border-border"
            >
              <div className="shrink-0 p-4 rounded-full bg-background border border-primary/20 shadow-[0_0_10px_rgba(215,0,0,0.1)]">
                {iconMap[feat.iconName] || <Anchor size={32} className="text-primary" />}
              </div>
              <div>
                <h4 className="text-2xl font-serif text-[#FAFAFA] mb-2 uppercase">{feat.title}</h4>
                <p className="text-muted-foreground font-sans leading-relaxed text-lg">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
