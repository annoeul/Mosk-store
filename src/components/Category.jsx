import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/slice/categorySlice"
import { Box, Button, Grid, Stack } from "@mui/material"

function Category({ storeId }) {
  const dispatch = useDispatch()
  const { categories, status, error } = useSelector((state) => state.categories)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Before fetching data:", categories)
        await dispatch(fetchCategories(1))
        console.log("After fetching data:", categories)
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    }

    fetchData()
  }, [dispatch, storeId])

  return (
    <Stack>
      {categories.map((category) => (
        <Button key={category.id} onClick={() => console.log(category.products)}>
          <p>{category.name}</p>
        </Button>
      ))}
    </Stack>
  )
}

export default Category
