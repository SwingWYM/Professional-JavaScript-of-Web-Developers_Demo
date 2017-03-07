var a = '89a';
debug(++a);
var b = '8a9a';
debug(parseInt(b));
var c = 1.2;
debug(++c);
var d = true;
debug(++d);
var e = "a";
debug(e*2);
for (var f in null){
	debug(f);
}//不执行，低版本抛出异常
function one(num1,num2){
	arguments[0] = 10;
	debug(num1);
	debug(num2);
}
one(2,3);
one(4);

var person = new Object();
person.name = 'wang';
debug(person.name);
var person1 = person;
debug(person1.name);
person1.name = 'mei';
debug(person.name);
person1 = new Object();
debug(person1.name);
debug(person.name);
debug(person.toString());

var colors = ['red', 'blue'];
colors[4] = 'green';
debug(colors.length);
debug(colors[3]);
debug(colors);

person = {
	toString : function(){ //换成toLocaleString、valueOf
		return 1;
	},
	toLocaleString : function(){
		return 3;
	}
}
person1 = {
	toString : function(){
		return 2;
	},
	valueOf : function(){
		return 2;
	},
	toLocaleString : function(){
		return 4;
	}
}
var people = [person , person1];
debug(person.toString());
debug(person.valueOf());
debug(person.toLocaleString());
debug(person);
debug(people.toString());
debug(people.toLocaleString());
debug(people);
debug(person + person1);
debug(Number(person));
debug(Number(person1));
//在没有toLocaleString的时候都用toString，在没有valueOf的时候也用toString。
var colors = ['red','blue'];
debug(colors);
debug(colors.toString());
debug(colors.toLocaleString());
debug(colors.valueOf());

var num = [10,2,5,4];
debug(num.sort());
function compare(value1 , value2){
	return value2 - value1;
}
debug(num.sort(compare));

var numbers = [1,2,3,4,5];
var mapResult = numbers.map(function(item, index, array){
	return (item > 2);
});
debug(mapResult);
var mapResult = numbers.map(function(item, index, array){
	return item * 2;
});
debug(mapResult);

//正则
re = /cat/g;
var r = re.test('catastrophe');
debug(r);
var text = 'cat, bat, sat, fat';
var pattern1 = /.at/;
var matches = pattern1.exec(text);
debug(matches.index);
debug(matches[0]);
debug(matches[1]);
debug(pattern1.lastIndex);

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
debug(matches.index);
debug(matches[0]);
debug(matches[1]);
debug(pattern2.lastIndex);
var matches = pattern2.exec(text);
debug(matches.index);
debug(matches[0]);
debug(matches[1]);
debug(pattern2.lastIndex);
var matches = pattern2.exec(text);
debug(matches.index);
debug(matches[0]);
debug(matches[1]);
debug(pattern2.lastIndex);
debug(matches);
// () 是为了提取匹配的字符串。表达式中有几个()就有几个相应的匹配字符串。
// (\s*)表示连续空格的字符串。
// []是定义匹配的字符范围。比如 [a-zA-Z0-9] 表示相应位置的字符要匹配英文字符和数字。[\s*]表示空格或者*号。
// {}一般用来表示匹配的长度，比如 \s{3} 表示匹配三个空格，\s[1,3]表示匹配一到三个空格。
// (0-9) 匹配 '0-9′ 本身。 [0-9]* 匹配数字（注意后面有 *，可以为空）[0-9]+ 匹配数字（注意后面有 +，不可以为空）{1-9} 写法错误。
// [0-9]{0,9} 表示长度为 0 到 9 的数字字符串。
var text = 'mom and dad and baby';
// var text = 'mom'
var pattern = /^(mom( (and (dad))( and baby)?)?)?$/g;//类似于深度优先,这里的问号，表示括号里的内容可有可无，有的时候返回有的内容，没有的时候返回没有的内容
// var pattern = /mom( and dad( and baby))/gi;
// var pattern = /( and dad( and baby)?)?/g;//为什么会undefined，似乎是因为不是从mom开始的，从mom开始的可以在最外层加括号和问好
// var pattern = /( (and)?)/;
// var pattern = /(and dad)?(mom)?/
var pattern = /(mom)?(mom)/
var pattern = /and dad (mom)///似乎有一定的顺序的讲究
var matches = pattern.exec(text);
debug("matches:" + matches);
debug(matches[0]);
debug(matches[1]);
debug(matches[2]);
debug(matches[3]);

