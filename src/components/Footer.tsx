import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t-4 border-primary pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-widest text-[#FAFAFA] flex items-center gap-2">
              <Navigation size={24} className="text-primary -rotate-45" /> NICE CIRCLES
            </h3>
            <p className="text-muted-foreground max-w-xs leading-relaxed font-sans">
              Barbershop terpercaya di Surabaya. Bebaskan gayamu, taklukkan duniamu.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="https://instagram.com/nicecircles_barbershop" target="_blank" className="h-10 w-10 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors font-bold">
                IG
              </Link>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-widest text-accent uppercase">Log Pose (Kontak)</h4>
            <div className="space-y-4 text-muted-foreground text-sm font-sans">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <p>Jl. Bratang Gede No. 24-26, Ngagelrejo,<br />Surabaya, Jawa Timur 60245</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <p>0812-4904-7072</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <p>Buka Tiap Hari: 10:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-widest text-accent uppercase">Captain&apos;s Words</h4>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-lg py-1">
              &quot;Hidup bukan tentang apakah kamu bisa, tapi apakah kamu berani!&quot;
              <footer className="mt-2 font-bold text-[#FAFAFA] text-sm">— Monkey D. Luffy</footer>
            </blockquote>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-sans">
          <p>&copy; {new Date().getFullYear()} Nice Circles Barbershop. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
