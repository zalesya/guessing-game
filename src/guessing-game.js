class GuessingGame {
	
    constructor() {
	this.min = 0;
	this.max = 0;
	this.guessNumber = 0;
    }

    setRange(min, max) {
	this.min = min + 1;
	this.max = max;
    }

    guess() { 
	this.guessNumber = Math.trunc((this.min + this.max) / 2.);
	return this.guessNumber;
    }

    lower() {
	this.max = this.guessNumber;
    }

    greater() {
	this.min = this.guessNumber + 1;
    }
}

module.exports = GuessingGame;
