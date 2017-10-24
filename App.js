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
import chineseLunar from './js/LunarCalendar'

import Shichen from './js/Shichen'
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
      console.log(lunar);
      console.log("SHI CHEN:"+Shichen.time2shiChen2(12,45));
      let shi=Shichen.time2shiChen2(12,45)[0];
      console.log("SHI CHEN yongshu:"+Shichen.time2YongShu[shi]);
      let nowDate=new Date();
      let nowYear=nowDate.getFullYear();
      let nowMonth=(nowDate.getMonth()+1);
      let nowDay=nowDate.getDate();
      let nowTime=nowDate.toLocaleTimeString();
      console.log("date year："+nowYear);
      console.log("date month："+nowMonth);
      console.log("date day："+nowDay);
      console.log("date time："+nowTime);

      let timeString=nowTime.split(":");
      let hour=timeString[0]
      let minu=timeString[1]
      let sec=timeString[2]
      console.log("date time hour："+hour);
      console.log("date time minu："+minu);
      console.log("date time sec："+sec);
      var nowDate_ = new Date(nowYear, nowMonth, nowDay);
      var month_=nowDate_.getMonth();
      console.log("month_"+month_)
      let lunar_ = chineseLunar.solarToLunar(nowDate_.getFullYear(),month_,nowDate_.getDate());
      console.log(lunar_);
      let year_=lunar_.GanZhiYear;
      let dizhi_year=year_.substring(1,2);
      let hour_string=(hour+"")+minu;
      let dizhi_shi=Shichen.getHourYongShu(hour_string)[1];
      console.log("dizhi shi"+dizhi_shi)
     // let dizhi_shi=Shichen.time2YongShu[shi_];

      console.log("ganzhi_year"+lunar_.GanZhiYear+"--"+dizhi_year);

      console.log("ti shu："+" nian:"+Shichen.time2YongShu[dizhi_year]+" month:"+lunar_.lunarMonth+" day:"+lunar_.lunarDay+" dizhi_hour:"+dizhi_shi);

      let shangTishu= (Shichen.time2YongShu[dizhi_year]+lunar_.lunarMonth+lunar_.lunarDay)%8;
      let xiaTishu= (Shichen.time2YongShu[dizhi_year]+lunar_.lunarMonth+lunar_.lunarDay+dizhi_shi)%8;
      let dongyao=((Shichen.time2YongShu[dizhi_year]+lunar_.lunarMonth+lunar_.lunarDay+dizhi_shi))%6;

      if(shangTishu==0){//8 倍数
        shangTishu=8;
      }
      if(xiaTishu===0){
        xiaTishu=8;
      }
      console.log("shang——tishu"+shangTishu);
      console.log("shang_gua "+Shichen.xianTianBagua[shangTishu+'']+" xia_gua"+Shichen.xianTianBagua[xiaTishu+'']+" dongyao"+dongyao);



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
