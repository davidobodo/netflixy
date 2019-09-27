import {createAction} from 'redux-actions'
import {apiPayloadCreator} from '../util/appUtils'
import {API, SELECT_MOVIE} from '../constants/actionTypes'
import {normalize,schema} from 'normalizr'
import { SET_MOVIES} from '../constants/actionTypes'
import { GET_MOVIES} from '../constants/labels'

const getMoviesAC =createAction(API, apiPayloadCreator);

export const getMovies =()=>
    getMoviesAC({
        url:"/vcvx0", 
        onSuccess: setMovies,
        label: GET_MOVIES});

function setMovies(movies){
    const movieSchema = new schema.Entity("movies");
    const movieListSchema = new schema.Array(movieSchema);
    const normalizedData = normalize(movies, movieListSchema);
    return{
        type: SET_MOVIES,
        payload:normalizedData.entities.movies
    };
}

export const selectMovie = createAction(SELECT_MOVIE);