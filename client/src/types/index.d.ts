interface IReduxStore {
    user: IReduxStoreUser
    gameroom: IReduxGameroom
}

interface IReduxStoreUser {
    isLoggedIn: boolean
    isAHost: boolean
    currentUser: IUser | null
}

interface IReduxLobby {
    _id: string
    users: IUser
}

interface IUser {
    _id: string
    name: string
    email: string
    password: string
    avatar: string
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
    _id: string // new id is given to a player who joined the game
    player: string
    name?: string
    scores: IHoles[]
    avatar: string
}

interface IReduxGameroom {
	// hole1: ISingleHole[]
    // hole2: ISingleHole[]
    // hole3: ISingleHole[]
    // hole4: ISingleHole[]
    // hole5: ISingleHole[]
    // hole6: ISingleHole[]
    // hole7: ISingleHole[]
    // hole8: ISingleHole[]
    // hole9: ISingleHole[]
    // hole10: ISingleHole[]
    // hole11: ISingleHole[]
    // hole12: ISingleHole[]
    // hole13: ISingleHole[]
    // hole14: ISingleHole[]
    // hole15: ISingleHole[]
    // hole16: ISingleHole[]
    // hole17: ISingleHole[]
    // hole18: ISingleHole[]
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
    } | null;
    // IGameDetails | null
    currentHoleStatus: ISingleHole[]
    openScoreModal: boolean
    reRenderLobby: boolean
}

interface IGameDetails {
    _id: string
    gameName: string
    gamePin: number
    players: IPlayer[]
    // hole1: ISingleHole[]
    // hole2: ISingleHole[]
    // hole3: ISingleHole[]
    // hole4: ISingleHole[]
    // hole5: ISingleHole[]
    // hole6: ISingleHole[]
    // hole7: ISingleHole[]
    // hole8: ISingleHole[]
    // hole9: ISingleHole[]
    // hole10: ISingleHole[]
    // hole11: ISingleHole[]
    // hole12: ISingleHole[]
    // hole13: ISingleHole[]
    // hole14: ISingleHole[]
    // hole15: ISingleHole[]
    // hole16: ISingleHole[]
    // hole17: ISingleHole[]
    // hole18: ISingleHole[]
}

interface ISingleHole {
	map: any;
    name?: string
    playerId?: string
    score: number
    totalScore: number
}

interface ISubmitScores {
    hole: ISingleHole[]
}