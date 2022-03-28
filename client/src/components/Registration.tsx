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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../redux/actions'
import { Background, containerStyle, LogoImage } from './style'
import Stack from '@mui/material/Stack/Stack'

export default function Registration() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState<ICredentials>({
		name: '',
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
			const response = await fetch('http://localhost:3001/user/register', {
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
		<Container sx={containerStyle}>
			<Background />
			<Container sx={{ display: 'flex', justifyContent: 'center', height: '400px' }}>
				<LogoImage>
					<img
						src='https://www.undergroundgolf.no/wp-content/uploads/2021/05/PRINT-_raster_-UG-logo-_with-additional-info_-FULL-stylized-BG.svg'
						alt='logImg'
					/>
				</LogoImage>
			</Container>
			<Container sx={{ display: 'flex', justifyContent: 'center' }}>
				<Stack direction='column' component='form' sx={{ mb: 4 }}>
					<TextField
						id='outlined-start-adornment'
						sx={{ m: 1, width: '30ch' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
						onChange={(e) => handleCredentials('name', e.target.value)}
						value={credentials.name}
					/>
					<TextField
						id='outlined-start-adornment'
						sx={{ m: 1, width: '30ch' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<Mail />
								</InputAdornment>
							),
						}}
						onChange={(e) => handleCredentials('email', e.target.value)}
						value={credentials.email}
					/>
					<TextField
						id='outlined-start-adornment'
						sx={{ m: 1, width: '30ch' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<LockIcon />
								</InputAdornment>
							),
						}}
						onChange={(e) => handleCredentials('password', e.target.value)}
						value={credentials.password}
					/>
					<Button sx={{ m: 1, width: '31ch' }} variant='contained' color='success' onClick={handleSubmit}>
						Register
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
				</Stack>
			</Container>
		</Container>
	)
}
