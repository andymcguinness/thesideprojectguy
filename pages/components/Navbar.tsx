import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 h-auto">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <h1 className="font-semibold text-3xl tracking-tight lg:text-2xl">the side project guy</h1>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="inline-block w-auto float-left text-lg mt-4 lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4">
            Home
          </Link>
          <Link href="/about" className="inline-block w-auto float-left text-lg mt-4 lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4">
            About
          </Link>
          <div className="group relative">
            <h1 className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4">
              Ideas
            </h1>
            <div
              className="invisible absolute z-50 flex w-auto flex-col bg-white border border-tspg-gray py-1 px-4 text-gray-800 shadow-xl group-hover:visible left-[6.5rem] top-[2rem]"
            >
              <Link href="/ideas" className="hover:underline decoration-tspg-yellow decoration-4">
                Ideas
              </Link>
              <Link href="/ideas/ideas-generator" className="hover:underline decoration-tspg-yellow decoration-4">
                Idea Generator
              </Link>
            </div>
          </div>
          <Link href="/blog" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4">
            Blog
          </Link>
          <Link href="/contact" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}