import { Container, TextField } from "@mui/material"
import React, { useState } from "react"

function Signup() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    storeName: "",
    ownerName: "",
    call: "",
    address: "",
    crn: "",
  })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
    console.log(userInput)
  }

  return (
    <Container>
      <TextField
        name="email"
        fullWidth
        label="email"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.email}
        onChange={userInputHandler}
      />
      <TextField
        name="password"
        fullWidth
        label="password"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.password}
        onChange={userInputHandler}
      />
      <TextField
        name="storeName"
        fullWidth
        label="storeName"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.storeName}
        onChange={userInputHandler}
      />
      <TextField
        name="ownerName"
        fullWidth
        label="ownerName"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.ownerName}
        onChange={userInputHandler}
      />
      <TextField
        name="call"
        fullWidth
        label="call"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.call}
        onChange={userInputHandler}
      />
      <TextField
        name="address"
        fullWidth
        label="address"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.address}
        onChange={userInputHandler}
      />
      <TextField
        name="crn"
        fullWidth
        label="crn"
        id="fullWidth"
        sx={{ margin: "10px" }}
        value={userInput.crn}
        onChange={userInputHandler}
      />
    </Container>
  )
}

export default Signup
