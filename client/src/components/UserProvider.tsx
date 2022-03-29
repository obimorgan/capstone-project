/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setCurrentUserAction } from '../redux/actions'

export default function UserProvider({ children }: IProps) {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

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
	useEffect(() => {
		if (isLoggedIn) {
			fetchCurrentUser()
		}
	}, [isLoggedIn])

	return isLoggedIn ? children : <Navigate to='/login' />
}
