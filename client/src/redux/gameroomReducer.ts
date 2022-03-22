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

		//Total scores

		case ACTIONS.SET_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player, index) => {
						if (player.playerId === action.payload.playerId) {
							return player
						}
						return {
							...player,
							totalScore: (player.totalScore += action.payload.score),
						}
					}),
				},
			}

		//Player 1
		case ACTIONS.SET_FIRST_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player) => {
						const { p1Id, p1Score } = action.payload
						if (player.playerId === p1Id) {
							return { ...player, totalScore: (player.totalScore += p1Score) }
						}
						return { ...player }
					}),
				},
			}

		//Player 2
		case ACTIONS.SET_SECOND_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player) => {
						const { p2Id, p2Score } = action.payload
						if (player.playerId === p2Id) {
							return { ...player, totalScore: (player.totalScore += p2Score) }
						}
						return { ...player }
					}),
				},
			}

		//Player 3
		case ACTIONS.SET_THIRD_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player) => {
						const { p3Id, p3Score } = action.payload
						if (player.playerId === p3Id) {
							return { ...player, totalScore: (player.totalScore += p3Score) }
						}
						return { ...player }
					}),
				},
			}

		//Player 4
		case ACTIONS.SET_FOURTH_PLAYER_TOTAL_SCORE:
			return {
				...state,
				games: {
					...state.games,
					players: [...state.games.players].map((player) => {
						const { p4Id, p4Score } = action.payload
						if (player.playerId === p4Id) {
							return { ...player, totalScore: (player.totalScore += p4Score) }
						}
						return { ...player }
					}),
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
							return { ...detail, score: (detail.score -= 1) }
						}
						return { ...detail }
					}),
					// players: [...state.games.players].map((player) => {
					// 	if (player.playerId === action.payload) {
					// 		return { ...player, totalScore: (player.totalScore -= 1)}
					// 	}
					// })
				},
			}
		case ACTIONS.INCREASE_HOLE1_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole1: [...state.games.hole1].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: (detail.score += 1) }
						}
						return { ...detail }
					}),
					// players: [...state.games.players].map((player) => {
					// 	if (player.playerId === action.payload) {
					// 		return { ...player, totalScore: (player.totalScore += 1)}
					// 	}
					// })
				},
			}
		case ACTIONS.DECREASE_HOLE2_SCORE:
			return {
				...state,
				games: {
					...state.games,
					hole2: [...state.games.hole2].map((detail) => {
						if (detail.playerId === action.payload) {
							return { ...detail, score: (detail.score -= 1) }
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
							return { ...detail, score: (detail.score += 1) }
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
							return { ...detail, score: (detail.score -= 1) }
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
							return { ...detail, score: (detail.score += 1) }
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
							return { ...detail, score: (detail.score -= 1) }
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
							return { ...detail, score: (detail.score += 1) }
						}
						return { ...detail }
					}),
				},
			}

		default:
			return state
	}
}

export default gameroomReducer
