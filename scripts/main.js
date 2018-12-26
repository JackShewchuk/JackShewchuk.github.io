$(document).ready(function(){

    $(".button-holder").click(function(){
		$(".slide2").removeClass("none");
		$(".slide2").addClass("display");
   		$(".slide2").fadeIn("fast");
	});
	$(".exit").click(function(){
		$(".slide2").addClass("none");
   		$(".slide2").fadeOut("fast");
	});
	$(".video-button-holder").click(function(){
		$(".slide3").removeClass("none");
		$(".slide3").addClass("display");
   		$(".slide3").fadeIn("fast");
	});
	$(".exit-video").click(function(){
		$(".slide3").addClass("none");
   		$(".slide3").fadeOut("fast");
	});
	$(".logo-button-holder").click(function(){
		$(".slide4").removeClass("none");
		$(".slide4").addClass("display");
		   $(".slide4").fadeIn("fast");
		$(".exit-logo").addClass("display");
		$(".exit-logo").fadeIn("fast");
	});
	$(".exit-logo").click(function(){
		$(".slide4").addClass("none");
   		$(".slide4").fadeOut("fast");
	});
	

});

