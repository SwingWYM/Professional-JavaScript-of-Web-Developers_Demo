(function(){
	var i = 0;
	var html = "<button id='addAccessory' type='button'>选择附件</button><button id='emptyAccessory' type='button'>清空附件</button><div id='fileContainer'></div><form><button class='btn-submit'>提交</button></form>"
	$('#file').append(html);

	function addFile(){
		
		
		// console.log(files[0].name + ' (' + files[0].type + ', ' + files[0].size + ' bytes)');
	}

	function createFile(){
		clearEmptyFile();
		var file = "<input type='file' hidden='hidden' id='file" + i + "'></input>"
		$('#file form').append(file);
		$('#file' + i).change(function(){
			var files = event.target.files,//这里不能用$(this).files
				j = 0,
				len = files.length;
			while (j < len) {
				var span = "<div><span>" + files[j].name + "</span><span class='Delete' id=accessory" + i++ + ">删除</span></div>";
				$('#fileContainer').append(span);
				$('#accessory' + (i - 1)).click(function(){
					var target = event.target,
					 	index = target.id.substring(9);
					$(target).parent().remove();
					$('#file' + index).remove();
				})
				j++;
			}
		})
	}



	

	function deleteFile(){
		
	}

	function clearEmptyFile(){
		var filesList = $('#file input');
		// alert(filesList.length);
		for (var j = 0, len = filesList.length; j < len; j++) {
			var index = filesList[j].id.substring(4),
				accessoryId = 'accessory' + index;
			if (!$('#' + accessoryId)[0]) {
				filesList[j].remove();
			}
		}
	}

	$('#addAccessory').click(function(){
		createFile();
		var file = '#file' + i;
		$(file).click();
		
	});

	$('#emptyAccessory').click(function(){
		var filesList = $('#file input');
		for (var j = 0, len = filesList.length; j < len; j++) {
			var index = filesList[j].id.substring(4),
				accessoryId = 'accessory' + index;
			if ( $('#' + accessoryId)[0]) {
					$('#' + accessoryId).parent().remove();
				}
			filesList[j].remove();
		}
	});
})();

