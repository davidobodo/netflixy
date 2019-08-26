import {combineReducers} from 'redux';
import movies from './movies';
import selectedMovie from './selectedMovie';
import isLoading from './isLoading'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    movies,
    selectedMovie,
    isLoading
})

const persistConfig = {
    key:'netflixy',
    storage// storage defaults to the storage mechanism to be used(i.e browsers local storage on web by default)
}

//higher Order Reducer
const persistedReducer= persistReducer(persistConfig,rootReducer)

export default persistedReducer