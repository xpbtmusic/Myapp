
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
Shichen.time2YongShu = {
    '子':'1',
    '丑':'3',
    '寅':'3',
    '卯':'4',
    '辰':'5',
    '巳':'6',
    '午':'7',
    '未':'8',
    '申':'9',
    '酉':'10',
    '戌':'11',
    '亥':'12',
};
  module.exports=Shichen;
