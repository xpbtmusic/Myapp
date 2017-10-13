/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
var chineseLunar = require("lunar-calendar");
import shichen from './js/shichen'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
          {this.getDate()}
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
  getDate(){
    var solarDate = new Date(2014, 1, 1); //公历2014年1月1日

      //var lunar = chineseLunar.solarToLunar(new Date(1982, 0, 29));
      var lunar = chineseLunar.solarToLunar(solarDate.getFullYear(),solarDate.getMonth(),solarDate.getDate());
      console.log(lunar);   //一九八二年腊月十六
      console.log("SHI CHEN:"+shichen.time2shiChen2(12,45));
      let shi=shichen.time2shiChen2(12,45)[0];
      console.log("SHI CHEN yongshu:"+shichen.time2YongShu[shi]);

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
