import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function WhatsAppFloatingBtn() {
  return (
    <Link 
      href="https://wa.me/6281234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl hover:bg-[#1ebd5a] transition-all duration-300 flex items-center justify-center"
      aria-label="Chat via WhatsApp"
    >
      <Phone size={28} className="fill-current" />
    </Link>
  )
}
