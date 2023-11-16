import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import itemCRUD from "../../apis/itemCRUD"

// 비동기 작업을 처리하는 Thunk 함수
export const createProductAsync = createAsyncThunk("products/createProducts", async (productData) => {
  const response = await itemCRUD.post("/products", productData)
  return response.data.data
})

// Slice 생성
const productsSlice = createSlice({
  name: "products", // Slice의 이름
  initialState: {
    status: "idle", // 비동기 작업 상태 (loading, success, failed)
    error: null, // 에러 메시지
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProductAsync.pending, (state) => {
      state.status = "loading" // 비동기 작업이 진행 중일 때
    })
    builder.addCase(createProductAsync.fulfilled, (state) => {
      state.status = "success" // 비동기 작업이 성공했을 때
    })
    builder.addCase(createProductAsync.rejected, (state, action) => {
      state.status = "failed" // 비동기 작업이 실패했을 때
      state.error = action.error.message ?? null // 에러 메시지 저장
    })
  },
})

export default productsSlice.reducer
