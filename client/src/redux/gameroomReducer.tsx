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
			return {
				...state,
				openScoreModal: action.payload,
			}
		case ACTIONS.RE_RENDER_LOBBY:
			return {
				...state,
				reRenderLobby: action.payload,
			}
		// scores
		case ACTIONS.SET_HOLE1_ACTION:
			const { payload } = action
			return {
				...state,
				games: {
					...state,
					hole1: [{ ...state, payload }],
				},
			}
		default:
			return state
	}
}

export default gameroomReducer
