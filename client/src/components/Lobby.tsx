/** @format */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { buttonMargin, containerStyle, CoverImage, WallPaper, Widget } from './style'

export default function MusicPlayerSlider() {
	const currentGame = useSelector((state: IReduxStore) => state.gameroom.games)
	const isAhost = useSelector((state: IReduxStore) => state.user.isAHost)
	const navigate = useNavigate()

	const handleStartGame = () => {
		navigate('/gameroom')
	}

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
								<img
									alt="can't win - Chilling Sunday"
									src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'
								/>
							</CoverImage>
							<Box sx={{ ml: 1.5, minWidth: 0 }}>
								<Typography variant='h6' color='text.secondary' fontWeight={500}>
									{player.player}
								</Typography>
								<Typography noWrap>
									<b>Best score:</b>
									<span>{player.scores}</span>
								</Typography>
							</Box>
						</Box>
					))}
				</Widget>
				<WallPaper />
				{isAhost && (
					<Button variant='contained' sx={buttonMargin} onClick={handleStartGame}>
						START GAME
					</Button>
				)}
			</Box>
		</Container>
	)
}
