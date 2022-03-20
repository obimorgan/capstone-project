/** @format */

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { Button, IconButton, TextField, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { handleBreakpoints } from '@mui/system'
import e from 'express'
import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { openScoreModalAction, setCurrentHoleStatusAction, setHole1ScoresAction } from '../../redux/actions'
import { containerStyle, WallPaper } from '../style'
// import Scorepreview from './Scorepreview'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Hole1 = () => {
	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [player1Score, setPlayer1Score] = useState(0)
	const [player2Score, setPlayer2Score] = useState(0)
	const [player3Score, setPlayer3Score] = useState(0)
	const [player4Score, setPlayer4Score] = useState(0)
	const [score, setScore] = useState(0)
	const [hole1Scores, setHole1Scores] = useState({
		name: '',
		score: 0,
	})

	const handleScore = (e: any) => {
		console.log('Decrease score')
		// setHole1([...hole1, { [field]: value }])
	}

	// const handleScore = (index: number) => (e: any) => {
	// 	console.log('index: ' + index)
	// 	console.log('property name: ' + e.target.name)
	// 	let newArr = [...hole1Players] // copying the old datas array
	// 	newArr[index] = e.target.value // replace e.target.value with whatever you want to change it to

	// 	dispatch(setHole1ScoresAction(newArr))
	// }

	// const handleDecreaseScore = () => {
	// 	setScore(score - 1)
	// }

	// const handleIncreaseScore = () => {
	// 	setScore(score + 1)
	// }

	// const handlePlayerScores = () => {
	// 	socket.emit('hole1', [
	// 		// { gameId: gameDetails?._id },
	// 		// gameDetails?.players.length === 1
	// 		// 	? { player1: { score: player1Score, id: gameDetails?.players[0].player, name: gameDetails?.players[0].name } }
	// 		// 	: '',
	// 		// // { player2: { score: player2Score, id: gameDetails?.players[1].player, name: gameDetails?.players[1].name } },
	// 		// gameDetails?.players.length === 2
	// 		// 	? { player2: { score: player2Score, id: gameDetails?.players[1].player, name: gameDetails?.players[1].name } }
	// 		// 	: '',
	// 		// gameDetails?.players.length === 3
	// 		// 	? { player3: { score: player3Score, id: gameDetails?.players[2].player, name: gameDetails?.players[2].name } }
	// 		// 	: '',
	// 		// gameDetails?.players.length === 4
	// 		// 	? { player4: { score: player4Score, id: gameDetails?.players[3].player, name: gameDetails?.players[3].name } }
	// 		// 	: '',
	// 		{ gameId: gameDetails?._id },
	// 		{ player1: { score: player1Score, id: gameDetails?.players[0].player, name: gameDetails?.players[0].name } },
	// 		{ player2: { score: player2Score, id: gameDetails?.players[1].player, name: gameDetails?.players[1].name } },
	// 		{ player3: { score: player3Score, id: gameDetails?.players[2].player, name: gameDetails?.players[2].name } },
	// 		{ player4: { score: player4Score, id: gameDetails?.players[3].player, name: gameDetails?.players[3].name } },
	// 	])
	// 	fetchScores()
	// 	console.log('hole 1 Completed')
	// 	navigate('/hole2')
	// }
	// const handlePlayerScores = async () => {
	// 	const postScores = fetch(`http://localhost:3001/games/${gameId}/hole1`, {
	// 		method: 'POST', body: JSON.stringify(), headers: {'content-type': 'application/json'}}
	// 	})
	// }

	// const gameId = gameDetails?._id
	// const fetchScores = async () => {
	// 	try {
	// 		let response = await fetch(`http://localhost:3001/games/${gameId}/hole1`)
	// 		if (!response.ok) return Error('Could not find game')
	// 		let gameStatus = await response.json()
	// 		console.log('hole 1 results:', gameStatus)
	// 		dispatch(setCurrentHoleStatusAction(gameStatus))
	// 		dispatch(openScoreModalAction(true))
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	return (
		<Container sx={containerStyle}>
			<Typography variant='h1' sx={{ zIndex: 1 }}>
				HOLE 1
			</Typography>
			<TableContainer component={Paper} sx={{ zIndex: 1 }}>
				<Table sx={{ minWidth: '100%' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Players</TableCell>
							<TableCell align='right'>Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {gameDetails?.players[0] ? (
							<TableRow key={gameDetails?.players[0].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[0].name}
								</TableCell>
								<TableCell align='right'>
									<IconButton onClick={() => setPlayer1Score(player1Score - 1)}>
										<RemoveCircleOutlineRoundedIcon />
									</IconButton>
									{player1Score}
									<IconButton onClick={() => setPlayer1Score(player1Score + 1)}>
										<AddCircleOutlineRoundedIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[1] ? (
							<TableRow key={gameDetails?.players[1].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[1].name}
								</TableCell>
								<TableCell align='right'>
									<IconButton onClick={() => setPlayer2Score(player2Score - 1)}>
										<RemoveCircleOutlineRoundedIcon />
									</IconButton>
									{player2Score}
									<IconButton onClick={() => setPlayer2Score(player2Score + 1)}>
										<AddCircleOutlineRoundedIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[2] ? (
							<TableRow key={gameDetails?.players[2].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[2].name}
								</TableCell>
								<TableCell align='right'>
									<IconButton onClick={() => setPlayer3Score(player3Score - 1)}>
										<RemoveCircleOutlineRoundedIcon />
									</IconButton>
									{player3Score}
									<IconButton onClick={() => setPlayer3Score(player3Score + 1)}>
										<AddCircleOutlineRoundedIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[3] ? (
							<TableRow key={gameDetails?.players[3].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[3].name}
								</TableCell>
								<TableCell align='right'>
									<IconButton onClick={() => setPlayer4Score(player4Score - 1)}>
										<RemoveCircleOutlineRoundedIcon />
									</IconButton>
									{player4Score}
									<IconButton onClick={() => setPlayer4Score(player4Score + 1)}>
										<AddCircleOutlineRoundedIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						) : (
							''
						)} */}
						{/* {gameDetails &&
							gameDetails?.players.map((player, index) => (
								<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='row'>
										{player.name}
									</TableCell>
									<TableCell align='right'>
										<IconButton onClick={() => setPlayer4Score(player4Score - 1)}>
											<RemoveCircleOutlineRoundedIcon />
										</IconButton>
										{player4Score}
										<IconButton onClick={() => setPlayer4Score(player4Score + 1)}>
											<AddCircleOutlineRoundedIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							))} */}
						{players?.map((player, i) => (
							<>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='column'>
										{/* {player.name} */}
										<input type='text' value={player.name} />
									</TableCell>
									<TableCell align='right'>
										{/* <IconButton onClick={handleDecreaseScore}>
											<RemoveCircleOutlineRoundedIcon />
										</IconButton> */}
										<input
											type='number'
											value={score}
											onChange={(e) => {
												handleScore(e.target.value)
											}}
										/>
										{/* <IconButton onClick={handleIncreaseScore}>
											<AddCircleOutlineRoundedIcon />
										</IconButton> */}
									</TableCell>
								</TableRow>
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/* <Button onClick={handlePlayerScores} variant='contained' sx={{ m: 1, zIndex: 1, color: 'success' }}>
				Submit Scores
			</Button> */}
			<WallPaper />
		</Container>
	)
}

export default Hole1
function handleScore(arg0: string, value: string) {
	throw new Error('Function not implemented.')
}
