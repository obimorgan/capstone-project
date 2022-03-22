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
import { useDispatch, useSelector } from 'react-redux'
import { openScoreModalAction } from '../redux/actions'
import { scorePreview } from './style'

type Prop = {
	data: ISingleHole[]
	hole: string
}

const Scorepreview: React.FC<Prop> = ({ data, hole }) => {
	const dispatch = useDispatch()
	const handleClose = () => dispatch(openScoreModalAction(false))
	const openModal = useSelector((state: IReduxStore) => state.gameroom.openScoreModal)

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
						<Typography variant='h6' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}>
							{hole} Ranking
						</Typography>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Rank</TableCell>
									<TableCell>Players</TableCell>
									<TableCell align='right'>Score</TableCell>
								</TableRow>
							</TableHead>
							{data &&
								data
									.sort((a, b) => {
										return a.score - b.score
									})
									.map((player, index) => (
										<TableBody>
											<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
												<TableCell component='th' scope='row'>
													{(index = index + 1)}
												</TableCell>
												<TableCell align='left'>{player.name}</TableCell>
												<TableCell align='right'>{player.score}</TableCell>
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

export default Scorepreview
