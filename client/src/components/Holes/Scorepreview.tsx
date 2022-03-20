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
import { useDispatch, useSelector } from 'react-redux'
import { openScoreModalAction } from '../../redux/actions'
import { scorePreview } from '../style'

export default function Scorepreview() {
	const dispatch = useDispatch()
	const handleClose = () => dispatch(openScoreModalAction(false))
	const openModal = useSelector((state: IReduxStore) => state.gameroom.openScoreModal)
	const currentScore = useSelector((state: IReduxStore) => state.gameroom.currentHoleStatus)
	console.log(currentScore)

	return (
		<>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Container sx={scorePreview}>
					<TableContainer component={Paper} sx={{ zIndex: 1 }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Rank</TableCell>
									<TableCell>Players</TableCell>
									<TableCell align='right'>Score</TableCell>
								</TableRow>
							</TableHead>
							{currentScore &&
								currentScore.map((score, index) => (
									<TableBody>
										<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
											<TableCell component='th' scope='row'>
												{(index = index + 1)}
											</TableCell>
											<TableCell align='right'>{score.id}</TableCell>
											<TableCell align='right'>{score.score}</TableCell>
										</TableRow>
									</TableBody>
								))}
						</Table>
						<Button onClick={handleClose}>close</Button>
					</TableContainer>
				</Container>
			</Modal>
		</>
	)
}
