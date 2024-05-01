// Next.js
import Image from "next/image";
import Link from "next/link";

export const HireMeSection = () => {
  return (
    <section className="px-6 pt-20 bg-tspg-white pb-20">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div className="xl:col-span-2 xl:col-start-2">
          <h1 className="text-5xl font-extrabold text-left text-black">Hire me to help you!</h1>

          <p className="my-8 text-left text-black text-lg">
            I am on Fiverr! You can <Link href="https://www.fiverr.com/s/x1WApx" className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">hire me there</Link> to build a website for your side project or side hustle.
            <br />
            <br />
            I am also available on a freelance basis to consult on your side project. This can include idea generation, technology selection, and troubleshooting!
            <br />
            <br />
            <Link href="/contact" className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Reach out to me directly</Link> if you want to discuss your project further!
          </p>
        </div>

        <div className="w-full rounded-md xl:col-span-2 bg-tspg-white">
          <Image src="/hire_me.jpg" height={608} width={912} className="object-cover w-full rounded-md xl:col-span-3" alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" />
        </div>
      </div>
    </section>
  );
};