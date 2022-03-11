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

const Gameroom = () => {
	const gameDetails = useSelector((state: IReduxStore) => state.gameroom.games)
	const dispatch = useDispatch()
	const [score, setScore] = useState(0)
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
						{gameDetails?.players.map((player) => (
							<TableRow key={player._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{player.player}
								</TableCell>
								<TableCell align='right'>
									<IconButton onClick={() => setScore(score - 1)}>
										<RemoveCircleOutlineRoundedIcon />
									</IconButton>
									{score}
									<IconButton onClick={() => setScore(score + 1)}>
										<AddCircleOutlineRoundedIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Button variant='contained' sx={{ m: 1, zIndex: 1, color: 'success' }}>
				Submit Scores
			</Button>
			<WallPaper />
		</Container>
	)
}

export default Gameroom
