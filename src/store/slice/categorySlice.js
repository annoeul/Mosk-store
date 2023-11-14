import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import itemCRUD from "../../apis/itemCRUD"

const initialState = {
  categories: [],
  status: "idle",
  error: null,
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (storeId) => {
  const response = await itemCRUD.get(`/public/categories/all/${storeId}`)
  return response.data.data
})

export const deleteCategoryAsync = createAsyncThunk("categories/deleteCategory", async (categoryId) => {
  const response = await itemCRUD.delete(`/categories/${categoryId}`)
  return categoryId
})

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
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
    builder.addCase(deleteCategoryAsync.fulfilled, (state, action) => {
      state.status = "success"
      state.categories = state.categories.filter((category) => category.id !== action.payload)
    })
  },
})

export default categorySlice.reducer
