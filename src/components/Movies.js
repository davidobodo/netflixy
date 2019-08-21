import React, { Component, Fragment } from 'react'
import FontAwesomeIcon from './FontAwesomeIcons'
import StyledHeader from './StyledHeader'
import StyledHeaderTitle from './StyledHeaderTitle'
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie'
import StyledFooter from './StyledFooter'
import StyledLargeBtn from './StyledLargeBtn'

class Movies extends Component {
    componentDidMount(){
        this.props.getMovies()
    }

    render() {
        return (
            <Fragment>
                <StyledHeader>
                    <FontAwesomeIcon icon="bars" text="help" />
                        <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
                    <FontAwesomeIcon icon="search" />
                </StyledHeader>
                <StyledHorizontalScroll>
                    {this.props.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            poster={movie.poster}
                            duration={movie.duration}
                            year={movie.year}
                            name={movie.name} />
                    ))}
                </StyledHorizontalScroll>
                <StyledFooter>
                    <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
                </StyledFooter>
            </Fragment>
        )
    }
}


export default Movies