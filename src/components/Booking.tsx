'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useState } from 'react'
import { MapPin, Phone } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    datetime: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Halo Nice Circles Barbershop! Saya ingin booking,%0A%0ANama: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0ALayanan: ${formData.service}%0ATanggal & Waktu: ${formData.datetime.replace('T', ' ')}%0A%0AApakah masih ada slot?`
    window.open(`https://wa.me/6281249047072?text=${msg}`, '_blank')
  }

  return (
    <section id="booking" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] p-8 md:p-10 border-2 border-primary shadow-[0_0_30px_rgba(215,0,0,0.15)] relative overflow-hidden rounded-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2">Reservasi</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase">Amankan Kursimu</h3>
              <p className="mt-4 text-muted-foreground font-sans text-sm">Walk-in welcome! Kami buka setiap hari 10:00 – 22:00</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-accent uppercase text-xs tracking-wider font-bold">Nama Nakama</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Monkey D. Luffy" 
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-accent uppercase text-xs tracking-wider font-bold">Nomor Den Den Mushi (WhatsApp)</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="0812-xxxx-xxxx" 
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA]" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-accent uppercase text-xs tracking-wider font-bold">Pilihan Layanan</Label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-12 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled hidden>Pilih Layanan...</option>
                  <option value="Men's Haircut">Men's Haircut</option>
                  <option value="Kids Haircut">Kids Haircut</option>
                  <option value="Shoes Care">Shoes Care & Treatment</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="datetime" className="text-accent uppercase text-xs tracking-wider font-bold">Tanggal & Jam</Label>
                <Input 
                  id="datetime" 
                  type="datetime-local" 
                  value={formData.datetime}
                  onChange={handleChange}
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA] [color-scheme:dark]" 
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 mt-4 bg-primary text-primary-foreground hover:bg-red-800 text-lg uppercase tracking-widest font-serif font-bold transition-all shadow-[0_0_15px_rgba(215,0,0,0.3)]"
              >
                Set Sail! (Kirim Booking)
              </Button>
            </form>
          </motion.div>

          {/* Location & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="mb-8" id="contact">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2">Peta Harta Karun</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-[#FAFAFA] tracking-wider uppercase mb-6">Markas Kami</h3>
              
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-[#FAFAFA] mb-1">Lokasi Strategis</h4>
                  <p className="text-muted-foreground font-sans">Jl. Bratang Gede No. 24-26, Ngagelrejo, Kec. Wonokromo, Surabaya, Jawa Timur 60245</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-8">
                <Phone className="text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="text-xl font-serif text-[#FAFAFA] mb-1">Hubungi Kami</h4>
                  <p className="text-muted-foreground font-sans">📞 0812-4904-7072</p>
                </div>
              </div>
            </div>

            <div className="flex-grow w-full rounded-xl overflow-hidden shadow-2xl border-2 border-border relative min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5140134444!2d112.750134!3d-7.295966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf07fb8d975%3A0xcda6be9f5dfeb6e6!2sNice%20Circle%20Barbershop!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
