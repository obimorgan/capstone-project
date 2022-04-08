/** @format */

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined'
import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
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
import map18 from '../../Assets/map18.png'
import {
	decHole18ScoreAction,
	incHole18ScoreAction,
	openScoreModalAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import EditProfile from '../EditProfile'
import Maps from '../Maps'
import Navigation from '../Navigation'
import Rules from '../Rules'
import ScoreCard from '../ScoreCard'
import { containerStyle, WallPaper } from '../style'

const Hole18 = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole18 = useSelector((state: IReduxStore) => state.gameroom.games.hole18)
	const total = useSelector((state: IReduxStore) => state.gameroom.games.players)

	let playersArray = []
	const mapping = hole18.map((player) => {
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
		const submitHole18 = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole18`, {
					method: 'PUT',
					body: hole18 && JSON.stringify(hole18),
					headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
				})
				if (!response) throw new Error('Could not submit hole 1 scores')
				setTotalScores()
				navigate('/scoreboard')
			} catch (error) {
				console.log(error)
			}
		}
		submitHole18()
		navigate('/scoreboard')
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
					HOLE 18
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Stack direction='row'>
						<Typography variant='body1' sx={{ zIndex: 1, textAlign: 'center' }}>
							Average strokes:
						</Typography>
						&nbsp;
						<Typography variant='body1' fontWeight='bold' sx={{ zIndex: 1, textAlign: 'center' }}>
							1
						</Typography>
					</Stack>
				</Box>
				<Box sx={{ flexGrow: 1 }} />
				<TableContainer sx={{ zIndex: 1 }}>
					<Stack direction='row'>
						<Table sx={{ minWidth: '80%' }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='left'>Players</TableCell>
									<TableCell align='center'>Score</TableCell>
									{/* <TableCell align='left'></TableCell> */}
								</TableRow>
							</TableHead>
							{/* <TableBody>
								{hole18 &&
									hole18.map((player, i) => (
										<TableRow key={player.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell align='left' component='th' scope='column'>
												{player.name}
											</TableCell>
											<TableCell align='center'>
												<FormControlLabel
													control={<Checkbox onChange={() => dispatch(decHole18ScoreAction(player.playerId))} />}
													label='-2'
												/>
											</TableCell>
											<TableCell align='center'>
												<FormControlLabel
													control={<Checkbox onChange={() => dispatch(incHole18ScoreAction(player.playerId))} />}
													label='+1'
												/>
											</TableCell>
										</TableRow>
									))}
							</TableBody> */}
							<TableBody>
								{hole18 &&
									hole18.map((player, i) => (
										<TableRow key={player.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell align='left' component='th' scope='column'>
												{player.name}
												{/* <input type='text' value={player.name} /> */}
											</TableCell>
											<TableCell align='center'>
												<Button
													onClick={(e) => {
														dispatch(decHole18ScoreAction(player.playerId))
													}}
												>
													<RemoveCircleOutlinedIcon />
												</Button>
												{player.score}
												<Button onClick={(e) => dispatch(incHole18ScoreAction(player.playerId))}>
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
					<Button
						onClick={handlePlayerScores}
						variant='contained'
						color='success'
						sx={{ m: 1, zIndex: 1, borderRadius: 100, height: 80, width: 80 }}
					>
						end game
					</Button>
				</Box>
				<WallPaper />
				<Box sx={{ flexGrow: 1 }} />
			</Container>
			<Maps open={open} map={map18} name={'Hole 18 Map'} />
		</>
	)
}

export default Hole18
