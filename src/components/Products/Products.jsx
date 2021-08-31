import React from "react"
import { Link } from "gatsby"
import priceFormat from "../../utils/priceFormat"
import { StyledProducts } from "../../styles/components"

const Products = ({ products }) => {
  console.log(products)
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount)
          return (
            <article key={node.product.id}>
              <img
                src={node.product.metadata.img}
                alt={node.product.metadata.name}
              />
              <p>{node.product.metadata.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.product.id}`}>
                Comprar ahora <span>↪️</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}

export default Products
