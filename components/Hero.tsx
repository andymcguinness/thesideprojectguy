export const Hero = () => {
  return (
    <section className="p-6 bg-[#333533] dark:text-gray-100">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900 bg-[#ECEDEB]">
          <h1 className="text-5xl font-extrabold dark:text-gray-50 text-left text-[#333533]">the side project guy</h1>
          <span className="block mb-2 text-xl text-left text-[#333533]">ALWAYS BUILDING</span>
          <p className="my-8 text-left text-[#333533]">
            I'm on a mission to help you have meaningful, fulfilling side projects. Check out my Ideas page for inspiration, my Blog for tips and tricks, or join my mailing list for weekly insights!
          </p>
          <form action="" className="self-stretch space-y-3">
            <div>
              <label htmlFor="name" className="text-sm sr-only">Your name</label>
              <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-[#F5CB5C]" />
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
              <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-[#F5CB5C]" />
            </div>
            <button type="button" className="w-full py-2 font-semibold rounded bg-[#F5CB5C] hover:opacity-80">Join the mailing list</button>
          </form>
        </div>
        <img src="/hero-image.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
      </div>
    </section>
  );
};