import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcons";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import HelpMenuContainer from '../containers/HelpMenuContainer'

const Header = () => (
  <StyledHeader>
    <HelpMenuContainer/>
    <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
    <FontAwesomeIcon icon="search" />
  </StyledHeader>
);
export default Header;
