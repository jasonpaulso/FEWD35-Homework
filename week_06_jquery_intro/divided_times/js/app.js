// $(document).on("click", "p", function(){
// 	alert("Hello");
// });

$(document).on("click", ".international", function(event){
	event.preventDefault();
	$("#international-drop").show();
	$("#politics-drop, #business-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
	});

$(document).on("click", ".politics", function(event){
	event.preventDefault();


	$("#politics-drop").show();
	$("#international-drop, #business-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});
$(document).on("click", ".business", function(event){
	event.preventDefault();
	$("#primary-nav li").removeClass("active");
	$(this).addClass("active");
	$("#business-drop").show();
	$("#international-drop, #politics-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
	$("#slide-down").slideDown();
});
$(document).on("click", ".technology", function(event){
	event.preventDefault();
	$("#primary-nav li").removeClass("active");
	$(this).addClass("active");
	$("#technology-drop").show();
	$("#international-drop, #business-drop, #business-drop, #culture-drop, #blogs-drop").hide();
	$("#slide-down").slideDown();
});
$(document).on("click", ".culture", function(event){
	event.preventDefault();
	$("#primary-nav li").removeClass("active");
	$(this).addClass("active");
	$("#culture-drop").show();
	$("#international-drop, #business-drop, #technology-drop, #blogs-drop").hide();
	$("#slide-down").slideDown();
});
$(document).on("click", ".blogs", function(event){
	event.preventDefault();
	$("#primary-nav li").removeClass("active");
	$(this).addClass("active");
	$("#blogs-drop").show();
	$("#international-drop, #business-drop, #technology-drop, #culture-drop").hide();
	$("#slide-down").slideDown();
});
