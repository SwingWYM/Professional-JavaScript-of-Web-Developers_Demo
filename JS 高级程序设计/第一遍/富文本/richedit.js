

(function(){
	var EventUtil = {

		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on" + type.handler);
			}else{
				element["on" + type] = handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false)
			}else if(element.detachEvent){
				element.detachEvent("on" + type,handler);
			}else{
				element["on" + type] = null;
			}
		},
		getEvent:function(event){
			return event ? event : window.event;
		},
		getTarget:function(event){
			return event.target || event.srcElement;
		},
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		},
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
		},
		getRelatedTarget:function(event){
			if(event.relatedTarget){
				return event.relatedTarget;
			}else if(event.toElement){
				return event.toElement;
			}else if(event.fromElement){
				return event.fromElement;
			}else{
				return null;
			}
		},
		getButton:function(event){
			if(document.implementation.hasFeature("MouseEvents", "2.0")){
				return event.button;
			}else{
				switch(event.button) {
					case 0:
					case 1:
					case 3:
					case 5:
					case 7:
						return 0;
					case 2:
					case 6:
						return 2;
					case 4:
						return 1;
				}
			}
		},
		getWheelDelta:function(event){
			if(event.wheelDelta){
				return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
			}else{
				return -event.detail * 40;
			}
		},
		getCharCode:function(event){
			if(typeof event.charCode == "number"){
				return event.charCode;
			}else{
				return event.keyCode;
			}
		},

		getClipboardText:function(event){
			var clipboarData = (event.clipboarData || window.clipboarData);
			return clipboarData.getData('text');
		},

		setClipboardText:function(evetn, value){
			if (event.clipboarData){
				return event.clipboarData.setData('text/plain', value);
			}else if(window.clipboarData){
				return window.clipboarData.setData('text',value);
			}
		}

	}


	var richedit = document.getElementById('richedit');
	var toolbar = document.createElement('div');
	var content = document.createElement('div');


	function createToolBar(){
		toolbar.id = 'toolbar';
		content.id = 'content';
		content.contentEditable = 'true';
		richedit.appendChild(toolbar);
		richedit.appendChild(content);
		function createTool(config){
			var div = document.createElement('div');
			if(config === 'code'|| config === 'size'){
				div.className = "select " + config;
				if (config === 'code') {
					div.innerText = '代码语言';
				}
				else if (config === 'size') {
					div.innerText = '16px';
				}
			}else if (config === 'divide') {
				div.className = 'divide';
				div.innerText = '|';
			}else{
				div.className = 'unit ' + config;
			}
			toolbar.appendChild(div);
		}
		createTool('empty');
		createTool('repeal');
		createTool('reform');
		createTool('divide');
		createTool('bold');
		createTool('ita');
		createTool('under');
		createTool('strick');
		createTool('num');
		createTool('dote');
		createTool('color');
		createTool('acce');
		createTool('pic');
		createTool('formula');
		createTool('divide');
		createTool('code');
		createTool('size');
	}
	createToolBar();

	
	(function clicked(){
		EventUtil.addHandler(toolbar,'click',function(event){
			event = EventUtil.getEvent(event);
			target = EventUtil.getTarget(event);
			var child = toolbar.firstElementChild;
			if (target.classList.contains('clicked')) {
				while (child != toolbar.lastElementChild) {
					child.classList.remove('clicked');
					child = child.nextElementSibling;
				}
			}else{
				while (child != toolbar.lastElementChild) {
					child.classList.remove('clicked');
					child = child.nextElementSibling;
				}
				target.classList.add('clicked');
			}
		})
	})();


	(function tool_empty(){
		var empty = toolbar.getElementsByClassName('empty')[0];
		EventUtil.addHandler(empty,"click",function(event){
			content.innerHTML = '';
		})
	})();

	(function tool_bold(){
		
	})();

})();