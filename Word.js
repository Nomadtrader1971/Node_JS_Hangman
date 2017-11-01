var letter = require("./letter.js");

function Word (ChosenLetter){
	this.ChosenLetter = ChosenLetter;
	this.letts = [];
	this.RightWord = false;

	this.getLett = function (){
		for (var i = 0; i < this.ChosenLetter.length; i++) {
			this.letts.push(new letter (this.ChosenLetter[i]));
		}
	};

	this.pickWord = function(){
		this.RightWord = this.letts.every(function(currentLett){
			return currentLett.appear;
		});
		return this.RightWord;
	};
	this.checkLetter = function(guesslett){
		var ToDisplay = 0;

		for (var i = 0; i < this.letts.length; i++){
			if (this.lets[i].charac == guesslett){
				this.letts[i].appear = true;
				ToDisplay++;
			}
		}
		return ToDisplay;
	};
	this.renderWord = function(){
		var string = "";
		for (var i = 0; i < this.letts.length; i++){
			string+=this.letts[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;