import Navbar from '../components/Navbar'
import IdeaGenerator from '../components/IdeaGenerator'
import IdeaFilter from '../components/IdeaFilter'

export default function Ideas() {
  return (
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <div className='pt-10 flex bg-tspg-gray pb-5 h-full w-full'>
        <main className="bg-white px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl">
          
          <IdeaFilter />
          <IdeaGenerator />
        </main>
      </div>
    </div>
  )
}