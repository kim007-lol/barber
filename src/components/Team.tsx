'use client'

import { motion } from 'framer-motion'
import { Skull } from 'lucide-react'

import { CREW_MEMBERS } from '../lib/data'
import { CrewMember } from '../types'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Skull size={16} /> Para Master <Skull size={16} />
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase"
          >
            Meet Our <span className="text-primary">Crew</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {CREW_MEMBERS.map((member: CrewMember, idx: number) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#1F1F1F] group-hover:border-accent transition-colors duration-300 relative mb-6 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>
              
              <h4 className="text-2xl font-serif text-[#FAFAFA] mb-1 group-hover:text-primary transition-colors uppercase tracking-widest">{member.name}</h4>
              <div className="bg-primary/20 text-primary border border-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                {member.role}
              </div>
              <p className="text-muted-foreground font-sans text-center">Spesialisasi: {member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
