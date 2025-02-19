import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../../reducers';
import sagas from '../../sagas';
import applyAppStateMiddleware from './appStateMiddleware';
import applyInternetStateMiddleware from './internetStateMiddleware';

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(applyAppStateMiddleware(), applyInternetStateMiddleware(), applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);
sagaMiddleware.run(sagas);

export default store;
