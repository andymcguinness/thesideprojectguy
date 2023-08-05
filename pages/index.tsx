import { Inter } from 'next/font/google'
import { Hero } from '../components/Hero'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen bg-[#333533]">
      <Navbar />
      <Hero />
    </div>
  )
}
