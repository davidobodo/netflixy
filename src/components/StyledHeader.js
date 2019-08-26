import styled from 'styled-components'

const StyledHeader =styled.header`
    height:70px;
    display:flex;
    padding: 0 20px;
    color:#8b9095;
    font-size:0.8rem;
    align-items:center;
    > * {
        z-index:10;
    }
`;

export default StyledHeader