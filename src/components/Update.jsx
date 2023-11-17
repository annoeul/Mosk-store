// Update.js
import React from "react"
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material"

function Update({ open, handleModal, handleUpdateSubmit, formData, handleFormChange }) {
  return (
    <Dialog open={open} onClose={handleModal}>
      <DialogTitle>수정 모달 제목</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="상품명"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleFormChange}
        />
        <TextField
          name="description"
          label="상품 설명"
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={handleFormChange}
        />
        <TextField
          name="price"
          label="가격"
          fullWidth
          margin="normal"
          value={formData.price}
          onChange={handleFormChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModal} color="primary">
          취소
        </Button>
        <Button onClick={handleUpdateSubmit} color="primary">
          수정
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Update
