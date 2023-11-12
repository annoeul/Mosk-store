import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<SignupPage />} />
    </Routes>
  )
}

export default Router
