import React from "react"
import { StyledJumbo } from "../../styles/components"
import Image from "../Image"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Get the best and exclusive swag of platzi</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

export default Jumbo
