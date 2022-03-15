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
    games: IGameDetails | null
    currentHoleStatus: ISingleHole[]
    openScoreModal: boolean
}

interface IGameDetails {
    _id: string
    gameName: string
    gamePin: number
    players: IPlayer[]
}

interface ISingleHole {
    name: string
    id: string
    score: number
}