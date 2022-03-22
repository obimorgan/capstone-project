/** @format */

import { AnyAction } from 'redux'
import { ACTIONS } from './actions'
import { initialState } from './store'

const totalScoreReducer = (state = initialState.gameroom, action: AnyAction) => {
	switch (action.type) {
		

		default:
			return state
	}
}

export default totalScoreReducer
