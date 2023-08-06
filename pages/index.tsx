import { Inter } from 'next/font/google'
import { Hero } from '../components/Hero'
import Navbar from '../components/Navbar'
import { IdeasSection } from '@/components/IdeasSection'
import { YouTubeSection } from '@/components/YouTubeSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen bg-tspg-white">
      <Navbar />
      <Hero />
      <IdeasSection />
      <YouTubeSection />
    </div>
  )
}
