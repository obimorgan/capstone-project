/** @format */

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined'
import { Button, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	decHole1ScoreAction,
	incHole1ScoreAction,
	openScoreModalAction,
	setFirstPlayerTotalAction,
	setSecondPlayerTotalAction,
	setThirdPlayerTotalAction,
	setFourthPlayerTotalAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import { containerStyle, WallPaper } from '../style'
import { io } from 'socket.io-client'
import { useState } from 'react'

// const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Hole1 = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)
	console.log(players.length)
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole1 = useSelector((state: IReduxStore) => state.gameroom.games.hole1)
	// const [player1, setPlayer1] = useState<ITotalScore>({ id: hole1[0].playerId, score: hole1[0].score })
	// const [player2, setPlayer2] = useState<ITotalScore>({ id: hole1[1].playerId, score: hole1[1].score })

	let playersArray = []
	const mapping = hole1.map((player) => {
		return playersArray.push(player)
	})
	console.log(playersArray)

	const setTotalScores = () => {
		playersArray.map((player, i) => {
			// if (!player[0]) return
			// dispatch(setFirstPlayerTotalAction(player[0]))
			// if (!player[1]) return
			// dispatch(setSecondPlayerTotalAction(player[1]))
			// if (!player[2]) return
			// dispatch(setThirdPlayerTotalAction(player[2]))
			// if (!player[3]) return
			// dispatch(setFourthPlayerTotalAction(player[3]))
			dispatch(setPlayerTotalScoreAction(player))
		})
	}

	const handlePlayerScores = () => {
		dispatch(openScoreModalAction(true))
		const submitHole1 = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole1`, {
					method: 'PUT',
					body: hole1 && JSON.stringify(hole1),
					headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
				})
				if (!response) throw new Error('Could not submit hole 1 scores')
				setTotalScores()
				navigate('/hole2')
			} catch (error) {
				console.log(error)
			}
		}
		submitHole1()
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
							<TableCell align='center'>Players</TableCell>
							<TableCell align='center'>Score</TableCell>
							{/* <TableCell align='right'>Total</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{hole1 &&
							hole1.map((player, i) => (
								<>
									<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell align='center' component='th' scope='column'>
											{player.name}
											{/* <input type='text' value={player.name} /> */}
										</TableCell>
										<TableCell align='center'>
											<Button onClick={(e) => dispatch(decHole1ScoreAction(player.playerId))}>
												<RemoveCircleOutlinedIcon />
											</Button>
											{player.score}
											<Button onClick={(e) => dispatch(incHole1ScoreAction(player.playerId))}>
												<AddCircleOutlinedIcon />
											</Button>
											{/* {totals?.map((total) => (
											<TableCell align='right'>{total.totalScore}</TableCell>
										))} */}
										</TableCell>
									</TableRow>
								</>
							))}
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

export default Hole1
