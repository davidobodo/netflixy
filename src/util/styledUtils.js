//this holds the object i would use to style all components in their responsive form
import {css} from 'styled-components'


export const devices ={
    sm:(...args)=> css`@media(min-width:576px){${css(...args)}}`,
    md:(...args)=> css`@media(min-width:768px){${css(...args)}}`,
    lg:(...args)=> css`@media(min-width:992px){${css(...args)}}`,
    xl:(...args)=> css`@media(min-width:1200px){${css(...args)}}`
};

//generate css from template literal