/** @format */

import Container from '@mui/material/Container/Container'
import React from 'react'
import { Widget } from './style'
import HomeIcon from '@mui/icons-material/Home'
import Box from '@mui/material/Box/Box'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import FaceRetouchingNaturalSharpIcon from '@mui/icons-material/FaceRetouchingNaturalSharp'
import Button from '@mui/material/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
	const navigate = useNavigate()
	return (
		<>
			<Box sx={{ mx: -2, position: 'static' }}>
				<Widget>
					<Box
						sx={{
							display: 'flex',
							direction: 'row',
							justifyContent: 'space-between',
							height: 40,
							alignItems: 'center',
						}}
					>
						<Button onClick={(e) => navigate(-1)}>
							<ArrowCircleLeftIcon />
						</Button>
						<Button onClick={(e) => navigate(-1)}>
							<HomeIcon />
						</Button>
						<Button onClick={(e) => navigate(-1)}>
							<DashboardCustomizeIcon />
						</Button>
						<Button onClick={(e) => navigate(-1)}>
							<FaceRetouchingNaturalSharpIcon />
						</Button>
						<Button onClick={(e) => navigate(-1)}>
							<ArrowCircleRightIcon />
						</Button>
					</Box>
				</Widget>
			</Box>
		</>
	)
}
