var text = 'mom and dad and baby';
var pattern1 = /(mom( (and (dad))( and baby)?)?)?/g;
var pattern2 = /( and dad( and baby)?)?/g;
var pattern3 = /( and dad( and bay)?)/g;
var matches1 = pattern1.exec(text);
var matches2 = pattern2.exec(text);
var matches3 = pattern3.exec(text); 
debug('matches1--->' + matches1);
debug('matches2--->' + matches2);
debug('matches3--->' + matches3);

var text = 'mom and dad';
var pattern = /(mom(and)?)?/g;
var matches = pattern.exec(text);
debug(matches);


var a = 'lalala';
// var pattern = new RegExp(a,'i');
var pattern = '/' + a + '/';
var str = 'wo shi yi ge lalala';
// str = str.replace(pattern,'lululu');
str = str.replace(eval(pattern),'lululu');
debug(str);