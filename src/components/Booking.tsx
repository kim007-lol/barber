'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function Booking() {
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated WhatsApp redirect
    alert("Redirecting to WhatsApp for confirmation...")
  }

  return (
    <section id="booking" className="py-24 bg-background border-t border-border mt-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative -mt-52 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card p-8 md:p-14 border border-border shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 translate-x-2 translate-y-2"></div>

          <div className="text-center mb-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2">Reservasi</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[#FAFAFA]">Buat Janji Temu</h3>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-muted-foreground uppercase text-xs tracking-wider">Nama Lengkap</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA]" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-muted-foreground uppercase text-xs tracking-wider">Nomor WhatsApp</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="0812-3456-7890" 
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA]" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-muted-foreground uppercase text-xs tracking-wider">Pilihan Layanan</Label>
                <select 
                  id="service" 
                  className="flex h-12 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-[#FAFAFA] ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled selected hidden>Pilih Layanan...</option>
                  <option value="grooming">Gentlemen Grooming</option>
                  <option value="royale">Gentlemen Royale Package</option>
                  <option value="perm">Korean Perm</option>
                  <option value="color">Fashion Hair Color</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="datetime" className="text-muted-foreground uppercase text-xs tracking-wider">Tanggal & Jam</Label>
                <Input 
                  id="datetime" 
                  type="datetime-local" 
                  className="bg-background border-border focus-visible:ring-primary h-12 text-[#FAFAFA] [color-scheme:dark]" 
                  required 
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 mt-4 bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-wider font-semibold"
            >
              Konfirmasi via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
