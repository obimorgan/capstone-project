interface IReduxStore {
    user: IReduxStoreUser
    gameroom: IReduxGameroom
}

interface IReduxStoreUser {
    isLoggedIn: boolean
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
    _id: string
    name?: string
}

interface IReduxGameroom {
    games: IGameDetails | null
}

interface IGameDetails {
    gameName: string
    gamePin: number
    players: IPlayer[]
}