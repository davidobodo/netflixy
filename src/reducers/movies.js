import {handleActions} from 'redux-actions'
import { GET_MOVIES } from '../constants/actionTypes';
//handleActions handles multiple actions as opposed to handleAction that handles only just one action

export default handleActions({
    [GET_MOVIES]:(state, action) => state// the square bracket is because that is how variables are used as object names in ES6
    },//key value pair of action types and reducers
    {}//initial state
)