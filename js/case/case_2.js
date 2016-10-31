window.onload=function (){
	var oUl=document.querySelector('ul');
	var aLi=oUl.children;
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].style.transition='1s all ease '+(11-i)*100+'ms';
		aLi[i].style.WebkitTransform='rotateY('+360/11*i+'deg) translateZ(350px)';
	}
	
	//拿数字模拟角度
	var x=0;
	var y=0;
	
	document.onmousedown=function (ev){
		var disX=ev.pageX-x; 	
		var disY=ev.pageY-y;
		document.onmousemove=function (ev){
			console.log(x+','+y);
			x=ev.pageX-disX;
			y=ev.pageY-disY;
			
			oUl.style.WebkitTransform='perspective(800px) rotateX('+-y/5+'deg) rotateY('+x/5+'deg)';
		};
		
		document.onmouseup=function (){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		return false;
	};
};