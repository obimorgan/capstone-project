import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import Gameroom from "../components/Lobby";
import userReducer from "./userReducer";
import gameroomReducer from "./gameroomReducer";

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: false,
        currentUser: null
    },
    gameroom: {
        users: [],
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    gameroom: gameroomReducer
})

export const storeConfig = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))