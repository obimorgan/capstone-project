/** @format */

interface IReduxStore {
	user: IReduxStoreUser
	gameroom: IReduxGameroom
}

interface IReduxStoreUser {
	isLoggedIn: boolean
	isAHost: boolean
	currentUser: IUser | null
	usersBestScores: IUser[]
}

interface IReduxLobby {
	_id: string
	users: IUser
}

interface IUser {
	playerId: string
	_id: string
	name: string
	email: string
	password: string
	avatar: string
	bestScore: number
	createdAt: Date
}

interface IUserBestScores {
	usersBestScores: IUser[]
}

interface ICredentials {
	name: string
	email: string
	password: string
}

interface ILoginCredentials {
	email: string
	password: string
}

interface IProps {
	children: JSX.Element
}

interface IPlayer {
	playerId: string
	_id: string
	player: string
	name?: string
	totalScore: number
	avatar: string
}

interface IReduxGameroom {
	games: {
		_id: string
		gameName: string
		gamePin: number
		players: IPlayer[]
		hole1: ISingleHole[]
		hole2: ISingleHole[]
		hole3: ISingleHole[]
		hole4: ISingleHole[]
		hole5: ISingleHole[]
		hole6: ISingleHole[]
		hole7: ISingleHole[]
		hole8: ISingleHole[]
		hole9: ISingleHole[]
		hole10: ISingleHole[]
		hole11: ISingleHole[]
		hole12: ISingleHole[]
		hole13: ISingleHole[]
		hole14: ISingleHole[]
		hole15: ISingleHole[]
		hole16: ISingleHole[]
		hole17: ISingleHole[]
		hole18: ISingleHole[]
	} | null
	currentHoleStatus: ISingleHole[]
	openScoreModal: boolean
	reRenderLobby: boolean
	holesCompleted: ICompletedHole[]
	openRules: boolean
}

interface IGameDetails {
	_id: string
	gameName: string
	gamePin: number
	players: IPlayer[]
}

interface ISingleHole {
	map: any
	name?: string
	playerId?: string
	score: number
	totalScore: number
}

interface ISubmitScores {
	hole: ISingleHole[]
}
interface ITotalScore {
	index?: number
	id?: string
	score?: number
}

interface ICompletedHole {
	holeComplete: string
}
