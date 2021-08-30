import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"
import styled from "styled-components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${({ color }) => color};
  &:hover {
    transform: scale(1.4);
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color="red"> Comprar </Button>
  </>
)

export default IndexPage
