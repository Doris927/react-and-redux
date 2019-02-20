import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
//import Perf from 'react-addons-perf'
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';


//window.Perf = Perf // 挂载到全局变量方便使用




const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

const loggerMiddleware = createLogger({collapsed: true});

export default createStore(reducer,
    composeWithDevTools());