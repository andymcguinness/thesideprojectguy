// Next.js
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="p-6 pt-10 bg-tspg-gray pb-20">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 xl:col-start-2 bg-tspg-white">
          <h1 className="text-4xl font-extrabold text-left text-black">the side project guy</h1>
          <span className="block mb-2 text-md text-left text-black">ALWAYS BUILDING</span>
          <p className="my-8 text-left text-black text-lg">
            Hiya!
            <br />
            <br />
            My name is <Link className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4" href="/about">Andy</Link>, and I&apos;m the side project guy!
            <br />
            <br />
            I&apos;m on a mission to help others have meaningful, fulfilling side projects -- so I have filled this site with resources, tips, tricks, and examples to help you along that journey!
          </p>
        </div>
        <div className="relative  w-full rounded-md xl:col-span-2">
          <Image src="/hero_image.jpg" fill={true} className="object-cover rounded-md
          " alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="/>
        </div>
      </div>
    </section>
  );
};