// Next.js
import Image from "next/image";
import Link from "next/link";

export const IdeasSection = () => {
  return (
    <section className="px-6 pt-20 bg-tspg-white pb-20">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div className="w-full rounded-md xl:col-span-2 xl:col-start-2 bg-tspg-white">
          <Image src="/idea_section.jpg" height={608} width={912} className="object-cover w-full rounded-md xl:col-span-3" alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" />
        </div>
        <div className="xl:col-span-2">
          <h1 className="text-5xl font-extrabold text-left text-black">Need side project ideas?</h1>

          <p className="my-8 text-left text-black text-lg">
            I have semi-fleshed-out ideas on my <Link href="/ideas" className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Ideas page</Link>, or an AI-powered side project idea generator on my <Link href="/ideas-generator" className="text-md font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Ideas Generator page</Link>.
            <br />
            <br />
            I also have a <Link href="/blog" className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Blog</Link> where I give tips and tricks on finding great, fulfilling side project ideas.
          </p>
        </div>
      </div>
    </section>
  );
};