
var clear = Math.floor(Math.random()*12+1)
var pink = Math.floor(Math.random()*12+1)
var purple = Math.floor(Math.random()*12+1)
var yellow = Math.floor(Math.random()*12+1)

var wins = 0;
var losses = 0;
var score = 0;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

  maxScore = getRandomInt(19, 120);
  
  $("#scoreToMatch").text("Total score should not exceed: " + maxScore);

  function resetGame() {
    score = 0;
    $("#score").text("Score So Far: " + score);
    maxScore = getRandomInt(19, 120);
    console.log("Max Score", maxScore);
    $("#scoreToMatch").text("Total score should not exceed: " + maxScore);
    clear = 0;
    pink = 0;
    purple = 0;
    yellow = 0;
  } 

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
  } 

  
  $("#one").on("click", function() {
    console.log('hi');
    if (clear === 0) {
      clear = getRandomInt(1, 12);
      console.log(clear);
    }
    
  });
  
  
  $("#two").on("click", function() {
    // console.log('hey')
    if (pink === 0) {
      pink = getRandomInt(1, 12);
      console.log(pink);
    }
    score += pink;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });

  
  $("#three").on("click", function() {
    if (purple === 0) {
      purple = getRandomInt(1, 12);
      console.log(purple);
    }
    score += purple;
    $("#score").text("Score So Far: " + score);
    checkWin();
  });
  
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