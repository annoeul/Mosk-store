/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material"
import itemCRUD from "../apis/itemCRUD"
import useInput from "../hooks/useInput"
import { useSelector } from "react-redux"

function Update({ open, handleModal, formData, categoryId }) {
  const [isLoading, setIsLoading] = useState(false)
  const { userInput, onChange } = useInput({
    name: formData.name,
    description: formData.description,
    price: formData.price,
  })
  console.log(categoryId.id)

  const handleUpdate = async () => {
    try {
      setIsLoading(true)

      await itemCRUD.put(`/products`, {
        productId: formData.id,
        name: userInput.name,
        description: userInput.description,
        price: userInput.price,
        encodedImg: formData.encodedImg,
        imgType: formData.imgType,
        categoryId: categoryId.id,
      })
      handleModal()
    } catch (error) {
      console.error("Error updating product:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onClose={handleModal}>
      <DialogTitle>상품 수정</DialogTitle>
      <DialogContent>
        <TextField name="name" label="상품명" fullWidth margin="normal" value={userInput.name} onChange={onChange} />
        <TextField
          name="description"
          label="상품 설명"
          fullWidth
          margin="normal"
          value={userInput.description}
          onChange={onChange}
        />
        <TextField name="price" label="가격" fullWidth margin="normal" value={userInput.price} onChange={onChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModal} color="primary">
          취소
        </Button>
        <Button onClick={handleUpdate} color="primary" disabled={isLoading}>
          {isLoading ? "수정 중..." : "수정"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Update
