$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formInfo = {
		firstName: $("input[name='firstName']").val(),
		lastName: $("input[name='lastName']").val(),
		address: $("input[name='address']").val(),
        address2: $("input[name='addTwo']").val(),
		email: $("input[name='email']").val(),
		city: $("input[name='city']").val(),
		state: $("select[name='state']").val(),
		country: $("select[name='country']").val()
	};
	console.log(formInfo);

	for (key in formInfo) {
		if (formInfo[key] === "" && key !== "address2") {
        alert("Please fill in all fields.");
        return false;
    }

	}
    
    console.log(formInfo);
	alert("Thanks for submitting the form!");
});

