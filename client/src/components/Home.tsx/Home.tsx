/** @format */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField/TextField'
import React, { FormEvent, useEffect, useState } from 'react'
import { buttonMargin, containerStyle, modalStyle } from '../style'
import { useNavigate } from 'react-router'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserAction } from '../../redux/actions'
import { errorMonitor } from 'events'
import { ErrorOutline } from '@mui/icons-material'

// const { REACT_APP_SERVER_URL } = process.env
const socket = io('http://localhost:3001', { transports: ['websocket'] })

export default function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [gameName, setGameName] = useState('')
	const [joiningGamePin, setJoiningGamePin] = useState('')
	const [createGame, setCreateGame] = useState(false)
	const [open, setOpen] = useState(false)
	const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)
	const handleClose = () => setOpen(false)

	const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

	// when a user clicks on "create a new game"
	const handleOpen = () => {
		setOpen(true)
	}

	//2 Creatign a new game
	const handleCreateAGame = async (e: FormEvent) => {
		e.preventDefault()
		const gamePin = Math.floor(Math.random() * 90000) + 10000
		socket.emit('create a game', { gameName: gameName, gamePin: gamePin, users: currentUser._id }) // need to send id of the user
		// b|e is creating a new game!
		console.log('Creating a new Game called: ', gameName)
		// navigate to lobby - where the host waits for other palyers to join
		navigate('/lobby')
	}

	const handleJoinGame = async (e: FormEvent) => {
		e.preventDefault()
		socket.emit('create a game', { joingGamePin: joiningGamePin, users: currentUser._id }) // need to send id of the user
		// b|e is joining the user to an existing game!
		console.log('Joined game: ', gameName)
		navigate('/lobby')
	}

	useEffect(() => {
		// fetchCurrentUser()
		//1 trapping connection from  server
		socket.on('connect', () => {
			// socket.emit('online', {senderId})
		})
	}, [])

	return (
		<Container sx={containerStyle}>
			<Button
				sx={buttonMargin}
				variant='contained'
				onClick={(e) => {
					handleOpen()
					setCreateGame(true)
				}}
			>
				Create a new Game
			</Button>
			<Button
				sx={buttonMargin}
				variant='contained'
				onClick={(e) => {
					handleOpen()
					setCreateGame(false)
				}}
			>
				join a game
			</Button>
			<Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>
				Profile
			</Button>
			<Button sx={buttonMargin} variant='outlined' color='secondary' onClick={handleOpen}>
				Dashboard
			</Button>

			{/* Create game modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<>
					{createGame ? (
						<Box onSubmit={handleCreateAGame} component='form' sx={modalStyle} noValidate autoComplete='off'>
							<TextField
								id='Game Name'
								label='Enter Game Name'
								variant='outlined'
								value={gameName}
								onChange={(e) => setGameName(e.target.value)}
							/>
						</Box>
					) : (
						<Box onSubmit={handleJoinGame} component='form' sx={modalStyle} noValidate autoComplete='off'>
							<TextField
								id='Game Name'
								label='Enter Game Pin'
								variant='outlined'
								value={joiningGamePin}
								onChange={(e) => setJoiningGamePin(e.target.value)}
							/>
						</Box>
					)}
				</>
			</Modal>
		</Container>
	)
}
