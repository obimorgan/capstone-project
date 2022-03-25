/** @format */

import { styled, useTheme } from '@mui/material/styles'

export const modalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 200,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
}

export const scorePreview = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 380,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	borderRadius: 2,
	boxShadow: 24,
	p: 4,
}

export const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center ',
	height: '100vh',
	justifyContent: 'center',
}

export const squareBtn = {
	width: 130,
	height: 130,
}

export const containerStyleLobby = {
	display: 'flex',
	justifyContent: 'center ',
	maxHeight: '100vh',
}

export const WallPaper = styled('div')({
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	overflow: 'hidden',
	background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
	transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
	'&:before': {
		content: '""',
		width: '140%',
		height: '140%',
		position: 'absolute',
		top: '-40%',
		right: '-50%',
		background: 'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
	},
	'&:after': {
		content: '""',
		width: '140%',
		height: '140%',
		position: 'absolute',
		bottom: '-50%',
		left: '-30%',
		background: 'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
		transform: 'rotate(30deg)',
	},
})

export const Widget = styled('div')(({ theme }) => ({
	padding: 5,
	borderRadius: 16,
	width: 300,
	maxWidth: '100%',
	margin: 'auto',
	position: 'relative',
	zIndex: 1,
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
	backdropFilter: 'blur(120px)',
}))

export const CoverImage = styled('div')({
	width: 100,
	height: 100,
	objectFit: 'cover',
	overflow: 'hidden',
	flexShrink: 0,
	borderRadius: 8,
	backgroundColor: 'rgba(0,0,0,0.08)',
	'& > img': {
		width: '100%',
	},
})
export const LogoImage = styled('div')({
	align: 'center',
	width: 200,
	height: 200,
	objectFit: 'cover',
	overflow: 'hidden',
	flexShrink: 0,
	borderRadius: 100,
	backgroundColor: 'rgba(0,0,0,0.08)',
	'& > img': {
		width: '100%',
	},
	zIndex: 1,
})

export const Background = styled('div')({
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	overflow: 'hidden',
	background: 'linear-gradient(rgb(-255, -120, -207) 25%,rgb(456, 1, 1233) 73%)',
	transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
	// '&:before': {
	// 	content: '""',
	// 	width: '140%',
	// 	height: '140%',
	// 	position: 'absolute',
	// 	top: '-40%',
	// 	right: '-50%',
	// 	background: 'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
	// },
	'&:after': {
		content: '""',
		width: '140%',
		height: '140%',
		position: 'absolute',
		bottom: '-50%',
		left: '-30%',
		background: 'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
		transform: 'rotate(30deg)',
	},
})
