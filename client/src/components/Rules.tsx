/** @format */

import { Box, Button, Container, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openRulesAction } from '../redux/actions'
import { containerStyle, Widget } from './style'

const Rules = () => {
	const openRules = useSelector((state: IReduxStore) => state.gameroom.openRules)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(openRules)
	const [data, setData] = useState([])

	const fetchRules = async () => {
		try {
			const response = await fetch(`http://localhost:3001/admin`)
			if (!response) throw new Error('Fetching rules failed')
			const rules = await response.json()
			setData(rules)
		} catch (error) {
			console.log(error)
		}
	}
	const handleClose = () => {
		setOpen(false)
		dispatch(openRulesAction(false))
	}

	useEffect(() => {
		fetchRules()
	}, [])

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Widget>
					<Container sx={containerStyle}>
						<Box sx={{ width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
							<Typography variant='h4' sx={{ zIndex: 1, display: 'flex', justifyContent: 'center', my: 2 }}>
								RULES
							</Typography>
							{data &&
								data.map((d, index) => (
									<Stack direction='row'>
										<Typography
											key={index}
											variant='body2'
											sx={{ zIndex: 1, display: 'flex', justifyContent: 'start', mb: 1 }}
										>
											{(index = index + 1)}.
										</Typography>
										<Typography
											key={index}
											variant='body2'
											sx={{ zIndex: 1, display: 'flex', justifyContent: 'start', mb: 1 }}
										>
											{d.rule}
										</Typography>
									</Stack>
								))}
							<Box>
								<Button
									onClick={handleClose}
									variant='contained'
									color='success'
									sx={{ m: 1, zIndex: 1, borderRadius: 100, height: 80, width: 80, mt: 5 }}
								>
									close
								</Button>
							</Box>
						</Box>
					</Container>
				</Widget>
			</Modal>
		</>
	)
}

export default Rules
