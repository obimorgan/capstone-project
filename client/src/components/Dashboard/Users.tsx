/** @format */
import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { useSelector } from 'react-redux'
import { containerStyle, CoverImage, modalStyle, WallPaper, Widget } from '../style'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack/Stack'
import TextField from '@mui/material/TextField/TextField'
import { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal/Modal'
import Button from '@mui/material/Button/Button'

export default function Users() {
	const [open, setOpen] = useState(false)
	// const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [search, setSearch] = useState('')
	const [users, setUsers] = useState([])
	const [singleUser, setSingleUser] = useState<IUser>()
	const [userId, setUserId] = useState('')
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
	})

	const handleInputs = (field: string, value: string) => {
		setInputs((details) => ({
			...details,
			[field]: value,
		}))
	}

	const fetchUsers = async () => {
		try {
			let response = await fetch(`http://localhost:3001/user`)
			if (!response) throw new Error('User not found')
			const user = await response.json()
			setUsers(user)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchSingleUser = async () => {
		try {
			let response = await fetch(`http://localhost:3001/user/${userId}`)
			if (!response) throw new Error('User not found')
			const user = await response.json()
			setSingleUser(user)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchSingleUser()
	}, [userId])

	useEffect(() => {
		fetchUsers()
	}, [])

	const handleEditUser = (userId: string) => {
		setUserId(userId)
		setOpen(true)
	}
	const handleSubmit = () => {
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
		editProfile()
	}

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
				<Box sx={{ zIndex: 1, display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
					<TextField
						id='outlined-name'
						label='Search user...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Typography sx={{ ml: 5, fontWeight: '500' }} variant='h3'>
						USERS
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
				</Box>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Player</TableCell>
							<TableCell align='left'>Email</TableCell>
							<TableCell align='left'>Registered</TableCell>
							<TableCell align='right'>Bestscore</TableCell>
						</TableRow>
					</TableHead>
					{users &&
						users.map((player) => (
							<TableBody key={player._id}>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell>
										<Stack direction='row' sx={{ align: 'center' }}>
											<EditIcon sx={{ mr: 1, my: 'auto' }} onClick={(e) => handleEditUser(player._id)} />
											<Avatar alt='avatar' src={player.avatar} sx={{ width: 28, height: 28 }} />
											<Typography sx={{ ml: 1, my: 'auto' }}>{player.name}</Typography>
										</Stack>
									</TableCell>
									<TableCell align='left'>{player.email}</TableCell>
									<TableCell align='left'>{player.createdAt}</TableCell>
									<TableCell align='right'>{player.bestScore}</TableCell>
								</TableRow>
							</TableBody>
						))}
				</Table>
			</Box>
			<WallPaper />
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				{singleUser && (
					<Container sx={containerStyle}>
						<Widget>
							<Typography variant='body1' sx={{ m: 1 }}>
								Edit user
							</Typography>
							<Container sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around' }}>
								<Stack direction='row'>
									<Box sx={{ mr: 3 }}>
										<CoverImage sx={{ height: 200, width: 200 }}>
											<img src={singleUser.avatar} />
										</CoverImage>
									</Box>
									<Stack component='form' direction='column' sx={{ mb: 5 }}>
										<TextField
											id='outlined-start-adornment'
											sx={{ width: '30ch' }}
											label={singleUser.name}
											value={inputs.name}
											onChange={(e) => handleInputs('name', e.target.value)}
										/>
										<TextField
											id='outlined-start-adornment'
											sx={{ mt: 2, width: '30ch' }}
											label={singleUser.email}
											value={inputs.email}
											onChange={(e) => handleInputs('email', e.target.value)}
										/>
										<Button
											onClick={handleSubmit}
											sx={{ mt: 5, width: '34ch', height: '7ch' }}
											variant='contained'
											color='success'
										>
											Edit User
										</Button>
									</Stack>
								</Stack>
							</Container>
						</Widget>
					</Container>
				)}
			</Modal>
		</Container>
	)
}
