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
import ShareIcon from '@mui/icons-material/Share'

const actions = [
	{ icon: <LocalBarIcon />, name: 'Drinks' },
	{ icon: <LocalPizzaIcon />, name: 'Food' },
	{ icon: <AccountCircleIcon />, name: 'Account' },
	{ icon: <LeaderboardSharpIcon />, name: 'LeaderBoard' },
]

export default function BasicSpeedDial() {
	return (
		<Box sx={{ height: 100, transform: 'translateZ(1px)', marginTop: 10 }}>
			<SpeedDial
				direction='left'
				ariaLabel='SpeedDial basic example'
				sx={{ position: 'absolute', bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
			>
				{actions.map((action) => (
					<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
				))}
			</SpeedDial>
		</Box>
	)
}
