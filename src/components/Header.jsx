import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import api from "../apis/signUp"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  const checkLogin = () => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      setIsLogin(true)
    }
  }

  const logout = async () => {
    try {
      const response = await api.delete("/auth")
      const getToken = localStorage.getItem("accessToken")
      const checkLogout = window.confirm("로그아웃 하시겠습니까?")
      if (checkLogout) {
        localStorage.removeItem("accessToken")
        navigate("/")
      } else {
        return
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            arai-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoreName
          </Typography>
          <Button color="inherit" onClick={logout}>
            {isLogin ? "Logout" : ""}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
