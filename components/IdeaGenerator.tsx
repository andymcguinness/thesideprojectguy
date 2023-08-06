// React
import { useState } from "react"

// Next.js
import Image from "next/image";

// Random Word Slugs
import { generateSlug } from "random-word-slugs"


const product_types = [
  "A blog", "A youtube channel", "A business", "A website", "A web app",
]

const vowels = ("aeiou");

export default function IdeaGenerator() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // My lovely fetch wrapper to check for 400 errors from the server
  async function fetchData(info: [input: RequestInfo | URL, init?: RequestInit | undefined]) {

    // Applying args to fetch -- no {this} needs applied
    const response = await fetch.apply(null, info);
    if (!response.ok) {

      // Get the basics of the error
      let err = new Error("HTTP status code: " + response.status);

      // Throw it like you mean it!
      throw err;
    }
    return response;
  }

  async function generateWords() {
    setResult("")

    setLoading(true);

    const startup_idea = await fetchData(["/api/openaiidea"]).then((response) => {

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

        let newString = product_types[Math.floor(Math.random() * product_types.length)] + " about " + (vowels.indexOf(newNoun[0]) > -1 ? "an " : "a ") + newNoun;
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

      let newString = product_types[Math.floor(Math.random() * product_types.length)] + " about " + (vowels.indexOf(newNoun[0]) > -1 ? "an " : "a ") + newNoun;
      setResult(newString);
      setLoading(false);
    });
  }

  return (
    <section className="p-6 pt-10 bg-tspg-gray pb-20">
      <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-6">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 xl:col-start-2 bg-tspg-white">
          <h1 className="sm:max-w-xs font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Idea Generator</h1>
          <p className="my-8 text-left text-black">
            If you need a side project idea, click the button below! It&apos;s AI-powered, and will take a moment, but maybe it will spark an idea for you!
          </p>
          <button onClick={generateWords} className="inline-block items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 shadow-sm bg-tspg-yellow hover:brightness-90 focus:shadow-outline focus:outline-none rounded-md mt-2" disabled={loading}>{result == "" ? "Generate an idea" : "Generate another idea"}</button>
          <p className="text-base text-black md:text-lg text-sm text-left mt-6">{result == "" && loading == true ? "Loading..." : (result != "" ? result : "")}</p>
        </div>
        <div className="relative w-full rounded-md xl:col-span-2">
          <Image src="/idea_generator_page.jpg" height={608} width={912} className="object-cover w-full rounded-md xl:col-span-3" alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" />
        </div>
      </div>
    </section>
  )
}