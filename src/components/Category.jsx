import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/slice/categorySlice"
import { Box, Button, Grid } from "@mui/material"

function Category({ storeId }) {
  const dispatch = useDispatch()
  const { categories, status, error } = useSelector((state) => state.categories)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // dispatch(fetchCategories(storeId))를 호출하기 전에 데이터 출력
        console.log("Before fetching data:", categories)
        await dispatch(fetchCategories(1))
        // dispatch(fetchCategories(storeId))를 호출한 후에 데이터 출력
        console.log("After fetching data:", categories)
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    }

    fetchData()
  }, [dispatch, storeId]) // categories 추가

  return (
    <Box>
      <Grid container>
        <Grid item>
          {categories.map((category) => (
            <Button variant="outlined" size="large" key={category.id}>
              <p>{category.name}</p>
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Category
