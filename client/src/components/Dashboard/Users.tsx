/** @format */
import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import { useSelector } from 'react-redux'
import { containerStyle, WallPaper } from '../style'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack/Stack'
import TextField from '@mui/material/TextField/TextField'
import { useState } from 'react'

export default function Users() {
	const [search, setSearch] = useState('')
	const players = useSelector((state: IReduxStore) => state.user.usersBestScores)

	return (
		<Container sx={containerStyle}>
			<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
				<Box sx={{ zIndex: 1, display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
					<TextField
						id='outlined-name'
						label='Search user...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Typography sx={{ ml: 5, fontWeight: '500' }} variant='h3'>
						USERS
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
				</Box>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align='left'>Player</TableCell>
							<TableCell align='left'>Email</TableCell>
							<TableCell align='right'>Bestscore</TableCell>
						</TableRow>
					</TableHead>
					{players &&
						players.map((player) => (
							<TableBody key={player._id}>
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell>
										<Stack direction='row' sx={{ align: 'center' }}>
											<EditIcon sx={{ mr: 1, my: 'auto' }} />
											<Avatar alt='avatar' src={player.avatar} sx={{ width: 28, height: 28 }} />
											<Typography sx={{ ml: 1, my: 'auto' }}>{player.name}</Typography>
										</Stack>
									</TableCell>
									<TableCell align='left'>{player.email}</TableCell>
									<TableCell align='right'>{player.bestScore}</TableCell>
								</TableRow>
							</TableBody>
						))}
				</Table>
			</Box>
			<WallPaper />
		</Container>
	)
}
