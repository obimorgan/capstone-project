/** @format */

import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container/Container'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { containerStyle, WallPaper } from './style'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Scoreboard = () => {
	const navigate = useNavigate()
	const game = useSelector((state: IReduxStore) => state.gameroom.games)
	const dispatch = useDispatch()
	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)
	const myId = useSelector((state: IReduxStore) => state.user.currentUser._id)

	const handleSubmit = () => {
		players.forEach((player) => {
			socket.emit('submit my total score', {
				myId: player.playerId,
				totalScore: player.totalScore,
			})
		})
		navigate('/leaderboard')
	}

	// socket.on('current best score updated', () => {
	// 	console.log('current best score updated')
	// })

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
				<Typography variant='button' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
					THE FINAL SCORES OF GAME:
				</Typography>
				<Typography variant='h4' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', mb: 5 }}>
					{game.gameName}
				</Typography>
				{/* <TableContainer component={Paper} sx={{ zIndex: 1 }}> */}
				{/* <Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
					Leaderboard
				</Typography> */}
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>Players</TableCell>
							<TableCell align='right'>Total Score</TableCell>
						</TableRow>
					</TableHead>
					{players &&
						players
							.sort((a, b) => {
								return a.totalScore - b.totalScore
							})
							.map((player, index) => (
								<TableBody key={player._id}>
									<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
										<TableCell component='th' scope='row'>
											{(index = index + 1)}
										</TableCell>
										<TableCell align='left'>{player.name}</TableCell>
										<TableCell align='right'>{player.totalScore}</TableCell>
									</TableRow>
								</TableBody>
							))}
				</Table>
				{/* </TableContainer> */}
				<Box>
					<Button
						onClick={handleSubmit}
						variant='contained'
						color='success'
						sx={{ m: 1, zIndex: 1, borderRadius: 100, height: 100, width: 100, mt: 5 }}
					>
						end game
					</Button>
				</Box>
			</Box>
			<WallPaper />
		</Container>
	)
}

export default Scoreboard
