import * as React from "react"
import {
  Avatar,
  Checkbox,
  Grid,
  Box,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Typography,
  Container,
} from "@mui/material"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Link, useNavigate } from "react-router-dom"
import api from "../apis/signUp"
import { useState } from "react"

export default function LoginPage() {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const doLogin = async () => {
    try {
      const response = await api.post("/public/auth", userInput)

      if (response.status === 201) {
        const data = response.data
        localStorage.setItem("accessToken", data.data.accessToken)
        navigate("/home") // navigate 함수가 정의되어 있다고 가정
      }
    } catch (error) {
      console.error("오류 발생:", error)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onChange={onChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={doLogin}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
