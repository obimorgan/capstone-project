/** @format */

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Fab from '@mui/material/Fab/Fab'
import Stack from '@mui/material/Stack/Stack'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import { containerStyle, WallPaper } from '../style'

export default function LeaderBoardToday() {
	const [todaysGames, setTodaysGames] = useState([])

	const fetchTodaysGames = async () => {
		try {
			const response = await fetch('http://localhost:3001/games/todays')
			if (!response) throw new Error('Fetch was unsuccessful')
			const data = await response.json()
			// console.log(data)
			setTodaysGames(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchTodaysGames()
	}, [])

	console.log(todaysGames)
	let top3Array = []
	const getTop3scores = todaysGames
		.sort((a, b) => a.totalScore - b.totalScore)
		.slice(0, 3)
		.map((score) => {
			return top3Array.push(score)
		})

	return (
		<>
			<Navigation open={true} />
			<Container sx={containerStyle}>
				<Box sx={{ width: '100%', zIndex: 1, flexGrow: 1 }}>
					<Typography
						variant='h5'
						sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', mb: 3, fontWeight: 'bold' }}
					>
						TODAY'S LEADERBOARD
					</Typography>
					{todaysGames ? (
						<Fab sx={{ position: 'absolute', left: 20, zIndex: 1, top: 105, width: 35, height: 25 }}>
							<EmojiEventsIcon color='warning' fontSize='large' />
						</Fab>
					) : null}
					<Box sx={{ position: 'relative' }}>
						{todaysGames.length &&
							todaysGames
								.sort((a, b) => a.totalScore - b.totalScore)
								.slice(0, 3)
								.map((player) => (
									<Container sx={{ display: 'flex', direction: 'column', justifyContent: 'start', mb: 1 }}>
										<Stack direction='row' sx={{ alignItems: 'center' }}>
											<Avatar sx={{ m: 'auto' }} alt='avatar' src={player.avatar} />
											<Stack direction='row'>
												<Typography sx={{ fontWeight: 'bold', textAlign: 'start', ml: 1 }}>{player.name}</Typography>
												&nbsp;
												<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{player.totalScore}</Typography>
											</Stack>
										</Stack>
									</Container>
								))}
					</Box>
					<Table>
						<TableHead>
							<TableRow sx={{ '&:last-child td, &:last-child th': { borderTop: '1px solid' } }}>
								<TableCell>PLAYERS</TableCell>
								<TableCell align='right'>SCORE</TableCell>
							</TableRow>
						</TableHead>
						{todaysGames &&
							todaysGames
								.sort((a, b) => {
									return a.totalScore - b.totalScore
								})
								.slice(3)
								.map((player, index) => (
									<TableBody key={player._id}>
										<TableRow>
											<TableCell align='left'>
												<Stack direction='row'>
													<Avatar alt='avatar' src={player.avatar} />
													&nbsp;
													<Typography sx={{ display: 'flex', fontWeight: 'bold', m: 'auto' }}>{player.name}</Typography>
												</Stack>
											</TableCell>
											<TableCell align='right'>{player.totalScore}</TableCell>
										</TableRow>
									</TableBody>
								))}
					</Table>
				</Box>
				<WallPaper />
			</Container>
		</>
	)
}
