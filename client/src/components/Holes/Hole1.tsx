/** @format */

import { Button, IconButton, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { containerStyle, WallPaper } from '../style'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined'
import { decreaseScoreAction, setHole1Action, increaseScoreAction } from '../../redux/actions'

// import Scorepreview from './Scorepreview'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Hole1 = () => {
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole1 = useSelector((state: IReduxStore) => state.gameroom.games.hole1)
	// const [hole1, setHole1] = useState([])
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// const handleDecreaseScore = () => {
	// 	dispatch(decreaseScoreAction())
	// }

	// const handleIncreaseScore = () => {
	// 	console.log('Decrease')
	// }

	const fetchHole1 = async (gameId: string) => {
		try {
			let response = await fetch(`http://localhost:3001/games/${gameId}/hole1`)
			if (response.ok) {
				let data = await response.json()
				// setHole1(data)
				dispatch(setHole1Action(data))
				console.log(data)
			} else {
				throw new Error()
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchHole1(gameId)
	}, [])

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
						{hole1?.map((player, i) => (
							<>
								<TableRow key={player.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='column'>
										{player.name}
										{/* <input type='text' value={player.name} /> */}
									</TableCell>
									<TableCell align='right'>
										<Button onClick={(e) => dispatch(decreaseScoreAction(player.playerId))}>
											<RemoveCircleOutlinedIcon />
										</Button>
										{player.score}
										<Button onClick={(e) => dispatch(increaseScoreAction(player.playerId))}>
											<AddCircleOutlinedIcon />
										</Button>
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
