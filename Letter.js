var letter = function (lett){
	this.charac = lett;
	this.appear = false;
	this.letterRender = function (){
		return !(this.appear)? "_" : this.charac
	};
};


module.exports = letter;