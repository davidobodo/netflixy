import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persiststore } from '../store/store'
import DevTools from './DevTools'
import StyledContainer from '../components/StyledContainer'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'
import App from '../components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Root = () => {
    return (

        //to connect to store
        <Provider store={store}>
            <PersistGate persistor={persiststore} loading={null}>
                {/* to bring in my theme(themes are like variables(reuseable styles)) */}
                <ThemeProvider theme={theme}>
                    {/* just to style my container(just as the name implies)*/}
                    <StyledContainer>
                        <Router>
                            <App />
                        </Router>
                        <ToastContainer />
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default Root;