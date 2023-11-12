import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // API 엔드포인트의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
