/** @format */

import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container/Container'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { strictEqual } from 'assert'
import { useDispatch, useSelector } from 'react-redux'
import { openScoreModalAction, reRenderLobbyAction } from '../redux/actions'
import { containerStyle, scorePreview, WallPaper } from './style'
import { io } from 'socket.io-client'
import Box from '@mui/material/Box/Box'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Scoreboard = () => {
	const gameName = useSelector((state: IReduxStore) => state.gameroom.games.gameName)
	const dispatch = useDispatch()

	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)
	const myId = useSelector((state: IReduxStore) => state.user.currentUser._id)
	const currentBestScore = useSelector((state: IReduxStore) => state.user.currentUser.bestScore)
	const myTotalScore = players.find((player) => player.playerId === myId).totalScore

	console.log(players)

	const playersId = players.map((player) => {
		const id = player.playerId
		console.log(id)
	})

	const playerstotalScore = players.map((player) => {
		const scores = player.totalScore
		console.log(scores)
	})

	const handleSubmit = () => {
		players.forEach((player) => {
			if (currentBestScore > myTotalScore) {
				console.log('Set new best score')
				socket.emit('submit my total score', {
					myId: player.playerId,
					totalScore: player.totalScore,
				})
				// dispatch(reRenderLobbyAction(true))
			} else {
				return console.log('Current best score is not worth saving')
			}
		})
	}

	// const handleSubmit = () => {
	// 	console.log(currentBestScore)
	// 	console.log(myTotalScore)
	// 	if (currentBestScore > myTotalScore) {
	// 		console.log('Set new best score')
	// 		socket.emit('submit my total score', {
	// 			myId: myId,
	// 			totalScore: myTotalScore,
	// 		})
	// 		dispatch(reRenderLobbyAction(true))
	// 	} else {
	// 		return console.log('Current best score is not worth saving')
	// 	}
	// }

	socket.on('current best score updated', () => {
		console.log('current best score updated')
	})

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
				<Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
					The Winner of
				</Typography>
				<Typography variant='h4' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', mb: 5 }}>
					{gameName}
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
						Submit Scores
					</Button>
				</Box>
			</Box>
			<WallPaper />
		</Container>
	)
}

export default Scoreboard
