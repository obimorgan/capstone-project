/** @format */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { squareBtn, containerStyle, CoverImage, WallPaper, Widget } from './style'
import { reRenderLobbyAction, setCurrentGameDetailsAction } from '../redux/actions'
import { io } from 'socket.io-client'
import Stack from '@mui/material/Stack/Stack'
import zIndex from '@mui/material/styles/zIndex'
import Avatar from '@mui/material/Avatar/Avatar'

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
				dispatch(reRenderLobbyAction())

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
		// window.location.reload()
	}, [])

	// useEffect(() => {
	// 	window.location.reload()
	// }, [])

	// function refreshPage() {
	// 	window.location.reload()
	// 	console.log('REFRESH PAGE')
	// }
	// setInterval(refreshPage, 5000)

	return (
		<Container sx={containerStyle}>
			<Stack direction='column'>
				<Box sx={{ zIndex: 1 }}>
					<Typography variant='h4' color='text.secondary' fontWeight={500}>
						{currentGame?.gameName}
					</Typography>
					<Typography variant='h3' color='text.primary' fontWeight={500}>
						Game-pin: {currentGame?.gamePin}
					</Typography>
					<Typography variant='h6' color='text.secondary' fontWeight={500}>
						{isAhost ? <b>Waiting for players to join...</b> : <b>Waiting for the host to start the game </b>}
					</Typography>
				</Box>
				{currentGame?.players.map((player, index) => (
					<Box key={index} sx={{ display: 'flex', alignItems: 'center', m: 2, zIndex: 1 }}>
						<Avatar sx={{ width: 70, height: 70 }} alt='avatar' src={player.avatar} />
						<Box sx={{ m: 1.5 }}>
							<Typography variant='h6' color='text.secondary' fontWeight={500}>
								{player.name}
							</Typography>
						</Box>
					</Box>
				))}
				<WallPaper />
				{isAhost && (
					<Button variant='contained' onClick={handleStartGame}>
						START GAME
					</Button>
				)}
			</Stack>
		</Container>
	)
}
