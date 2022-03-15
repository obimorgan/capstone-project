import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import gameroomReducer from "./gameroomReducer";
import userReducer from "./userReducer";

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: false,
        isAHost: false,
        currentUser: null
    },
    gameroom: {
        games: null,
        currentHoleStatus: [],
        openScoreModal: false
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    gameroom: gameroomReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))