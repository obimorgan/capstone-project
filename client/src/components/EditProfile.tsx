/** @format */

import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openEditProfileAction } from '../redux/actions'
import { containerStyle, CoverImage, Widget } from './style'
import EditIcon from '@mui/icons-material/Edit'
import SpeedDialAction from '@mui/lab/SpeedDialAction/SpeedDialAction'
import { display } from '@mui/system'
import zIndex from '@mui/material/styles/zIndex'

const EditProfile = () => {
	const openEditProfile = useSelector((state: IReduxStore) => state.gameroom.openEditProfile)
	const profile = useSelector((state: IReduxStore) => state.user.currentUser)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(openEditProfile)
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
	})

	const userId = profile._id

	const handleInputs = (field: string, value: string) => {
		setInputs((details) => ({
			...details,
			[field]: value,
		}))
	}

	const handleSubmit = () => {
		editProfile()
		handleClose()
		window.location.reload()
	}

	const editProfile = async () => {
		try {
			const response = await fetch(`http://localhost:3001/user/${userId}/editprofile`, {
				method: 'PUT',
				body: JSON.stringify(inputs),
				headers: { 'content-type': 'application/json' },
			})
			if (!response) throw new Error('User not found')
		} catch (error) {
			console.log(error)
		}
	}
	const handleClose = () => {
		setOpen(false)
		dispatch(openEditProfileAction(false))
	}

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Widget>
					<Container sx={containerStyle}>
						<Typography variant='h4' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', my: 2 }}>
							Edit Profile
						</Typography>
						<Stack sx={{ zIndex: 1, display: 'column', alignItems: 'center' }}>
							<CoverImage sx={{ height: 270, width: 270 }}>
								<img src={profile.avatar} />
							</CoverImage>
							<Button variant='outlined' sx={{ ml: 15, my: 1 }}>
								<EditIcon sx={{ color: 'primary', position: 'relative', height: 30 }} />
								<span>Edit photo</span>
							</Button>
							<Stack component='form' direction='column'>
								<TextField
									id='outlined-start-adornment'
									sx={{ width: '30ch' }}
									label={profile.name}
									value={inputs.name}
									onChange={(e) => handleInputs('name', e.target.value)}
								/>

								<TextField
									id='outlined-start-adornment'
									sx={{ mt: 2, width: '30ch' }}
									label={profile.email}
									value={inputs.email}
									onChange={(e) => handleInputs('email', e.target.value)}
								/>
								<Button
									onClick={handleSubmit}
									sx={{ mt: 2, width: '34ch', height: '7ch' }}
									variant='contained'
									color='info'
								>
									Edit User
								</Button>
								<Button
									onClick={handleSubmit}
									sx={{ mt: 1, width: '34ch', height: '7ch' }}
									variant='contained'
									color='success'
								>
									close
								</Button>
							</Stack>
						</Stack>
					</Container>
				</Widget>
			</Modal>
		</>
	)
}

export default EditProfile
