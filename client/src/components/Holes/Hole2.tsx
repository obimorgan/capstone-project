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
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	decHole2ScoreAction,
	incHole2ScoreAction,
	openScoreModalAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import { containerStyle, WallPaper } from '../style'
import Scorepreview from '../Scorepreview'

const Hole2: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole1Ranking = useSelector((state: IReduxStore) => state.gameroom.games.hole1)
	const hole2 = useSelector((state: IReduxStore) => state.gameroom.games.hole2)

	let playersArray = []
	const mapping = hole2.map((player) => {
		return playersArray.push(player)
	})

	const setTotalScores = () => {
		playersArray.map((player, i) => {
			dispatch(setPlayerTotalScoreAction(player))
		})
	}

	const handlePlayerScores = () => {
		dispatch(openScoreModalAction(true))
		const submitHole2 = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole2`, {
					method: 'PUT',
					body: hole2 && JSON.stringify(hole2),
					headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
				})
				if (!response) throw new Error('Could not submit hole 2 scores')
				setTotalScores()
				navigate('/hole3')
			} catch (error) {
				console.log(error)
			}
		}
		submitHole2()
	}

	return (
		<Container sx={containerStyle}>
			<Typography variant='h1' sx={{ zIndex: 1 }}>
				HOLE 2
			</Typography>
			<TableContainer component={Paper} sx={{ zIndex: 1 }}>
				<Table sx={{ minWidth: '100%' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Players</TableCell>
							<TableCell align='center'>Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{hole2?.map((player, i) => (
							<>
								<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='column'>
										{player.name}
									</TableCell>
									<TableCell align='center'>
										<Button onClick={(e) => dispatch(decHole2ScoreAction(player.playerId))}>
											<RemoveCircleOutlinedIcon />
										</Button>
										{player.score}
										<Button onClick={(e) => dispatch(incHole2ScoreAction(player.playerId))}>
											<AddCircleOutlinedIcon />
										</Button>
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
			<Scorepreview data={hole1Ranking} hole='Hole1' />
			<WallPaper />
		</Container>
	)
}

export default Hole2
