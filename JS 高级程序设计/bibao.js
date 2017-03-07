function test(){
	for (var i = 0; i <= 10; i++) {
		setTimeout(sk(i),i*1000);
	}

	function sk(index){
		return function(){debug(index)}
	}
}
test();