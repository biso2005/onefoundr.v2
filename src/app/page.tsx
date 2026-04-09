import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Journey from '@/components/Journey'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Journey />
      <Footer />
    </main>
  )
}
