
var Shichen={}
Shichen.time2shiChen2=function(hour,minute){
	hour = Number.parseInt(hour,10);
	minute = Number.parseInt(minute,10);
	let shichen = time2shiChen[hour];

	let chuZheng = hour&1 ? '初' : '正';

	let ke = '';
	if(minute<15) ke = "初";
	else if(15<=minute&&minute<30) ke = "一";
	else if(30<=minute&&minute<45) ke = "二";
	else if(45<=minute) ke = "三";

	return [shichen,chuZheng,ke];
}
Shichen.getHourYongShu=function(hour_string){
    let hour = Number.parseInt(hour_string,10);

    let tishu;
     if(hour<59){
     	hour+=2400;
     }
     if(hour<2459&&hour>2300){
     	tishu=['子',1];
	 }else if(hour>100&&hour<259){
     	tishu=['丑',2];

	 }else if(hour>300&&hour<459){
         tishu=['寅',3];

	 }
     else if(hour>500&&hour<659){
         tishu=['卯',4];

     }
     else if(hour>700&&hour<859){
         tishu=['辰',5];

     }
     else if(hour>900&&hour<1059){
         tishu=['己',6];

     }
     else if(hour>1100&&hour<1259){
         tishu=['午',7];

     }
     else if(hour>1300&&hour<1459){
         tishu=['未',8];

     }
     else if(hour>1500&&hour<1659){
         tishu=['申',9];

     }
     else if(hour>1700&&hour<1859){
         tishu=['酉',10];

     }
     else if(hour>1900&&hour<2059){
         tishu=['戊',11];

     }

     else if(hour>2100&&hour<2259){
         tishu=['亥',12];

     }







    return tishu;
}

var time2shiChen = {
	'23':'子',
	'0':'子',
	'1':'丑',
	'2':'丑',
	'3':'寅',
	'4':'寅',
	'5':'卯',
	'6':'卯',
	'7':'辰',
	'8':'辰',
	'9':'巳',
	'10':'巳',
	'11':'午',
	'12':'午',
	'13':'未',
	'14':'未',
	'15':'申',
	'16':'申',
	'17':'酉',
	'18':'酉',
	'19':'戌',
	'20':'戌',
	'21':'亥',
	'22':'亥',
};
Shichen.xianTianBagua = {//先天
    '1':'乾',
    '2':'兑',
    '3':'离',
    '4':'震',
    '5':'巽',
    '6':'坎',
    '7':'艮',
    '8':'坤'
};
Shichen.houTianBagua = {//后天
    '1':'坎',
    '2':'坤',
    '3':'震',
    '4':'巽',
    '5':'#',
    '6':'乾',
    '7':'兑',
    '8':'艮',
	'9':'离'
};
Shichen.time2YongShu = {//dizhi
    '子':1,
    '丑':2,
    '寅':3,
    '卯':4,
    '辰':5,
    '巳':6,
    '午':7,
    '未':8,
    '申':9,
    '酉':10,
    '戌':11,
    '亥':12,
};


Shichen.time2TianganYongShu = {'甲':1, '乙':2, '丙':3, '丁':3, '戊':4, '己':5, '庚':6, '辛':7, '壬':9, '癸':10}, //天干
  module.exports=Shichen;
