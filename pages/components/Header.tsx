export const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <h1 className="font-semibold text-3xl tracking-tight">the side project guy</h1>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/about" className="inline-block w-auto float-left text-lg mt-4 lg:inline-block lg:mt-0 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-2 mr-4">
              About
            </a>
            <a href="/services" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-0 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-2 mr-4">
              Services
            </a>
            <a href="/blog" className="inline-block w-auto float-left mt-4 text-lg lg:inline-block lg:mt-0 md:text-md lg:text-md text-black hover:underline decoration-tspg-yellow decoration-2">
              Blog
            </a>
          </div>
        </div>
      </nav>
      <div className="overflow-hidden bg-tspg-gray min-h-screen pt-4">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12 flex flex-col">
              <h2 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">
                Hiya! I'm Andy!
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-700 md:text-lg">
                I'm making it my mission to help you build great, fulfilling side projects. If you're looking for project ideas or tips and tricks to make a successful side project, you've come to the right place. Signing up for my newsletter is a great place to start!
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-black hover:underline decoration-tspg-yellow decoration-4 mb-1"
              >
                Need one-on-one help?
              </a>
              <a href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-black hover:underline decoration-tspg-yellow decoration-4">
                Find me on YouTube!
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 lg:w-32 lg:-mr-16 sm:block"
                >
                  <defs>
                    <pattern
                      id="766323e1-e594-4ffd-a688-e7275079d540"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                    width="52"
                    height="24"
                  />
                </svg>
                <div className="relative bg-white shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        placeholder="John Doe"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300  shadow-sm appearance-none focus:border-tspg-yellow focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 shadow-sm appearance-none focus:border-tspg-yellow focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 shadow-sm bg-tspg-yellow hover:brightness-90 focus:shadow-outline focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};