var text = 'November';
var pattern = /Nov(ember)?/;
var matches = pattern.exec(text);
debug(matches);




var text = 'this has been a short summer hhort';
var pattern = /(.)hort/g;
var matches = pattern.exec(text);
debug(matches);
matches = pattern.exec(text);
debug(matches);

// 对象排序 返回函数
function createComparisonFunction(propertyName){
	return function(object1,object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if(value1 < value2){
			return -1;
		}else if(value1 > value2){
			return 1;
		}else{
			return 0;
		}
	};
}
var data = [{name:'Zachary', age:28}, {name:'Nicholas', age:29}];
data.sort(createComparisonFunction('name'));
debug(data[0].name);
data.sort();
debug(data[0].name);
debug(data[0].toString());
debug(data[0].valueOf());

var numberObject = new Number(10);
debug(numberObject.valueOf());

var text = 'mom and dad and baby and dad and baby';
var pattern = /( (and (dad))( and baby))/g;//类似于深度优先
// var pattern = /mom( and dad( and baby))/gi;
// var pattern = /( and dad( and baby)?)?/gi;
var	result = text.replace(pattern,'word ($1)');
debug(result);

var text = "cat, bat, sat, fat";
result = text.replace(/(at)/g,"word ($1)");
debug(result);

function Person (name, age, job){
	var o = new Object();
	o.sayName = function(){
		debug(name);
	}
	return o;
}
var friend = Person("Nicholas", 29, "Sofitware Enginieer");
friend.sayName();
debug(friend.age);//只能通过函数来取得属性

function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}
SuperType.prototype.sayName = function(){
	debug(this.name);
}
function SubType(name, age){
	this.age = age;
	SuperType.call(this,name);//color被如何继承取决于是否有这句话
}
SubType.prototype = new SuperType;
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
	debug(this.age);
}
var instance = new SubType('Nicholas', 29);
instance.colors.push('black');
debug(instance.colors);
instance.sayName();
instance.sayAge();
var instance1 = new SubType('Nicholas', 30);
debug(instance1.colors);
instance1.sayAge();
instance1.sayName();


// function SpeciaArray(){
// 	this.values = null;
// }
// SpeciaArray.prototype = {
// 	constructor:SpeciaArray,
// 	toPipeString:function(){
// 		// debug(['red','blue'].join("|"));
// 		// debug(['red','blue']);
// 		var 
// 	}
// }
// var colors = new SpeciaArray("red","blue");
// debug(colors.values[0]);
// colors.toPipeString();
//用其他方法改写寄生构造函数模式所写的构造函数，失败

function SpeciaArray(){
	var values = new Array();
	values.push.apply(values,arguments);
	values.toPipeString = function(){
		return this.join('|');
	}
	return values;
}

var colors = new SpeciaArray("red","blue");
debug(colors);

var name = "The Windows";
var object = {
	name: "My Object",
	getNameFunction: function(){
		return function(){
			return this.name;
		};
	}
};
debug(object.getNameFunction());
debug(object.getNameFunction()());
debug((object.getNameFunction())());

var singleton = function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	return{
		publicProperty: true,
		publicMethod: function(){
			privateVariable ++;
			return privateFunction();
		}
	};
}();
debug(singleton);
debug(singleton.publicProperty);
debug(singleton.publicMethod);
debug(singleton.publicMethod());

