import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import itemCRUD from "../../apis/itemCRUD"

const initialState = {
  categories: [],
  status: "idle",
  error: null,
  selectedCategory: null,
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (storeId) => {
  const response = await itemCRUD.get(`/public/categories/all/${storeId}`)
  return response.data.data
})

export const createCategoryAsync = createAsyncThunk("categories/createCategory", async (categoryName) => {
  const response = await itemCRUD.post("/categories", categoryName)
  return response.data.data
})

export const deleteCategoryAsync = createAsyncThunk("categories/deleteCategory", async (categoryId) => {
  const response = await itemCRUD.delete(`/categories/${categoryId}`)
  return categoryId
})

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      const selectedCategoryId = action.payload.id
      state.selectedCategory = state.categories.find((item) => item.id === selectedCategoryId)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "success"
      state.categories = action.payload
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message ?? null
    })
    builder.addCase(createCategoryAsync.fulfilled, (state, action) => {
      state.status = "success"
      state.categories.push(action.payload)
    })
    builder.addCase(deleteCategoryAsync.fulfilled, (state, action) => {
      state.status = "success"
      state.categories = state.categories.filter((category) => category.id !== action.payload)
    })
  },
})

export const { selectCategory } = categorySlice.actions
export default categorySlice.reducer
