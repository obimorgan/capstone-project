/** @format */

import Container from '@mui/material/Container/Container'
import { useSelector } from 'react-redux'
import React from 'react'
import { containerStyle, CoverImage, WallPaper } from '../style'
import Avatar from '@mui/material/Avatar'
import zIndex from '@mui/material/styles/zIndex'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'

export default function Profile() {
	const player = useSelector((state: IReduxStore) => state.user?.currentUser)
	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
			<Box sx={{ zIndex: 1, marginTop: 4, marginBottom: 5 }}>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Avatar sx={{ width: 100, height: 100 }} alt='avatar' src={player?.avatar} />
				</Box>
				<Typography variant='h6' gutterBottom component='div'>
					{player?.name}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Typography variant='button' gutterBottom component='div'>
						Best score:
					</Typography>
					&nbsp;
					<Typography variant='button' gutterBottom component='div'>
						{player?.bestScore}
					</Typography>
				</Box>
			</Box>
			<WallPaper />
		</Container>
	)
}
