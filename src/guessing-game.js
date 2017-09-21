class GuessingGame {
    constructor() {
		var min;
		var max;
		var guessNumber;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
		this.guessNumber = 0;
    }

    guess() {
		//if (min < max) {  
			guessNumber = Math.floor((min + max) / 2);
			return guessNumber;
		//}
    }

    lower() {
		max = guessNumber;
    }

    greater() {
		min = guessNumber + 1;
    }
}

module.exports = GuessingGame;
