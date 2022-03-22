/** @format */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { buttonMargin, containerStyle, CoverImage, WallPaper, Widget } from './style'
import { reRenderLobbyAction, setCurrentGameDetailsAction } from '../redux/actions'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3001', { transports: ['websocket'] })

// import { io } from 'socket.io-client'
// const socket = io('http://localhost:3001', { transports: ['websocket'] })

export default function MusicPlayerSlider() {
	const currentGame = useSelector((state: IReduxStore) => state.gameroom.games)
	const isAhost = useSelector((state: IReduxStore) => state.user.isAHost)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleStartGame = () => {
		navigate('/hole1')
	}
	console.log('AT THE LOBBY')

	const query = currentGame?._id
	console.log('@Lobby', query)
	const fetchCurrentGame = async () => {
		try {
			let response = await fetch(`http://localhost:3001/games/${query}`)
			if (response.ok) {
				let data = await response.json()
				dispatch(setCurrentGameDetailsAction(data))
				dispatch(reRenderLobbyAction(false))

				console.log('setting game details AT THE LOBBY', data)
			} else {
				throw new Error()
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchCurrentGame()
	}, [])

	function refreshPage() {
		window.location.reload()
		console.log('REFRESH PAGE')
	}
	setInterval(refreshPage, 3000)

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden' }}>
				<Widget>
					<h1>Welcome to game</h1>
					<h1>{currentGame?.gameName}</h1>
					<h2>Game-pin: {currentGame?.gamePin}</h2>
					<Typography variant='h6' color='text.secondary' fontWeight={500}>
						{isAhost ? <b>Waiting for players to join...</b> : <b>Waiting for the host to start the game </b>}
					</Typography>
					{currentGame?.players.map((player, index) => (
						<Box key={index} sx={{ display: 'flex', alignItems: 'center', m: 1, overflow: 'hidden' }}>
							<CoverImage>
								<img src={player.avatar} />
							</CoverImage>
							<Box sx={{ ml: 1.5, minWidth: 0 }}>
								<Typography variant='h6' color='text.secondary' fontWeight={500}>
									{player.name}
								</Typography>
								<Typography noWrap>
									<b>Best score:</b>
									{/* <span>{player.scores}</span> */}
								</Typography>
							</Box>
						</Box>
					))}
				</Widget>
				<WallPaper />
				{/* {isAhost && ( */}
				<Button variant='contained' sx={buttonMargin} onClick={handleStartGame}>
					START GAME
				</Button>
				{/* )} */}
			</Box>
		</Container>
	)
}
