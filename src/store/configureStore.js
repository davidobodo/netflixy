import {createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import api from '../middleware/api'
import DevTools from '../containers/DevTools'
import { persistStore } from 'redux-persist'
import toastMiddleWare from '../middleware/toasts'

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(api, toastMiddleWare, logger),
            DevTools.instrument()//Instrument function invoked as a store enhancer
            ) 
        );

    if(module.hot){
        //enable webpack hot module replacement for reducer
        module.hot.accept('../', () => {
            store.replaceReducer(rootReducer)
        })
    }
    const persiststore = persistStore(store)

    return { store, persiststore}
};

export default configureStore