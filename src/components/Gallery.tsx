'use client'

import { motion } from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image'
import { Swords, Camera } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

import { GalleryItem } from '../types'

export default function Gallery({ images }: { images?: GalleryItem[] }) {
  // If no images fetched, use high-quality Unsplash fallbacks
  const displayImages = images && images.length > 0 ? images.map(item => ({
    _id: item._id,
    url: urlForImage(item.image)?.url() || '',
    alt: item.altText || 'Gallery image'
  })) : [
    { _id: '1', url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800', alt: 'Haircut 1' },
    { _id: '2', url: 'https://images.unsplash.com/photo-1593702287258-002d295af3c8?auto=format&fit=crop&q=80&w=800', alt: 'Haircut 2' },
    { _id: '3', url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800', alt: 'Barbershop interior' },
    { _id: '4', url: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800', alt: 'Haircut 3' },
    { _id: '5', url: 'https://images.unsplash.com/photo-1567894340315-735d7c361bf0?auto=format&fit=crop&q=80&w=800', alt: 'Haircut 4' },
    { _id: '6', url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800', alt: 'Haircut 4' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] border-t border-border/50 relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Bounty Hunters
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA] uppercase tracking-widest"
          >
            Gallery of <span className="text-accent">Legends</span>
          </motion.h3>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayImages.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden group border-2 border-transparent hover:border-primary transition-colors cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                 <Swords size={48} className="text-[#FAFAFA] scale-50 group-hover:scale-100 transition-transform duration-500 ease-out" />
              </div>
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="https://instagram.com/nicecircles_barbershop" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline', size: 'lg', className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 uppercase tracking-widest font-serif font-bold bg-transparent transition-all gap-3" })}>
            <Camera size={24} />
            Lihat Lebih di Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
