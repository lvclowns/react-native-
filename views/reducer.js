/**
 * Created by LuoSiLv WebStorm.
 * Author: lv
 * Date:
 * Time:
 * Desc:
 */
import React, {Component} from "react";
import {createAction, createReducer} from "redux-act";
import {combineReducers} from "redux";

const initialState = {
  cfg: null
};

// app初始化
export const appInit = createAction('app init', (cfg, refs) => ({cfg, refs}));

const app = createReducer({
    [appInit]: (state, {cfg, refs}) => {
      return {
        ...state,
        ...refs,
        cfg,
      };
    }
}, initialState);


export default reducers = combineReducers({
  app
});