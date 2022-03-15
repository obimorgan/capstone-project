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
		case ACTIONS.SET_CURRENT_HOLE_STATUS:
			return {
				...state,
				currentHoleStatus: action.payload,
			}
		case ACTIONS.OPEN_SCORE_MODAL:
			return { ...state, openScoreModal: true }
		default:
			return state
	}
}

export default gameroomReducer
