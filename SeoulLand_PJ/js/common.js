// 서울랜드 공통 JavaScript Document

//html 모두 로딩 후 실행구역

window.addEventListener("load",function(){
	"use strict";	
	var gnb= document.querySelector("#gnb");
	//GNB 라인박스 변수에 담기
	var gnbline=document.querySelector(".gnbline");	
	//GNB에 마우스 오버시 배경 라인 박스 내려오기
	gnb.onmouseover=function(){
		gnbline.style.height="140px";
		gnbline.style.transition = "height 0.3s ease-in-out";
	};
	
	//GNB에 마우스 아웃시 배경 라인 박스 올라가기
	gnb.onmouseout=function(){
		gnbline.style.height="0px";
	};
	
	//언어별 사이트 이동하기
	document.getElementById("lang").onchange=function(){
		var val = this.value;
		
		if(val==="en"){
			window.open().location.href="http://eng.seoulland.co.kr/eng/index.asp";
		}
		else if(val==="ja"){
			window.open().location.href="http://jpn.seoulland.co.kr/jpn/index.asp";
		}
		else if(val==="ch"){
			window.open().location.href="http://chn.seoulland.co.kr/chn/index.asp";
		}
	};
	
	
	
	//패밀리 사이트 이동하기
	document.getElementById("fsite").onchange=function(){
		var val = this.value;//선택된 option value값
		//console.log(val);//호출확인
		
		if(val==="cal"){
			window.open().location.href="http://www.icpk.co.kr/";//새창에서 페이지 열기
		}
		
		else if(val==="rose"){
			window.open().location.href="http://www.irosehill.co.kr/";
		}
	};
	
	
		
		
});//load




































