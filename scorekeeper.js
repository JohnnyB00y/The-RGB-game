// player one side

var p1Button = document.querySelector("#p1");
// var p2Button = document.getElementById("p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var WinningScore = 5;

p1Button.addEventListener("click", function(){
	p1Score++;
	console.log(p1Score)
	p1Display.textContent = p1Score;
})

//player 2 side

var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
p2Button.addEventListener("click", function(){
	p2Score++;
	console.log(p2Score)
	p2Display.textContent = p2Score;
	if(p2Score === WinningScore) {
		alert("p2 Wins")
		resetButton
 }
})

// reset

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
		p1Score = 0;
		p2Score = 0;
		p1Display.textContent = p1Score;
		p2Display.textContent = p2Score;
	}
	)

// game over

var gameOver = false;

	else if(p1Score === WinningScore) {
			alert("p1 Wins")
		resetButton
	}
