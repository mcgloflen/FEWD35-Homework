// $(document).on("click", ".international", function() {
// 	$("#slide-down").slideDown();
// });

$(document).on("click", ".international", function(event) {
	event.preventDefault();

	$("#international-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#politics-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});

$(document).on("click", ".politics", function(event) {
	event.preventDefault();

	$("#politics-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#international-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});

$(document).on("click", ".business", function(event) {
	event.preventDefault();

	$("#business-drop").show();
	$("#politics-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#international-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});

$(document).on("click", ".technology", function(event) {
	event.preventDefault();

	$("#technology-drop").show();
	$("#business-drop").hide();
	$("#politics-drop").hide();
	$("#culture-drop").hide();
	$("#international-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});

$(document).on("click", ".blogs", function(event) {
	event.preventDefault();

	$("#blogs-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#international-drop").hide();
	$("#politics-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});

$(document).on("click", ".culture", function(event) {
	event.preventDefault();

	$("#culture-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#politics-drop").hide();
	$("#international-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();
	}
});