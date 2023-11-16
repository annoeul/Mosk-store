// Modal.js
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { createProductAsync } from "../store/slice/productSlice"
import useInput from "../hooks/useInput"

function Modal() {
  const [open, setOpen] = useState(false)
  const [selectCategoryId, setSelectCategoryId] = useState("")
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()

  const handleModal = () => {
    setOpen(!open)
  }

  const handleCategoryChange = (selectedCategoryId) => {
    setSelectCategoryId(selectedCategoryId)
    onChange({ target: { name: "categoryId", value: selectedCategoryId } })
  }

  const { userInput, onChange } = useInput({
    name: "",
    description: "",
    price: "",
    categoryId: selectCategoryId,
  })

  const createProduct = () => {
    const productData = {
      name: userInput.name,
      description: userInput.description,
      price: userInput.price,
      categoryId: userInput.categoryId,
    }

    dispatch(createProductAsync(productData))
  }

  return (
    <div>
      <Button variant="contained" onClick={handleModal}>
        상품생성
      </Button>
      <Dialog open={open} onClose={handleModal}>
        <DialogTitle>모달 제목</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              value={selectCategoryId}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories &&
                categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField name="name" label="name" value={userInput.name} onChange={onChange} fullWidth margin="normal" />
          <TextField
            name="description"
            label="description"
            value={userInput.description}
            onChange={onChange}
            fullWidth
            margin="normal"
          />
          <TextField name="price" label="price" fullWidth value={userInput.price} onChange={onChange} margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModal} color="primary">
            취소
          </Button>
          <Button onClick={createProduct} color="primary">
            생성
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
