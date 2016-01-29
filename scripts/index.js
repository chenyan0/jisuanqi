window.onload=function(){
	var sc=document.getElementById('screen');
	var nums=document.getElementsByClassName('num');
	var firstNumber='',secondNumber='';
	var mc=document.getElementById('mc');
	var mjia=document.getElementById('m+');
	var mjian=document.getElementById('m-');
	var mr=document.getElementById('mr');
	var buts=document.getElementsByClassName('button');
	var time=document.getElementsByClassName('time');
	
	var fn=function(){
		var d=new Date();
		for(var i=0;i<time.length;i++){
			if(d.getMinutes()<10&&d.getHours()>10){
				time[i].innerHTML=d.getHours()+':0'+d.getMinutes();
			}else if(d.getHours()<10&&d.getMinutes()>10){
				time[i].innerHTML='0'+d.getHours()+':'+d.getMinutes();
			}else if(d.getHours()<10&&d.getMinutes()<10){
				time[i].innerHTML='0'+d.getHours()+':0'+d.getMinutes();
			}else{
				time[i].innerHTML=d.getHours()+':'+d.getMinutes();
			}
		}
	};
	fn();
	setInterval(fn,6000);
	for(var i=0;i<buts.length;i++){
		buts[i].onmousedown=function(){
				this.style.webkitTransform='scale(0.9)';
		}
		buts[i].onmouseup=function(){
				this.style.webkitTransform='scale(1)';
		}
	}
	
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){
			b.push(Number(this.innerHTML));
			console.log(b);
			if(b[b.length-2]=='='){
				firstNumber=secondNumber=yunsuanfu='';
				sc.innerHTML=0;
			}else if(b[b.length-2]!='='&&typeof b[b.length-2]!='number'&&b[b.length-2]){
				firstNumber=jieguo;
				secondNumber='';
			}
			if(yunsuanfu==''){
				if(!firstNumber&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&firstNumber.indexOf('.')!=-1){
					return;
				}
				firstNumber=firstNumber+this.innerHTML;
				sc.innerHTML=firstNumber;
				return;
			}else{
				if(!secondNumber&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&secondNumber.indexOf('.')!=-1){
					return;
				}
				secondNumber=secondNumber+this.innerHTML;
				sc.innerHTML=secondNumber;
				console.log(secondNumber);
				return;
			}	
		};
	}
	var ops=document.getElementsByClassName('operator');
	var yunsuanfu='';
	var jieguo='',a=[],b=[];
	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			b.push(this.innerHTML);
			a.push(this.innerHTML);
			if(firstNumber==''){
				yunsuanfu='';
			}else{
				yunsuanfu=this.innerHTML.trim();
				if(secondNumber!=''){
					if(a[a.length-2]=='+'){
						jieguo=Number(firstNumber)+Number(secondNumber);
					}
					if(a[a.length-2]=='-'){
						jieguo=Number(firstNumber)-Number(secondNumber);
					}
					if(a[a.length-2]=='×'){
						jieguo=Number(firstNumber)*Number(secondNumber);
					}
					if(a[a.length-2]=='÷'){
						jieguo=Number(firstNumber)/Number(secondNumber);
					}
				}
				else{
					jieguo=firstNumber;
				}
				firstNumber=jieguo;
				secondNumber='';
			}
			
		};
	}
	var equal=document.getElementById('equal');
	equal.onclick=function(){
		b.push(this.innerHTML);
		console.log(b);
		if(b[b.length-2]=='='){
			firstNumber=sc.innerHTML;
			secondNumber=Number(secondNumber);
			yunsuanfu=yunsuanfu;
			console.log(firstNumber,secondNumber,yunsuanfu);
		}
		if(yunsuanfu=='+'){
			sc.innerHTML=Number(firstNumber)+Number(secondNumber);

		}
		if(yunsuanfu=='-'){
			sc.innerHTML=Number(firstNumber)-Number(secondNumber);
		}
		if(yunsuanfu=='×'){
			sc.innerHTML=Number(firstNumber)*Number(secondNumber);
		}
		if(yunsuanfu=='÷'){
			sc.innerHTML=Number(firstNumber)/Number(secondNumber);
		}
		// memory=sc.innerHTML;
		jieguo=sc.innerHTML;

	};
	var zhengfu=document.getElementById('zhengfu');
	zhengfu.onclick=function(){
		sc.innerHTML=sc.innerHTML*-1;
		if(secondNumber==''){
			firstNumber=sc.innerHTML;
		}else{
			secondNumber=sc.innerHTML;
		}
	};
	var zero=document.getElementById('zero'),
		memory=0;
		mem=document.getElementById('memory');
	zero.onclick=function(){
		sc.innerHTML=0;
		firstNumber=secondNumber=yunsuanfu='';
	};
	mc.onclick=function(){
		memory=0;
		mem.style.display='none';
	};
	mjia.onclick=function(){
		memory=memory+Number(sc.innerHTML);
		mem.style.display='block';
	};
	mjian.onclick=function(){
		memory=memory+sc.innerHTML;
		mem.style.display='block';
	};
	mr.onclick=function(){
		sc.innerHTML=memory;
	};


