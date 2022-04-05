/** @format */

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp'
import HomeIcon from '@mui/icons-material/Home'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { logOutUserAction, openEditProfileAction, setGameInProgressAction, setEndGameAction } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function BasicSpeedDial() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleOpenEditProfile = () => {
		dispatch(openEditProfileAction(true))
		window.location.reload()
	}

	const handleHome = () => {
		dispatch(setGameInProgressAction(false))
		navigate('/')
	}

	const handleSignOut = () => {
		dispatch(logOutUserAction(false))
		dispatch(setGameInProgressAction(false))
		dispatch(setEndGameAction(false))
	}
	const actions = [
		{
			icon: (
				<ExitToAppIcon
					sx={{ fontSize: 'large' }}
					onClick={() => {
						handleSignOut()
					}}
				/>
			),
			name: 'Sign out',
		},

		{
			icon: <AdminPanelSettingsIcon sx={{ fontSize: 'large' }} onClick={() => navigate('/dashboard')} />,
			name: 'Dashboard',
		},
		{
			icon: (
				<AccountCircleIcon
					sx={{ fontSize: 'large' }}
					onClick={() => {
						handleOpenEditProfile()
					}}
				/>
			),
			name: 'Account',
		},
		{
			icon: <LeaderboardSharpIcon sx={{ fontSize: 'large' }} onClick={() => navigate('/leaderboard')} />,
			name: 'LeaderBoard',
		},
		{
			icon: (
				<HomeIcon
					sx={{ fontSize: 'large' }}
					onClick={() => {
						handleHome()
					}}
				/>
			),
			name: 'Home',
		},
	]
	return (
		<Box sx={{ height: 100, transform: 'translateZ(1px)', mr: 1 }}>
			<SpeedDial
				direction='left'
				ariaLabel='SpeedDial basic example'
				sx={{ position: 'absolute', bottom: 2, right: 2 }}
				icon={<MenuOpenIcon />}
			>
				{actions.map((action) => (
					<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
				))}
			</SpeedDial>
		</Box>
	)
}
