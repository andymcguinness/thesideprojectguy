import Image from "next/image";
import Link from "next/link";

export const YouTubeSection = () => {
  return (
    <section className="px-6 pt-20 bg-tspg-white pb-20">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div className="w-full rounded-md xl:col-span-2 xl:col-start-2 bg-tspg-white">
          <h1 className="text-5xl font-extrabold text-left text-black">Find me on YouTube!</h1>

          <p className="my-8 text-left text-black text-lg">
            <Link href="https://www.youtube.com/channel/UCANTfUruwMKS3in-5n5CvMA" className="text-lg font-semibold tracking-wider text-black hover:underline decoration-tspg-yellow decoration-4">Check out my channel!</Link> I post a new video every week about my latest challenge: working on one new side project a week for 52 weeks. Subscribe on YouTube to follow along with the fun, and let me know what you'd like to see from the channel!
          </p>
        </div>
        <Image src="/youtube.png" height={514} width={912} className="object-cover w-full rounded-md xl:col-span-2" alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="/>
      </div>
    </section>
  );
};