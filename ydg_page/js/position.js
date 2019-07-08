// JavaScript Document

//순위 리스트가 순서대로 top값의 위치를 변경하여 차례로 리스트를 보여줌



var listNum = 0;//리스트 top값에 곱해질 전역변수

function goRTK(){
	"use strict";
	//alert("test");
	
	//1.변경하고자 하는 대상 선정
//	var tg = document.getElementsByClassName("rolling").style.top;
//	var tgTop = parseInt(tg||0, 10);
	
	
	//2.전역변수를 1씩 증가
	listNum++;
	//console.log(listNum);//확인

	//리스트 줄 수는 20까지니까 그 이상 되면 다시 첫번째 줄로 돌리기 위해서서
	if(listNum===5){
		listNum=0;
	}
//	
//	tg.style.top=(-20*listNum) + "px";
//	tg.style.top = "20px";

} 

function test011(){
	var obj = $(".rolling").offset();
	
	listNum++;
	//console.log(listNum);//확인

	//리스트 줄 수는 20까지니까 그 이상 되면 다시 첫번째 줄로 돌리기 위해서서
	if(listNum===5){
		listNum=0;
	}

	// #div의 현재 위치
	console.log("top: " + obj.top + "px");

	// #div 좌표 새로 설정
	$(".rolling").css({
	   "position" : "absolute",
	   "top" : (-20*listNum) + "px",
	});
}





//html 모두 로딩 후 실행구역
window.addEventListener("load",function(){
	"use strict";
	//임시 불러내기 (작동하는지만 확인해보는 구역 - 클릭하면 리스트가 넘어가게 할 수 있도록)
	/*
	document.getElementById("Rlist").onclick=function(){
		goRTK();
	};				
*/
	
	 //일정 간격으로 함수를 호출하거나 코드를 실행해주는 JS내장함수 - setinterval(함수명, 시간간격)
	//setInterval("goRTK()",2000);//2초간격으로 함수 호출
	setInterval(test011,1000);//2초간격으로 함수 호출
	
	/* 
	함수명은 function(){}으로 직접 코드를 쓰기도 함
	시간 간격은 1/1000초를 사용함 (1초는 1000)
	함수의 파라미터가 없다면 함수명을 직접 써도됨
	*/
	
	
	
});//load

///////<2>



var listNum01 = 0;//리스트 top값에 곱해질 전역변수

function goRTK01(){
	"use strict";
	//alert("test");
	
	//1.변경하고자 하는 대상 선정
//	var tg = document.getElementsByClassName("rolling").style.top;
//	var tgTop = parseInt(tg||0, 10);
	
	
	//2.전역변수를 1씩 증가
	listNum01++;
	//console.log(listNum);//확인

	//리스트 줄 수는 20까지니까 그 이상 되면 다시 첫번째 줄로 돌리기 위해서서
	if(listNum01===5){
		listNum01=0;
	}
	
//	tg.style.top=(-20*listNum) + "px";
//	tg.style.top = "20px";

} 

function test012(){
	"use strict";  
	var obj2 = $(".rolling01").offset();
	
	listNum01++;
	//console.log(listNum);//확인

	//리스트 줄 수는 20까지니까 그 이상 되면 다시 첫번째 줄로 돌리기 위해서서
	if(listNum01===5){
		listNum01=0;
	}

	// #div의 현재 위치
	console.log("top: " + obj2.top + "px");

	// #div 좌표 새로 설정
	$(".rolling01").css({
	   "position" : "absolute",
	   "top" : (-14.5*listNum01) + "px",
	});
}



//html 모두 로딩 후 실행구역
window.addEventListener("load",function(){
	"use strict";
	//임시 불러내기 (작동하는지만 확인해보는 구역 - 클릭하면 리스트가 넘어가게 할 수 있도록)
	/*
	document.getElementById("Rlist").onclick=function(){
		goRTK();
	};				
*/
	
	 //일정 간격으로 함수를 호출하거나 코드를 실행해주는 JS내장함수 - setinterval(함수명, 시간간격)
	setInterval(test012,1000);//1초간격으로 함수 호출
	
	/* 
	함수명은 function(){}으로 직접 코드를 쓰기도 함
	시간 간격은 1/1000초를 사용함 (1초는 1000)
	함수의 파라미터가 없다면 함수명을 직접 써도됨
	*/
	
	
	
});//load










