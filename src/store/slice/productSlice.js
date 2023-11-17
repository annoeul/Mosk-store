import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import itemCRUD from "../../apis/itemCRUD"

export const createProductAsync = createAsyncThunk("products/createProducts", async (productData) => {
  const response = await itemCRUD.post("/products", productData)
  return response.data.data
})

export const deleteProductAsync = createAsyncThunk("products/deleteProduct", async (productId) => {
  await itemCRUD.delete(`/products/${productId}`)
  return productId
})

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProductAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(createProductAsync.fulfilled, (state) => {
      state.status = "success"
    })
    builder.addCase(createProductAsync.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message ?? null
    })
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      state.status = "success"
      state.data = state.data.filter((product) => product.id !== action.payload)
    })
  },
})

export default productsSlice.reducer
