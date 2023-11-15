import React, { useState } from "react"
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material"

function Modal() {
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleModal}>
        Open Modal
      </Button>
      <Dialog open={open} onClose={handleModal}>
        <DialogTitle>모달 제목</DialogTitle>
        <DialogContent>
          {/* 텍스트 필드 예제 (3개) */}
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
