import Navbar from "@/pages/components/Navbar";

export default function IdeasGenerator() {
  return (
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-gray pb-5 h-full w-full">
        <div className="bg-white px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl">
          <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">About</h1>

          <p className="text-base text-gray-700 md:text-lg">
            Hiya! I'm Andy, and I'm <span className="underline decoration-tspg-yellow decoration-4">the side project guy</span>!
            <br />
            <br />
            Thanks for stopping by, and take care!
          </p>
        </div>
      </main>
    </div>
  )
}