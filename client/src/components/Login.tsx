/** @format */

import { Mail } from '@mui/icons-material'
import LockIcon from '@mui/icons-material/Lock'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField/TextField'
import Badge from '@mui/material/Badge'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { userLoginAction } from '../redux/actions'

export default function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState<ILoginCredentials>({
		email: '',
		password: '',
	})
	const handleCredentials = (field: string, value: string) => {
		setCredentials((details) => ({
			...details,
			[field]: value,
		}))
	}
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			const response = await fetch('http://localhost:3001/user/login', {
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: { 'content-type': 'application/json' },
			})
			if (response.status === 201) {
				dispatch(userLoginAction())
				navigate('/')
			} else {
				throw new Error()
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Container
			sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center ', height: '100vh', justifyContent: 'center' }}
		>
			<Box component='form'>
				<TextField
					id='outlined-start-adornment'
					sx={{ m: 1, width: '27ch' }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Mail />
							</InputAdornment>
						),
					}}
					value={credentials.email}
					onChange={(e) => handleCredentials('email', e.target.value)}
				/>
				<TextField
					id='outlined-start-adornment'
					sx={{ m: 1, width: '27ch' }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<LockIcon />
							</InputAdornment>
						),
					}}
					value={credentials.password}
					onChange={(e) => handleCredentials('password', e.target.value)}
				/>
				<Button onClick={handleSubmit} sx={{ m: 1, width: '35ch' }} variant='contained' color='success'>
					Log In
				</Button>
				<Container sx={{ display: 'flex', textAlign: 'center ', justifyContent: 'center' }}>
					<IconButton size='large'>
						<Badge>
							<FacebookIcon />
						</Badge>
					</IconButton>
					<IconButton size='large'>
						<Badge>
							<GoogleIcon />
						</Badge>
					</IconButton>
					<IconButton size='large'>
						<Badge>
							<InstagramIcon />
						</Badge>
					</IconButton>
				</Container>
			</Box>
		</Container>
	)
}
