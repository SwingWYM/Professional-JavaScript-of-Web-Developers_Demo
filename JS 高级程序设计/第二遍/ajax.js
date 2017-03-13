function createXHR(){
		if (typeof XMLHttpRequest != "undefined") {//非IE6
			return new XMLHttpRequest();
		}else if (typeof ActiveXObject != "undefined") {//IE6极其以下
			if (typeof arguments.callee.activeXString != "string") {
				var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
				    i, len;
				for (i = 0,len = versions.length; i < len; i++) {
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch(ex){
						//
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}else {
			throw new Error("No XHR object available.");
	}
}

function createXHR(){
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject('Microsoft.XMLHTTP');
	}else{
		throw new Error('No XHR object available.')
	}

}

xhr = createXHR();


//GET
//url的形式大致为'/xx/xx/ss.ss?xx=xx&xx=xx'
//onreadystatechange是异步的时候需要的，只要readyState的值变成另一个值，就会触发onreadystatechange。
//使用get的时候经常会有错误，就是查询字符串的格式有问题，查询字符串中每个参数名和值都必须用encodeURLComponent()进行编码

function addURLParam(url,name,value) {
	url += (url.indexOf("?") == -1 ? '?' : '&');
	url += encodeURLComponent(name) + '=' + encodeURLComponent(value);
	return url;
}

function get(url,getMessage,xhr){
	xhr.onreadystatechange = getMessage;
	xhr.open('GET',url,true);
	xhr.send(null);
}

//getMessage可以这样写：
function getMessage(){
	if (xhr.readyState == 1) {
		//显示loading
	}else if(xhr.readyState == 4){
		if ((xhr.status >= 200 && xhr.status < 300)|| xhr.status == 304) {
			//成功，处理xhr.responseText
		}else{
			//失败
			alert(xhr.status)
		}
	}
}
//或者简单一点
function getMessage(){
	if (xhr.readyState == 4 && xhr.status == 200) {
		//成功
	}
}



//Post
//data的形式为"xx=xx&xx=xx"
function post(url,xhr,data,getMessage){
	xhr.onreadystatechange = getMessage;
	xhr.open("POST",url,true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(data);
}
//用xhr模仿表单提交：
function post(url,xhr,getMessage){
	xhr.onreadystatechange = getMessage;
	xhr.open("POST",url,true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	var from = document.getElementById('form');
	// xhr.send(new FormData(form));//FormData是一个自带的一个表单序列化的类型，是个对象。可以用append追加键值对。使用这个方式的时候，不需要添加setRequestHeader
	// xhr.timeout = 1000;//仅适用于IE8+
	xhr.send(serialize(form));
}
//serialize表单序列化函数。将表单变成"xx=xx&xx=xx"
function serialize(form){
		var parse = [],
		field = null,
			i,
			len,
			j,
			optLen,
			option,
			optValue;
		for(i = 0, len = form.elements.length; i < len; i++){
			field = form.elements[i];

			switch(field.type) {
				case "select-one":
				case "select-multiple":
					if (field.name.length) {
						for (j = 0 ,optLen = field.options.length; j < optLen; j++) {
							option = field.options[j];
							if (option.selected) {
								optValue = '';
								if (option.hasAttribute) {
									optValue = (option.hasAttribute('value') ? option.value : option.text);
								}else{
									optValue = (option.attributes('value') ? option.value : option.text);
								}
								parse.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(optValue));
							}
						}
					}
					break;
				case undefined:
				case "file":
				case "submit":
				case "reset":
				case "button":
					break;
				case "checkbox":
				case "radio":
					if (!field.checked) {
						break;
					}
				default:
					if (field.name.length) {
						parse.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
					}
			}
		}
		return parse.join('&');
}


xhr = createXHR;
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4) {
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
			console.log(xhr.responseText);
		}
	}
}
xhr.open("GET",'/test/hello?name=Swing&age=20');
xhr.send(null);


xhr = createXHR;
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4) {
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
			console.log(xhr.responseText);
		}
	}
}
xhr.open("POST",'/test/hello',true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send(data);


xhr = createXHR;
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4) {
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
			console.log(xhr.responseText);
		}
	}
}
xhr.open("POST",'/test/hello',true);
xhr.send(new FormData(form));
