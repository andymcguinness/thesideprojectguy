import Navbar from '../../components/Navbar'
import IdeaFilter from '../../components/IdeaFilter'

export default function Ideas() {
  return (
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <div className='pt-10 flex bg-tspg-gray pb-5 h-full w-full'>
        <main className="w-full items-center">
          <IdeaFilter />
        </main>
      </div>
    </div>
  )
}