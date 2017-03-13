function curry(fn){
	var args = Array.prototype.slice.call(arguments,1);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		debug("out=" + args);
		debug("inner=" + innerArgs);
		debug("total=" + finalArgs);
		return fn.apply(null, finalArgs);
	}
}

function add(num1, num2){
	return num1 + num2;
}

var curriedAdd = curry(add,5,6,7);
debug("结果＝" + curriedAdd(5));//只能两位     


function add1(x){
	debug("x=" + x);
	function addFake(y){//第一次调用了add，初始化了addFake
		debug("y=" + y)
		x = x + y;
		return addFake;
	}
	addFake.toString = addFake.valueOf = function(){return x;};
	return addFake;

}

debug(add1(4)(5)(6));
debug(add1(1));

// function add2(x){
// 	return (x);
// }
// debug(add2(1)(3));
