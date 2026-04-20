'use client'

import { motion } from 'framer-motion'

export type Service = {
  _id: string
  title: string
  description?: string
  price: string
  category: string
}

export default function Services({ services }: { services: Service[] }) {
  // If no services fetched (setup dummy data fallback for initial demo)
  const displayServices = services?.length > 0 ? services : [
    { _id: '1', title: 'Gentlemen Grooming', description: 'Classic haircut, wash, and style.', price: 'Rp 80.000', category: 'Haircut' },
    { _id: '2', title: 'Gentlemen Royale Package', description: 'Hair spa, gold mask, blackhead removal.', price: 'Rp 210.000', category: 'Package' },
    { _id: '3', title: 'Korean Perm', description: 'Modern textural perm with premium quality.', price: 'Rp 350.000', category: 'Treatment' },
    { _id: '4', title: 'Fashion Hair Color', description: 'Full hair coloring using high-end vegan products.', price: 'Rp 500.000', category: 'Coloring' },
  ];

  return (
    <section id="services" className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3"
          >
            Layanan Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FAFAFA]"
          >
            Menu & Harga
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {displayServices.map((service, index) => (
            <motion.div 
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-serif text-[#FAFAFA] group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <div className="flex-grow border-b border-dashed border-border/50 mx-4" />
                <span className="text-lg font-medium text-primary whitespace-nowrap">
                  {service.price}
                </span>
              </div>
              {service.description && (
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
