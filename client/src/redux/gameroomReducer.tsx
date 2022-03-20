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
		case ACTIONS.DECREASE_SCORE:
			console.log({
				...state,
				games: {
					...state.games,
					hole1: [...state.games.hole1].map((player) => {
						player.playerId === action.payload
						return 'Hello'
					}),
				},
			})
			return {
				...state,
				games: {
					...state.games,
					hole1: [...state.games.hole1].map((player) => {
						player.playerId === action.payload
							? {
									score: +1,
							  }
							: ''
					}),
				},
			}
		// case ACTIONS.INCREASE_SCORE:
		// 	return {
		// 		...state,
		// 	}
		case ACTIONS.SET_HOLE1:
			return {
				...state,
				games: {
					...state.games,
					hole1: action.payload,
				},
			}
		default:
			return state
	}
}

export default gameroomReducer