// --------------------------------------------横屏计算器----------------------------------------



	var buts2=document.getElementsByClassName('button2'),
	    sc2=document.getElementById('screen2'),
	    equal2=document.getElementById('equal2');
	    nums2=document.getElementsByClassName('num2'),
	    ops2=document.getElementsByClassName('operator2'),
	    firstNumber2='',secondNumber2='',
		yunsuanfu2='',
		result='',
		aa=[],bb=[];
	for(var i=0;i<buts2.length;i++){
		buts2[i].onmousedown=function(){
				this.style.webkitTransform='scale(0.9)';
		}
		buts2[i].onmouseup=function(){
				this.style.webkitTransform='scale(1)';
		}
	}
	// ---------------点击数字--------------
	for(var i=0;i<nums2.length;i++){
		nums2[i].onclick=function(){
			bb.push(Number(this.innerHTML));
			if(bb[bb.length-2]=='='){
				firstNumber2=secondNumber2=yunsuanfu2='';
				sc2.innerHTML=0;
			}else if(bb[bb.length-2]!='='&&typeof bb[bb.length-2]!='number'&&bb[bb.length-2]){
				firstNumber2=result;
				secondNumber2='';
			}
			if(yunsuanfu2==''){
				if(!firstNumber2&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&firstNumber2.indexOf('.')!=-1){
					return;
				}
				if(this.innerHTML=='π'){
					firstNumber2=Math.PI;
				}else{
					firstNumber2=firstNumber2+this.innerHTML;
					console.log(firstNumber2);
				}
				sc2.innerHTML=firstNumber2;
				return;
			}else{
				if(!secondNumber2&&this.innerHTML=='.'){
					return;
				}
				if(this.innerHTML=='.'&&secondNumber2.indexOf('.')!=-1){
					return;
				}
				if(this.innerHTML=='π'){
					secondNumber2=Math.PI;
				}else{
					secondNumber2=secondNumber2+this.innerHTML;
				}
				sc2.innerHTML=secondNumber2;
				return;
			}	
		};
	}
	// -------------------点击运算符---------------
	for(var i=0;i<ops2.length;i++){
		ops2[i].index=i;
		ops2[i].onclick=function(){
			bb.push(this.innerHTML);
			aa.push(this.innerHTML);
			if(firstNumber2==''){
				yunsuanfu2='';
			}else{
				yunsuanfu2=this.innerHTML.trim();
				if(secondNumber2!=''){
					if(aa[aa.length-2]=='+'){
						console.log(Number(firstNumber2),Number(secondNumber2));
						result=Number(firstNumber2)+Number(secondNumber2);
					}
					if(aa[aa.length-2]=='-'){
						result=Number(firstNumber2)-Number(secondNumber2);
					}
					if(aa[aa.length-2]=='×'){
						result=Number(firstNumber2)*Number(secondNumber2);
					}
					if(aa[aa.length-2]=='÷'){
						result=Number(firstNumber2)/Number(secondNumber2);
					}
				}
				else{
					result=firstNumber2;
				}
				firstNumber2=result;
				secondNumber2='';
			}
		};

	}
	
	equal2.onclick=function(){
		bb.push(this.innerHTML);
		if(bb[bb.length-2]=='='){
			firstNumber2=sc2.innerHTML;
			secondNumber2=Number(secondNumber2);
			yunsuanfu2=yunsuanfu2;
			console.log(firstNumber2,secondNumber2,yunsuanfu2);
		}
		if(yunsuanfu2=='+'){
			sc2.innerHTML=Number(firstNumber2)+Number(secondNumber2);
		}
		if(yunsuanfu2=='-'){
			sc2.innerHTML=Number(firstNumber2)-Number(secondNumber2);
		}
		if(yunsuanfu2=='×'){
			sc2.innerHTML=Number(firstNumber2)*Number(secondNumber2);
		}
		if(yunsuanfu2=='÷'){
			sc2.innerHTML=Number(firstNumber2)/Number(secondNumber2);
		}
		if(yunsuanfu2=='x^y'){
			sc2.innerHTML=Math.pow(Number(firstNumber2),Number(secondNumber2));
		}
		if(yunsuanfu2=='%'){
			sc2.innerHTML=Number(firstNumber2)%Number(secondNumber2);
		}
		if(yunsuanfu2=='x√y'){
			sc2.innerHTML=Math.pow(Number(secondNumber2),1/Number(firstNumber2));
		}if(yunsuanfu2=='EE'){
			sc2.innerHTML=Number(firstNumber2)*Math.pow(10,Number(secondNumber2));
		}
		result=sc2.innerHTML;
	};
	var qingling=document.getElementById('qingling'),
	    pingfang=document.getElementById('pingfang'),
	    lifang=document.getElementById('lifang'),
	    pow=document.getElementById('pow'),
	    fuyi=document.getElementById('fuyi'),
	    sqrt=document.getElementById('sqrt'),
	    jiecheng=document.getElementById('jiecheng'),
	    sin=document.getElementById('sin'),
	    cos=document.getElementById('cos'),
	    tan=document.getElementById('tan'),
	    log=document.getElementById('log'),
	    ln=document.getElementById('ln'),
	    sinh=document.getElementById('sinh'),
	    cosh=document.getElementById('cosh'),
	    tanh=document.getElementById('tanh'),
	    zhishu=document.getElementById('zhishu'),
	    random=document.getElementById('random'),
	    rad=document.getElementById('rad'),
	    mc2=document.getElementById('mc2'),
	    mjia2 =document.getElementById('m+2'),
	    mjian2 =document.getElementById('m-2'),
	    mr2=document.getElementById('mr2'),
	    zhuanhuan=document.getElementById('zhuanhuan');
	    zhengfu2=document.getElementById('zhengfu2');
	var kaiguan=true;
	zhuanhuan.onclick=function(){
		if(kaiguan==true){
			sin.innerHTML='asin';
			cos.innerHTML='acos';
			tan.innerHTML='atan';
			sinh.innerHTML='asinh';
			cosh.innerHTML='acosh';
			tanh.innerHTML='atanh';
			kaiguan=false;
		}else{
			sin.innerHTML='sin';
			cos.innerHTML='cos';
			tan.innerHTML='tan';
			sinh.innerHTML='sinh';
			cosh.innerHTML='cosh';
			tanh.innerHTML='tanh';
			kaiguan=true;
		}
		
	};
	zhengfu2.onclick=function(){
		sc2.innerHTML=sc2.innerHTML*-1;
		if(secondNumber2==''){
			firstNumber2=sc2.innerHTML;
		}else{
			secondNumber2=sc2.innerHTML;
		}
	};
	qingling.onclick=function(){
		sc2.innerHTML=0;
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	pingfang.onclick=function(){
		sc2.innerHTML=Math.pow(Number(firstNumber2),2);
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	lifang.onclick=function(){
		sc2.innerHTML=Math.pow(Number(firstNumber2),3);
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	fuyi.onclick=function(){
		sc2.innerHTML=Math.pow(Number(firstNumber2),-1);
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	sqrt.onclick=function(){
		sc2.innerHTML=Math.sqrt(Number(firstNumber2));
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	jiecheng.onclick=function(){
		var s=1;
		for(var i=Number(firstNumber2);i>0;i--){
			s=s*i;
		}
		sc2.innerHTML=s;
	}
	sin.onclick=function(){
		if(sin.innerHTML=='sin'){
			sc2.innerHTML=Math.sin(Number(firstNumber2)*2*Math.PI/360);
		}else{
			sc2.innerHTML=Math.asin(Number(firstNumber2));
		}
		
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	cos.onclick=function(){
		if(cos.innerHTML=='cos'){
			sc2.innerHTML=Math.cos(Number(firstNumber2));
		}else{
			sc2.innerHTML=Math.acos(Number(firstNumber2));
		}
		
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	tan.onclick=function(){
		if(tan.innerHTML=='tan'){
			sc2.innerHTML=Math.tan(Number(firstNumber2)*2*Math.PI/360);
		}else{
			sc2.innerHTML=Math.atan(Number(firstNumber2));
		}
		
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	log.onclick=function(){
		sc2.innerHTML=Math.log10(Number(firstNumber2));
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	ln.onclick=function(){
		sc2.innerHTML=Math.log(Number(firstNumber2));
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	sinh.onclick=function(){
		if(sinh.innerHTML=='sinh'){
			sc2.innerHTML=Math.sinh(Number(firstNumber2));
		}else{
			sc2.innerHTML=Math.asinh(Number(firstNumber2));
		}
		
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	cosh.onclick=function(){
		if(cosh.innerHTML=='cosh'){
			sc2.innerHTML=Math.cosh(Number(firstNumber2));
		}else{
			sc2.innerHTML=Math.acosh(Number(firstNumber2));
		}
		
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	tanh.onclick=function(){
		if(tanh.innerHTML=='tanh'){
			sc2.innerHTML=Math.tanh(Number(firstNumber2));
		}else{
			if(tanh.innerHTML==1){
				sc2.innerHTML='error';
				return;
			}
			sc2.innerHTML=Math.atanh(Number(firstNumber2));
		}
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	
	zhishu.onclick=function(){
		sc2.innerHTML=Math.pow(Math.E,firstNumber2);
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	random.onclick=function(){
		sc2.innerHTML=Math.random();
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	rad.onclick=function(){
		sc2.innerHTML=Math.PI*Number(firstNumber2)/180;
		firstNumber2=secondNumber2=yunsuanfu2='';
	};
	var memory2=0,
		mem2=document.getElementById('memory2');

	mc2.onclick=function(){
		memory2=0;
		console.log(memory2);
		mem2.style.display='none';
	};
	mjia2.onclick=function(){
		memory2=memory2+Number(result);
		mem2.style.display='block';
	};
	mjian2.onclick=function(){
		memory2=memory2-Number(result);
		firstNumber2=secondNumber2=yunsuanfu2='';
		mem2.style.display='block';
	};
	mr2.onclick=function(){
		sc2.innerHTML=memory2;
	};
	document.onmousedown=function(e){
		e.preventDefault();
	};



	

	
// 1.id=screen
// 2.var sc=document.getElementById('screen');

// 3.给所有的数字加上class num
// 4.var nums=document.getElementsByClassName('num');

// 5.给所有的代表数字的div加上一个onclick方法
// 	num[0].click=function(){};
// 	for(var i=0;i<nums.length;i++){
// 		alert(this.innerHTML);
// 	}
// 6.把上一步中的alert(this.innerHTML)
//    => sc.innerHTML=this.innerHTML;


	

// 给运算符加上class operator
// var ops=document.getElementById('operator');
// 给等号加上id var equal=document.getElementById('denghao');
// 定义两个变量 firstNumber=''  secondNumber=6;

// 给等号添加onclick
// equal.onclick=function(){
// 	sc.innerHTML=firstNumber+secondNumber;
// }

// 把 nums[i].onclick的那个function改成
// nums[i].onclick=function(){
// 	firstNumber=Number(this.innerHTML);
// }

};