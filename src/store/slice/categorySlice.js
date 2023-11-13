import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  categories: [],
  status: "idle",
  error: null,
}

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (storeId) => {
    const response = await axios.get(
      `http://localhost:9090/api/v1/public/categories/all/${storeId}`
    )
    return response.data.data
  }
)

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
  },
})

export default categorySlice.reducer
