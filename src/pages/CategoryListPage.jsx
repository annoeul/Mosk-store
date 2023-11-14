import React, { useState } from "react"
import Btn from "../components/Btn"
import { Box, ButtonGroup, TextField } from "@mui/material"
import Category from "../components/Category"
import createApi from "../apis/createItem"

function CategoryListPage() {
  const [isCheck, setIsCheck] = useState(false)
  const [categoryName, setCategoryName] = useState("")

  const onClick = () => {
    setIsCheck(!isCheck)
  }

  const createCategory = async () => {
    try {
      const response = await createApi.post("/categories", categoryName)
      const data = response.data
      console.log(data)
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message)
      } else {
        console.error("API request error:", err)
        throw new Error(err)
      }
    }
  }

  return (
    <>
      <Btn variant="outlined" text="카테고리 생성" size="large" sx={{ my: 2 }} onClick={onClick} />
      {isCheck ? (
        <Box>
          <TextField
            onChange={(e) => setCategoryName(e.target.value)}
            id="standard-basic"
            label="카테고리 이름"
            variant="standard"
            sx={{ m: 2 }}
          />
          <ButtonGroup sx={{ m: 2 }}>
            <Btn variant="outlined" text="취소" onClick={onClick} />
            <Btn variant="contained" text="생성" onClick={createCategory} />
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
