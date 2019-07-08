// 메인페이지 JS
/////// html이 모두 로딩된 후 실행구역 //////////
window.addEventListener("load",function(){
	"use strict";
	// 배너 자동넘김 함수 호출
	autoFunc();
	
	
	
	// 오른쪽버튼 클릭시 이동하기
	document.querySelector(".abtnR").onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		fadeSlide(1);//오른쪽에서 호출 1번 전달
	};
	
	// 왼쪽버튼 클릭시 이동하기
	document.querySelector(".abtnL").onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		fadeSlide(0);//왼쪽에서 호출 0번 전달
	};
	
	///  블릿버튼 클릭시 이동하기
	var bclick = document.querySelectorAll(".bulletBox img");
	bclick.item(0).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=0;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(1).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=1;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(2).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=2;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(3).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=3;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(4).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=4;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(5).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=5;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(6).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=6;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(7).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=7;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(8).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=8;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(9).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=9;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시///
	bclick.item(10).onclick=function(){
		clearFunc();//자동실행지우고 셋팅하기
		bnum=10;//전역변수셋팅
		fadeSlide(2);//블릿클릭시 2번전달
	};//블릿클릭시
	
	/*
	제이쿼리
	$(".bulletBox img"){
		bnum=onclick.this
		fadeslide(2);
	*/
	
	
	/*** 배너 클릭시 사이트 이동하기 ****/
	var ban = document.querySelectorAll("#slider li");
	//1. 대박할인 페이지 이동
	ban.item(0).onclick=function(){
		location.href="http://www.seoulland.co.kr/plan/promotion_view.asp?idx=1090";
	};
	//2. 라바야외풀장(새창으로)
	ban.item(2).onclick=function(){
		window.open().location.href="http://www.seoulland.co.kr/webzine/2017summer/summer_06.asp";
	};
	//3. 치맥나이트(새창으로)
	ban.item(5).onclick=function(){
		window.open().location.href="http://www.seoulland.co.kr/webzine/2017summer/summer_05.asp";
	};
	//4. 애니멀킹덤
	ban.item(8).onclick=function(){
		location.href="http://www.seoulland.co.kr/joy/festival_profile.asp?idx=412";
	};
	
	//사이드 배너 이동호출 -------------------------------------------------------
	
	//오른쪽(∨) 이미지 버튼 클릭시 아래로 이동하기
	var gobtns = document.querySelectorAll(".gobtn a");
	gobtns.item(1).onclick=function(){
		clearFunc2();//자동호출 지우기
		goSideBan();
	};
	
	//왼쪽(∧) 이미지 버튼 클릭시 위로 이동하기
	gobtns.item(0).onclick=function(){
		clearFunc2();//자동호출 지우기
		backSideBan();
	};
	
	//사이드 배너 자동호출 하기
	autoFunc2();
	
	//탭메뉴 클릭시 해당 컨텐츠 보이기
	var tmenu=document.querySelectorAll(".smenu li");
	tmenu.item(0).onclick=function(){
		chgTab(0);//탭 메뉴 변경함수 호출
	};	
	tmenu.item(1).onclick=function(){
		chgTab(1);//탭 메뉴 변경함수 호출
	};
	tmenu.item(2).onclick=function(){
		chgTab(2);//탭 메뉴 변경함수 호출
	};
	tmenu.item(3).onclick=function(){
		chgTab(3);//탭 메뉴 변경함수 호출
	};
	
	
	/*메인페이지 오늘날짜 찍기*/
	var today = new Date();//날짜객체 만들어서 변수에 할당
	var tm = today.getMonth()+1;//월(0부터이므로 1더함)
	var td = today.getDate();//일
	var tday = today.getDay();//요일(0~6)
	//요일변환(숫자로 나오므로)
	switch(tday){
		case 0: tday="일"; break;
		case 1: tday="월"; break;
		case 2: tday="화"; break;
		case 3: tday="수"; break;
		case 4: tday="목"; break;
		case 5: tday="금"; break;
		case 6: tday="토"; break;
	}//// switch case문 ////
	document.querySelectorAll(".today>div em")
		.item(0).innerHTML=tm;//월	
	document.querySelectorAll(".today>div em")
		.item(1).innerHTML=td;//일
	document.querySelector(".today>div b")
		.innerHTML=tday;//요일
	
	
	//카드사 선택 변경시 카드 종류 셋팅하기
	var cdn={
		//객체변수
		c1:"삼성카드1, 삼성카드2, 삼성카드3",
		c2:"KB카드1, KB카드2, KB카드3, KB카드4, KB카드5",
		c3:"롯데카드1, 롯데카드2, 롯데카드3, 롯데카드4"
	};
	
	document.getElementById("card1").onchange=function(){
		//alert(this.value);//선택변경시 this키워드로 자신의 option value값을 읽어올 수 있다.
		var cno=this.value;//선택된 값
		var tg=document.getElementById("card2");
		if(cno==0){
			//카드사를 선택하세요 일 경우
			tg.innerHTML="<option value='0'>카드종류</option>";//다른 카드 선택했다가 다시 카드사 선택 창을 선택했을 때
		}
		else{
			//특정 카드사를 선택한 경우
			var selcard =cdn["c"+cno].split(",");//값을 콤마로 잘라 배열로 만든다.
			tg.innerHTML="<option value='0'>카드종류</option>";//카드 종류 리셋
			for(var i=0;i<selcard.length;i++){
				tg.innerHTML += "<option vallue=''"+(i+1)+">"+selcard[i]+"</option>";
			}
		}
	};

	//할인배너 숫자버튼 위에 마우스 오버시 - 숫자배경 이미지 변경 및 할인배너 변경하기
	var bN=document.querySelectorAll(".bN li");	
	bN.item(0).onmouseover=function(){
		clearInterval(halautocall);//자동호출 지우기
		chgHalban(0);
	};
	bN.item(1).onmouseover=function(){
		clearInterval(halautocall);//자동호출 지우기
		chgHalban(1);
	};
	bN.item(2).onmouseover=function(){
		clearInterval(halautocall);//자동호출 지우기
		chgHalban(2);
	};
	
	
	
	//할인배너 자동호출하기
	halautocall=setInterval(halAutoFunc,3000);
	
	//마우스가 할인배너 숫자 아이콘에서 벗어나면 다시 호출
	document.querySelector(".bN").onmouseout=function(){
		clearInterval(halautocall);//지우고 밑에서 다시 호출
		halautocall=setInterval(halAutoFunc,3000);//다시호출
	};
	
});// load 

