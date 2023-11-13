import React, { useState } from "react"
import Btn from "../components/Btn"
import { Box, ButtonGroup, Container, Grid, TextField } from "@mui/material"
import Category from "../components/Category"

function CategoryListPage() {
  const [isCheck, setIsCheck] = useState(false)

  const onClick = () => {
    setIsCheck(!isCheck)
  }
  return (
    <>
      <Btn
        variant="outlined"
        text="카테고리 생성"
        size="large"
        sx={{ my: 2 }}
        onClick={onClick}
      />
      {isCheck ? (
        <Box>
          <TextField
            id="standard-basic"
            label="카테고리 이름"
            variant="standard"
            sx={{ m: 2 }}
          />
          <ButtonGroup sx={{ m: 2 }}>
            <Btn variant="outlined" text="취소" />
            <Btn variant="contained" text="생성" />
          </ButtonGroup>
          <Category />
        </Box>
      ) : (
        <Category />
      )}
    </>
  )
}

export default CategoryListPage
