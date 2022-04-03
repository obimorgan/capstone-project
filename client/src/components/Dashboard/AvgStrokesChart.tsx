/** @format */

import React from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import Box from '@mui/material/Box/Box'
import { containerStyle, Widget } from '../style'
import Stack from '@mui/material/Stack/Stack'
import Container from '@mui/material/Container/Container'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export const data1 = {
	labels: ['HOLE 1', 'HOLE 2', 'HOLE 3', 'HOLE 4', 'HOLE 5', 'HOLE 6', 'HOLE 7', 'HOLE 8', 'HOLE 9'],
	datasets: [
		{
			label: '# of Average Strokes',
			data: [1, 2, 3, 4, 6, 3, 5, 2, 7],
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,
		},
	],
}

export const data2 = {
	labels: ['HOLE 10', 'HOLE 11', 'HOLE 12', 'HOLE 13', 'HOLE 14', 'HOLE 15', 'HOLE 16', 'HOLE 17', 'HOLE 18'],
	datasets: [
		{
			label: '# of Average Strokes',
			data: [2, 7, 4, 5, 6, 3, 5, 7, 1],
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,
		},
	],
}

export function AvgStrokeChart() {
	return (
		<Container>
			<Stack direction='row'>
				<Box sx={{ zIndex: 1, width: 350, height: 350, m: 2 }}>
					<Widget>
						<Radar data={data1} />
					</Widget>
				</Box>
				<Box sx={{ zIndex: 1, width: 350, height: 350, m: 2 }}>
					<Widget>
						<Radar data={data2} />
					</Widget>
				</Box>
			</Stack>
		</Container>
	)
}
