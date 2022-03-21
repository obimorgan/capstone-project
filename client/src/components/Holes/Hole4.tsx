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
import { decHole4ScoreAction, incHole4ScoreAction, openScoreModalAction } from '../../redux/actions'
import { containerStyle, WallPaper } from '../style'
import Scorepreview from './Scorepreview'

const Hole4 = () => {
	const gameId = useSelector((state: IReduxStore) => state.gameroom.games._id)
	const hole4 = useSelector((state: IReduxStore) => state.gameroom.games.hole4)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handlePlayerScores = () => {
		dispatch(openScoreModalAction(true))
		navigate('/hole5')
	}

	return (
		<Container sx={containerStyle}>
			<Typography variant='h1' sx={{ zIndex: 1 }}>
				HOLE 4
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
						{hole4?.map((player, i) => (
							<>
								<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th' scope='column'>
										{player.name}
										{/* <input type='text' value={player.name} /> */}
									</TableCell>
									<TableCell align='right'>
										<Button onClick={(e) => dispatch(decHole4ScoreAction(player.playerId))}>
											<RemoveCircleOutlinedIcon />
										</Button>
										{player.score}
										<Button onClick={(e) => dispatch(incHole4ScoreAction(player.playerId))}>
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
			<Scorepreview />
			<WallPaper />
		</Container>
	)
}

export default Hole4
