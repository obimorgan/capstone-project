/** @format */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import gameroomReducer from './gameroomReducer'
import userReducer from './userReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
	user: {
		isLoggedIn: false,
		isAHost: false,
		currentUser: null,
		usersBestScores: [],
	},
	gameroom: {
		games: {
			_id: null,
			gameName: '',
			gamePin: null,
			players: [],
			hole1: [],
			hole2: [],
			hole3: [],
			hole4: [],
			hole5: [],
			hole6: [],
			hole7: [],
			hole8: [],
			hole9: [],
			hole10: [],
			hole11: [],
			hole12: [],
			hole13: [],
			hole14: [],
			hole15: [],
			hole16: [],
			hole17: [],
			hole18: [],
		},
		// currentHoleStatus: [],
		openScoreModal: false,
		setGameInProgress: false,
		// holesCompleted: [],
		openRules: false,
		openEditProfile: false,
		isEndOfGame: false,
	},
}

const rootReducer = combineReducers({
	user: userReducer,
	gameroom: gameroomReducer,
})

const { REACT_APP_SECRET_KEY: secretKey } = process.env

const persistConfig = {
	key: 'root',
	storage,
	transforms: [
		encryptTransform({
			secretKey: secretKey!,
			onError: (error) => {
				console.log('encryption error', error)
			},
		}),
	],
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = createStore(persistedReducer, initialState, composeSafely(applyMiddleware(thunk)))

export const persistor = persistStore(store)
