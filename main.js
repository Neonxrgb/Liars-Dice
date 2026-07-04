class DiceCup {
    constructor() {
        this.dice = [0, 0, 0, 0, 0];
        this.rollCup();
    }

    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollCup() {
        for (let i = 0; i < this.dice.length; i++) {
            this.dice[i] = this.rollDie();
        }
    }

    removeDie() {
        this.dice.pop();
    }

    reset() {
        this.dice = [0, 0, 0, 0, 0];
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
            const value = cup.dice[index];

            dieElement.innerHTML = "";
            dieElement.style.display = "";

            const dotPositions = {
                1: [[1, 1]],
                2: [[0, 0], [2, 2]],
                3: [[0, 0], [1, 1], [2, 2]],
                4: [[0, 0], [0, 2], [2, 0], [2, 2]],
                5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
                6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]]
            };

            // do not understand that part fully
            dotPositions[value].forEach(([row, col]) => {
                const dot = document.createElement("span");
                dot.className = "pip";
                dot.style.gridRow = row + 1;
                dot.style.gridColumn = col + 1;
                dieElement.appendChild(dot);
            });
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
