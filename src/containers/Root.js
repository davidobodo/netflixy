import React from 'react'
import {Provider} from 'react-redux'
import store from '../store/store'
import DevTools from './DevTools'
import StyledContainer from '../components/StyledContainer'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'

const Root = () => {
    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <DevTools/>
                </StyledContainer>
            </ThemeProvider>
        </Provider>
    )
}

export default Root;