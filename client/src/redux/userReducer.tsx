import { AnyAction } from "redux"
import { ACTIONS } from "./actions"
import { initialState } from "./store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch (action.type) {
        // after a user registered
        case ACTIONS.SET_USER_CREDENTIALS: return{
            ...state,
            isLoggedIn: true
        }
        case ACTIONS.SET_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        case ACTIONS.USER_LOGIN: return {
            ...state,
            isLoggedIn: true
        }
        default: return state
    }
}

export default userReducer