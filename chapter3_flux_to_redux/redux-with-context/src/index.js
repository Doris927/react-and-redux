import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from './Provider'
import CounterPanel from './views/CounterPanel.jsx'
import store from './Store'

ReactDOM.render(
    <Provider store={store}>
        <CounterPanel/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
