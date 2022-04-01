/** @format */

import Container from '@mui/material/Container/Container'
import React, { useState } from 'react'
import { Widget } from './style'
import HomeIcon from '@mui/icons-material/Home'
import Box from '@mui/material/Box/Box'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button/Button'
import { useNavigate } from 'react-router-dom'
import zIndex from '@mui/material/styles/zIndex'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { useDispatch } from 'react-redux'
import { openEditProfileAction, openRulesAction } from '../redux/actions'

type Prop = {
	open: boolean
}
const Navigation: React.FC<Prop> = ({ open }) => {
	const [isLeaderboard, isSetLeaderBoard] = useState(open)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleOpenRules = () => {
		dispatch(openRulesAction(true))
		window.location.reload()
	}

	const handleOpenEditProfile = () => {
		dispatch(openEditProfileAction(true))
		window.location.reload()
	}
	return (
		<>
			<Box sx={{ mx: -2, position: 'static' }}>
				<Box
					sx={{
						display: 'flex',
						direction: 'row',
						justifyContent: 'space-between',
						height: 40,
						alignItems: 'center',
					}}
				>
					<Button sx={{ zIndex: 1 }} onClick={(e) => navigate(-1)}>
						<ArrowCircleLeftIcon />
					</Button>
					{!isLeaderboard ? (
						<Widget>
							<Button onClick={(e) => navigate('/')}>
								<HomeIcon />
							</Button>
							<Button onClick={(e) => navigate('/leaderboard')}>
								<DashboardCustomizeIcon />
							</Button>
							<Button
								onClick={(e) => {
									handleOpenEditProfile()
								}}
							>
								<AccountCircleIcon />
							</Button>
							<Button
								onClick={(e) => {
									handleOpenRules()
								}}
							>
								<InfoRoundedIcon />
							</Button>
						</Widget>
					) : null}
					<Button sx={{ zIndex: 1 }} onClick={(e) => navigate(-1)}>
						<ArrowCircleRightIcon />
					</Button>
				</Box>
			</Box>
		</>
	)
}

export default Navigation
