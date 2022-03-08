/** @format */

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { containerStyle, CoverImage, WallPaper, Widget } from './style'

export default function MusicPlayerSlider() {
	const theme = useTheme()
	const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000'
	const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
	const currentGame = useSelector((state: IReduxStore) => state.gameroom.games)
	// const currentUser = useSelector((state: IReduxSto))
	console.log(currentGame)

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden' }}>
				<Widget>
					<h1>Current game: {currentGame?.gameName}</h1>
					<Typography variant='h6' color='text.secondary' fontWeight={500}>
						<b>Wait for other players to join..</b>
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
						<CoverImage>
							<img
								alt="can't win - Chilling Sunday"
								src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'
							/>
						</CoverImage>
						<Box sx={{ ml: 1.5, minWidth: 0 }}>
							<Typography variant='h6' color='text.secondary' fontWeight={500}>
								Alice
							</Typography>
							<Typography noWrap>
								<b>Best score:</b>
								<span> 30</span>
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
						<CoverImage>
							<img
								alt="can't win - Chilling Sunday"
								src='https://images.unsplash.com/photo-1635003913011-95971abba560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80'
							/>
						</CoverImage>
						<Box sx={{ ml: 1.5, minWidth: 0 }}>
							<Typography variant='h6' color='text.secondary' fontWeight={500}>
								Barbara
							</Typography>
							<Typography noWrap>
								<b>Best score:</b>
								<span> 42</span>
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
						<CoverImage>
							<img
								alt="can't win - Chilling Sunday"
								src='https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
							/>
						</CoverImage>
						<Box sx={{ ml: 1.5, minWidth: 0 }}>
							<Typography variant='h6' color='text.secondary' fontWeight={500}>
								Carl
							</Typography>
							<Typography noWrap>
								<b>Best score:</b>
								<span> 42</span>
							</Typography>
						</Box>
					</Box>
				</Widget>
				{/* Wallpaper */}
				<WallPaper />
			</Box>
		</Container>
	)
}
