$(document).ready(function() {
	
	var currentTurn = "O";

	$(document).on("click", ".ttt-square", function() {
			
		if ($(this).html() === "") {

			if (currentTurn === "O") {
				
				currentTurn = "X";
			} else {
				
				currentTurn = "O";
			}

			$(this).html(currentTurn);

		} else {

			return false;
		}

		});
	});


