import * as React from "react"
import { SEO } from "../components/seo"

// Styles
import "./index.scss"

const Home = () => {
  return (
    <>
      <main>
        <h1>Paper&Pain.</h1>
      </main>
    </>
  )
}

export default Home

export const Head = () => (
  <SEO />
)