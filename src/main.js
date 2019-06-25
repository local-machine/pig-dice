// User Interface Logic ---------------------
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Player, switchPlayer } from './pigdice';

var highlightPlayer = function() {    // Highlights the current player
  if (currentPlayer === player1) {
    $(".player2").removeClass("highlight");
    $(".player1").addClass("highlight");
  } else {
    $(".player1").removeClass("highlight");
    $(".player2").addClass("highlight");
  }
};

var totalOutput = function() {      // Display the cumulative total for each player
  if (currentPlayer === player1) {
    $("#player1-total").text(currentPlayer.total);
  } else {
    $("#player2-total").text(currentPlayer.total);
  }
};

var player1 = new Player("Player 1", 0, 0);
var player2 = new Player("Player 2", 0, 0);

var currentPlayer = player1;

$(function() {

  highlightPlayer();

  $("#roll").click(function() {
    currentPlayer.rollDice();
    $(".roll-result").text("You rolled a " + rollNumber);
    $("#turn-tally").text(currentPlayer.current);   //shows current player's temp tally
    if (winner) {
      $("#winner").text(currentPlayer.name + " is the winner!");
    }
  });

  $("#pass").click(function() {   // Switches to other user upon passing turn
    currentPlayer.tallyUp();
    totalOutput();
    switchPlayer();
    $("#turn-tally").text(currentPlayer.current);   // resets and displays current player's temp tally
    highlightPlayer();
    $(".roll-result").empty();   // displays nothing when current player has yet to roll
  });
});
