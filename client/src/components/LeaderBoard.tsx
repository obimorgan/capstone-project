/** @format */

import Container from '@mui/material/Container/Container'
import Paper from '@mui/material/Paper/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsersBestScoresAction } from '../redux/actions'
import { scorePreview } from './style'

export default function LeaderBoard() {
	const dispatch = useDispatch()
	const scores = useSelector((state: IReduxStore) => state.user.usersBestScores)

	useEffect(() => {
		const fetchUsersBestScore = async () => {
			try {
				const response = await fetch('http://localhost:3001/user')
				if (!response) throw new Error('Fetch was unsuccessful')
				const data = await response.json()
				dispatch(setUsersBestScoresAction(data))
			} catch (error) {
				console.log(error)
			}
		}
		fetchUsersBestScore()
	}, [])

	return (
		<Container sx={scorePreview}>
			<TableContainer component={Paper} sx={{ zIndex: 1 }}>
				<Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
					Leaderboard
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>Players</TableCell>
							<TableCell align='right'>Score</TableCell>
						</TableRow>
					</TableHead>
					{scores &&
						scores
							.sort((a, b) => {
								return a.bestScore - b.bestScore
							})
							.map((player, index) => (
								<TableBody>
									<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
										<TableCell component='th' scope='row'>
											{(index = index + 1)}
										</TableCell>
										<TableCell align='left'>{player.name}</TableCell>
										<TableCell align='right'>{player.bestScore}</TableCell>
									</TableRow>
								</TableBody>
							))}
				</Table>
			</TableContainer>
		</Container>
	)
}
