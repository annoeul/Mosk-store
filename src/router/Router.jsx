import React from "react"
import { Route, Routes } from "react-router-dom"
import SignupPage from "../pages/SignupPage"
import Auth from "../pages/Auth"
import LoginPage from "../pages/LoginPage"
import Home from "../pages/Home"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router
