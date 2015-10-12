$(document).ready(function(){
	$("#myModal").modal("show");
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
	$(".nav-tabs a").click(function(){
		$(this).tab('show');
	});
});

var today = new Date();
document.getElementById("today-date").innerHTML = today.toDateString();

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById("tom-date").innerHTML = tomorrow.toDateString();

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
document.getElementById("yester-date").innerHTML = yesterday.toDateString();