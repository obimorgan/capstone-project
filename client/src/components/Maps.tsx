/** @format */

import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { blue, grey } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import Stack from '@mui/material/Stack/Stack'
import Container from '@mui/material/Container/Container'

const drawerBleeding = 50

const Root = styled('div')(({ theme }) => ({
	height: '100%',
	// backgroundColor: theme.palette.mode === 'light' ? blue[100] : theme.palette.background.default,
	backgroundColor: blue[100],
}))

const StyledBox = styled(Box)(({ theme }) => ({
	// backgroundColor: theme.palette.mode === 'light' ? '#fff' : blue[800],
	backgroundColor: blue[600],
	width: 150,
}))

const Puller = styled(Box)(({ theme }) => ({
	width: 90,
	height: 3,
	// backgroundColor: theme.palette.mode === 'light' ? blue[300] : blue[900],
	borderRadius: 3,
	position: 'relative',
	bottom: 15,
	left: 32,
	backgroundColor: grey[100],
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
						height: `calc(70% - ${drawerBleeding}px)`,
						overflow: 'visible',
					},
				}}
			/>
			{/* <Box sx={{ textAlign: 'center', pt: 1, zIndex: 1 }}>
				<Button onClick={toggleDrawer(true)}>Open</Button>
			</Box> */}
			<SwipeableDrawer
				color='primary'
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
						borderTopLeftRadius: 2,
						borderTopRightRadius: 2,
						visibility: 'visible',
						right: 0,
						left: 0,
					}}
				>
					<Stack direction='column'>
						<Stack direction='row' sx={{ p: 2, color: 'text.primary', display: 'flex', justifyContent: 'center' }}>
							<InfoRoundedIcon sx={{ color: grey[100] }} />
							&nbsp;
							<Typography variant='button' fontWeight='bold' sx={{ color: grey[100] }}>
								Rules
							</Typography>
						</Stack>
					</Stack>
					{/* <Puller /> */}
				</StyledBox>
				<StyledBox
					sx={{
						px: 2,
						pb: 2,
						height: '100%',
						overflow: 'auto',
					}}
				>
					{/* <Skeleton variant='rectangular' height='100%' /> */}
				</StyledBox>
				<Container>
					<CardMedia component='img' height='600px' image={props.map} alt='map' />
				</Container>
			</SwipeableDrawer>
		</Root>
	)
}

export default SwipeableEdgeDrawer
