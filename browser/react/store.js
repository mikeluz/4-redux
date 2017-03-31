import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers/root-reducer';

export default createStore(reducer, null, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var createLoggerResult = createLogger()
var applyMiddlewareResult = applyMiddleware(createLoggerResult)