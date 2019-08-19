import React, { Fragment } from 'react'
import FontAwesomeIcon from './FontAwesomeIcons'
import StyledHeader from './StyledHeader'
import StyledHeaderTitle from './StyledHeaderTitle'
import { movies } from '../staticData'
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie'

const Movies = () => (
    <Fragment>
        <StyledHeader>
            <FontAwesomeIcon icon="bars" text="help" />
            <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
            <FontAwesomeIcon icon="search" />
        </StyledHeader>
        <StyledHorizontalScroll>
            {movies.map(movie => (
                <Movie 
                    key={movie.id}
                    poster={movie.poster}
                    duration={movie.duration}
                    year={movie.year}/>
            ))}
        </StyledHorizontalScroll>
    </Fragment>
)

export default Movies