/** @format */

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined'
import { Button, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/system/Box/Box'
import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import map4 from '../../Assets/map4.png'
import {
	decHole4ScoreAction,
	incHole4ScoreAction,
	openScoreModalAction,
	// setCompletedHolesAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import EditProfile from '../EditProfile'
import Maps from '../Maps'
import Navigation from '../Navigation'
import Rules from '../Rules'
import ScoreCard from '../ScoreCard'
import { containerStyle, WallPaper } from '../style'

const Hole4 = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole4 = useSelector((state: IReduxStore) => state.gameroom.games.hole4)
	const total = useSelector((state: IReduxStore) => state.gameroom.games.players)

	let playersArray = []
	const mapping = hole4.map((player) => {
		return playersArray.push(player)
	})
	console.log(playersArray)

	const setTotalScores = () => {
		playersArray.forEach((player, i) => {
			dispatch(setPlayerTotalScoreAction(player))
		})
	}

	const handlePlayerScores = () => {
		dispatch(openScoreModalAction(true))
		const submitHole4 = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole4`, {
					method: 'PUT',
					body: hole4 && JSON.stringify(hole4),
					headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
				})
				if (!response) throw new Error('Could not submit hole 1 scores')
				setTotalScores()
				navigate('/hole18')
				// dispatch(setCompletedHolesAction('hole4'))
			} catch (error) {
				console.log(error)
			}
		}
		submitHole4()
	}

	return (
		<>
			<Rules />
			<EditProfile />
			<ScoreCard />
			<Container sx={containerStyle}>
				<Box sx={{ flexGrow: 1 }}>
					<Navigation open={false} />
				</Box>
				<Typography variant='h2' sx={{ zIndex: 1, textAlign: 'center' }}>
					HOLE 4
				</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<TableContainer sx={{ zIndex: 1 }}>
					<Stack direction='row'>
						<Table sx={{ minWidth: '80%' }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='left'>Players</TableCell>
									<TableCell align='center'>Score</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{hole4 &&
									hole4.map((player, i) => (
										<TableRow key={player.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell align='left' component='th' scope='column'>
												{player.name}
												{/* <input type='text' value={player.name} /> */}
											</TableCell>
											<TableCell align='center'>
												<Button
													onClick={(e) => {
														dispatch(decHole4ScoreAction(player.playerId))
													}}
												>
													<RemoveCircleOutlinedIcon />
												</Button>
												{player.score}
												<Button onClick={(e) => dispatch(incHole4ScoreAction(player.playerId))}>
													<AddCircleOutlinedIcon />
												</Button>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
						<Table sx={{ minWidth: '10%' }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='right'>Total</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{total &&
									total.map((t) => (
										<TableRow key={t.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell key={t.playerId} align='right' component='th' scope='column'>
												{t.totalScore}
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</Stack>
				</TableContainer>
				<Box>
					{/* <Button
						sx={{ m: 1, zIndex: 1, borderRadius: 100, height: 100, width: 100 }}
						variant='contained'
						onClick={(e) => setOpen(true)}
					>
						Open
					</Button> */}

					<Button
						onClick={handlePlayerScores}
						variant='contained'
						color='success'
						sx={{ m: 1, zIndex: 1, borderRadius: 100, height: 80, width: 80 }}
					>
						next hole
					</Button>
				</Box>
				<WallPaper />
				<Box sx={{ flexGrow: 1 }} />
			</Container>
			<Maps open={open} map={map4} name={'Hole 4 Map'} />
		</>
	)
}

export default Hole4
