import {handleActions} from 'redux-actions'
import * as actionTypes from '../constants/actionTypes';
//handleActions handles multiple actions as opposed to handleAction that handles only just one action

export default handleActions({
    [actionTypes.GET_MOVIES]:(state, action) => state,// the square bracket is because that is how variables are used as object names in ES6
    [actionTypes.SET_MOVIES]:(state,action)=>action.payload
    },//key value pair of action types and reducers
    {}//initial state
)