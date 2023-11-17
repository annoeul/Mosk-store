import React, { useEffect } from "react"
import Product from "../components/Product"
import { useSelector } from "react-redux"

function ProductListPage() {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <>
      {selectedCategory && selectedCategory.products.length > 0 ? (
        selectedCategory.products.map((product) => (
          <Product category={selectedCategory} key={product.id} product={product} />
        ))
      ) : (
        <div>등록된 상품이 없습니다.</div>
      )}
    </>
  )
}

export default ProductListPage
