import {createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import api from '../middleware/api'

const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(logger, api))
    if(module.hot){
        //enable webpack hot module replacement for reducer
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }
    return store
};

export default configureStore