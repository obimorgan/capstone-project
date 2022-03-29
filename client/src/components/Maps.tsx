/** @format */

import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CardMedia from '@mui/material/CardMedia/CardMedia'

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
	height: '100%',
	backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
	borderRadius: 3,
	position: 'absolute',
	top: 8,
	left: 'calc(50% - 15px)',
}))

type drawer = {
	open: boolean
	map: string
	name: string
}

const SwipeableEdgeDrawer = (props: drawer) => {
	const [open, setOpen] = React.useState(props.open)

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen)
	}

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					'.MuiDrawer-root > .MuiPaper-root': {
						height: `calc(90% - ${drawerBleeding}px)`,
						overflow: 'visible',
					},
				}}
			/>
			{/* <Box sx={{ textAlign: 'center', pt: 1, zIndex: 1 }}>
				<Button onClick={toggleDrawer(true)}>Open</Button>
			</Box> */}
			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<StyledBox
					sx={{
						position: 'absolute',
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: 'visible',
						right: 0,
						left: 0,
					}}
				>
					<Puller />
					<Typography sx={{ mt: 1, p: 2, color: 'text.primary', textAlign: 'center' }}>{props.name}</Typography>
				</StyledBox>
				<StyledBox
					sx={{
						px: 2,
						pb: 2,
						height: '100%',
						overflow: 'auto',
					}}
				>
					<CardMedia component='img' height='600px' image={props.map} alt='map' />
					<Skeleton variant='rectangular' height='100%' />
				</StyledBox>
			</SwipeableDrawer>
		</Root>
	)
}

export default SwipeableEdgeDrawer
