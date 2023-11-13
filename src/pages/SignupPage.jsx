import {
  Avatar,
  Grid,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Link, useNavigate } from "react-router-dom"
import useInput from "../hooks/useInput"
import api from "../apis/signUp"

export default function SignUpPage() {
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

  const doSignup = async () => {
    try {
      const response = await api.post("/public/stores", userInput)

      if (response.status === 201) {
        const data = response.data
        console.log(data)
        // localStorage.setItem("accessToken", data.data.accessToken)
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
                onChange={onChange}
              />
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
              <TextField
                required
                fullWidth
                id="storeName"
                label="storeName"
                name="storeName"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="ownerName"
                label="ownerName"
                name="ownerName"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="call"
                label="call"
                name="call"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="address"
                name="address"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="crn"
                label="crn"
                name="crn"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            onClick={doSignup}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
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
