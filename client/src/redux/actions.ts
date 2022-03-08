import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const ACTIONS = {
    // SET_USER_CREDENTIALS: 'SET_USER_CREDENTIALS',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    USER_LOGIN: 'USER_LOGIN',
    // SET_NEW_GAME: 'SET_NEW_GAME',
    ADD_USER_TO_GAME_ROOM: 'ADD_USER_TO_GAME_ROOM',
    SET_CURRENT_GAME_DETAILS: 'SET_CURRENT_GAME_DETAILS'
}

// export const setUserCredentialsAction = () => {
//     return { type: ACTIONS.SET_USER_CREDENTIALS }
// }

export const setCurrentUserAction = (myInfo: IUser) => ({
    type: ACTIONS.SET_CURRENT_USER,
    payload: myInfo
})

export const userLoginAction = () => {
    return { type: ACTIONS.USER_LOGIN } 
}

export const setCurrentGameDetailsAction = (gameDetails: IGameDetails) => ({
    type: ACTIONS.SET_CURRENT_GAME_DETAILS ,
    payload: gameDetails
})

export const addUserToGameroomAction = (user: IUser) => {
    return {
        type: ACTIONS.ADD_USER_TO_GAME_ROOM,
        payload: user
    }
}