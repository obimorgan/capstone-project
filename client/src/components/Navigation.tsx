/** @format */

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import HomeIcon from '@mui/icons-material/Home'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { openEditProfileAction, openRulesAction, openScoreModalAction } from '../redux/actions'
import { Widget } from './style'

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
			<Box sx={{ mx: -2, mt: 3, position: 'static' }}>
				<Box
					sx={{
						display: 'flex',
						direction: 'row',
						justifyContent: 'space-around',
						height: 40,
						alignItems: 'center',
						padding: 0,
					}}
				>
					<Button sx={{ zIndex: 1 }} onClick={(e) => navigate(-1)}>
						<ArrowCircleLeftIcon />
					</Button>
					{!isLeaderboard ? (
						<Widget>
							<Button sx={{ mx: -1 }} onClick={(e) => navigate('/')}>
								<HomeIcon />
							</Button>
							<Button sx={{ mx: -1 }} onClick={(e) => navigate('/leaderboard')}>
								<DashboardCustomizeIcon />
							</Button>
							<Button
								sx={{ mx: -1 }}
								onClick={(e) => {
									handleOpenEditProfile()
								}}
							>
								<AccountCircleIcon />
							</Button>
							<Button
								sx={{ mx: -1 }}
								onClick={(e) => {
									handleOpenRules()
								}}
							>
								<InfoRoundedIcon />
							</Button>
							<Button
								sx={{ mx: -1 }}
								onClick={(e) => {
									dispatch(openScoreModalAction(true))
								}}
							>
								<MenuBookIcon />
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
