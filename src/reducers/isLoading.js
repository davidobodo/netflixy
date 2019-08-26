import { handleActions } from 'redux-actions'
import produce from 'immer'

import * as actionTypes from '../constants/actionTypes'
import { GET_MOVIES } from '../constants/labels'

export default handleActions({
    [actionTypes.API_START]: produce((state,action) =>{
        if(action.payload === GET_MOVIES) state[GET_MOVIES] =true;
    }),
    [actionTypes.API_END]:produce((state,action) => {
        if(action.payload === GET_MOVIES) state[GET_MOVIES] = false;
    })
},
{}
)