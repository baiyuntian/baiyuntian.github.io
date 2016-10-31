function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}
window.onload = function(){
	var oBox = document.querySelector('.box');
	var C = 7;
	var R = 4;
	
	for(var i=0;i<C;i++){
		for(var j=0;j<R;j++){
			var oS = document.createElement('span');
			oS.style.width = oBox.offsetWidth/C+'px';
			oS.style.height = oBox.offsetHeight/R+'px';
			oBox.appendChild(oS);
			oS.style.left = i*oS.offsetWidth+'px';
			oS.style.top = j*oS.offsetHeight+'px';
			
			oS.style.backgroundPosition = '-'+i*oS.offsetWidth+'px -'+j*oS.offsetHeight+'px';
			
		}
	}
	var bOk = false;
	var iNow = 0;
	var aS = oBox.children;
	oBox.onclick = function(){
		if(bOk)return;
		bOk = true;
		iNow++;
		for(var i=0;i<aS.length;i++){
			
			aS[i].style.WebkitTransition = '.5s all ease';
			
			
			var x = aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
			var y = aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;
			
			aS[i].style.WebkitTransform = 'perspective(800px)translate('+x+'px,'+y+'px) rotateY('+rnd(-120,120)+'deg) rotateX('+rnd(-120,120)+'deg) ';
			aS[i].style.opacity = 0;
		}
		
		function tranEnd(){
			aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
			
			
			
			
			for(var i=0;i<aS.length;i++){
				aS[i].style.WebkitTransition = 'none';
				
				
				aS[i].style.backgroundImage = 'url(/images/case_1/'+(iNow%3)+'.jpg)';
				oBox.style.backgroundImage = 'url(/images/case_1/'+((iNow+1)%3)+'.jpg)';
				
				aS[i].style.WebkitTransform = 'perspective(800px) translate(0,0) rotateY(0deg) rotateX(0deg)';
				aS[i].style.opacity = 1;
			}
			bOk = false;
		}
		aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
	};
};