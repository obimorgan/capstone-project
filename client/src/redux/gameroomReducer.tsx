import { AnyAction } from "redux"
import { ACTIONS } from "./actions"
import { initialState } from "./store"

const gameroomReducer = (state = initialState.gameroom, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.ADD_USER_TO_GAME_ROOM: return {
            ...state,
            user: [...state.gameroom, action.payload]
        }
        default: return state
    }
}

export default gameroomReducer
