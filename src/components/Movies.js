import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import StyledHeader from './StyledHeader'
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie'
import Header from './Header'
import StyledFooter from './StyledFooter'
import StyledLargeBtn from './StyledLargeBtn'
import StyledLoader from './StyledLoader'
import StyledMovieLink from './StyledMovieLink'


class Movies extends Component {
    state = {};
    static defaultProps = {
        movies: [],
        loading: true
    };
    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.object)
    };
    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <StyledHorizontalScroll>
                    {this.props.loading
                        ? <StyledLoader />
                        : this.props.movies.map(movie => (
                            <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                                <Movie
                                    key={movie.id}
                                    poster={movie.poster}
                                    duration={movie.duration}
                                    year={movie.year}
                                    name={movie.name} />
                            </StyledMovieLink>
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