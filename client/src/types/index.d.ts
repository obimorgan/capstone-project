interface IReduxStore {
    user: IReduxUser
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