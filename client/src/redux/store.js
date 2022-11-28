import { legacy_createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ),
);

export default store;