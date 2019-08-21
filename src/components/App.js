import React from 'react'
import StyledMovieContainer from './StyledMovieContainer'
import {Route} from 'react-router-dom'
import MoviesContainer from '../containers/MoviesContainer'
import MovieDetails from './MovieDetails'

const App =() => {
    
    return(
        <StyledMovieContainer>
            <Route exact path="/" component={MoviesContainer}/>
            <Route exact path="/movies/:id" component={MovieDetails}/>
        </StyledMovieContainer>
    ) 
}

export default App