//通用函数
//substr(0,1)函数,从0开始,切1个字符
function g(selector){
	var method = selector.substr(0,1) == '.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
	// 传入选择器,返回一个数组
}

//随机数发生器 random([min,max])
function random(range){
	var max = Math.max(range[0],range[1]);
	var min = Math.min(range[0],range[1]);

	var daff = max - min;
	var number = Math.floor(Math.random()*daff + min);
	return number;
}
//2.输出所有海报
//1).导入data

//2).join()函数将数组转换为字符串,若无参数则默认以,为分隔号
function addPhotos(){
	var template = g('#wrap').innerHTML;
	var html = [];

	for(s in data){
		var _html = template
					.replace('{{index}}',s)
					.replace('{{img}}',data[s].img)
					.replace('{{caption}}',data[s].caption)
					.replace('{{desc}}',data[s].desc);
		html.push(_html);
	}
	//输出到页面
	g('#wrap').innerHTML = html.join();
	
}
	addPhotos();
//1.翻转图片
//传入元素,判断元素的className
//如果className中有photo-front则用photo-back替换
//正则:test(), replace()
//如果className中有photo-back则用photo-front替换
function turn(elem){
	var cls = elem.className;
	if(/photo-front/.test(cls)){
		cls = cls.replace(/photo-front/,'photo-back');
	}
	else{
		cls = cls.replace(/photo-back/,'photo-front');
	}
	alert(cls);
	return elem.className = cls;
}