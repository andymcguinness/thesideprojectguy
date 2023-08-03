import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
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
            I <span className="italic">love</span> building side projects -- it's a passion that's turned into a serious hobby of mine. I've built many random, weird things, from a silly product generator to a blog about World of Warcraft and statistics.
            <br />
            <br />
            I want everyone to have great, fulfilling side projects like mine -- so I've set out to help folks do just that! This website contains tips, tricks, and ideas for your next side project! If you're really stuck, check out my <Link href="/ideas" className="font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Ideas</Link> page -- there I list out the ideas I've had recently that I may or may not get time to work on. Feel free to take one or many of those ideas!
            <br />
            <br />
            You can also check out my <Link href="/idea-generator" className="font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Idea Generator</Link> page for random ideas!
            <br />
            <br />
            Thanks for stopping by, and take care!
          </p>
        </div>
      </main>
    </div>
  )
}