import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategoryAsync, fetchCategories } from "../store/slice/categorySlice"
import { Box, Button, Stack } from "@mui/material"

function Category({ storeId }) {
  const dispatch = useDispatch()
  const { categories, status, error } = useSelector((state) => state.categories)

  const deleteCategory = async (categoryId) => {
    try {
      await dispatch(deleteCategoryAsync(categoryId))
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message)
      } else {
        console.error("API request error:", err)
        throw new Error(err)
      }
    }
  }

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
        <Box
          sx={{ borderBottom: ".1px solid black", margin: "10px 10px" }}
          key={category.id}
          onClick={() => console.log(category.products)}
        >
          <p>{category.name}</p>
          <Button onClick={() => deleteCategory(category.id)}>삭제</Button>
          <Button>수정</Button>
        </Box>
      ))}
    </Stack>
  )
}

export default Category
