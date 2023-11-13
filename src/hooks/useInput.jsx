import React, { useState } from "react"

function useInput(initialValue) {
  const [userInput, setUserInput] = useState(initialValue)
  const onChange = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
    // console.log(userInput)
  }
  return { userInput, onChange }
}

export default useInput
