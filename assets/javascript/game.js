// ===============================Global variables==============================

var crystal = {
  blueGem: 
  {
    name: "blueGem",
    value: 0
  },
  greenGem:
  {
    name: "greenGem",
    value: 0
  },
  redGem: 
  {
    name: "redGem",
    value: 0
  },
  orangeGem:
   {
    name: "orangeGem",
    value: 0
  }
};

// =====================================Scores========================================
var currentScore  = 0;
var targetScore  = 0;


// =================================Wins and losses==============================

var winCount  = 0;
var lossCount = 0;

// =================================Functions===================================

var getRandom = function(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
// Reset current score
  currentScore = 0;

  // set target score
  targetScore = getRandom(19, 120);

  crystal.redGem.value    = getRandom(1, 12);
  crystal.blueGem.value     = getRandom(1, 12);
  crystal.orangeGem.value   = getRandom(1, 12);
  crystal.greenGem.value    = getRandom(1, 12);

  $("#score-count").html(currentScore);
  $("#number-to-guess").html(targetScore);



  console.log("--------------------------------");
  console.log('Target Score:' + targetScore);
  console.log('Red:' + crystal.redGem.value + '| Blue:' + crystal.blueGem.value + '| Green:' + crystal.greenGem.value + '| Orange:' + crystal.orangeGem.value);
  console.log('---------------------------------');

}

var addValues = function(crystal){

  currentScore = currentScore + crystal.value;
  console.log("your Score: " + currentScore);
  
  checkWin();

  $("#score-count").html(currentScore);
}

var checkWin = function() {
  if(currentScore > targetScore){
    alert("Sorry, you lost");
    lossCount++;
    $("#losses").html(lossCount);
    startGame();

}

  else if(currentScore == targetScore){
    alert("You Won!")
    winCount++;
    $("#wins").html(winCount);
    startGame();

}

}

// ====================================Main Process================================

startGame();

$("#redGem").click(function() {
  addValues(crystal.redGem);
});

$("#blueGem").click(function() {
  addValues(crystal.blueGem);
});

$("#orangeGem").click(function() {
  addValues(crystal.orangeGem);
});

$("#greenGem").click(function() {
  addValues(crystal.greenGem);
});

