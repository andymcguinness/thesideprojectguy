// Next.js
import Image from "next/image";
import Link from "next/link";

// Nav Component
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-tspg-white min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-white pb-5 h-full grid xl:grid-cols-5">
          <div className="col-span-2 col-start-2">
            <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">About</h1>

            <p className="text-base text-black md:text-lg">
              Hiya! I&apos;m Andy, and I&apos;m <span className="underline decoration-tspg-yellow decoration-4">the side project guy</span>!
              <br />
              <br />
              I <span className="italic">love</span> building side projects -- it&apos;s a passion that&apos;s turned into a serious hobby of mine. I&apos;ve built many random, weird things, from a silly product generator to a blog about World of Warcraft and statistics.
              <br />
              <br />
              I want everyone to have great, fulfilling side projects like mine -- so I&apos;ve set out to help folks do just that! This website contains tips, tricks, and ideas for your next side project! If you&apos;re really stuck, check out my <Link href="/ideas" className="font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Ideas</Link> page -- there I list out the ideas I&apos;ve had recently that I may or may not get time to work on. Feel free to take one or many of those ideas!
              <br />
              <br />
              You can also check out my <Link href="idea=generator" className="font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Idea Generator</Link> for random AI-generated ideas!
              <br />
              <br />
              Thanks for stopping by, and take care!
            </p>
          </div>
          <Image src="/andy_pic.jpeg" height={534} width={400} className="col-span-1 rounded-md" alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="/>
      </main>
    </div>
  )
}