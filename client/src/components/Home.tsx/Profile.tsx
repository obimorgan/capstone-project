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
	const player = useSelector((state: IReduxStore) => state.user.currentUser)
	return (
		<Container sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '50px' }}>
			<Box sx={{ zIndex: 1 }}>
				<Avatar sx={{ width: 100, height: 100 }} alt='avatar' src={player.avatar} />
				<Typography variant='button' gutterBottom component='div'>
					{player.name}
				</Typography>
			</Box>
			<WallPaper />
		</Container>
	)
}