/*
함수명:halAutoFunc
기능:할인배너 자동넘기기
*/

function halAutoFunc(){
	halseq++;//1씩 증가
	if(halseq===3){
		halseq=0;
	}
	chgHalban(halseq);
}//halAutoFunc




/*
함수명: chgHalban
기능: 할인배너 숫자버튼 배경이미지 변경 및 할인배너 변경
seq: 순번
*/

var halimg=["hal01.png","hal02.png","hal03.jpg"];//할인배너 이미지명

var halseq=0;//할인배너 순번 전역변수
var halautocall;//자동 호출 setinterval용 전역변수

function chgHalban(seq){
	"use strict";
	//console.log(seq);
	
	var bN=document.querySelectorAll(".bN li");
	var halBan=document.getElementById("halban");
	
	//1.버튼 배경이미지 변경하기
	//버튼 class 초기화
	for(var i=0;i<bN.length;i++){
		bN.item(i).setAttribute("class","");//초기화
	}
	
	//해당 버튼만 배경 변경 class적용
	bN.item(seq).setAttribute("class","chgbg");
	
	//2.할인배너 이미지 src 값 변경하기
	halBan.setAttribute("src","images/"+halimg[seq]);
	
	//3.변경된 배너 순번을 전역변수에 반영하기(halseq에 seq 수를 집어넣는다.)
	halseq=seq;
	
}



