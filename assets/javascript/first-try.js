
// ===============================Global Variables==========================================


var winCount = 0;
var lossCount = 0;
var userScore = 0;

// ===================================Functions================================================

// function startGame () {
// ===============================Random Number to Guess ====================================
 

  var minNumber = 25;
  var maxNumber = 75;

  var randomNumber = randomNumberFromRange(minNumber, maxNumber);

  function randomNumberFromRange(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  $("#number-to-guess").text(randomNumber);
  console.log(randomNumber);



  // ===============================Random Gem Values==========================================
   var minNumberGem = 1;
   var maxNumberGem = 10;
// --------------------------Red Gem------------------------------------
  var randomNumberRed = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberBlue = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberGreen = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberOrange = randomNumberFromRange(minNumberGem, maxNumberGem);
  
  var counter = 0;

function randomNumberFromRange(min,max) {
       return Math.floor(Math.random()*(max-min+1)+min);
   }

   $("#redGem").on('click', function() {
      
      console.log(randomNumberRed);
      

  });
   // Blue Gem --------------------------------------------------
   function randomNumberFromRange(min,max) {
       return Math.floor(Math.random()*(max-min+1)+min);
   }
   $("#blueGem").on('click', function() {
      console.log(randomNumberBlue);
      
  });
   //Green Gem -------------------------------------------------- 
  function randomNumberFromRange(min,max) {
       return Math.floor(Math.random()*(max-min+1)+min);
   }

  $("#greenGem").on('click', function() {
      console.log(randomNumberGreen);
      
  });
// Orange Gem-----------------------------------------------------
  function randomNumberFromRange(min,max) {
       return Math.floor(Math.random()*(max-min+1)+min);
   }
  $("#orangeGem").on('click', function() {
      console.log(randomNumberOrange);
      

      // console.log("Red:" + 'randomNumberRed' | + "Blue" + 'randomNumberBlue');

  var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(randomNumberOrange + randomNumberGreen + randomNumberBlue + randomNumberRed);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

  // ===============================Score Counter==============================================
  // var counter = 0;

  // // This time, our click event applies to every single crystal on the page. Not just one.
  // $("#redGem, #greenGem, #orangeGem, #blueGem").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    
      console.log(crystalValue);

  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //   counter += crystalValue;
  //   console.log(counter);
  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //   alert("New score: " + counter);

  //   if (counter === randomNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= randomNumber) {
  //     alert("You lose!!");
  //   }
  //   // startGame();
  // });
  });