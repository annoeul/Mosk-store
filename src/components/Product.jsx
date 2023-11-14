import React from "react"

function Product({ product }) {
  const { name, price, description } = product
  return (
    <div>
      {name} - {price} - {description}
    </div>
  )
}

export default Product
