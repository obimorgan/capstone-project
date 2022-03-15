/** @format */

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { buttonMargin, containerStyle, WallPaper } from './style'
import Container from '@mui/material/Container/Container'
import { Button, IconButton, Typography } from '@mui/material'
import e from 'express'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

const socket = io('http://localhost:3001', { transports: ['websocket'] })

const Scoreboard = () => {
	const gameDetails = useSelector((state: IReduxStore) => state.gameroom.games)

	socket.on('display data', (data) => {
		console.log(data)
		const gameId = data._id
		const holeNumber = data._
		const fetchScores = async () => {
			try {
				let response = await fetch(`http://localhost:3001/games/${gameId}/hole1`)
				if (!response.ok) return Error('Could not find game')
				let gameStatus = response.json()
				console.log(gameStatus)
			} catch (error) {
				console.log(error)
			}
		}
		fetchScores()
	})

	// useEffect(() => {
	//     fetchScores()
	// }, [])
	return (
		<Container sx={containerStyle}>
			<Typography variant='h1' sx={{ zIndex: 1 }}>
				HOLE 1
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
						{gameDetails?.players[0] ? (
							<TableRow key={gameDetails?.players[0].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[0].name}
								</TableCell>
								<TableCell align='right'>0</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[1] ? (
							<TableRow key={gameDetails?.players[1].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[1].name}
								</TableCell>
								<TableCell align='right'>0</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[2] ? (
							<TableRow key={gameDetails?.players[2].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[2].name}
								</TableCell>
								<TableCell align='right'>0</TableCell>
							</TableRow>
						) : (
							''
						)}
						{gameDetails?.players[3] ? (
							<TableRow key={gameDetails?.players[3].player} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{gameDetails?.players[3].name}
								</TableCell>
								<TableCell align='right'>0</TableCell>
							</TableRow>
						) : (
							''
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<Button variant='contained' sx={{ m: 1, zIndex: 1, color: 'success' }}>
				Go back to game
			</Button>
			<WallPaper />
		</Container>
	)
}

export default Scoreboard
