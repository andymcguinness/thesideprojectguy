
// Components
import { Hero } from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { IdeasSection } from "@/components/IdeasSection"
import { HireMeSection } from "@/components/HireMeSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-tspg-white">
      <Navbar />
      <Hero />
      <IdeasSection />
      <HireMeSection />
    </div>
  )
}
