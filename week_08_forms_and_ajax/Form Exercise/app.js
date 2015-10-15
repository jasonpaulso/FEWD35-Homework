$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formInfo = {
		firstName: $("input[name='firstName']").val(),
		lastName: $("input[name='lastName']").val(),
		address: $("input[name='address']").val(),
		email: $("input[name='email']").val(),
		city: $("input[name='city']").val(),
		state: $("select[name='state']").val(),
		country: $("select[name='country']").val(),
	};
	console.log(formInfo);

	for (key in formInfo) {
		if (formInfo[key] === "") {
        alert("Please fill in all fields.");
        return false;
    }

	}
	alert("Thanks for submitting the form!");
});

