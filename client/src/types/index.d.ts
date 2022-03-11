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
}

interface IReduxGameroom {
    games: IGameDetails | null
}

interface IGameDetails {
    gameName: string
    gamePin: number
    players: IPlayer[]
}

interface IHoles {
    hole1: Number,
    hole2: Number,
    hole3: Number,
    hole4: Number,
    hole5: Number,
    hole6: Number,
    hole7: Number,
    hole8: Number,
    hole9: Number,
    hole10: Number,
    hole11: Number,
    hole12: Number,
    hole13: Number,
    hole14: Number,
    hole15: Number,
    hole16: Number,
    hole17: Number,
    hole18: Number,
    hole19: Number,
}