var pcletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];
var pcguess = [];


document.onkeyup = function(event) {
	var playerguess = event.key;
	letters.push(playerguess);
	

if ((playerguess === pcguess[0]) && (guesses > 0)) {
	wins++;
	guesses = 9;
	letters.length = 0;
	pcguess.length = 0;
	var pcchoice = pcletters[Math.floor(Math.random() * pcletters.length)];
	pcguess.push(pcchoice);
	
}

else if ((playerguess !== pcguess[0]) && (guesses > 0)) {
	guesses = guesses-1;
}

else {
	losses++;
	guesses = 9;
	letters.length = 0;
	pcguess.length = 0;
	var pcchoice = pcletters[Math.floor(Math.random() * pcletters.length)];
	pcguess.push(pcchoice);
	
}

var html = "<p>Welcome to the Guessing game!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guesses + "</p>" +
          "<p>Your Guesses: " + letters + "</p>";
 
document.querySelector("#game").innerHTML = html;

}