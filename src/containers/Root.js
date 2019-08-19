import React from 'react'
import {Provider} from 'react-redux'
import store from '../store/store'
import DevTools from './DevTools'
import StyledContainer from '../components/StyledContainer'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'

const Root = () => {
    return(

        //to connect to store
        <Provider store={store}>
            {/* to bring in my theme(themes are like variables(reuseable styles)) */}
            <ThemeProvider theme={theme}>
                {/* just to style my container(just as the name implies)*/}
                <StyledContainer>
                    <DevTools/>
                </StyledContainer>
            </ThemeProvider>
        </Provider>
    )
}

export default Root;