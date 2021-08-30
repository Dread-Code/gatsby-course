import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Thanks = () => {
  return (
    <div>
      <SEO title="Successful Purchase" />
      <Purchase>
        <h2>Successful Purchase</h2>
        <p>We know you'll be look great!!!</p>
        <span role="img" aria-label="emoji">
          💚
        </span>
        <Link to="/">
          <Button>Go back to home</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
