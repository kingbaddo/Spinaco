import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
//import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './scss/theme.scss';
import allReducers from './reducers';

const store =  createStore(allReducers);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
