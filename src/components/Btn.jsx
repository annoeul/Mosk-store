import React from "react"
import { Button } from "@mui/material"

function Btn({ size, text, variant, sx, onClick }) {
  return (
    <Button variant={variant} sx={sx} size={size} onClick={onClick}>
      {text}
    </Button>
  )
}

export default Btn