/*
함수명: chgTab
기능: 탭메뉴 클릭시 해당 탭과 컨텐츠를 변경함
seq: 순번
*/
function chgTab(seq){
	//consol.log(seq);//호출여부, 피라미터값 전달여부 확인
	
	
	//1.변경 대상 선정: .smenu, .scont 아래의 li
	var smenu = document.querySelectorAll(".smenu li");
	var scont = document.querySelectorAll(".scont li");
	
	//2.class 초기화
	for(var i=0; i<smenu.length;i++){
		smenu[i].setAttribute("class","");
		scont[i].setAttribute("class","");
	}
	
	//3.클릭된 탭 메뉴와 내용에 class주기
	smenu[seq].setAttribute("class","selTab");
	scont[seq].setAttribute("class","selCont");
	
}


/*
	함수명 : fadeSlide  (선언적 함수)
  	기능 : 슬라이드 순번에 맞게 fadeIn 되어 나타나고 기존 슬라이드는 fadeout으로 사라지게하여 슬라이드를 넘겨줌
*/
var bnum=0;//블릿버튼 순번 전역변수
var snum=0;//슬라이드 번호 전역변수(매우중요함!!!)
var psts=0;//광클방지!!! 전역변수(0-허용(잠금 해제) 1-불허용(잠금 실행))

//dir-방향(0-왼쪽, 1-오른쪽, 2-블릿클릭)
function fadeSlide(dir){
	"use strict";
	//잠금장치  - 함수 실행시 중복실행 방지
	if(psts===1){return false;}//return false는 만나는 즉시 나감!
	psts=1;//문잠그기!!!
	setTimeout(function(){
		psts=0;//잠금풀기!!
	},800);/// 0.8초후에~~!(애니메이션 실행시간 후에 풀기)
	//////////////////////////////////////////////////
	
	//console.log("test01");
	
	// 1. 변경대상을 선정하여 변수에 담는다.
	var tg = document.querySelectorAll("#slider>li");
	//tg[0]===tg.item(0) 같은 표현임.
	
	// 2. 모든 li의 class를 빈값으로 초기화함(안보이게함)
	for(var i=0;i<tg.length;i++){
		tg.item(i).setAttribute("class","");
	}//// for문 ////
	
	// 3. 전역변수의 슬라이드 번호를 변경하여 보이게할 li에 class값으로 "opaView"를 셋팅하여 보이게함.
	
	///오른쪽버튼 클릭시
	if(dir===1){
		snum++;//슬라이드번호 전역변수를 1증가시킴	
		if(snum===11){snum=0;}//한계수지정(처음번호로)
	}
	/// 왼쪽버튼 클릭시
	else if(dir===0){
		snum--;//슬라이드번호 전역변수를 1씩 감소시킴
		if(snum===-1){snum=10;}//한계수지정(마지막번호로)
	}
	///블릿클릭시
	else if(dir===2){
		snum=bnum;//// 슬라이드번호==블릿번호
	}
	
		
	//console.log(snum);//확인
	// 1. 선택된 슬라이드 보이기(class를 변경함)
	tg.item(snum).setAttribute("class","opaView");
	
	// 2. 선택된 슬라이드와 순서가 같은 불릿변경하기
	var bbtn = document.querySelectorAll(".bulletBox img");

	// 모든 블릿이미지 초기화
	for(var j=0; j<bbtn.length; j++){
		if(i===snum){continue;}///바뀔번호만 빼고 계속해라~!
		bbtn.item(j)
		.setAttribute("src","images/ico_pm_55_off.png");
	}/// for문 ///
	//선택된 순번의 블릿이미지를 변경
	bbtn.item(snum)
	.setAttribute("src","images/ico_pm_55_on.png");
	
	
	
}//fadeSlide

/*
	함수명: autoFunc
	기능: 자동 호출 함수로 fadeSlide함수를 일정시간간격으로 호출하게함.
*/
var autocall;//setInterval용 전역변수
var autocallT;//setTimeout용 전역변수
function autoFunc(){
	"use strict";
	autocall = setInterval("fadeSlide(1)", 4000);//4초간격호출(광고 자동 넘김)
	
}//// autoFunc함수 //////////////////////////////////////

