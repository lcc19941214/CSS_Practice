function addLoadEvent (func){
	// 函数调用
	var oldonload = window.onload ; 
	if (typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function showSideNav() {
	// 滑出侧边栏
	var mainBody = document.getElementsByClassName("main-wrap")[0];
	var oBtn = mainBody.getElementsByClassName("g-header")[0].getElementsByTagName('i')[0];
		// error // 获取类名  存储在外部的theClass 中得className本身没有被修改
		// var theClass = mainBody.className;
		// theClass = theClass.slice(-5);
		// console.log(theClass);
	mainBody.classJudge = mainBody.className.slice(-5);//尾部判断
	// 点击事件
	oBtn.onclick = function(){
		// 判断类名
		mainBody.classJudge = mainBody.classJudge == "slide" ? moveToLeft() : moveToRight() ;
	}
	function moveToRight(){
		mainBody.className += " slide";//添加slide类名
		slideElem("main-wrap", 75, 0, 20);
		return mainBody.classJudge = mainBody.className.slice(-5);
	}
	function moveToLeft(){
		slideElem("main-wrap", 0, 0, 20);
		mainBody.className = mainBody.className.slice(0,-6);//删除slide类名
		return mainBody.classJudge = mainBody.className.slice(-5);
	}
	if(mainBody.classJudge == "slide"){
		alert("A");
	}
}
function slideElem(elemClass, final_x, final_y, interval){
	// 移动元素
	// 获取元素坐标
	var elem = document.getElementsByClassName(elemClass)[0];
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left	= "0px";
	}
	if(!elem.style.top){
		elem.style.top	= "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	// 判断距离
	xpos == final_x && true;
	if(xpos < final_x){
		dist = Math.ceil((final_x - xpos) / 10);
		xpos += dist ;
		// xpos ++;
	}
	if(xpos > final_x){
		dist = Math.ceil((xpos - final_x) / 10);
		xpos -= dist ;
	}
	// move
	elem.style.left = xpos + "%";
	var result = "slideElem('" + elemClass + "', " + final_x + ", " + final_y + ", " + interval + ")";
	elem.movement = setTimeout(result, interval);
}
// addLoadEvent(slideElem("main-wrap", 75, 0 ,20));


addLoadEvent(showSideNav);








