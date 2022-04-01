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
import map1 from '../../Assets/map1.png'
import {
	decHole1ScoreAction,
	incHole1ScoreAction,
	setSoloPlayerTotalScoreAction,
	setCompletedHolesAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import EditProfile from '../EditProfile'
import Maps from '../Maps'
import Navigation from '../Navigation'
import Rules from '../Rules'
import { containerStyle, WallPaper } from '../style'

const Hole1 = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole1 = useSelector((state: IReduxStore) => state.gameroom.games.hole1)
	const total = useSelector((state: IReduxStore) => state.gameroom.games.players)

	let playersArray = []
	const mapping = hole1.map((player) => {
		return playersArray.push(player)
	})
	console.log(playersArray)

	const setTotalScores = () => {
		if (playersArray.length > 1) {
			playersArray.forEach((player, i) => {
				dispatch(setPlayerTotalScoreAction(player))
			})
		}
	}

	const handlePlayerScores = () => {
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
				dispatch(setCompletedHolesAction('hole1'))
			} catch (error) {
				console.log(error)
			}
		}
		submitHole1()
	}

	return (
		<>
			<Rules />
			<EditProfile />
			<Container sx={containerStyle}>
				{/* <Box sx={{ width: '100%', flexGrow: 1 }}> */}
				<Box sx={{ flexGrow: 1 }}>
					<Navigation open={false} />
				</Box>
				<Typography variant='h2' sx={{ zIndex: 1, textAlign: 'center' }}>
					HOLE 1
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Stack direction='row'>
						<Typography variant='body1' sx={{ zIndex: 1, textAlign: 'center' }}>
							Average strokes:
						</Typography>
						&nbsp;
						<Typography variant='body1' fontWeight='bold' sx={{ zIndex: 1, textAlign: 'center' }}>
							3
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
								</TableRow>
							</TableHead>
							<TableBody>
								{hole1 &&
									hole1.map((player, i) => (
										<TableRow key={player.playerId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell align='left' component='th' scope='column'>
												{player.name}
												{/* <input type='text' value={player.name} /> */}
											</TableCell>
											<TableCell align='center'>
												<Button
													onClick={(e) => {
														dispatch(decHole1ScoreAction(player.playerId))
													}}
												>
													<RemoveCircleOutlinedIcon />
												</Button>
												{player.score}
												<Button onClick={(e) => dispatch(incHole1ScoreAction(player.playerId))}>
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
				{/* </Box> */}
			</Container>
			<Maps open={open} map={map1} name={'Hole 1 Map'} />
		</>
	)
}

export default Hole1
