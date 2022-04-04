/** @format */

import EditIcon from '@mui/icons-material/Edit'
import {
	Avatar,
	Box,
	Button,
	CircularProgress,
	Container,
	Fab,
	Input,
	Modal,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openEditProfileAction, updateProfilePImgAction } from '../redux/actions'
import { containerStyle, Widget } from './style'

const EditProfile = () => {
	const openEditProfile = useSelector((state: IReduxStore) => state.gameroom?.openEditProfile)
	const profile = useSelector((state: IReduxStore) => state.user?.currentUser)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(openEditProfile)
	const [isLoading, setIsLoading] = useState(false)
	const [inputs, setInputs] = useState(profile)

	const uploadImage = async (e) => {
		setIsLoading(true)
		const files = e.target.files
		const data = new FormData()
		data.append('file', files[0])
		data.append('upload_preset', 'ug-mini-golf')
		const res = await fetch('https://api.cloudinary.com/v1_1/obiincloud/image/upload', {
			method: 'POST',
			body: data,
		})
		const file = await res.json()
		dispatch(updateProfilePImgAction(file.secure_url))
		setInputs((details) => ({
			...details,
			avatar: file.secure_url,
		}))
		setIsLoading(false)
		console.log('upload')
	}

	const userId = profile?._id
	const editProfile = async () => {
		try {
			const response = await fetch(`http://localhost:3001/user/${userId}/editprofile`, {
				method: 'PUT',
				body: JSON.stringify(inputs),
				headers: { 'content-type': 'application/json' },
			})
			if (!response) throw new Error('User not found')
			console.log('user profile has been edited')
			window.location.reload()
		} catch (error) {
			console.log(error)
		}
	}

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
							<Avatar sx={{ width: 200, height: 200 }} alt='avatar' src={profile?.avatar} />
							<label htmlFor='upload-photo' style={{ marginLeft: '180px', marginTop: '5px', marginBottom: '5px' }}>
								<Input
									style={{ display: 'none' }}
									id='upload-photo'
									name='upload-photo'
									type='file'
									onChange={uploadImage}
								/>
								{isLoading && (
									<Box sx={{ display: 'flex', justifyContent: 'center' }}>
										<CircularProgress />
									</Box>
								)}
								<Fab color='secondary' size='small' component='span' aria-label='add' variant='extended'>
									<EditIcon /> photo
								</Fab>
							</label>
							<Stack component='form' direction='column'>
								<TextField
									type='text'
									id='outlined-start-adornment'
									sx={{ width: '30ch' }}
									label='name'
									value={inputs?.name}
									onChange={(e) => handleInputs('name', e.target.value)}
								/>

								<TextField
									type='text'
									id='outlined-start-adornment'
									sx={{ mt: 2, width: '30ch' }}
									label='email'
									value={inputs?.email}
									onChange={(e) => handleInputs('email', e.target.value)}
								/>
								<Button
									onClick={handleSubmit}
									sx={{ mt: 2, width: '34ch', height: '7ch' }}
									variant='contained'
									color='info'
								>
									Save
								</Button>
								<Button
									onClick={handleClose}
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
