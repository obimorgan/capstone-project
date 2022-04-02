/** @format */

import { AnyAction } from 'redux'
import { ACTIONS } from './actions'
import { initialState } from './store'

const userReducer = (state = initialState.user, action: AnyAction) => {
	switch (action.type) {
		//Set users best Scores
		case ACTIONS.SET_USERS_BEST_SCORES:
			return {
				...state,
				usersBestScores: action.payload,
			}
		case ACTIONS.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			}
		case ACTIONS.USER_LOGIN:
			return {
				...state,
				isLoggedIn: true,
			}
		case ACTIONS.SET_HOST:
			return {
				...state,
				isAHost: true,
			}
		case ACTIONS.UPDATE_PROFILE_PICTURE:
			return {
				...state,
				currentUser: {
					...state.currentUser,
					avatar: action.payload,
				},
			}
		default:
			return state
	}
}

export default userReducer
