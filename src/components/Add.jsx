import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:'40px'}}>
    <TextField variant='standard' label=' Blog Name'  ></TextField>
    <br></br>
    <TextField variant='standard' label='Description'  ></TextField>
    <br></br>
    <TextField variant='standard' label='Author Name'  ></TextField>
    <br></br>
    <br></br>
    <Button variant='contained' > Submit </Button>
</div>
  )
}

export default Add