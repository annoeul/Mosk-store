/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategoryAsync, fetchCategories, selectCategory } from "../store/slice/categorySlice"
import { Box, Button, Stack } from "@mui/material"

function Category({ storeId }) {
  const dispatch = useDispatch()
  const { categories, selectedCategory } = useSelector((state) => state.categories)

  const deleteCategory = async (categoryId) => {
    const checkDelete = window.confirm("정말로 삭제하시겠습니까?")
    if (checkDelete) {
      try {
        dispatch(deleteCategoryAsync(categoryId))
      } catch (err) {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.message)
        } else {
          console.error("API request error:", err)
          throw new Error(err)
        }
      }
    }
  }

  const handleCategoryClick = (categoryId) => {
    dispatch(selectCategory({ id: categoryId }))
  }

  useEffect(() => {
    // 카테고리가 이미 로드되지 않았을 때만 카테고리를 가져옵니다.
    if (categories.length === 0) {
      const fetchData = async () => {
        try {
          dispatch(fetchCategories(1))
        } catch (err) {
          console.error(err)
        }
      }
      fetchData()
    }

    if (!selectedCategory && categories.length > 0) {
      handleCategoryClick(categories[0].id)
    }
  }, [dispatch, selectedCategory, categories])

  return (
    <Stack>
      {categories.map((category) => (
        <Box
          sx={{ borderBottom: ".1px dotted black", margin: "10px 10px" }}
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
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
