import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const ACTIONS = {
    USER_LOGIN: 'USER_LOGIN',
    ADD_USER_TO_GAME_ROOM: 'ADD_USER_TO_GAME_ROOM'
}

export const userLoginAction = () => {
    return { type: ACTIONS.USER_LOGIN } 
}

export const addUserToGameroomAction = (user: IUser) => {
    return {
        type: ACTIONS.ADD_USER_TO_GAME_ROOM,
        payload: user
    }
}