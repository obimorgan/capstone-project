/** @format */

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Avatar from '@mui/material/Avatar/Avatar'
import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Stack from '@mui/material/Stack/Stack'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableCell from '@mui/material/TableCell/TableCell'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import Typography from '@mui/material/Typography/Typography'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { setUsersBestScoresAction } from '../../redux/actions'
import Navigation from '../Navigation'
import { containerStyle, WallPaper } from '../style'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

export default function Alltime() {
	const dispatch = useDispatch()
	const scores = useSelector((state: IReduxStore) => state.user.usersBestScores)

	const fetchUsersBestScore = async () => {
		try {
			const response = await fetch('http://localhost:3001/user')
			if (!response) throw new Error('Fetch was unsuccessful')
			const data = await response.json()
			dispatch(setUsersBestScoresAction(data))
		} catch (error) {
			console.log(error)
		}
	}

	const top3Array = []
	const getTop3scores = scores
		.sort((a, b) => a.bestScore - b.bestScore)
		.slice(0, 3)
		.map((score) => {
			return top3Array.push(score)
		})

	useEffect(() => {
		fetchUsersBestScore()
		socket.on('current best score updated', () => {
			console.log('refresh leaderboard')
			window.location.reload()
		})
	}, [])

	return (
		<>
			<Navigation open={true} />
			<Container sx={containerStyle}>
				<Box sx={{ width: '100%', zIndex: 1, flexGrow: 1 }}>
					<Typography
						variant='h5'
						sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', mb: 3, fontWeight: 'bold' }}
					>
						LEADERBOARD
					</Typography>
					<Container sx={{ display: 'flex', direction: 'row', justifyContent: 'center', mb: 2 }}>
						<EmojiEventsIcon color='warning' fontSize='large' sx={{ position: 'relative', bottom: 15, right: 15 }} />
						<Stack direction='column' sx={{ m: 'auto', position: 'absolute', zIndex: -1 }}>
							<Avatar sx={{ m: 'auto' }} alt='first place' src={top3Array[0].avatar} />
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[0].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[0].bestScore}</Typography>
							</Stack>
						</Stack>
					</Container>
					<Box
						sx={{
							display: 'flex',
							direction: 'row',
							justifyContent: 'space-around',
							width: '100%',
							fontWeight: 'bold',
							mb: 2,
						}}
					>
						<Stack>
							<Avatar sx={{ m: 'auto' }} alt='second place' src={top3Array[1].avatar} />
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[1].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[1].bestScore}</Typography>
							</Stack>
						</Stack>
						<Stack>
							<Avatar sx={{ m: 'auto' }} alt='third place' src={top3Array[2].avatar} />
							<Stack direction='row'>
								<Typography sx={{ fontWeight: 'bold', textAlign: 'start' }}>{top3Array[2].name}</Typography>
								&nbsp;
								<Typography sx={{ fontWeight: 'medium', textAlign: 'end' }}>{top3Array[2].bestScore}</Typography>
							</Stack>
						</Stack>
					</Box>
					<Table>
						<TableHead>
							<TableRow sx={{ '&:last-child td, &:last-child th': { borderTop: '1px solid' } }}>
								<TableCell>PLAYERS</TableCell>
								<TableCell align='right'>SCORE</TableCell>
							</TableRow>
						</TableHead>
						{scores &&
							scores
								.sort((a, b) => {
									return a.bestScore - b.bestScore
								})
								.slice(3, -7)
								.map((player, index) => (
									<TableBody key={player._id}>
										<TableRow>
											<TableCell align='left'>
												<Stack direction='row'>
													<Avatar alt='avatar' src={player.avatar} />
													&nbsp;
													<Typography sx={{ display: 'flex', fontWeight: 'bold', m: 'auto' }}>{player.name}</Typography>
												</Stack>
											</TableCell>
											<TableCell align='right'>{player.bestScore}</TableCell>
										</TableRow>
									</TableBody>
								))}
					</Table>
					{/* </Widget> */}
				</Box>
				<WallPaper />
			</Container>
		</>
	)
}
