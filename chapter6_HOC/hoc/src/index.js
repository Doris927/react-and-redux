import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountDown from './CountDown'
//import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CountDown startCount={10}>
        {
            (count) => <div>{count}</div>
        }
    </CountDown>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
