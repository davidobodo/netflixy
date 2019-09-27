import styled from 'styled-components'
import { devices } from '../util/styledUtils'

const StyledLargeBtn = styled.button`
    border:0;
    border-radius:5px;
    color:#fff;
    width:60%;
    height:50px;
    display:block;
    margin:0 auto;
    background:#eb6259;
    transition:all 1s cubic-beizer(0.67, 0.13, 0.1, 0.81)

    &:hover{
        cursor:pointer;
        transform:translateY(2px);
        box-shadow:10px 55px 150px -20px #2a628f;
        &:after {
            transform: scaleY(1);
            transform-origin: bottom;
          }
    }

    &:active{
        transform:translateY(4px);
    }

    &:after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        transform:scaleY(0);
        background:#ac4743;
        transition:transform 1s cubic-beizer(0.19, 1, 0.22,1);
    }

    ${devices.md`
        width:60%;
        position:relative;
        top:80%;
    `};
`;

export default StyledLargeBtn