//



window.addEventListener("load",function(){
	"use strict";
	
	//GNB 접고 피는 js
	$(".sub").hide().first().show();
	$(".title").first().css("background-color","#eb6300");
	$(".title").first().css("color","#ffffff");

	$(".title").click(function(){
		//올리고 내리고 
		$(this).next().slideDown(400)
		.parent().siblings().find(".sub").slideUp(400);
		
		//올리고 내릴떄 title 배경
		$(this).css("background-color","#eb6300")
		.parent().siblings().find(".title").css("background-color","#f5f5f5");
		
		//올리고 내릴떄 글씨 색 
		$(this).css("color","#ffffff")
		.parent().siblings().find(".title").css("color","#000000");
		
		
		$(this).parent().hover().css("background-image","");
		
		
	});
	
	//gnb 오버시 이미지 
	
	$(".group").mouseover(function(){
		//올리고 내리고 
		$(".group>ul>img").css({opacity:"1"});		
		
		
	});
	
	$(".group").mouseout(function(){
		//올리고 내리고 
		$(".group>ul>img").css({opacity:"0"});		
		
		
	});
	
	
	jQuery(document).ready(function(){
		var select = $("select#select01");
		
		select.change(function(){
			var select_name = $(this).children("option:selected").text();
			$(this).siblings("label").text(select_name);
		});
		
	});
	
	
	
	
	
	//맨 위로 이동
	
	$(".clickTop").click(function(){
		$("html,body").scrollTop(0);
		
	});
	
	
	//삭제 클릭 시 
	//<1>
	$(".deleteBox_01>div.deleteBox03>div:nth-child(2)>a:first-child").click(function(){
				
		$(".deleteBox_01").animate({width:"300px"},150,function(){
			$(this).remove();//선택된 요소소 제거하기기
		});
	});//click
	
	//<2>
	$(".deleteBox_02>div.deleteBox03>div:nth-child(2)>a:first-child").click(function(){
				
		$(".deleteBox_02").animate({width:"300px"},150,function(){
			$(this).remove();//선택된 요소소 제거하기기
		});
	});//click
	
	
	
	
	
	//미션현황 접고 피는 js
	var slideNum = 1;
		$("#closebox").click(function(){
			if (slideNum===1){
				$("#slideMenu").slideUp(400);
				$(this).children().text("미션현황 열기");
				$("#closebox>img").attr('src','img/m-sort-down.png');
				$("#mission").animate({opacity: '0'}, 1);
				$("#mission>span:nth-child(5)>div.graph").animate({opacity: '0'}, 1);
				$("#mission>span:nth-child(5)>span").animate({opacity: '0'}, 1);
				//$(this).find().attr('src','img/m-sort-down.png');
				slideNum=2;
			}else{
				$("#slideMenu").slideDown(400);
				$(this).children().text("미션현황 접기");
				$("#closebox>img").attr('src','img/m-caret-arrow-up.png');
				$("#mission").animate({opacity: '1'}, 400);
				$("#mission>span:nth-child(5)>div.graph").animate({opacity: '1'}, 300);
				$("#mission>span:nth-child(5)>span").animate({opacity: '1'}, 300);
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				slideNum=1;
			}			
			
		});
	
	var starClick01 = 1;
	var starClick02 = 1;
	var starClick03 = 1;
	var starClick04 = 1;
	var starClick05 = 1;
	
	//<1>
		$(".gallery01").click(function(){
			if (starClick01===1){
				$(this).attr('src','img/star02.png');
				starClick01=2;
			}else{
				$(this).attr('src','img/star01.png');
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				starClick01=1;
			}			
			
		});
	//<2>
		$(".gallery02").click(function(){
			if (starClick02===1){
				$(this).attr('src','img/star02.png');
				starClick02=2;
			}else{
				$(this).attr('src','img/star01.png');
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				starClick02=1;
			}			
			
		});
	//<3>
		$(".gallery03").click(function(){
			if (starClick03===1){
				$(this).attr('src','img/star02.png');
				starClick03=2;
			}else{
				$(this).attr('src','img/star01.png');
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				starClick03=1;
			}			
			
		});
		//<4>
		$(".gallery04").click(function(){
			if (starClick04===1){
				$(this).attr('src','img/star02.png');
				starClick04=2;
			}else{
				$(this).attr('src','img/star01.png');
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				starClick04=1;
			}			
			
		});
	//<5>
		$(".gallery05").click(function(){
			if (starClick05===1){
				$(this).attr('src','img/star02.png');
				starClick05=2;
			}else{
				$(this).attr('src','img/star01.png');
				//$(this).find().attr('src','img/m-caret-arrow-up.png');
				starClick05=1;
			}			
			
		});
		

	
	
	 
	
	

});


