/**
 * Created by LuoSiLv WebStorm.
 * Author: lv
 * Date:
 * Time:
 * Desc:
 */

import {applyMiddleware, createStore} from "redux";
import reducers from "./reducer";
import sagas from "./saga";
import createSagaMiddleware from "redux-saga";
import {logger} from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
let store;

if( __DEV__ ) {
  store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
}else {
  store = createStore(reducers, applyMiddleware(sagaMiddleware));
}


sagaMiddleware.run(sagas);

export default store;