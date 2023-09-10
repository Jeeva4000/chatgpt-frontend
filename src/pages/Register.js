


import { Typography, useTheme, Box, useMediaQuery, TextField, Button, Collapse, Alert, } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const theme = useTheme();
    const navigate = useNavigate()

    // Media query
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // States

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    //register control
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:7070/auth/register', { username, email, password })
            toast.success('User Register Successfully')
            navigate('/login')
        } catch (error) {
            console.log(error)
            if (error.response.data.error) {
                setError(error.message.data.error)
            }
            else if (error.message) {
                setError(error.message)
            }
            setTimeout(() => {
                setError("")
            }, 5000);
        }

    }
    console.log(username + "----" + password + "----" + email + "---")
    return (
        <Box
            width={isNotMobile ? '40%' : '80%'}
            padding={'2rem'}
            m={'2rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={theme.palette.background.alt}
        >
            <Collapse in={error}>
                <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>
            </Collapse>
            <form onSubmit={() => handleSubmit}>
                <Typography variant="h3" textAlign={"center"}>Sign Up</Typography>
                <TextField
                    label="username"
                    required
                    margin='normal'
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField
                    label="email"
                    type='email'
                    required
                    margin='normal'
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField
                    label="password"
                    type='password'
                    required
                    margin='normal'
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    size='large'
                    sx={{ color: "white", mt: 2 }} >
                    Sign Up
                </Button>
                <Typography mt={2}>Already have an account ? <Link to="/login">Please Login</Link></Typography>
            </form>
        </Box>
    )
}

export default Register
