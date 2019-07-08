//즐거운 상상
//html 모두 샐행구역
window.addEventListener("load",function(){
	//// LNB 메뉴 a태그 클릭시 class변경하기 ////
	var lnb = document.querySelectorAll(".lnb_menu>ul>li>a");
	lnb[0].onclick=function(){
		chgLnb(0);
		return false;
	};/// onclick ///
	lnb[1].onclick=function(){
		chgLnb(1);
		return false;
	};/// onclick ///
	lnb[2].onclick=function(){
		chgLnb(2);
		return false;
	};/// onclick ///
	lnb[3].onclick=function(){
		chgLnb(3);
		return false;
	};/// onclick ///
	lnb[4].onclick=function(){
		chgLnb(4);
		return false;
	};/// onclick ///
	lnb[5].onclick=function(){
		chgLnb(5);
		return false;
	};/// onclick ///
	
	
	// lnb메뉴 서브 클릭시 컨텐츠 변경하기
	lnb = document.querySelectorAll(".lnb_menu>ul>li");//상위 li
	var lnbSub1=lnb[1].querySelectorAll("ol>li");
	lnbSub1[0].onclick=function(){
		chgCont(2,0,this.querySelector("a").innerHTML);
		return false;
	};
	lnbSub1[1].onclick=function(){
		chgCont(2,1,this.querySelector("a").innerHTML);
		return false;
	};
	lnbSub1[2].onclick=function(){
		chgCont(2,2,this.querySelector("a").innerHTML);
		return false;
	};
	
	var lnbSub2=lnb[3].querySelectorAll("ol>li");
	lnbSub2[0].onclick=function(){
		chgCont(4,0,this.querySelector("a").innerHTML);
		return false;
	};
	lnbSub2[1].onclick=function(){
		chgCont(4,1,this.querySelector("a").innerHTML);
		return false;
	};
	
	var lnbSub3=lnb[5].querySelectorAll("ol>li");
	lnbSub3[0].onclick=function(){
		chgCont(6,0,this.querySelector("a").innerHTML);
		return false;
	};
	
	//var inbSub = document.querySelectorAll(".lnb_menu>ul>li>ol>li");
	
	
	
	
	// 서브페이지 오늘날짜 찍기
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
	document.querySelectorAll(".today em")
		.item(0).innerHTML=tm;//월	
	document.querySelectorAll(".today em")
		.item(1).innerHTML=td;//일
	document.querySelector(".today b")
		.innerHTML=tday;//요일
	
	
	
	
	
});// load 

/*
함수명: chgCont
기능: 서브메뉴 클릭시 서브 컨텐츠 변경하기
mseq: 상위순서(1부터 -이미지 번호)
sseq: 하위순서

하위 메뉴에 따라 본 화면에 나오는 타이틀 변경하도록 하고 이미지도 바뀌게 한다.
 +(4) 하위 메뉴 클릭시 선택된 하위메뉴 글자색 변경
*/
function chgCont(mseq,sseq,snm){
	"use strict";
	//console.log(mseq+"/"+sseq+"/"+snm);//호출여부 전달값 여부 확인 //sseq-하위순서, snm-하위메뉴명
	
	
	//1.변경대상 선정하기
	var subH1=document.querySelector("#subH1");
	var subCont=document.querySelector(".subcont>img");//서브 컨텐츠 이미지
	
	//2.타이틀 변경하기
	subH1.innerHTML=snm;
	
	//3.컨텐츠 변경하기
	subCont.setAttribute("src","img_sub/sub"+mseq+"_"+sseq+".png");
	
	//4.서브메뉴 글자색 변경 class 넣기
	var cm =document.querySelectorAll(".lnb_menu>ul>li")[mseq-1].querySelectorAll("ol>li");
	for(var k=0; k<cm.length;k++){
		cm[k].setAttribute("class",""); //class 비우기
	}
	
	//클릭된 서브메뉴에 class주기
	cm[sseq].setAttribute("class","sfc");
	
	//5. 위치바 마지막 타이틀 변경하기 홈 > 즐거운 상상 > 놀이기구 > _____ 이 부분 변경하기!
	document.querySelectorAll("#subH3 span")[2].innerHTML="＞ "+snm;
	
	
	
}//chgCont



