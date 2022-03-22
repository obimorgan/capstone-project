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
	decHole3ScoreAction,
	incHole3ScoreAction,
	openScoreModalAction,
	setPlayerTotalScoreAction,
} from '../../redux/actions'
import Scorepreview from '../Scorepreview'
import { containerStyle, WallPaper } from '../style'

const Hole3 = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole2Ranking = useSelector((state: IReduxStore) => state.gameroom.games.hole2)
	const hole3 = useSelector((state: IReduxStore) => state.gameroom.games.hole3)

	let playersArray = []
	const mapping = hole3.map((player) => {
		return playersArray.push(player)
	})

	const setTotalScores = () => {
		playersArray.map((player) => {
			dispatch(setPlayerTotalScoreAction(player))
		})
	}

	const handlePlayerScores = () => {
		dispatch(openScoreModalAction(true))
		const submitHole3 = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole3`, {
					method: 'PUT',
					body: hole3 && JSON.stringify(hole3),
					headers: { 'Content-Type': 'application/json', withCredentials: 'true', Accept: 'application/json' },
				})
				if (!response) throw new Error('Could not submit hole 3 scores')
				setTotalScores()
				navigate('/hole4')
			} catch (error) {
				console.log(error)
			}
		}
		submitHole3()
	}
	return (
		<Container sx={containerStyle}>
			<Typography variant='h1' sx={{ zIndex: 1 }}>
				HOLE 3
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
						{hole3?.map((player, i) => (
							<>
								<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='column'>
										{player.name}
									</TableCell>
									<TableCell align='right'>
										<Button onClick={(e) => dispatch(decHole3ScoreAction(player.playerId))}>
											<RemoveCircleOutlinedIcon />
										</Button>
										{player.score}
										<Button onClick={(e) => dispatch(incHole3ScoreAction(player.playerId))}>
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
			<Scorepreview data={hole2Ranking} hole='Hole2' />
			<WallPaper />
		</Container>
	)
}

export default Hole3
