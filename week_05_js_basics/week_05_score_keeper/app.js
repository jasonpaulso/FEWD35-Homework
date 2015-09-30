var score = 0;
var scoreBoard = document.getElementById("score");

document.getElementById("increase-5").addEventListener("click", function() {
    score += 5;
    scoreBoard
    .innerHTML = score + "<span> Points</span>";
});

document.getElementById("decrease-5").addEventListener("click", function() {
	if (score >= 5) {
		score -= 5;
			scoreBoard
	    .innerHTML = score + "<span> Points</span>"
	} else {
		score = 0;
		scoreBoard
    .innerHTML = score + "<span> Points</span>"
	}  
    ;
});

document.querySelector("#submit-custom-score")
.addEventListener("click", function() {
	var textScore = document
	.querySelector("#custom-score")
	.value;

	var numScore = parseInt(textScore);
	score = numScore;
	scoreBoard.innerHTML = score + "<span> Points</span>";
});


