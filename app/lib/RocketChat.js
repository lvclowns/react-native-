/**
 * Created by LuoSiLv WebStorm.
 * Author: lv
 * Date:
 * Time:
 * Desc:
 */


import  Meteor from "react-native-meteor";
import store from "../../views/reduxStore";
import {hashPassword} from "react-native-meteor/lib/utils";
const ROCKET_LOG = 'RocketChat';
export const call = (method, ...params) => new Promise((resolve, reject) => {
  Meteor.call(method, ...params, (err, data) => {

    if(err) {
      reject(err);
    }

    resolve(data);
  });
});


export default RocketChat = {
  subscriptions: {}, //用户订阅

  connect() {
    const {chatServer} = store.getState().app.cfg;
    const url = `${chatServer}websocket`;
    return new Promise((resolve) => {
      Meteor.connect(url, {autoConnect: true, autoReconnect: true});
      Meteor.ddp.on('disconnected', () => {
        log(ROCKET_LOG, '断开连接');
      });
      Meteor.ddp.on('connected', () => {
        log(ROCKET_LOG, '连接成功');
        this.loginWithPassword('1206','1206');
      });

      Meteor.ddp.on('connected', () => {
        Meteor.ddp.on('changed', (ddpMessage) => {
          log(ROCKET_LOG, '数据变化', ddpMessage);
        });
      });
    }).catch(e => console.error(e));
  },


  loginWithPassword({username, password}, callback) {

    log(ROCKET_LOG, '开始登陆', username, password);
    let params = {
      password: hashPassword(password),
      user: {username}
    };

    return new Promise((resolve, reject) => {
        Meteor._startLoggingIn();
        return Meteor.call('login', params, async (err, result) => {
          log(ROCKET_LOG, '登录结果', err, result);
          Meteor._endLoggingIn();
        })
    });
  }
};