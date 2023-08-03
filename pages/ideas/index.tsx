import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'

const subCategories = [
  { name: 'Development', href: '?development', id: 'development' },
  { name: 'APIs', href: '?api', id: 'api' },
  { name: 'Command Line', href: '?command-line', id: 'command-line' },
  { name: 'YouTube', href: '?youtube', id: 'youtube' },
  { name: 'Podcast', href: '?podcast', id: 'podcast' },
  { name: 'Business', href: '?business', id: 'business' },
]

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Ideas() {
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
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <div className='pt-10 flex bg-tspg-gray pb-5 h-full w-full'>
        {/* Mobile filter dialog */}
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
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="bg-white px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl">
          <div className="flex">
            <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Ideas</h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name} className="inline-flex w-auto pr-1">
                      <a href={category.href} id={category.id} onClick={handleClick}>{category.name}</a>
                    </li>
                  ))}
                  <li className="inline-flex w-auto pr-1"><a href="#" id="clear" onClick={handleClear}>Clear</a></li>
                </ul>

                
              </form>

              {/* Product grid */}
              <div className="">
                <div className={classNames(
                    (currFilter == 'development' || currFilter == '') ? 'visible' : 'hidden',
                    'block px-4 py-2 text-sm'
                  )}>
                    <h1>Hello!</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}