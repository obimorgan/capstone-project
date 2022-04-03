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
import { setGameInProgressAction, setAHostAction, setCurrentGameDetailsAction } from '../../redux/actions'
import Profile from './Profile'
import { squareBtn, containerStyle, modalStyle, Widget } from '../style'
import BurgerMenu from '../BurgerMenu'
import Typography from '@mui/material/Typography/Typography'
import GameInProgress from '../GameInProgress'
import EditProfile from '../EditProfile'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

export default function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const gameInProgress = useSelector((state: IReduxStore) => state.gameroom.setGameInProgress)
	const [isGuest, setIsGuest] = useState(false)
	const [gameName, setGameName] = useState<string>()
	const [joiningGamePin, setJoiningGamePin] = useState('')
	const [createGame, setCreateGame] = useState(false)
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

	const handleOpen = () => {
		setOpen(true)
	}

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
		console.log('Creating a new Game called: ', gameName)
		// navigate('/lobby')
	}

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
		socket.on('connect', () => {
			console.log('Connection is now established!')
		})
	}, [])

	socket.on('display game', (data) => {
		const query = data._id
		console.log('GAME ID:', query)
		console.log('current gamePin: ', data.gamePin)
		fetchCurrentGame(query)
		navigate('/lobby')
	})
	socket.on('joining player', (data) => {
		const query = data._id
		fetchCurrentGame(query)
		console.log('A NEW player is joining')
		setOpen(false)
		dispatch(setGameInProgressAction(true))
		console.log()
		setIsGuest(true)
	})

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
			<Container sx={containerStyle}>
				<EditProfile />
				<Profile />
				{!gameInProgress ? (
					<>
						<Box>
							<Widget sx={{ display: 'flex', direction: 'row', justifyContent: 'start' }}>
								<Button
									sx={squareBtn}
									variant='contained'
									color='success'
									onClick={(e) => {
										handleOpen()
										setCreateGame(true)
									}}
								>
									Create a new Game
								</Button>
								<Typography sx={{ m: 'auto', variant: 'h6', color: 'text.secondary', fontWeight: 500 }}>
									{' '}
									Be in charge of the scoring.
								</Typography>
							</Widget>
						</Box>
						<Box>
							<Widget sx={{ display: 'flex', direction: 'row', justifyContent: 'end', mt: 1 }}>
								<Typography sx={{ m: 'auto', variant: 'h6', color: 'text.secondary', fontWeight: 500 }}>
									Swing and relax.
								</Typography>
								<Button
									sx={squareBtn}
									variant='contained'
									color='success'
									onClick={(e) => {
										handleOpen()
										setCreateGame(false)
									}}
								>
									join a game
								</Button>
							</Widget>
						</Box>
					</>
				) : (
					<GameInProgress />
				)}
				<BurgerMenu />

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
