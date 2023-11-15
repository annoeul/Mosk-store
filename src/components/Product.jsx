import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import itemCRUD from "../apis/itemCRUD"

function Product({ product }) {
  const { name, price, description, id, encodedImg } = product

  const handleDelete = () => {
    const isConfirmed = window.confirm(`정말로 "${name}" 상품을 삭제하시겠습니까?`)
    console.log(isConfirmed)

    if (isConfirmed) {
      itemCRUD
        .delete(`/products/${id}`)
        .then((response) => {
          console.log("Product deleted successfully:", response)
        })
        .catch((error) => {
          console.error("Error deleting product:", error)
        })
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/static/images/cards/contemplative-reptile.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          메뉴명: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          설명: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          가격: {price}
        </Typography>
      </CardContent>
      <Button onClick={handleDelete}>삭제</Button>
      <Button>수정</Button>
    </Card>
  )
}

export default Product
