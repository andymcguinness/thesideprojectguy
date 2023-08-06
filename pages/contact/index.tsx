// React
import React from "react";

// Next.js
import Image from "next/image";

// Formspree
import { useForm, ValidationError } from "@formspree/react";

// Components
import Navbar from "@/components/Navbar";

export default function ContactForm() {

  const [state, handleSubmit] = useForm("myyqkrkn");
  
  if (state.succeeded) {
    return <p>Thanks for your message! I&apos;ll get back to you as soon as I can.</p>;
  }
  
  return (
    <div className="min-h-screen bg-tspg-gray">
      <Navbar />
      <section className="p-6 pt-10 bg-tspg-gray pb-20">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 xl:col-start-2 bg-tspg-white">
            <h1 className="text-4xl font-extrabold text-left text-tspg-gray">the side project guy</h1>
            <span className="block mb-2 text-md text-left text-tspg-gray">ALWAYS BUILDING</span>
            <p className="my-8 text-left text-tspg-gray">
              Have a question for me? Want personalized help on a project? Please get in touch!
            </p>
            <form onSubmit={handleSubmit} className="self-stretch space-y-3">
              <label htmlFor="email" className="text-sm sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-md focus:ring focus:ring-tspg-yellow"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-sm sr-only">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                className="w-full rounded-md focus:ring focus:ring-tspg-yellow"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className="w-full py-2 font-semibold rounded bg-tspg-yellow hover:opacity-80">
                Submit
              </button>
            </form>
          </div>
          <div className="relative  w-full rounded-md xl:col-span-2">
            <Image src="/contact_page.jpg" fill={true} className="object-cover rounded-md
          " alt={""} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" />
          </div>
        </div>
      </section>
    </div>
  );
}