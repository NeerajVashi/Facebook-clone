import thunk from 'redux-thunk'
import logger from  'redux-logger'
import { combineReducers, createStore, applyMiddleware} from 'redux';
import user from './user'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    user: user,
})

const middleWare = applyMiddleware(promise, thunk, logger)

const  store = createStore(reducers,{},composeWithDevTools(middleWare));
export default store
