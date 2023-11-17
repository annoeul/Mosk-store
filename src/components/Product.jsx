import React, { useState, useEffect } from "react"
import { Button, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material"
import itemCRUD from "../apis/itemCRUD"
import { useDispatch } from "react-redux"
import { deleteProductAsync } from "../store/slice/productSlice"

function Product({ product }) {
  const { name, price, description, id } = product
  const [imageURL, setImageURL] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await itemCRUD.get(`/public/products/img/${id}`)
        const imageData = response.data.data

        if (imageData.encodedImg && imageData.imgType) {
          const dataURL = `data:image/${imageData.imgType};base64,${imageData.encodedImg}`
          setImageURL(dataURL)
        }
      } catch (error) {
        console.error("Error fetching image data:", error)
      }
    }

    fetchImageData()
  }, [product.productId])

  const handleDelete = (productId) => {
    const isConfirmed = window.confirm(`정말로 "${name}" 상품을 삭제하시겠습니까?`)
    console.log(isConfirmed)

    if (isConfirmed) dispatch(deleteProductAsync(productId))
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        {imageURL && <CardMedia sx={{ height: 200, width: 200, objectFit: "cover" }} image={imageURL} />}
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
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
          <Button onClick={() => handleDelete(id)}>삭제</Button>
          <Button>수정</Button>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Product
