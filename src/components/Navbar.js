import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import  Logo from '../assets/images/Logo.png'; 

const Navbar = () => {
  return (
    <Stack  direction="row" 
    sx={{gap: {sm: '123px',xs :'40px'}, mt: {sm: '32px', xs: '20px'}, }} px="20px">
        <Link to="/">
            <img src={Logo} alt ="Logo" 
            style={{width: "48px", height: "48px", margin: '0 20px'}} />
        </Link>
        <Stack
            height="30px"
            direction="row"
            gap="40px"
            fontSize="24px"
            // border="2px solid"
            // alighitems="flex-start"
            >
            <Link to="/"style={{textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625"}}> 
                Home
            </Link>
            <Link href="#" style={{textDecoration: "none", color: "#3A1212"}} onClick={() => {
            window.scrollTo({ top: {lg:1800, sm: 1150}, left: 100, behavior: 'smooth' })
        }}>
                Exercise
            </Link>
        </Stack>
    </Stack>
  )
}

export default Navbar