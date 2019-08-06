//This middleWare is responsible to handling API calls within my app

const api = ({ getState, dispatch}) => next => action => {
    next(action);
}