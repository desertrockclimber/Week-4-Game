// alert("hi");


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

  

  // ===============================Score Counter==============================================




  // ===============================Random Gem Values==========================================
   var minNumberGem = 1;
   var maxNumberGem = 10;
// --------------------------Red Gem------------------------------------
  var randomNumberRed = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberBlue = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberGreen = randomNumberFromRange(minNumberGem, maxNumberGem);
  var randomNumberOrange = randomNumberFromRange(minNumberGem, maxNumberGem);

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

  });

 

// $(document).ready(function() {
//         // When random-button is clicked...
//       $("#redGem").on("click", function() {
//         // ...create a string which will hold the lottery number.
//         var randomGem = "";
//         // Then create a loop that generates 9 separate numbers.
//         for (var i = 0; i < 1; i++) {
//           var random = Math.floor(Math.random() * 10);
//           // Add to the lottery number.
//           randomGem = random + randomGem;



//         }
//         // Then prepend the lotto number to the top of our random-number div.
//         // $("#random-number").prepend("<br><hr>" + lottoNumber);
//         console.log(randomGem);
//       });
//     });


