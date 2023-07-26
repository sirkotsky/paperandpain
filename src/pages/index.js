import * as React from "react"
import { SEO } from "../components/seo"

// Styles
import "./index.scss"

import Logo from "../components/logo.svg"

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <div className="about">
            <p>We are Paper and Pain. We scale your business sustainably using <em>open and affordable technology</em> through design, engineering, strategy, and analytics.</p>
            <a href="mailto:hi@paperandpain.com">Message us</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home

export const Head = () => (
  <SEO />
)