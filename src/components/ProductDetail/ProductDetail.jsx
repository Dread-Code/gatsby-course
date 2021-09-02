import React, { useState } from "react"
import priceFormat from "../../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../../styles/components"
import { SEO, Stars } from "../"

const ProductDetail = ({ unit_amount, product: { metadata, id, name } }) => {
  const formatPrice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)

  return (
    <StyledProductDetail>
      <SEO tittle={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatPrice}</b>
        <Stars />
        {metadata.wear && <h3>Color: Azul</h3>}
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>X</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
