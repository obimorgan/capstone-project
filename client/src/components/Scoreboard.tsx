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
import { openScoreModalAction } from '../redux/actions'
import { containerStyle, scorePreview, WallPaper } from './style'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Scoreboard = () => {
	const myId = useSelector((state: IReduxStore) => state.user.currentUser._id)
	const currentBestScore = useSelector((state: IReduxStore) => state.user.currentUser.bestScore)
	const gameName = useSelector((state: IReduxStore) => state.gameroom.games.gameName)
	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)
	const dispatch = useDispatch()
	const myTotalScore = players.find((player) => player.playerId === myId).totalScore

	const handleSubmit = () => {
		console.log(currentBestScore)
		console.log(myTotalScore)
		if (currentBestScore > myTotalScore) {
			console.log('Set new best score')
			socket.emit('submit my total score', {
				myId: myId,
				totalScore: myTotalScore,
			})
		} else {
			return console.log('Current best score is not worth saving')
		}
	}

	// const handleBestScore = () => {
	// 	const submitHole1 = async () => {
	// 		try {
	// 			let response = await fetch(`http://localhost:3001/user`, {
	// 				method: 'PUT',
	// 				body: myTotalScore && JSON.stringify(myTotalScore),
	// 				headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
	// 			})
	// 			if (!response) throw new Error('Could not submit total scores')
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	submitHole1()
	// }

	return (
		<Container sx={containerStyle}>
			<Typography variant='h3' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
				The Winner of Game{gameName}
			</Typography>
			<TableContainer component={Paper} sx={{ zIndex: 1 }}>
				<Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
					Leaderboard
				</Typography>
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
				<Button onClick={handleSubmit}>Back to hole</Button>
			</TableContainer>
			<WallPaper />
		</Container>
	)
}

export default Scoreboard
