import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import WhatsAppFloatingBtn from '@/components/WhatsAppFloatingBtn'
import { client } from '@/sanity/lib/client'

// ISR: Revalidate at most every 60 seconds
export const revalidate = 60

export default async function Home() {
  let services = []
  let galleryImages = []

  try {
    services = await client.fetch(`*[_type == "service"] | order(price asc)`)
    galleryImages = await client.fetch(`*[_type == "gallery"]`)
  } catch (error) {
    console.error("Error fetching from Sanity Studio:", error)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services services={services} />
        <Gallery images={galleryImages} />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloatingBtn />
    </>
  )
}
