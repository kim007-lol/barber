import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-widest text-[#FAFAFA]">
              GENTLEMEN&apos;S CUT
            </h3>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Standard grooming tertinggi untuk pria yang mengutamakan kualitas, presisi, dan kelas.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                IG
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                FB
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                TW
              </Link>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-widest text-[#FAFAFA]">KONTAK</h4>
            <div className="space-y-4 text-muted-foreground text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <p>Jl. Jenderal Sudirman No. 88, Senayan, Kebayoran Baru,<br />DKI Jakarta 12190</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <p>Senin - Minggu: 10:00 - 21:00 WIB</p>
              </div>
            </div>
          </div>

          {/* Sitelinks */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-widest text-[#FAFAFA]">TAUTAN</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><Link href="#home" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Layanan & Harga</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Galeri Lookbook</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gentlemen&apos;s Cut Barbershop. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#FAFAFA]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FAFAFA]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
