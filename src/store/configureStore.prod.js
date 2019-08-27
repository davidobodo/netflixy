import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import api from '../middleware/api'
import { persistStore } from 'redux-persist'
import toastMiddleWare from '../middleware/toasts'

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(api, toastMiddleWare),
            ) 
        );

    const persiststore = persistStore(store)

    return { store, persiststore}
};

export default configureStore