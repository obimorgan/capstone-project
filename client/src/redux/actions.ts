/** @format */

import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const ACTIONS = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
	USER_LOGIN: 'USER_LOGIN',
	SET_HOST: 'SET_HOST',
	ADD_USER_TO_GAME_ROOM: 'ADD_USER_TO_GAME_ROOM',
	SET_CURRENT_GAME_DETAILS: 'SET_CURRENT_GAME_DETAILS',
	SET_HOLE_ONE_SCORE: 'SET_HOLE_ONE_SCORE',
	SET_CURRENT_HOLE_STATUS: 'SET_CURRENT_HOLE_STATUS',
	OPEN_SCORE_MODAL: 'OPEN_SCORE_MODAL',
	SET_GAME_IN_PROGRESS: 'SET_GAME_IN_PROGRESS',
	SET_HOLE1_ACTION: 'SET_HOLE1_ACTION',
	ADD_PLAYER_TO_HOLES: 'ADD_PLAYER_TO_HOLES',
	SET_USERS_BEST_SCORES: 'SET_USERS_BEST_SCORES',
	OPEN_RULES: 'OPEN_RULES',
	OPEN_EDIT_PROFILE: 'OPEN_EDIT_PROFILE',
	UPDATE_PROFILE_PICTURE: 'UPDATE_PROFILE_PICTURE',
	LOG_OUT_USER: 'LOG_OUT_USER',

	SET_FIRST_PLAYER_TOTAL_SCORE: 'SET_FIRST_PLAYER_TOTAL_SCORE',
	SET_SECOND_PLAYER_TOTAL_SCORE: 'SET_SECOND_PLAYER_TOTAL_SCORE',
	SET_THIRD_PLAYER_TOTAL_SCORE: 'SET_THIRD_PLAYER_TOTAL_SCORE',
	SET_FOURTH_PLAYER_TOTAL_SCORE: 'SET_FOURTH_PLAYER_TOTAL_SCORE',
	SET_PLAYER_TOTAL_SCORE: 'SET_PLAYER_TOTAL_SCORE',
	SET_SOLO_PLAYER_TOTAL_SCORE: 'SET_SOLO_PLAYER_TOTAL_SCORE',
	SET_COMPLETED_HOLES: 'SET_COMPLETED_HOLES',

	DECREASE_HOLE1_SCORE: 'DECREASE_HOLE1_SCORE',
	INCREASE_HOLE1_SCORE: 'INCREASE_HOLE1_SCORE',

	DECREASE_HOLE2_SCORE: 'DECREASE_HOLE2_SCORE',
	INCREASE_HOLE2_SCORE: 'INCREASE_HOLE2_SCORE',

	DECREASE_HOLE3_SCORE: 'DECREASE_HOLE3_SCORE',
	INCREASE_HOLE3_SCORE: 'INCREASE_HOLE3_SCORE',

	DECREASE_HOLE4_SCORE: 'DECREASE_HOLE4_SCORE',
	INCREASE_HOLE4_SCORE: 'INCREASE_HOLE4_SCORE',

	DECREASE_HOLE18_SCORE: 'DECREASE_HOLE18_SCORE',
	INCREASE_HOLE18_SCORE: 'INCREASE_HOLE18_SCORE',
}

export const setCurrentUserAction = (myInfo: IUser) => ({
	type: ACTIONS.SET_CURRENT_USER,
	payload: myInfo,
})

export const userLoginAction = () => {
	return { type: ACTIONS.USER_LOGIN }
}

export const logOutUserAction = () => ({
	type: ACTIONS.LOG_OUT_USER,
})

export const setAHostAction = () => {
	return { type: ACTIONS.SET_HOST }
}

export const setCurrentGameDetailsAction = (gameDetails: IGameDetails) => ({
	type: ACTIONS.SET_CURRENT_GAME_DETAILS,
	payload: gameDetails,
})

export const setGameInProgressAction = (data: boolean) => {
	return {
		type: ACTIONS.SET_GAME_IN_PROGRESS,
		payload: data,
	}
}
export const openScoreModalAction = (data: boolean) => {
	return {
		type: ACTIONS.OPEN_SCORE_MODAL,
		payload: data,
	}
}

export const setCurrentHoleStatusAction = (data: ISingleHole) => ({
	type: ACTIONS.SET_CURRENT_HOLE_STATUS,
	payload: data,
})

export const addPlayerToHolesAction = (data: ISingleHole) => ({
	type: ACTIONS.ADD_PLAYER_TO_HOLES,
	payload: data,
})

export const setUsersBestScoresAction = (data: IUserBestScores) => ({
	type: ACTIONS.SET_USERS_BEST_SCORES,
	payload: data,
})

export const setCompletedHolesAction = (data: string) => ({
	type: ACTIONS.SET_COMPLETED_HOLES,
	payload: data,
})

export const openRulesAction = (data: boolean) => ({
	type: ACTIONS.OPEN_RULES,
	payload: data,
})

export const openEditProfileAction = (data: boolean) => ({
	type: ACTIONS.OPEN_EDIT_PROFILE,
	payload: data,
})

export const updateProfilePImgAction = (data: string) => ({
	type: ACTIONS.UPDATE_PROFILE_PICTURE,
	payload: data,
})

// Set Total Scores //
export const setPlayerTotalScoreAction = (data: ITotalScore) => ({
	type: ACTIONS.SET_PLAYER_TOTAL_SCORE,
	payload: data,
})

export const setSoloPlayerTotalScoreAction = (data: number) => ({
	type: ACTIONS.SET_SOLO_PLAYER_TOTAL_SCORE,
	payload: data,
})

// Set Holes Scores //
export const decHole1ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.DECREASE_HOLE1_SCORE,
		payload: userId,
	}
}

export const incHole1ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.INCREASE_HOLE1_SCORE,
		payload: userId,
	}
}

export const decHole2ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.DECREASE_HOLE2_SCORE,
		payload: userId,
	}
}

export const incHole2ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.INCREASE_HOLE2_SCORE,
		payload: userId,
	}
}

export const decHole3ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.DECREASE_HOLE3_SCORE,
		payload: userId,
	}
}

export const incHole3ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.INCREASE_HOLE3_SCORE,
		payload: userId,
	}
}

export const decHole4ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.DECREASE_HOLE4_SCORE,
		payload: userId,
	}
}

export const incHole4ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.INCREASE_HOLE4_SCORE,
		payload: userId,
	}
}

export const decHole18ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.DECREASE_HOLE18_SCORE,
		payload: {
			userId: userId,
			score: 2,
		},
	}
}

export const incHole18ScoreAction = (userId: string) => {
	return {
		type: ACTIONS.INCREASE_HOLE18_SCORE,
		payload: {
			userId: userId,
			score: 1,
		},
	}
}
