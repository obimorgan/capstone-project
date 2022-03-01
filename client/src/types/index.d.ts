interface IReduxStore {
    user: IReduxUser
    gameroom: IReduxGameroom
}

interface IReduxUser {
    isLoggedIn: boolean
}

interface IReduxGameRoom {
    _id: string
    users: IUser
}

interface IUser {
    _id: string
    name: string
    email: string
    password: string
}