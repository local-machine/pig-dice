// Business Logic
var rollNumber;
var winner = false;

export function Player(name, current, total) {
  this.name = name;
  this.current = current;
  this.total = total;
}

Player.prototype.rollDice = function() {
  rollNumber = Math.floor(Math.random() * 6) + 1;   // Returns a random number between 1 and 6
  if (rollNumber !== 1) {
    this.current += rollNumber;    // Keeps a tally of current player's rolls
  } else {
    this.current = 0;    // Clears tally of rolls when 1 is rolled
    this.tallyUp();   // Rolling a one results in the turn passing to the next player
    totalOutput();
    switchPlayer();
    highlightPlayer();
  }
  if (this.current + this.total >= 100) {    // Terminates game at 100
    this.tallyUp();
    totalOutput();
    winner = true;
  }
};

Player.prototype.tallyUp = function () {
  this.total += this.current;   // Adds current tally to total score when "pass" is clicked
  this.current = 0;
};

export var switchPlayer = function(){    // Switches to other user upon passing turn
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
};
