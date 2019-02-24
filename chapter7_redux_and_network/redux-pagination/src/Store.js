import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {reducer as blogListReducer} from './blogList/';
import {reducer as pageSelectorReducer} from './pageSelector/'

const reducer = combineReducers({
    blogList: blogListReducer,
    pageInfo: pageSelectorReducer
});

export default createStore(reducer,{},applyMiddleware(thunkMiddleware));