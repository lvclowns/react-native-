/**
 * Created by LuoSiLv WebStorm.
 * Author: lv
 * Date:
 * Time:
 * Desc:
 */
import {takeEvery, put, all, fork, select} from "redux-saga/effects";
import {appInit} from "./reducer";
import store from "./reduxStore";
import RocketChat from "../app/lib/RocketChat";

function* handleAppInit() {
    yield RocketChat.connect();
}


const app = function* app() {
  yield takeEvery(appInit, handleAppInit);
}


const sagas = function* sagas() {
  yield all([
    app(),
  ]);
}

export default sagas;