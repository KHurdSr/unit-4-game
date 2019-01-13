
var clear = 0;
var pink = 0;
var purple = 0;
var yellow = 0;

var wins = 0;
var losses = 0;
var score = 0;

//Random Number between Min and Max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////Begin Game Logic//////////////
$(document).ready(function() {

  maxScore = getRandomInt(19, 120);
  //console.log("Max Score", maxScore);
  $("#scoreToMatch").text("Your total score should not exceed: " + maxScore);

  function resetGame() {
    score = 0;
    $("#score").text("Score So Far: " + score);
    maxScore = getRandomInt(19, 120);
    console.log("Max Score", maxScore);
    $("#scoreToMatch").text("Your total score should not exceed: " + maxScore);
    clear = 0;
    pink = 0;
    purple = 0;
    yellow = 0;
  } //End resetGame fct
  function checkWin() {
    if (score === maxScore) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (score > maxScore) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
  } //End checkWin fct

  //Click Event for Gem 0
  $("#one").on("click", function() {
    if (clear === 0) {
      clear = getRandomInt(1, 12);
      console.log(clear);
    }
    score += clear;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });
  
  //Click Event for Gem 1
  $("#two").on("click", function() {
    if (pink === 0) {
      pink = getRandomInt(1, 12);
      console.log(pink);
    }
    score += pink;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });

  //Click Event for Gem 2
  $("#three").on("click", function() {
    if (purple === 0) {
      purple = getRandomInt(1, 12);
      console.log(purple);
    }
    score += purple;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });
  //Click Event for Gem 3
  $("#four").on("click", function() {
    if (yellow === 0) {
      yellow = getRandomInt(1, 12);
      console.log(yellow);
    }
    score += yellow;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });

});