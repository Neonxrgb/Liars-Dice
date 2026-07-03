class DiceCup {
    constructor() {
        this.dice = [0,0,0,0,0]; 
        this.rollCup();
    }

    rollDie() { 
        return Math.floor(Math.random() * 6) + 1; 
    }

    rollCup() {
        for (let i = 0; i < this.dice.length; i++ ) {
            this.dice[i] = this.rollDie();
        }
    }

    removeDie() {
        this.dice.pop();
    }

    reset() {
        this.dice = [0,0,0,0,0]; 
        this.rollCup();
    }
}

const cup = new DiceCup();

const dieIds = ["die1", "die2", "die3", "die4", "die5"];

// ----- RENDERER ----- ///

function render() {
    dieIds.forEach((id, index) => {
    const dieElement = document.getElementById(id);

    if (index < cup.dice.length) {
        dieElement.textContent = cup.dice[index];
        dieElement.style.display = "block";
    } else {
        dieElement.style.display = "none";
    }
    });
}

render();

// ----- BUTTON EVENT LISTENER ----- //

const rollButton = document.getElementById('rollCup');
const removeButton = document.getElementById('removeDie');
const resetButton = document.getElementById('resetDice');

rollButton.addEventListener('click', () => {
    cup.rollCup(); 
    render();
});

removeButton.addEventListener('click', () => {
    cup.removeDie();
    render();
});

resetButton.addEventListener('click', () => {
    cup.reset();
    render();
});
