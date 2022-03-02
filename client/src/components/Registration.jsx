import { Mail } from '@mui/icons-material'
import LockIcon from '@mui/icons-material/Lock'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField/TextField'
import Badge from '@mui/material/Badge'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'


export default function Registration() {
    const [email, setEmail] = useState("")
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center ', height: '100vh', justifyContent: 'center' }}>
            <Box >
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '27ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Mail /></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '27ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }}
                />
                <Button sx={{ m: 1, width: '35ch' }} variant="contained" color="success">Sign Up</Button>
                <Container sx={{ display: 'flex', textAlign: 'center ', justifyContent: 'center' }}>
                    <IconButton size="large">
                        <Badge>
                            <FacebookIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <Badge>
                            <GoogleIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <Badge>
                            <InstagramIcon />
                        </Badge>
                    </IconButton>
                </Container>
            </Box>
        </Container >
    )
}

