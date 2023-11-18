import {
  Avatar,
  Grid,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Alert,
  AlertTitle,
} from "@mui/material"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Link, useNavigate } from "react-router-dom"
import useInput from "../hooks/useInput"
import api from "../apis/signUp"
import { useState } from "react"

export default function SignUpPage() {
  const [emailError, setEmailError] = useState("")
  const navigate = useNavigate()
  const { userInput, onChange } = useInput({
    email: "",
    password: "",
    storeName: "",
    ownerName: "",
    call: "",
    address: "",
    crn: "",
  })

  const doEmailCheck = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setEmailError("유효한 이메일 주소를 입력하세요.")
      return
    }

    try {
      const response = await api.get(`/public/stores/email-check/${email}`)
      if (response.status === 200) {
        setEmailError({ message: "사용가능한 이메일 입니다.", severity: "success" })
      }
    } catch (error) {
      setEmailError({ message: "이미 사용 중인 이메일입니다.", severity: "error" })
    }
  }

  const handleEmailChange = (e) => {
    const { value } = e.target
    onChange(e)
    doEmailCheck(value)
  }

  const doSignup = async () => {
    try {
      const response = await api.post("/public/stores", userInput)

      if (response.status === 201) {
        const data = response.data
        console.log(data)
        navigate("/")
      }
    } catch (error) {
      alert(error.response.data.message)
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
          Sign up
        </Typography>
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onBlur={handleEmailChange}
              />
              {emailError && (
                <Alert severity={emailError.severity} sx={{ mt: 1 }}>
                  <AlertTitle>{emailError.severity === "success" ? "성공" : "오류"}</AlertTitle>
                  {emailError.message}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChange}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="storeName" label="storeName" name="storeName" onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="ownerName" label="ownerName" name="ownerName" onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="call" label="call" name="call" onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="address" label="address" name="address" onChange={onChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="crn" label="crn" name="crn" onChange={onChange} />
            </Grid>
          </Grid>
          <Button onClick={doSignup} type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
