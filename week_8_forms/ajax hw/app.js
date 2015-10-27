$(document).ready(function () {

	$(document).on("click", "#consolelogwines", function(event) {

		$.ajax({
			type: "GET",
			url: "http://daretodiscover.herokuapp.com/wines",
			success: function(data) {
				for (var i = 0; i < data.length; i++) {
					console.log(data[i].name);
				}
			},
			error: function() {
				alert("Error!");
			}
		});

	});

	$(document).on("submit", "form", function(event) {
		event.preventDefault();

		var wineData = {
			name: $("input[name='name']").val(),
			year: $("input[name='year']").val(),
			grapes: $("input[name='grapes']").val(),
			country: $("input[name='country']").val(),
			region: $("input[name='region']").val(),
			price: $("input[name='price']").val(),
			description: $("input[name='description']").val(),
			picture: $("input[name='picture']").val()
		}

		for (key in wineData) {
			if (wineData[key] === "") {
				alert("Please fill out all fields!");
				return false;
			}
		}

		$.ajax({
			type: "POST",
			url: "http://daretodiscover.herokuapp.com/wines",
			data: wineData,
			success: function() {
				$("form")[0].reset();
				alert("Wine added successfully!");
			},
			error: function() {
				alert("Wine add failure...")
			}
		});

	});

});