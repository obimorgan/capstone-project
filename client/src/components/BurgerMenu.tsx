/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { color } from '@mui/system'

const actions = [
	{ icon: <LocalBarIcon sx={{ fontSize: 'large' }} />, name: 'Drinks' },
	{ icon: <LocalPizzaIcon sx={{ fontSize: 'large' }} />, name: 'Food' },
	{ icon: <AccountCircleIcon sx={{ fontSize: 'large' }} />, name: 'Account' },
	{ icon: <LeaderboardSharpIcon sx={{ fontSize: 'large' }} />, name: 'LeaderBoard' },
]

export default function BasicSpeedDial() {
	return (
		<Box sx={{ height: 100, transform: 'translateZ(1px)', marginTop: 8, marginRight: -1 }}>
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
