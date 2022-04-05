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
import { containerStyle, MapImage, WallPaper } from '../style'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack/Stack'
import TextField from '@mui/material/TextField/TextField'
import { useState } from 'react'
import map1 from '../../Assets/map1.png'
import map2 from '../../Assets/map2.png'
import map3 from '../../Assets/map3.png'
import map4 from '../../Assets/map4.png'
import map18 from '../../Assets/map18.png'
import { AvgStrokeChart } from './AvgStrokesChart'

export default function HolesStats() {
	const [search, setSearch] = useState('')
	const players = useSelector((state: IReduxStore) => state.user.usersBestScores)

	const assets = [
		{ name: 'hole 1', map: map1, average: 2 },
		{ name: 'hole 2', map: map2, average: 4 },
		{ name: 'hole 3', map: map3, average: 3 },
		{ name: 'hole 4', map: map4, average: 5 },
		{ name: 'hole 5', map: map18, average: 7 },
		{ name: 'hole 6', map: map1, average: 2 },
		{ name: 'hole 7', map: map2, average: 4 },
		{ name: 'hole 8', map: map3, average: 3 },
		{ name: 'hole 9', map: map4, average: 5 },
	]

	const assets1 = [
		{ name: 'hole 10', map: map1, average: 2 },
		{ name: 'hole 11', map: map2, average: 4 },
		{ name: 'hole 12', map: map3, average: 3 },
		{ name: 'hole 13', map: map4, average: 5 },
		{ name: 'hole 14', map: map18, average: 7 },
		{ name: 'hole 15', map: map1, average: 2 },
		{ name: 'hole 16', map: map2, average: 4 },
		{ name: 'hole 17', map: map3, average: 3 },
		{ name: 'hole 18', map: map4, average: 1 },
	]

	return (
		<>
			<Container sx={containerStyle}>
				<Stack direction='row'>
					<Box sx={{ width: '100%', overflow: 'hidden', zIndex: 1 }}>
						<Box sx={{ zIndex: 1, display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
							{/* <TextField
						id='outlined-name'
						label='Search user...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/> */}
							<Typography sx={{ fontWeight: '500' }} variant='h3'>
								HOLES
							</Typography>
							<Box sx={{ flexGrow: 1 }} />
							<AvgStrokeChart />
						</Box>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align='left'></TableCell>
									{assets.map((asset) => (
										<TableCell align='left'>{asset.name}</TableCell>
									))}
								</TableRow>
							</TableHead>

							<TableBody>
								{/* <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Map
									</TableCell>
									{assets &&
										assets.map((asset, index) => (
											<>
												<TableCell key={index} align='center'>
													{asset.map}
												</TableCell>
											</>
										))}
								</TableRow> */}
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Average strokes
									</TableCell>
									{assets &&
										assets.map((asset, index) => (
											<>
												<TableCell key={index} align='left'>
													{asset.average}
												</TableCell>
											</>
										))}
								</TableRow>
							</TableBody>
						</Table>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align='left'></TableCell>
									{assets1.map((asset) => (
										<TableCell align='left'>{asset.name}</TableCell>
									))}
								</TableRow>
							</TableHead>

							<TableBody>
								{/* <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Map
									</TableCell>
									{assets &&
										assets.map((asset, index) => (
											<>
												<TableCell key={index} align='center'>
													{asset.map}
												</TableCell>
											</>
										))}
								</TableRow> */}
								<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, zIndex: 1 }}>
									<TableCell component='th' scope='row'>
										Average strokes
									</TableCell>
									{assets1 &&
										assets1.map((asset, index) => (
											<>
												<TableCell key={index} align='left'>
													{asset.average}
												</TableCell>
											</>
										))}
								</TableRow>
							</TableBody>
						</Table>
					</Box>
				</Stack>
				<WallPaper />
			</Container>
		</>
	)
}
