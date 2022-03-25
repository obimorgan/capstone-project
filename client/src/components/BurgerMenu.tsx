/** @format */

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

const actions = [
	{ icon: <LocalBarIcon sx={{ fontSize: 'large' }} />, name: 'Drinks' },
	{ icon: <LocalPizzaIcon sx={{ fontSize: 'large' }} />, name: 'Food' },
	{ icon: <AccountCircleIcon sx={{ fontSize: 'large' }} />, name: 'Account' },
	{ icon: <LeaderboardSharpIcon sx={{ fontSize: 'large' }} />, name: 'LeaderBoard' },
]

export default function BasicSpeedDial() {
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
