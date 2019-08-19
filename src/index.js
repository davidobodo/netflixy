import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root'
import * as serviceWorker from './serviceWorker';

//its a default export so i can use any name(i didnt even name the function in injectGlobalStyles)
import injectGlobalStyles from './injectGlobalStyles'

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// to put in the global styles i use in this app
injectGlobalStyles();
