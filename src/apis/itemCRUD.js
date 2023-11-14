import axios from "axios"

const itemCRUD = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // API 엔드포인트의 기본 URL
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
})

export default itemCRUD
