/** @format */

import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { height } from '@mui/system'
import Stack from '@mui/material/Stack/Stack'

export default function GameInProgress() {
	const [progress, setProgress] = React.useState(10)
	function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ width: '100%', mr: 1 }}>
					<LinearProgress variant='determinate' {...props} />
				</Box>
				<Box sx={{ minWidth: 35 }}>
					<Typography variant='body2' color='text.secondary'>{`${Math.round(props.value)}%`}</Typography>
				</Box>
			</Box>
		)
	}

	React.useEffect(() => {
		setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5.6))
	}, [])

	return (
		<>
			<Box sx={{ width: '100%' }}>
				<LinearProgressWithLabel value={progress} />
			</Box>
			<Stack direction='column'>
				<Typography sx={{ zIndex: 1 }} variant='body1' color='text.secondary'>
					Your game is in progress.
				</Typography>
				<Typography sx={{ zIndex: 1 }} variant='h4' color='text.secondary'>
					GOOD LUCK!
				</Typography>
			</Stack>
		</>
	)
}
