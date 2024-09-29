import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: 'blue' }}>
            <Toolbar>
            
              <Typography variant='h4' color='#000'>MY APP </Typography> 
                <Link to='/a'>
                <Button variant='contained'>Home</Button>
                </Link>
                <Link to='/Add'>
                <Button variant='contained'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbaar