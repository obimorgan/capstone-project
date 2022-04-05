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
		// case ACTIONS.SET_CURRENT_HOLE_STATUS:
		// 	return {
		// 		...state,
		// 		currentHoleStatus: action.payload,
		// 	}
		case ACTIONS.OPEN_SCORE_MODAL:
			return {
				...state,
				openScoreModal: action.payload,
			}
		case ACTIONS.SET_GAME_IN_PROGRESS:
			return {
				...state,
				setGameInProgress: action.payload,
			}

		// case ACTIONS.SET_COMPLETED_HOLES:
		// 	return {
		// 		...state,
		// 		holesCompleted: action.payload,
		// 	}

		case ACTIONS.OPEN_RULES:
			return {
				...state,
				openRules: action.payload,
			}

		case ACTIONS.OPEN_EDIT_PROFILE:
			return {
				...state,
				openEditProfile: action.payload,
			}

		case ACTIONS.SET_END_GAME:
			return {
				...state,
				isEndOfGame: action.payload,
			}

		//Total scores
		case ACTIONS.SET_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player) => {
						if (player.playerId === action.payload.playerId) {
							return { ...player, totalScore: (player.totalScore += action.payload.score) }
						}
						return {
							...player,
						}
					}),
				},
			}

		case ACTIONS.SET_SOLO_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: {
						...state.games.players,
						totalScore: action.payload,
					},
				},
			}

		//Set scores on holes
		case ACTIONS.DECREASE_HOLE1_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole1: [...state.games.hole1].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score - 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.INCREASE_HOLE1_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole1: [...state.games.hole1].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score + 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.DECREASE_HOLE2_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole2: [...state.games.hole2].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score - 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.INCREASE_HOLE2_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole2: [...state.games.hole2].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score + 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.DECREASE_HOLE3_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole3: [...state.games.hole3].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score - 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.INCREASE_HOLE3_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole3: [...state.games.hole3].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score + 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.DECREASE_HOLE4_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole4: [...state.games.hole4].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score - 1 }
						}
						return { ...detail }
					}),
				},
			}
		case ACTIONS.INCREASE_HOLE4_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole4: [...state.games.hole4].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score + 1 }
						}
						return { ...detail }
					}),
				},
			}

		case ACTIONS.DECREASE_HOLE18_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole18: [...state.games.hole18].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score - 1 }
						}
						return { ...detail }
					}),
				},
			}
		// return {
		// 	...state,
		// 	games: {
		// 		...state.games,
		// 		players: [...state.games.players].map((player) => {
		// 			if (player.playerId === action.payload.playerId) {
		// 				return { ...player, totalScore: (player.totalScore -= 2) }
		// 			}
		// 			return {
		// 				...player,
		// 			}
		// 		}),
		// 	},
		// }
		case ACTIONS.INCREASE_HOLE18_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole18: [...state.games.hole18].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: detail.score + 1 }
						}
						return { ...detail }
					}),
				},
			}
		// return {
		// 	...state,
		// 	games: {
		// 		...state.games,
		// 		players: [...state.games.players].map((player) => {
		// 			if (player.playerId === action.payload.playerId) {
		// 				return { ...player, totalScore: (player.totalScore += 1) }
		// 			}
		// 			return {
		// 				...player,
		// 			}
		// 		}),
		// 	},
		// }

		default:
			return state
	}
}

export default gameroomReducer
