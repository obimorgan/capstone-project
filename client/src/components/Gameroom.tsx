/** @format */

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { buttonMargin, containerStyle, WallPaper } from './style'
import Container from '@mui/material/Container/Container'
import { Button, IconButton, Typography } from '@mui/material'
import e from 'express'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Gameroom = () => {
	const gameDetails = useSelector((state: IReduxStore) => state.gameroom.games)
	const dispatch = useDispatch()
	const [player1Score, setPlayer1Score] = useState(0)
	const [player2Score, setPlayer2Score] = useState(0)
	const [player3Score, setPlayer3Score] = useState(0)
	const [player4Score, setPlayer4Score] = useState(0)

	console.log(gameDetails)

	const handlePlayerScores = () => {
		socket.emit('submit scores', {
			player1: { p1Score: player1Score, p1Id: gameDetails?.players[0].player },
			player2: { p1Score: player1Score, p1Id: gameDetails?.players[1].player },
			player3: { p1Score: player1Score, p1Id: gameDetails?.players[2].player },
			player4: { p1Score: player1Score, p1Id: gameDetails?.players[3].player },
		})
	}

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
						{gameDetails?.players[0] ? (
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
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<Button onClick={handlePlayerScores} variant='contained' sx={{ m: 1, zIndex: 1, color: 'success' }}>
				Submit Scores
			</Button>
			<WallPaper />
		</Container>
	)
}

export default Gameroom