/*
	함수명: clearFunc  
	기능: setInterval함수와 setTimeout 함수를 지우고 setTimeout을 설정하여 일정시간 후 아무런 동작이 없으면 다시 자동 실행함수를 호출함
*/
function clearFunc(){
	"use strict";
	clearInterval(autocall);//setInterval 자동실행 지우기
	clearTimeout(autocallT);//setTimeout지우기
	autocallT=setTimeout(autoFunc, 8000);//8초간 기다린후 호출	
}//clearFunc


/*
함수명:goSideBan
기능: 사이트 배너 ul의 top값을 li하나의 값만큼 이동하여 배너가 흘러가게 한다.(위로 이동한 경우 첫번째 li를 맨 뒤로 이동, 아래로 이동한 겨웅 맨 마지막 li를 맨 위로 이동)
*/

var gsbsts=0//goSideBan동작중 상태값(0-작동 안함 1-동작중);

function goSideBan(){
	"use strict";
	//console.log("test");
	
	//잠금장치(광클 방지??)
	if(gsbsts===1){
		return false;//아래쪽 코드 실행 안함
	}
	
	gsbsts=1;
	
	//1.변경할 대상 선정 : #sideban>ul
	var tg=document.querySelector("#sbox>ul");
	var tg2=document.querySelectorAll("#sbox>ul>li");
	
	//2.위치값 변경 설정
	tg.style.top="-92px";
	tg.style.transition="top 0.4s ease-out";
	
	//3. 0.4초 후에 첫번째 li를 잘라서 맨 뒤로 이동하기
	setTimeout(function(){
		//ul안에 첫번째 li를 선택하여 맨 뒤에 추가하는 코드
		tg.appendChild(tg2.item(0));
		
		//그리고 ul의 top값을 0으로 변경하기
		tg.style.top="0px";//top값 초기화
		tg.style.transition="none";//애니메이션 없애기 - 안하면 이미지가 올라갔다가 다시 내려오면서 이미지가 튕겨지틑것처럼 됨
		
		//잠금 풀기
		gsbsts=0;
		
	},400);//setTimeout
	
}

/*
함수명: backSideBan
기능: 마지막 배너를 잘라서 맨 앞으로 이동하여 위에서 아래로 애니메이션 되게함
*/
function backSideBan(){
	"use strict";
	
	//잠금장치(광클 방지??)
	if(gsbsts===1){
		return false;//아래쪽 코드 실행 안함
	}
	
	gsbsts=1;
	
	//1.변경할 대상 선정 : #sideban>ul
	var tg=document.querySelector("#sbox>ul");
	var tg2=document.querySelectorAll("#sbox>ul>li");
	
	//2.맨 마지막 이미지 li를 선택하여 맨 앞으로 이동
	tg.insertBefore(tg2[7],tg2[0]);
	tg.style.top="-92px";//ul박스를 위로 한칸만큼 올라가게 함
	tg.style.transition = "none";//애니메이션 없앰
	
	//지연시간 적용
	setTimeout(function(){
		tg.style.top="0px";//위에서 아래로 이동
		tg.style.transition="top 0.4s ease-in-out";//애니메이션 설정
	},10);//0.01를 준 이유는 약간의 시차있어야 효과있음
	
	setTimeout(function(){
		gsbsts=0;//잠금 풀기
		
	},410);
	
}

var autocall2, autocallT2;//setInterval, setTimeout용 전역변수

/*
함수명: autoFunc2
기능: 사이드배너 자동호출
*/
function autoFunc2(){
	autocall2=setInterval("goSideBan()",3000);//안하면 미친듯이 배너가 움직인다.
}

/*
함수명: clearFunc2
기능: 사이드 배너 자동호출 지우기
*/
function clearFunc2(){
	clearInterval(autocall2);
	clearTimeout(autocallT2);
	autocallT2=setTimeout(autoFunc2,5000);//5초 후에 자동 실행함수
}




















