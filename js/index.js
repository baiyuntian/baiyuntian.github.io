/*
	白梦超
	20101019
	首页js
*/

'use strict';
//导航跟随效果
(function (){
	var left=0;
	var iSpeed=20;
	var count=0;
	var timer=null;
	window.move=function (obj,iTarget){
		clearInterval(timer);
		timer=setInterval(function (){
			iSpeed+=(iTarget-left)/5;
			iSpeed*=0.8;
			left+=iSpeed;
			obj.style.left=left+'px';
			if(Math.round(iSpeed)==0&&(Math.round(left)==iTarget)){
				clearInterval(timer);
				obj.style.left=iTarget+'px';
			}
		},30);
	}
})();
window.onload = function(){
	var oLi=document.getElementById('li');
	var aBtn=document.getElementsByTagName('li');
	var l=0;
	
	for(var i=0; i<aBtn.length-1; i++){
		(function (index){
			aBtn[i].onmouseenter=function (){
				//oLi.style.left=this.offsetLeft+'px';
				move(oLi,this.offsetLeft);
			};	
			aBtn[i].onmouseleave=function (){
				//oLi.style.left=this.offsetLeft+'px';
				move(oLi,l);
			};	
			aBtn[i].onclick=function (){
				//oLi.style.left=this.offsetLeft+'px';
				l=this.offsetLeft;
				move(oLi,l);
			};			
		})(i);
	} 
}