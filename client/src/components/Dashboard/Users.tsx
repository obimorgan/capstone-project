/** @format */
import EditIcon from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container/Container'
import Modal from '@mui/material/Modal/Modal'
import Stack from '@mui/material/Stack/Stack'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import { useEffect, useState } from 'react'
import { containerStyle, CoverImage, dashboardContainer, WallPaper, Widget } from '../style'

export default function Users() {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const [search, setSearch] = useState('')
	const [users, setUsers] = useState([])
	const [singleUser, setSingleUser] = useState<IUser>()
	const [editUser, setEditUser] = useState(true)
	const [userId, setUserId] = useState('')
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
	})
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
	})

	const handleNewUserDetails = (field: string, value: string) => {
		setNewUser((details) => ({
			...details,
			[field]: value,
		}))
	}

	const handleCreateUser = () => {
		setOpen(true)
		setEditUser(false)
	}

	const handleCreateUserSubmit = () => {
		createAUser()
		handleClose()
		window.location.reload()
	}

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
	const createAUser = async () => {
		try {
			const response = await fetch(`http://localhost:3001/user/register`, {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: { 'content-type': 'application/json' },
			})
			if (!response) throw new Error('User not found')
		} catch (error) {
			console.log(error)
		}
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

	const handleEditUser = (userId: string) => {
		setUserId(userId)
		setOpen(true)
	}

	const handleSubmit = () => {
		editProfile()
		handleClose()
		window.location.reload()
	}
	useEffect(() => {
		fetchSingleUser()
	}, [userId])

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<Container sx={dashboardContainer}>
			<Typography sx={{ fontWeight: '500', zIndex: 1 }} variant='h3'>
				USERS
			</Typography>
			<Box sx={{ zIndex: 1, display: 'flex', justifyContent: 'between', alignItems: 'center', mt: 1 }}>
				<TextField
					id='outlined-name'
					label='Search user...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button
					onClick={handleCreateUser}
					sx={{ width: '25ch', height: '7ch', ml: 2 }}
					variant='contained'
					color='success'
				>
					create a user
				</Button>
				{/* <Box sx={{ flexGrow: 1 }} /> */}
			</Box>
			<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
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
						users
							.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
							.map((player) => (
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
				{editUser ? (
					singleUser && (
						<Container sx={containerStyle}>
							<Widget>
								<Typography variant='h6' sx={{ my: 2, fontWeight: 700 }}>
									EDIT USER
								</Typography>
								<Container sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around' }}>
									<Stack direction='row'>
										<Box sx={{ mr: 3 }}>
											<CoverImage sx={{ height: 200, width: 200 }}>
												<img src={singleUser.avatar} />
											</CoverImage>
											<EditIcon />
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
												color='info'
											>
												Edit User
											</Button>
										</Stack>
									</Stack>
								</Container>
							</Widget>
						</Container>
					)
				) : (
					<Container sx={containerStyle}>
						<Widget>
							<Typography variant='h6' sx={{ my: 2, fontWeight: 700 }}>
								CREATE A NEW USER
							</Typography>
							<Container sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around' }}>
								<Stack direction='row'>
									<Box sx={{ mr: 3 }}>
										<CoverImage sx={{ height: 200, width: 200 }}>
											<img src={singleUser.avatar} />
										</CoverImage>
										<EditIcon />
									</Box>
									<Stack component='form' direction='column' sx={{ mb: 5 }}>
										<TextField
											id='outlined-start-adornment'
											sx={{ width: '30ch' }}
											label='name'
											value={newUser.name}
											onChange={(e) => handleNewUserDetails('name', e.target.value)}
										/>

										<TextField
											id='outlined-start-adornment'
											sx={{ mt: 2, width: '30ch' }}
											label='email'
											value={newUser.email}
											onChange={(e) => handleNewUserDetails('email', e.target.value)}
										/>

										<TextField
											id='outlined-start-adornment'
											sx={{ mt: 2, width: '30ch' }}
											label='password'
											value={newUser.password}
											onChange={(e) => handleNewUserDetails('password', e.target.value)}
										/>
										<Button
											onClick={handleCreateUserSubmit}
											sx={{ mt: 5, width: '34ch', height: '7ch' }}
											variant='contained'
											color='info'
										>
											Create
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
