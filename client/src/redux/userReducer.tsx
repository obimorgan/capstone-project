import { AnyAction } from "redux"
import { ACTIONS } from "./actions"
import { initialState } from "./store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN: return {
            ...state,
            isLoggedIn: true
        }
        default: return state
    }
}

export default userReducer