import {createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import api from '../middleware/api'
import DevTools from '../containers/DevTools'

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger, api),
            DevTools.instrument()//Instrument function invoked as a store enhancer
            ) 
        );

    if(module.hot){
        //enable webpack hot module replacement for reducer
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }
    return store
};

export default configureStore