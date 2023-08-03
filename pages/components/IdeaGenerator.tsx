import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import { generateSlug } from 'random-word-slugs'
import Link from 'next/link'


const product_types = [
  'A blog', 'A youtube channel', 'A business', 'A website', 'A web app',
]

const vowels = ('aeiou');

export default function IdeaGenerator() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // My lovely fetch wrapper to check for 400 errors from the server
  function fetchData(info: [input: RequestInfo | URL, init?: RequestInit | undefined]) {

    // Applying args to fetch -- no {this} needs applied
    return fetch.apply(null, info).then(response => {
      if (!response.ok) {

        // Get the basics of the error
        let err = new Error("HTTP status code: " + response.status);

        // Throw it like you mean it!
        throw err;
      }
      // Yay! Nothing bad happened!
      return response;
    });
  }

  async function generateWords() {
    setResult('')

    setLoading(true);

    const startup_idea = await fetchData(['/api/openaiidea']).then((response) => {

      // Set the text value
      let idea = response.text().then((text) => {
        let cleansed_text = text.trim().replace("\n", "").replace("\"", "").replace("\\", "").trimEnd().substring(0, text.length - 2);

        setResult(cleansed_text);
        setLoading(false);
      }).catch((error) => {
        let newNoun = generateSlug(1, {
          partsOfSpeech: ["noun"],
          categories: {
            noun: [
              "animals",
              "business",
              "education",
              "family",
              "food",
              "health",
              "media",
              "people",
              "profession",
              "science",
              "sports",
              "thing",
              "time",
              "transportation"
            ]
          }
        });

        let newString = product_types[Math.floor(Math.random() * product_types.length)] + ' about ' + (vowels.indexOf(newNoun[0]) > -1 ? 'an ' : 'a ') + newNoun;
        setResult(newString);
        setLoading(false);
      });
    }).catch((error) => {
      let newNoun = generateSlug(1, {
        partsOfSpeech: ["noun"],
        categories: {
          noun: [
            "animals",
            "business",
            "education",
            "family",
            "food",
            "health",
            "media",
            "people",
            "profession",
            "science",
            "sports",
            "thing",
            "time",
            "transportation"
          ]
        }
      });

      let newString = product_types[Math.floor(Math.random() * product_types.length)] + ' about ' + (vowels.indexOf(newNoun[0]) > -1 ? 'an ' : 'a ') + newNoun;
      setResult(newString);
      setLoading(false);
    });
  }

  return (
    <section>
      <div className="relative mt-5 pt-5">

        <h1 className="mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-block z-10 text-center">Ideas Generator</h1>

        <p className="text-base text-gray-700 md:text-lg inline-block mb-4 text-left">
          If you need an idea and my mostly-baked <Link href="/ideas" className="inline-block">Ideas</Link> page didn't do it for you, here's a random idea generator! It uses AI, so it will take a brief moment to load, but maybe it will give you the spark you need!
        </p>
        <button onClick={generateWords} className="inline-block items-center justify-center w-auto h-12 px-6 font-semibold tracking-wide text-black transition duration-200 shadow-sm bg-tspg-yellow hover:brightness-90 focus:shadow-outline focus:outline-none" disabled={loading}>{result == '' ? 'Generate an idea' : 'Generate another idea'}</button>

        <p className="mt-5 text-base text-gray-700 md:text-lg px-4 py-2 text-sm border border-tspg-gray text-left">{result == '' && loading == true ? 'Loading...' : (result != '' ? result : 'Brilliant idea goes here.')}</p>
      </div>
    </section>
  )
}