// Next.js
import type { AppProps } from "next/app"

// Web analytics
import { Analytics } from "@vercel/analytics/react"

// Styles
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
