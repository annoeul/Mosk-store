import React from "react"
import { Button } from "@mui/material"

function Btn({ size, text, variant, sx }) {
  return (
    <Button variant={variant} sx={sx} size={size}>
      {text}
    </Button>
  )
}

export default Btn
