/** @format */

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import LeaderBoard from '../LeaderBoard'
import HolesStats from './HolesStats'
import Users from './Users'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

export default function Dashboard() {
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	const [openUsers, setOpenUsers] = useState(true)
	const [openLeaderBoard, setOpenLeaderBoard] = useState(false)
	const [openHoleStats, setOpenHoleStats] = useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const handleUsers = () => {
		setOpenLeaderBoard(false)
		setOpenUsers(true)
		setOpenHoleStats(false)
	}

	const handleLeaderboard = () => {
		setOpenLeaderBoard(true)
		setOpenUsers(false)
		setOpenHoleStats(false)
	}

	const handleHoles = () => {
		setOpenHoleStats(true)
		setOpenLeaderBoard(false)
		setOpenUsers(false)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem
						onClick={() => {
							handleUsers()
						}}
					>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary='Users' />
					</ListItem>
					<ListItem onClick={() => handleHoles()}>
						<ListItemIcon>
							<GolfCourseIcon />
						</ListItemIcon>
						<ListItemText primary='Holes' />
					</ListItem>
					<ListItem
						onClick={() => {
							handleLeaderboard()
						}}
					>
						<ListItemIcon>
							<LeaderboardIcon />
						</ListItemIcon>
						<ListItemText primary='Leaderboard' />
					</ListItem>
				</List>
				<Divider />
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{openUsers ? <Users /> : ''}
				{openHoleStats ? <HolesStats /> : ''}
				{openLeaderBoard ? <LeaderBoard /> : ''}
			</Box>
		</Box>
	)
}
