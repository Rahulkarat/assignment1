import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


  const Navbar = () => {
  return (
    <div style={{paddingTop:"40px"}}>
        <AppBar>
            <Toolbar>
            <Typography variant='outlined' sx={{flexGrow:1}}align = 'left'> NAVBAR </Typography>
                   
                   <Button variant='contained' color='error'><Link to={ '/Home' }> Home </Link> </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <Button variant='contained' color='error'><Link to={ '/Add' }> Add Blog </Link> </Button>
                     
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar