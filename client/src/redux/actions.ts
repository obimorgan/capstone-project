import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const ACTIONS = {
    // SET_USER_CREDENTIALS: 'SET_USER_CREDENTIALS',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    USER_LOGIN: 'USER_LOGIN',
    SET_HOST: 'SET_HOST',
    ADD_USER_TO_GAME_ROOM: 'ADD_USER_TO_GAME_ROOM',
    SET_CURRENT_GAME_DETAILS: 'SET_CURRENT_GAME_DETAILS',
    SET_HOLE_ONE_SCORE: 'SET_HOLE_ONE_SCORE',
    SET_CURRENT_HOLE_STATUS: "SET_CURRENT_HOLE_STATUS",
    OPEN_SCORE_MODAL: "OPEN_SCORE_MODAL"
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

export const setAHostAction = () => {
    return {type: ACTIONS.SET_HOST}
}

export const setCurrentGameDetailsAction = (gameDetails: IGameDetails) => ({
    type: ACTIONS.SET_CURRENT_GAME_DETAILS ,
    payload: gameDetails
})

// Set Scores //

export const openScoreModalAction = () => {
    return { type: ACTIONS.OPEN_SCORE_MODAL}
}

export const setCurrentHoleStatusAction = (data: ISingleHole) => ({
    type: ACTIONS.SET_CURRENT_HOLE_STATUS,
    payload: data
})