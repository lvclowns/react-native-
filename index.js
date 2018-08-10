/** @format */

import {AppRegistry} from 'react-native';
import DoctorApp from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import  React from "react";
import store from "./views/reduxStore";
import "./app/utils/Global";
const App = () => (
  <Provider store={store}>
    <DoctorApp/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
