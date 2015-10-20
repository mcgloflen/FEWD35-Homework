$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formInfo = {
		first_name: $("#firstname").val(),
		last_name: $("#lastname").val(),
		email_address: $("#emailaddress").val(),
		address: $("#address").val(),
		address_2: $("#address2").val(),
		city: $("#city").val(),
		state: $("#state").val(),
		country: $("#country").val()
	};

	for (key in formInfo) {
		if (formInfo[key] === "") {
			alert("Please fill out all fields!");
			return false;
		}
	}

	alert("Form submitted");

	console.log(formInfo);
});