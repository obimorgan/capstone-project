import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { setCurrentUserAction } from '../redux/actions'

export default function UserProvider({ children }: IProps) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

    //     const fetchCurrentUser = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/user/me`)
    //         if (response.status === 200) {
    //             const currentUserData = await response.json()
    //             console.log(currentUserData)
    //             dispatch(setCurrentUserAction(currentUserData))
    //         }
    //     } catch (error) {
    //         throw new Error 
    //     }
    //     }
    // if(isLoggedIn) fetchCurrentUser()
    return isLoggedIn ? children : <Navigate to="/login"/>
}
