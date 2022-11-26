import {legacy_createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const store = legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

export default store;