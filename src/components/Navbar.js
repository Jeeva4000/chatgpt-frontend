import { Box, Link, Typography, useTheme } from '@mui/material'
import React from 'react'
//import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const theme = useTheme()
    return (
        <div>
            <Box
                width={'100%'}
                backgroundColor={theme.palette.background.alt}
                padding={"1rem 6%"}
                textAlign={'center'}
                sx={{ boxShadow: 3, mb: 2, }}>
                <Typography variant='h1' color={"primary"} fontWeight="bold">
                    AI CHATGPT
                </Typography>
                <Link href="/register" p={1}>Sign Up</Link>
                <Link href="/login" p={1}>Sign In</Link>
            </Box>
        </div>
    )
}

export default Navbar