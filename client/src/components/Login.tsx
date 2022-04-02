/** @format */

import { Mail } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import LockIcon from '@mui/icons-material/Lock'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack/Stack'
import TextField from '@mui/material/TextField/TextField'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { userLoginAction } from '../redux/actions'
import { Background, containerStyle, LogoImage } from './style'

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
				body: credentials && JSON.stringify(credentials),
				headers: {
					Accept: 'application/json',
					'content-type': 'application/json',
					withCredentials: 'true',
				},
				// withCredentials: true,
				credentials: 'include',
			})
			if (response.status === 201) {
				localStorage.setItem('token', 'Hello')
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
		<>
			<Container sx={containerStyle}>
				<Background />
				<Container sx={{ display: 'flex', justifyContent: 'center', height: '200px', mb: 10 }}>
					<LogoImage>
						<img
							src='https://www.undergroundgolf.no/wp-content/uploads/2021/05/PRINT-_raster_-UG-logo-_with-additional-info_-FULL-stylized-BG.svg'
							alt='logImg'
						/>
					</LogoImage>
				</Container>
				<Container sx={{ display: 'flex', justifyContent: 'center' }}>
					<Stack component='form' direction='column' sx={{ mt: 10, mb: 15 }}>
						<TextField
							type='email'
							id='outlined-start-adornment'
							sx={{ width: '30ch' }}
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
							type='password'
							id='outlined-start-adornment'
							sx={{ mt: 2, width: '30ch' }}
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
						<Button
							onClick={handleSubmit}
							sx={{ mt: 5, width: '31ch', height: '7ch' }}
							variant='contained'
							color='success'
						>
							Log In
						</Button>
						<Container sx={{ mt: 2 }}>
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
					</Stack>
				</Container>
			</Container>
		</>
	)
}
