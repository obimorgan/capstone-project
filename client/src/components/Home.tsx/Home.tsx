/** @format */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField/TextField'
import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { io } from 'socket.io-client'
import { reRenderLobbyAction, setAHostAction, setCurrentGameDetailsAction } from '../../redux/actions'
import Profile from './Profile'
import { buttonMargin, containerStyle, modalStyle } from '../style'

// const { REACT_APP_SERVER_URL } = process.env
const socket = io('http://localhost:3001', { transports: ['websocket'] })

export default function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [gameName, setGameName] = useState<string>()
	const [joiningGamePin, setJoiningGamePin] = useState('')
	const [createGame, setCreateGame] = useState(false)
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

	// when a user clicks on "create a new game"
	const handleOpen = () => {
		setOpen(true)
	}
	console.log('Current user ID:', currentUser?._id)
	//2 Creatign a new game
	const handleCreateAGame = async (e: FormEvent) => {
		e.preventDefault()
		dispatch(setAHostAction())

		const gamePin = Math.floor(Math.random() * 90000) + 10000
		socket.emit('create a game', {
			gameName: gameName,
			gamePin: gamePin,
			userId: currentUser?._id,
			avatar: currentUser?.avatar,
			name: currentUser?.name,
		})
		// b|e is creating a new game!
		console.log('Creating a new Game called: ', gameName)
		// navigate to lobby - where the host waits for other palyers to join
		navigate('/lobby')
	}

	// Joinning a game
	const handleJoinGame = async (e: FormEvent) => {
		e.preventDefault()
		const gamePin = parseInt(joiningGamePin)
		socket.emit('joining a game', {
			gamePin: gamePin,
			userId: currentUser?._id,
			avatar: currentUser?.avatar,
			name: currentUser?.name,
		})
	}

	useEffect(() => {
		// //Initial connection, trapping connection from  server
		// socket.on('connect', () => {
		// 	console.log('Connection is now established!')
		// })
		socket.on('display game', (data) => {
			// b|e is joining the user to an existing game!
			const query = data._id
			console.log('GAME ID:', query)
			console.log('current gamePin: ', data.gamePin)
			fetchCurrentGame(query)
			dispatch(reRenderLobbyAction(true))
			navigate('/lobby')
		})
		// game pin from server.
		socket.on('joining player', (data) => {
			const query = data._id
			fetchCurrentGame(query)
			console.log('A NEW player is joining')
			dispatch(reRenderLobbyAction(true))
			navigate('/lobby')
		})
	}, [])

	const fetchCurrentGame = async (query: string) => {
		try {
			let response = await fetch(`http://localhost:3001/games/${query}`)
			if (response.ok) {
				let data = await response.json()
				dispatch(setCurrentGameDetailsAction(data))
				console.log(data)
				console.log('setting game details..')
			} else {
				throw new Error()
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Profile />
			<Container sx={containerStyle}>
				<Button
					sx={buttonMargin}
					variant='contained'
					color='success'
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
					color='success'
					onClick={(e) => {
						handleOpen()
						setCreateGame(false)
					}}
				>
					join a game
				</Button>
				<Button sx={buttonMargin} variant='outlined' color='primary' onClick={handleOpen}>
					Profile
				</Button>
				<Button sx={buttonMargin} variant='outlined' color='primary' onClick={handleOpen}>
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
		</>
	)
}
