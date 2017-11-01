var Word = require("./Word.js");
var Prompt = require("prompt");

console.log("Thank you for playing COUNTRIES' CAPITALS' Hangman Game");
console.log ("Guess a letter from the name of a COUNTRY CAPITALS");
console.log("Enjoy...and Good Luck");
console.log("-----------------------------------");
prompt.start();

RandomWord = {
	wordBank: ["Paris", "London", "Berlin", "Washington", "Cairo", "Madrid", "Ankara", "Tehran", "Tunis"],
	wordsGuessedRight: 0,
	RemainingGuesses: 10,
	currentWord: null,

	StartGame: function (wrd){
		this.resetGuesses();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWord.getLett();
		this.promptUser();
	},

	resetGuesses: function (){
		this.RemainingGuesses = 10;
	},

	promptUser: function(){
		var self = this;
		prompt.get(["guessLett"], function(err,result){
			console.log("Your guess was: " + result.guessLett);
			var numberOfGuesses = self.currentWord.checkLetter(result.guessLett);

			if (numberOfGuesses == 0){
				console.log("Wrong...Sorry");
				self.RemainingGuesses--;
			} else{
				console.log("That is Correct");
				if (self.currentWord.renderWord()){
					console.log("You Won");
					conole.log("----------------------------");
					return;
				}
			}

			console.log("Guesses remaining: " + self.RemainingGuesses);
			console.log("--------------------");
			if ((self.RemainingGuesses>0) && (self.currentWord.found == false)){
				self.promptUser();
			}
			else if (self.RemainingGuesses== 0){
				console.log("Game Over. Correct Word)", self.currentWord.ChosenLetter);
			}else{
				console.log(self.currentWord.renderWord());
			}
		});
	}

};

RandomWord.startGame();
