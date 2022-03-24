/** @format */

import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container/Container'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { strictEqual } from 'assert'
import { useDispatch, useSelector } from 'react-redux'
import { openScoreModalAction } from '../redux/actions'
import { containerStyle, scorePreview, WallPaper } from './style'

type Prop = {
	data: ISingleHole[]
}

const Scoreboard: React.FC<Prop> = ({ data }) => {
	const gameName = useSelector((state: IReduxStore) => state.gameroom.games.gameName)
	const players = useSelector((state: IReduxStore) => state.gameroom.games.players)
	const dispatch = useDispatch()
	const handleClose = () => dispatch(openScoreModalAction(false))

	return (
		<Container sx={containerStyle}>
			<Typography variant='h3' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
				The Winner of Game{gameName}
			</Typography>
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
					{players &&
						players
							.sort((a, b) => {
								return a.totalScore - b.totalScore
							})
							.map((player, index) => (
								<TableBody>
									<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
										<TableCell component='th' scope='row'>
											{(index = index + 1)}
										</TableCell>
										<TableCell align='left'>{player.name}</TableCell>
										<TableCell align='right'>{player.totalScore}</TableCell>
									</TableRow>
								</TableBody>
							))}
				</Table>
				<Button onClick={handleClose}>Back to hole</Button>
			</TableContainer>
			<WallPaper />
		</Container>
	)
}

export default Scoreboard
