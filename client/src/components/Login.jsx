import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField/TextField'
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button'
import { Mail } from '@mui/icons-material'

import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    return (

        <Box>
            <Container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center ', height: '100vh', justifyContent: 'center' }}>
                <Box >
                    <TextField
                        // label="With normal TextField"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '27ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Mail /></InputAdornment>,
                        }}
                    />
                    <TextField
                        // label="With normal TextField"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '27ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                        }}
                    />
                    <Button sx={{ m: 1, width: '35ch' }} variant="contained" color="success">Sign Up</Button>
                </Box>
            </Container >
        </Box>
    )
}
