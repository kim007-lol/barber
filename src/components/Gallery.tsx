'use client'

import { motion } from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image'

export type GalleryItem = {
  _id: string
  image: any
  altText?: string
  category?: string
}

export default function Gallery({ images }: { images: GalleryItem[] }) {
  // If no images fetched, use high-quality Unsplash fallbacks
  const displayImages = images?.length > 0 ? images.map(item => ({
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
    <section id="gallery" className="py-24 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Lookbook
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA]"
          >
            Karya Master Barber
          </motion.h3>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayImages.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              className="relative aspect-square overflow-hidden group border border-border/20 rounded-md"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block" />
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
