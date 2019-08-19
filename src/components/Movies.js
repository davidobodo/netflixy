import React from 'react'
import FontAwesomeIcon from './FontAwesomeIcons'
import StyledHeader from './StyledHeader'
import StyledHeaderTitle from './StyledHeaderTitle'

const Movies =()=> (
    <StyledHeader>
        <FontAwesomeIcon icon="bars" text="help"/>
        <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
        <FontAwesomeIcon icon="search"/>
    </StyledHeader>
)

export default Movies