/*
	함수명: chgLnb
	기능: LNB메뉴 클릭시 class변경하여 디자인을 바꾼다.
	seq-순번
	
	
*/
function chgLnb(seq){
	"use strict";
	
	var sox=0;//서브메뉴 존재여부(0-無, 1-有)
	
	// 1. 대상선정 : 상위메뉴, 서브메뉴
	var tg = document.querySelectorAll(".lnb_menu>ul>li");
	
	// 2. class 초기화하기, 서브메뉴 높이값 초기화하기
	for(var i=0; i<tg.length;i++){
		var val = tg[i].getAttribute("class");
		//console.log(val);
		tg[i].setAttribute("class",val?val.replace("selm","").replace("plus2",""):"");
		//val?val.replace("selm",""):"" 
		// 조건식?true면실행:false면실행(조건연산자)
		
		// 서브메뉴 높이값 초기화(서브메뉴가 있는것만 초기화)
		if(tg[i].querySelector("ol")){//서브메뉴 ol 이 있으면		
			tg[i].querySelector("ol").style.height="0px";
		}
		
	}
	
	
	//3.해당 순번의 li만 클래스를 준다.  &  서브메뉴 높이값 변경
	
		var val2;//변수선언
		
		// 하위메뉴가 있는지 여부확인
		//console.log(tg[seq].querySelector("ol"));
		// if문이 없는 하위메뉴결과인 null을 어떻게 받아들이나?
		if(tg[seq].querySelector("ol")){
//			//console.log("下");
			sox=1;//서브메뉴 존재상태값 변경
		}
//else{
		//console.log("無");
		//하위가 없는 null값은 if문 조건문 안에서 false로 처리된다.
	//}
	
//		if(seq===1 || seq===3 || seq===5){//하위메뉴가 있는li
		if(tg[seq].querySelector("ol")){//하위가 있는 경우 treu
			val2 = tg[seq].getAttribute("class").replace(/\s/gi,"")+" selm plus2";//기존값에 더함(띄어쓰기 해야함 2개 들어가니까??)
			
			//서브메뉴 별 높이값을 다르게 변경하기
				//하위메뉴 개수 가져오기
			var cnt = tg[seq].querySelectorAll("ol>li").length;
			tg[seq].querySelector("ol").style.height=(21*cnt)+"px";
			
		}
		else{//하위가 없는 li
			//tg[seq].setAttribute("class","selm");
		//tg[seq].setAttribute("class",val2);
			val2 = "selm";
		}
	
		tg[seq].setAttribute("class",val2);//다른 메뉴바 클릭시 바꿔준다.
	
	
	//다른 메뉴바 클릭하다가 다시 하위메뉴로 돌아오면 전에 선택했던 색이 남아 있어서 다른 메뉴바 돌아다니다 다시 클릭하면 값이 초기화 되도록 한다.
	
	if(sox){//서브 메뉴가 있을 때만 초기화하기
		var cm =tg[seq].querySelectorAll("ol>li");
		for(var k=0; k<cm.length;k++){
			cm[k].setAttribute("class",""); //class 비우기
		}
	
		//클릭된 서브메뉴에 class주기
		cm[0].setAttribute("class","sfc");
	}
	
	
	
	
	
	
	// 컨텐츠 영역 타이틀 변경 함수 호출
	setTitle(seq,sox);//setTitle(순번,서브존재여부)	
	
}// chgLnb





/*
	함수명: setTitle
	기능: 클릭시 클릭된 메뉴의 타이틀로 컨텐츠 영역에 표시함
	sep: li순번
	sox-서브존재여부
*/
function setTitle(seq,sox){
	"use strict";
	//console.log(seq);//함수호출여부, 파라미터값 전달확인
	
	
	// 1. 대상선정
	var mtit = document.querySelectorAll(".lnb_menu>ul>li")[seq]
	.querySelector("a");//공연/전시 ... 같은 글이 나온다. //클릭된 a태그
	//console.log(mtit.innerHTML);
	//var mtit=document.querySelectorAll(".lnb_menu>ul>li")[seq]
	//<a href="#" data_liveedit_tagid="0000000010964F30">연간축제안내</a>  이런 주소가 나옴
	
	
	var subH1 = document.querySelector("#subH1");//큰제목박스스
	var subcont = document.querySelector(".subcont>img");//서브컨텐트 이미지
	/// 서브가 있을 경우 서브메뉴의 첫번째 타이틀 읽어오기
	var stit="";
	if(sox===1){
		stit=document.querySelectorAll(".lnb_menu>ul>li")[seq]
		.querySelectorAll("ol>li")[0].querySelector("a").innerHTML;
	}
	
	//console.log(stit);
	
	//위치바 내용박스
	var sub1 = document.querySelectorAll("#subH3 span");
	
	
	// 2. 큰제목 변경하기
	subH1.innerHTML=sox?stit:mtit.innerHTML;
	// sox?stit:mtit.innerHTML;
	// sox값이 1(true)이면 stit값을 넣고 아니면(:) mtit값을 넣어라!
	
	// 3. 컨텐츠 변경하기
	subcont.src=sox?"img_sub/sub"+(seq+1)+"_0.png":"img_sub/sub"+(seq+1)+".png";
	//해석: sox가 1이면 즉, true면 콜론(:)앞의 값을 넣어주고
	// 0이면 즉, false이면 콜론(:) 뒤의 값을 넣어줘라!
	
	//4.위치바 표시하기
	//첫번째 카테고리 넣기	
	sub1[0].innerHTML = document.querySelector(".lnb_tit").innerHTML;//홈 > 즐거운 상상 
	//여기서즐거운 상상 글자가 클릭한 텍스트 값을 받아와 그대로 넣어줌
	
	//두번째 카테고리 넣기
	sub1[1].innerHTML = "＞ "+mtit.innerHTML;//홈 > 즐거운 상상 > 놀이기구
	//document.querySelector("") -> mtit로 뭘 줘서 바로 진입할 수 있게 했나보다.
	
	//세번째 카테고리 넣기 (하위메뉴 있을 경우)  sox가 1일때 true(하위 있음)
	if(sox){
		sub1[2].innerHTML = "＞ "+stit;
		sub1[2].setAttribute("class","setsf");//굵은 글씨 classs넣기
		sub1[1].setAttribute("class","");//지우기
		
		
		//sub1[2].style.fontWeight="bold";//마지막 메뉴 굵은글씨 // 굵은글씨 class를 넣으니까 필요없어졌다.
		//sub1[1].style.fontWeight="normal";//두번쨰 카테고리 얇은체
	}
	
	//하위가 없는 경우
	else{
		sub1[2].innerHTML="";//기존값 지우기
		sub1[1].setAttribute("class","setsf");//
				
		//sub1[1].style.fontWeight="bold";//마지막 메뉴(두번째 카테고리) 굵은글씨 '즐거운 상상' 이부분
	}
	
}//setTitle







































