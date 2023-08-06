// React
import { Fragment, useState } from "react"

// Next.js
import Link from "next/link"

// Headless UI
import { Dialog, Transition } from "@headlessui/react"

// Hero Icons
import { XMarkIcon } from "@heroicons/react/24/outline"
import { FunnelIcon } from "@heroicons/react/20/solid"

// Types
import { Project, ProjectTag, ProjectTags, Projects } from "@/pages/my-projects/index"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

export default function ProjectGrid({ projects, tags } : { projects : Projects, tags: ProjectTags }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currFilter, setCurrFilter] = useState<string>("");

  function handleClick(e: React.MouseEvent<Element, MouseEvent>): void {
    e.preventDefault();
    const input = e.target as HTMLElement;
    setCurrFilter(input.id);
  }

  function handleClear(e: React.MouseEvent<Element, MouseEvent>): void {
    e.preventDefault();
    setCurrFilter("");
  }


  return (
    <div className="xl:col-span-3 xl:col-start-2">
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-tspg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-black">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-tspg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-tspg-gray">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="px-3 py-3 font-medium text-black">
                    {tags?.allProjectTags.map((tag : ProjectTag) => (
                      <li key={tag.name}>
                        <a href={tag.slug} id={tag.slug} onClick={handleClick}>
                          {tag.name}
                        </a>
                      </li>
                    ))}
                    <li key={"clear"}><a href="#" id="clear" onClick={handleClear}>Clear</a></li>
                  </ul>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root >
      <div className="">
        <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Projects</h1>

        <p className="w-full mb-4 text-base text-black md:text-lg inline-flex flex-1">These are some mostly-baked ideas that I&apos;ve had rattling around in my head, and may or may not get to. You are free to take them and claim them as your own! If I end up making a version of them, I&apos;ll remove them from this site! But no worries if you made yours first -- mine will always be open source!</p>
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h2 id="products-heading" className="sr-only">
          Ideas
        </h2>

        <div className="">
          {/* Filters */}
          <form className="hidden lg:block">
            <div role="list" className="pb-6 font-medium text-black items-center flex gap-4 items-middle mt-2">
              <FunnelIcon className="h-5 w-5 text-black" />
              {tags?.allProjectTags.map((tag : ProjectTag) => (
                <button key={tag.name} id={tag.slug} onClick={handleClick} className={classNames(
                  (currFilter == tag.slug) ? "bg-tspg-yellow" : "bg-tspg-white hover:bg-tspg-yellow",
                  "inline-flex w-auto text-lg text-tspg-gray"
                )}>
                  {tag.name}
                </button>
              ))}
              <button id="clear" onClick={handleClear} className="inline-flex w-auto text-lg py-0 inline-flex w-auto text-lg text-tspg-gray decoration-4 decoration-tspg-yellow hover:underline">Clear</button>
            </div>


          </form>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            {projects?.allProjects.map((project : Project) => (
              <div className={classNames(
                (project.tags.map((tag : ProjectTag) => (tag.slug)).includes(currFilter) || currFilter == "") ? "visible" : "hidden",
                "px-6 py-6 text-sm shadow-2xl rounded-md bg-tspg-white"
              )} key={project.title}>
                <Link href={project.link} className="text-2xl underline decoration-tspg-yellow decoration-4 mb-2 hover:bg-tspg-yellow" target="_blank">{project.title}</Link>

                <p className="mb-4 mt-4 text-lg">{project.description}</p>
                <div className="mt-auto">
                  {project.tags.map((tag) =>  (
                    <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-md font-medium text-black mr-2 mb-2" key={tag.slug}>#{tag.slug}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}