import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-gray-400">
        
      </main>
    </>
  )
}
