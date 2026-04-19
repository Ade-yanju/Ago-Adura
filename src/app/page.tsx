import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Beliefs from '@/components/sections/Beliefs'
import PowerStructure from '@/components/sections/PowerStructure'
import Ministries from '@/components/sections/Ministries'
import ChurchCalendar from '@/components/sections/Calendar'
import Locator from '@/components/sections/Locator'
import Testimonials from '@/components/sections/Testimonials'
import PrayerRequest from '@/components/sections/PrayerRequest'
import Media from '@/components/sections/Media'
import Give from '@/components/sections/Give'
import Contact from '@/components/sections/Contact'
import { AnnouncementBar, WhatsAppFloat } from '@/components/ui/Floaters'

export default function Home() {
  return (
    <main className="relative">
      <AnnouncementBar />
      <div className="pt-8"> {/* push content below announcement bar */}
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Beliefs />
        <PowerStructure />
        <Ministries />
        <ChurchCalendar />
        <Locator />
        <Media />
        <Testimonials />
        <PrayerRequest />
        <Give />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  )
}
