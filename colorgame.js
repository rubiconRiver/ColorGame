var numSquares;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	numSquares = 6;
	setupModeButtons();
	setupSquares();
	reset();
}


for(var i = 0; i < squares.length; i++){
	//add initial colors to squares

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare to picked color
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

resetButton.addEventListener("click", function(){
	reset();
})

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else if(this.textContent === "Hard"){
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}

function setupSquares(){

	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare to picked color
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function changeColors(color){
	//change h1 to match color
	h1.style.backgroundColor = color;
	///loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}


function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);

	//pick a new color from the array
	pickedColor = pickColor();

	//display new color value
	colorDisplay.textContent = pickedColor;

	//add initial colors to squares
	for(var i = 0; i < squares.length; i++){
	
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	//change h1 background color back
	h1.style.backgroundColor = "steelblue";

	resetButton.textContent = "New Colors";

	message.textContent = "";
}
