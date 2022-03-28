/** @format */

import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper/Paper'
import Stack from '@mui/material/Stack/Stack'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { textAlign } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reRenderLobbyAction, setUsersBestScoresAction } from '../redux/actions'
import { containerStyle, scorePreview, WallPaper, Widget } from './style'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

export default function LeaderBoard() {
	const dispatch = useDispatch()
	const reRenderLobby = useSelector((state: IReduxStore) => state.gameroom.reRenderLobby)
	const scores = useSelector((state: IReduxStore) => state.user.usersBestScores)

	useEffect(() => {
		const fetchUsersBestScore = async () => {
			try {
				const response = await fetch('http://localhost:3001/user')
				if (!response) throw new Error('Fetch was unsuccessful')
				const data = await response.json()
				dispatch(setUsersBestScoresAction(data))
				console.log('leaderboard')
			} catch (error) {
				console.log(error)
			}
		}
		fetchUsersBestScore()
	}, [reRenderLobby])

	const top3Array = []
	const getTop3scores = scores
		.sort((a, b) => a.bestScore - b.bestScore)
		.slice(0, 3)
		.map((score) => {
			return top3Array.push(score)
		})

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
				<Widget>
					<Typography
						variant='h5'
						sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', mt: 5, mb: 3, fontWeight: 'bold' }}
					>
						LEADERBOARD
					</Typography>
					{/* <TableContainer component={Paper} sx={{ zIndex: 2 }}> */}
					<Container sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
						<Stack>
							<Stack direction='row'>
								<EmojiEventsIcon color='warning' />
								<Avatar sx={{ m: 'auto' }} alt='second place' src={top3Array[0].avatar} />
							</Stack>
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[0].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[0].bestScore}</Typography>
							</Stack>
						</Stack>
					</Container>
					<Box
						sx={{
							display: 'flex',
							direction: 'row',
							justifyContent: 'space-around',
							width: '100%',
							fontWeight: 'bold',
							mb: 2,
						}}
					>
						<Stack>
							<Avatar sx={{ m: 'auto' }} alt='second place' src={top3Array[1].avatar} />
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[1].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[1].bestScore}</Typography>
							</Stack>
						</Stack>
						<Stack>
							<Avatar sx={{ m: 'auto' }} alt='second place' src={top3Array[2].avatar} />
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[2].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[2].bestScore}</Typography>
							</Stack>
						</Stack>
					</Box>
					<Table>
						<TableHead>
							<TableRow sx={{ '&:last-child td, &:last-child th': { borderTop: '1px solid' } }}>
								{/* <TableCell>RANK</TableCell> */}
								<TableCell>PLAYERS</TableCell>
								<TableCell align='right'>SCORE</TableCell>
							</TableRow>
						</TableHead>
						{scores &&
							scores
								.sort((a, b) => {
									return a.bestScore - b.bestScore
								})
								.slice(3, -5)
								.map((player, index) => (
									<TableBody key={player._id}>
										<TableRow>
											{/* <TableCell component='th' scope='row'>
											{(index = index + 1)}
										</TableCell> */}
											<TableCell align='left'>
												<Stack direction='row'>
													<Avatar alt='avatar' src={player.avatar} />
													&nbsp;
													<Typography sx={{ display: 'flex', fontWeight: 'bold', m: 'auto' }}>{player.name}</Typography>
												</Stack>
											</TableCell>
											<TableCell align='right'>{player.bestScore}</TableCell>
										</TableRow>
									</TableBody>
								))}
					</Table>
				</Widget>
			</Box>
			<WallPaper />
		</Container>
	)
}
