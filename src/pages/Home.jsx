import React from "react"
import Header from "../components/Header"
import { Grid } from "@mui/material"

import ProductListPage from "./ProductListPage"
import CategoryListPage from "./CategoryListPage"
import CreateModal from "../components/CreateModal"

function Home() {
  return (
    <div>
      <Header />

      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            borderRight: "1px solid black",
            textAlign: "center",
            // height: "100vh",
          }}
        >
          <CategoryListPage />
        </Grid>
        <Grid item xs={10}>
          <CreateModal />
          <ProductListPage />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
