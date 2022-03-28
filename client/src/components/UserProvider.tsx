/** @format */

import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserAction, setUsersBestScoresAction } from '../redux/actions'

export default function UserProvider({ children }: IProps) {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

	// console.log('Is the user logged in?', isLoggedIn)

	const fetchCurrentUser = async () => {
		try {
			const response = await fetch('http://localhost:3001/user/me', {
				credentials: 'include',
			})
			if (response.status === 200) {
				const userData = await response.json()
				dispatch(setCurrentUserAction(userData))
				console.log(userData)
			}
		} catch (error) {
			throw new Error()
		}
	}
	// const fetchUsersBestScore = async () => {
	// 	try {
	// 		const response = await fetch(' http://localhost:3001/user')
	// 		if (!response) throw new Error('Fetch was unsuccessful')
	// 		const data = await response.json()
	// 		dispatch(setUsersBestScoresAction(data))
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	useEffect(() => {
		if (isLoggedIn) {
			fetchCurrentUser()
		}
	}, [isLoggedIn])

	return isLoggedIn ? children : <Navigate to='/login' />
}
