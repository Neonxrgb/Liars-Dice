class DiceCup {
    constructor() {
        this.diceAmount = 5;
        this.dice = [0,0,0,0,0];
    }

    rollDie() { 
        return Math.floor(Math.random() * 6) + 1; 
    }

    rollDice() {
        for (let i = 0; i < this.diceAmount; i++ ) {
            this.dice[i] = this.rollDie();
        }
    }

    removeDie() {
        this.diceAmount -= 1;
        this.dice.pop();
    }

    reset() {
        this.diceAmount = 5;
        this.dice = [0,0,0,0,0];
    }
}

// ===== TEST CODE ===== //
MyGame = new DiceCup();
MyGame.rollDice();
console.log(MyGame);