import React from "react"
import ProductDetail from "../../components/ProductDetail"

const Product = ({ pageContext }) => {
  return (
    <div>
      <ProductDetail {...pageContext} />
    </div>
  )
}

export default Product
