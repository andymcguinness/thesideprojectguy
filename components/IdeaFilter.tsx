import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const subCategories = [
  { name: 'Development', href: '?development', id: 'development' },
  { name: 'APIs', href: '?api', id: 'api' },
  { name: 'Command Line', href: '?command-line', id: 'command-line' },
  { name: 'YouTube', href: '?youtube', id: 'youtube' },
  { name: 'Podcast', href: '?podcast', id: 'podcast' },
  { name: 'Business', href: '?business', id: 'business' },
  { name: 'Data Analysis', href: '?data-analysis', id: 'data-analysis' },
]

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function IdeaFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currFilter, setCurrFilter] = useState<string>('');
  
  function handleClick(e : React.MouseEvent<Element, MouseEvent>) : void {
    e.preventDefault();
    const input = e.target as HTMLElement;
    setCurrFilter(input.id);
  }

  function handleClear(e : React.MouseEvent<Element, MouseEvent>) : void {
    e.preventDefault();  
    setCurrFilter('');
  }


  return (
    <>
    <Transition.Root show = { mobileFiltersOpen } as={ Fragment }>
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
                <h2 className="text-lg font-medium text-tspg-gray">Filters</h2>
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
                <ul role="list" className="px-3 py-3 font-medium text-tspg-gray">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} id={category.id} onClick={handleClick}>
                        {category.name}
                      </a>
                    </li>
                  ))}
                  <li key={'clear'}><a href="#" id="clear" onClick={handleClear}>Clear</a></li>
                </ul>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root >
      <div className="bg-tspg-white rounded-md px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl">
        <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-tspg-gray sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Ideas</h1>

        <p className="w-full mb-4 text-base text-tspg-gray md:text-lg inline-flex flex-1">These are some mostly-baked ideas that I've had rattling around in my head, and may or may not get to. You are free to take them and claim them as your own! If I end up making a version of them, I'll remove them from this site! But no worries if you made yours first -- mine will always be open source!</p>
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
            <h3 className="text-2xl text-tspg-white mt-2">Filters</h3>
            <div role="list" className="pb-6 text-sm font-medium text-tspg-gray items-center flex gap-4 items-middle mt-2">
              {subCategories.map((category) => (
                <Link href={category.href} key={category.name} id={category.id} onClick={handleClick} className={classNames(
                  (currFilter == category.id) ? 'bg-tspg-white' : 'bg-tspg-yellow hover:bg-tspg-white',
                  'inline-flex w-auto text-lg px-3 py-2 rounded-md'
                )}>
                  {category.name}
                </Link>
              ))}
              <button id="clear" onClick={handleClear} className="inline-flex w-auto text-lg py-0 inline-flex w-auto text-lg px-3 py-2 rounded-md text-tspg-white hover:text-tspg-yellow">Clear</button>
            </div>


          </form>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <div className={classNames(
              (currFilter == 'development' || currFilter == 'command-line' || currFilter == '') ? 'visible' : 'hidden',
              'block px-4 py-2 text-sm border border-tspg-gray border-2 rounded-md bg-tspg-white'
            )}>
              <h1 className="text-lg underline decoration-tspg-yellow decoration-4 mb-2">rpg_cli</h1>
              <p className="mb-2">This is a command-line-based, text-only RPG with a twist; as the user makes choices in the RPG, the CLI builds out a website (using the technology of your choice), possibly choosing colors or making drawings based on the storyline. The end result will be a localhost server that displays a website.</p>

              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#development</span>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#command-line</span>
            </div>

            <div className={classNames(
              (currFilter == 'youtube' || currFilter == 'podcast' || currFilter == '') ? 'visible' : 'hidden',
              'block px-4 py-2 text-sm border border-tspg-gray border-2 rounded-md bg-tspg-white'
            )}>
              <h1 className="text-lg underline decoration-tspg-yellow decoration-4 mb-2">The Beginner's Guide to Everything</h1>
              <p className="mb-2">This is either a YouTube channel or a podcast where you challenge yourself to learn something new (and become at least a beginner at it) in a rapid amount of time -- think a week, a fortnight, etc. This would be an interesting way to challenge yourself!</p>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#youtube</span>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#podcast</span>
            </div>

            <div className={classNames(
              (currFilter == 'business' || currFilter == 'podcast' || currFilter == '') ? 'visible' : 'hidden',
              'block px-4 py-2 text-sm border border-tspg-gray border-2 rounded-md bg-tspg-white'
            )}>
              <h1 className="text-lg underline decoration-tspg-yellow decoration-4 mb-2">On the Journey</h1>
              <p className="mb-2">This is a business I sadly loved, but didn't have the time or energy for. The basic idea is a business about mindfulness and self-improvement -- in a radical, for the "normal" folks kind of way. Not getting up at 5am is perfectly fine and healthy, after all! It featured long-form, researched-based takes on topics like journaling, meditation, and yes, even waking up at 5am. The potential exists to turn this into a podcast instead of a business.</p>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#business</span>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#podcast</span>
            </div>

            <div className={classNames(
              (currFilter == 'development' || currFilter == 'api' || currFilter == '') ? 'visible' : 'hidden',
              'block px-4 py-2 text-sm border border-tspg-gray border-2 rounded-md bg-tspg-white'
            )}>
              <h1 className="text-lg underline decoration-tspg-yellow decoration-4 mb-2">Is Today a Holiday?</h1>
              <p className="mb-2">This is a very simple idea: a website that tells you whether or not today's a holiday. It's a great project idea for someone just learning a new language or framework! If you're looking for a little extra challenge, you can build a free API out of it.</p>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#development</span>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#api</span>
            </div>

            <div className={classNames(
              (currFilter == 'data-analysis' || currFilter == 'development' || currFilter == '') ? 'visible' : 'hidden',
              'block px-4 py-2 text-sm border border-tspg-gray border-2 rounded-md bg-tspg-white'
            )}>
              <h1 className="text-lg underline decoration-tspg-yellow decoration-4 mb-2">Gentrification Heatmap</h1>
              <p className="mb-2">This is a data-analysis based idea -- the goal is to build out an interactive visualization that works with census data (or something similar) to visualize the spread of gentrification in major cities. How you define gentrification is up to you!</p>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#development</span>
              <span className="inline-block bg-tspg-yellow px-3 py-1 mt-2 text-sm font-medium text-tspg-gray mr-2 mb-2">#data-analysis</span>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}