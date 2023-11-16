import React, { useState } from "react"
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
import { useSelector } from "react-redux"
import useInput from "../hooks/useInput"

function Modal() {
  const [open, setOpen] = useState(false)
  const [selectCategoryId, setSelectCategoryId] = useState("") // 선택된 카테고리 ID를 상태로 관리
  const categories = useSelector((state) => state.categories.categories)

  const handleModal = () => {
    setOpen(!open)
  }

  const handleCategoryChange = (selectedCategoryId) => {
    setSelectCategoryId(selectedCategoryId) // 선택된 카테고리 ID를 업데이트
    onChange({ target: { name: "categoryId", value: selectedCategoryId } }) // useInput의 onChange 함수를 호출하여 categoryId 업데이트
  }

  const { userInput, onChange } = useInput({
    name: "",
    description: "",
    price: "",
    categoryId: selectCategoryId,
  })

  const createProduct = () => {
    console.log(userInput)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleModal}>
        Open Modal
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
              value={selectCategoryId} // 선택된 값 설정
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
