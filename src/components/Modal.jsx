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

function Modal() {
  const [open, setOpen] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState("") // 선택된 카테고리 ID를 상태로 관리
  const categories = useSelector((state) => state.categories.categories)

  const handleModal = () => {
    setOpen(!open)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value) // 선택된 카테고리 ID를 업데이트
    console.log(selectedCategoryId)
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
              value={selectedCategoryId} // 선택된 값 설정
              onChange={handleCategoryChange}
            >
              {categories &&
                categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField name="textField1" label="텍스트 필드 1" fullWidth margin="normal" />
          <TextField name="textField2" label="텍스트 필드 2" fullWidth margin="normal" />
          <TextField name="textField3" label="텍스트 필드 3" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModal} color="primary">
            취소
          </Button>
          <Button onClick={() => {}} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
