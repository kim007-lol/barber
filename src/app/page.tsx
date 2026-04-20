import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Gallery from '@/components/Gallery'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import WhatsAppFloatingBtn from '@/components/WhatsAppFloatingBtn'
import { client } from '@/sanity/lib/client'

// ISR: Revalidate at most every 60 seconds
export const revalidate = 60

export default async function Home() {
  let images = []

  try {
    images = await client.fetch(`*[_type == "gallery"]`)
  } catch (error) {
    console.error("Error fetching from Sanity Studio:", error)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery images={images} />
        <Team />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloatingBtn />
    </>
  )
}
