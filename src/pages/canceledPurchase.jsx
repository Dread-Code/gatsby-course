import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <SEO title="Canceled Purchase" />
      <Purchase>
        <h2>We're sorry for that</h2>
        <p>I hope that you'll purchase anything else</p>
        <span rol="img" aria-label="emoji">
          🥺
        </span>
        <Link to="/">
          <Button>Go back to catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}
