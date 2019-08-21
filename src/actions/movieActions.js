import {createAction} from 'redux-actions'
import {apiPayloadCreator} from '../util/appUtils'
import {API} from '../constants/actionTypes'

const getMoviesAC =createAction(API, apiPayloadCreator);

export const getMovies =()=>
    getMoviesAC({url:"/vcvx0", onSuccess: setMovies});

function setMovies(movies){
    console.log(movies);
    return{type:""};
}