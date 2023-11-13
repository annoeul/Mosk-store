import React from "react"
import Btn from "../components/Btn"
import { Container } from "@mui/material"

function CategoryListPage() {
  return (
    <Container>
      <Btn variant="outlined" text="카테고리 생성" size="large" sx={{ m: 2 }} />
    </Container>
  )
}

export default CategoryListPage
