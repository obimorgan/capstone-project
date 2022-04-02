/** @format */

import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container/Container'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { openScoreModalAction } from '../redux/actions'
import { containerStyle, scorePreview, Widget } from './style'

const ScoreCard = () => {
	const dispatch = useDispatch()
	const game = useSelector((state: IReduxStore) => state.gameroom.games)
	const handleClose = () => dispatch(openScoreModalAction(false))
	const openModal = useSelector((state: IReduxStore) => state.gameroom.openScoreModal)

	return (
		<>
			<Modal
				open={true}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Widget>
					<Container sx={containerStyle}>
						<Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
							SCORECARD
						</Typography>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell align='left'>{game.hole1[0]?.name}</TableCell>
									{game.hole1.length === 2 ? <TableCell align='left'>{game.hole1[1]?.name}</TableCell> : ''}
									{game.hole1.length === 3 ? <TableCell align='left'>{game.hole1[2]?.name}</TableCell> : ''}
									{game.hole1.length === 4 ? <TableCell align='left'>{game.hole1[3]?.name}</TableCell> : ''}
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Hole 1
									</TableCell>
									{game.hole1 &&
										game.hole1.map((player) => (
											<>
												<TableCell align='left'>{player.score}</TableCell>
											</>
										))}
								</TableRow>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Hole 2
									</TableCell>
									{game.hole2 &&
										game.hole2.map((player) => (
											<>
												<TableCell align='left'>{player.score}</TableCell>
											</>
										))}
								</TableRow>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Hole 3
									</TableCell>
									{game.hole3 &&
										game.hole3.map((player) => (
											<>
												<TableCell align='left'>{player.score}</TableCell>
											</>
										))}
								</TableRow>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Hole 4
									</TableCell>
									{game.hole4 &&
										game.hole4.map((player) => (
											<>
												<TableCell align='left'>{player.score}</TableCell>
											</>
										))}
								</TableRow>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Hole 18
									</TableCell>
									{game.hole18 &&
										game.hole18.map((player) => (
											<>
												<TableCell align='left'>{player.score}</TableCell>
											</>
										))}
								</TableRow>
							</TableBody>
						</Table>
						<Button onClick={handleClose}>close</Button>
						{/* </TableContainer> */}
					</Container>
				</Widget>
			</Modal>
		</>
	)
}

export default ScoreCard
