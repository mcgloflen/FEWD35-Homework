$("td").mouseenter(function() {
	$(this).addClass("whitetext");
});

$("td").mouseleave(function() {
	$(this).removeClass("whitetext");
});

// $("td").click(function() {
// 	$(this).html("X");
// });

var currentTurn = "O";

$(document).on("click", "td", function() {
	if($(this).html()==="") {
		if (currentTurn === "O") {
			// $(this).html("O");
			currentTurn="X";
		} else {
			// $(this).html("X");
			currentTurn="O";
		}

		$(this).html(currentTurn);
		
	} else {
		return false;
	}
});