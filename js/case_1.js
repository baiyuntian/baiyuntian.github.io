//获取非行间样式
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//运动框架
function startMove(obj,json,options){
	options=options||{};
	options.duration=options.duration||700;
	options.easing=options.easing||'ease-out';
	
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseInt(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.duration/30);
	
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);	
}
window.onload=function (){
	var oBox=document.getElementById('box');
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
	var oBtn3=document.getElementById('btn3');
	
	var R=4;
	var C=7;
	for(var r=0; r<R; r++){
		for(var c=0; c<C; c++){
			var oS=document.createElement('span');
			oS.style.width=oBox.offsetWidth/C+'px';
			oS.style.height=oBox.offsetHeight/R+'px';
			oBox.appendChild(oS);
			oS.style.position='absolute';
			oS.style.left=oS.offsetWidth*c+'px';
			oS.style.top=oS.offsetHeight*r+'px';
			oS.style.backgroundPosition='-'+oS.offsetWidth*c+'px -'+oS.offsetHeight*r+'px';
			oS.style.backgroundImage='url(/images/case_1/0.jpg)';
			
			oS.r= r;
			oS.c= c;
		}
	}
	
	var aS=document.getElementsByTagName('span');
	var iNow=0;
	var timer=null;
	var bOk = true;
	//特效1
	oBtn1.onclick=special_1;
	//特效2
	oBtn2.onclick=special_2;
	//特效3
	oBtn3.onclick=special_3;


	//特效1
	function special_1(){
		if (!bOk) return;
		bOk = false;
		iNow++;
		if(iNow%3==2){
			oBox.style.backgroundImage='url(/images/case_1/0.jpg)';
		}else{
			oBox.style.backgroundImage='url(/images/case_1/'+(iNow%3+1)+'.jpg)';
		}
		for(var i=0; i<aS.length; i++){
			(function (index){
				setTimeout(function (){
					aS[index].style.backgroundImage='url(/images/case_1/'+iNow%3+'.jpg)';
					aS[index].style.opacity=0;
					startMove(aS[index],{opacity:1});
					clearTimeout(oBox.timer);
					oBox.timer=setTimeout(function(){
						bOk =true;
					},700);
				},100*(aS[index].r+aS[index].c));
			})(i);
		}
	};
	//特效2
	function special_2(){
		if (!bOk) return;
		bOk = false;
		iNow++;
		if(iNow%3==2){
			oBox.style.backgroundImage='url(/images/case_1/0.jpg)';
		}else{
			oBox.style.backgroundImage='url(/images/case_1/'+(iNow%3+1)+'.jpg)';
		}
		for(var i=0; i<aS.length; i++){
			(function (index){
				setTimeout(function (){
					aS[index].style.backgroundImage='url(/images/case_1/'+iNow%3+'.jpg)';
					aS[index].style.opacity=0;
					startMove(aS[index],{opacity:1});
					clearTimeout(oBox.timer);
					oBox.timer=setTimeout(function(){
						bOk =true;
					},700);
				},100*index);
			})(i);
		}
	};
	//特效3
	function special_3(){
		if (!bOk) return;
		bOk = false;
		iNow++;
		if(iNow%3==2){
			oBox.style.backgroundImage='url(/images/case_1/0.jpg)';
		}else{
			oBox.style.backgroundImage='url(/images/case_1/'+(iNow%3+1)+'.jpg)';
		}
		for(var i=0; i<aS.length; i++){
			(function (index){
				setTimeout(function (){
					aS[index].style.backgroundImage='url(/images/case_1/'+iNow%3+'.jpg)';
					aS[index].style.opacity=0;
					startMove(aS[index],{opacity:1});
					clearTimeout(oBox.timer);
					oBox.timer=setTimeout(function(){
						bOk =true;
					},700);
				},1000*Math.random());
			})(i);
		}
	};
};