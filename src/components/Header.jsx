import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
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

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#dfdbdb" }}>
        <Toolbar>
          <IconButton
            // size="large"
            // edge="start"
            // color="black"
            arai-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoreName
          </Typography>
          <Button color="inherit">{isLogin ? "Logout" : ""}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
