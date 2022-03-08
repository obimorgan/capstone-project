/** @format */

import { AnyAction } from 'redux'
import { ACTIONS } from './actions'
import { initialState } from './store'

const gameroomReducer = (state = initialState.gameroom, action: AnyAction) => {
	switch (action.type) {
		case ACTIONS.SET_CURRENT_GAME_DETAILS:
			return {
				...state,
				games: action.payload,
			}
		// case ACTIONS.ADD_USER_TO_GAME_ROOM:
		// 	return {
		// 		...state,
		// 		user: [...state.games, action.payload],
		// 	}
		default:
			return state
	}
}

export default gameroomReducer
