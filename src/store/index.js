import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slice/categorySlice"
import productReducer from "./slice/categorySlice"

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
})

export default store
