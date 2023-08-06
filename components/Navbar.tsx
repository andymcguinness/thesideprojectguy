// Next.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-tspg-white p-6 h-auto z-10 shadow-md relative">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href="/" className="inline-block w-auto float-left lg:inline-block hover:underline decoration-tspg-yellow decoration-4 text-tspg-gray">
          <h1 className="font-semibold text-3xl tracking-tight lg:text-2xl text-tspg-gray">tspg</h1>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
        <div className="text-sm lg:flex-grow">
          <Link href="/about" className="inline-block w-auto float-left text-lg mt-4 lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4 text-tspg-gray">
            About
          </Link>
          <Link href="/ideas" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4 text-tspg-gray">
            Ideas
          </Link>
          <Link href="/idea-generator" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4 text-tspg-gray">
            Idea Generator
          </Link>
          <Link href="/my-projects" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4 text-tspg-gray">
            My Projects
          </Link>
          <Link href="/blog" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 mr-4 text-tspg-gray">
            Blog
          </Link>
          <Link href="/contact" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-1 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-4 text-tspg-gray">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}