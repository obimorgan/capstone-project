/** @format */

import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserAction } from '../redux/actions'

export default function UserProvider({ children }: IProps) {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)
	// const [currentUserData, setCurrentUserData] = useState()

	console.log(isLoggedIn)

	const fetchCurrentUser = async () => {
		try {
			const response = await fetch('http://localhost:3001/user/me/6227208d8e39df1c7c5a1164')
			if (response.status === 200) {
				const userData = await response.json()
				// setCurrentUserData(userData)
				dispatch(setCurrentUserAction(userData))
				console.log(userData)
			}
		} catch (error) {
			throw new Error()
		}
	}
	useEffect(() => {
		if (isLoggedIn) fetchCurrentUser()
	}, [])

	return isLoggedIn ? children : <Navigate to='/login' />
}
