$( document ).ready(function() {
    $(".navbar-brand").addClass("animated zoomIn");
});

$(".tabs li").hover(function() {
	$(this).toggleClass("animated pulse")
});