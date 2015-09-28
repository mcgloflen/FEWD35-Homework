var score=0

document.getElementById("increase-5").addEventListener("click", function() {
	score += 5;
	// document.getElementById("score").innerHTML=score+" Points";
	scoreKeeper();
});

document.getElementById("decrease-5").addEventListener("click", function() {
	score -= 5;
	// document.getElementById("score").innerHTML=score+" Points";
	scoreKeeper();
});

document.getElementById("submit-custom-score").addEventListener("click", function() {
	var changeScore=document.getElementById("custom-score").value;
	score=parseInt(changeScore);

	// document.getElementById("score").innerHTML=score+" Points";
	scoreKeeper();

	document.getElementById("custom-score").value="";
});

function scoreKeeper() {
	if (score<0) {
		
	} else {
		document.getElementById("score").innerHTML=score+" Points";
	}
}