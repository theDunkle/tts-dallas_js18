// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
console.log("Connected")
// Array of Word Options (all lowercase)
var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution is chosen randomly from wordList.
  chosenWord = wordsList[parseInt(Math.random() * wordsList.length)];
  console.log(chosenWord);
  // The word is broken into individual letters.
  chosenArray = chosenWord.split('');

  // We count the number of letters in the word.
  wordLength = chosenArray.length
  // We print the solution in console (for testing).
  console.log(chosenArray);

  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = []

  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = []

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  // Print the initial blanks in console.
  for (var i = 0; i < wordLength; i++){
    blanksAndSuccesses.push("_");
    console.log(blanksAndSuccesses);
  }

  // Reprints the guessesLeft to 9
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // Clears the wrong guesses from the previous round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses;
}

// checkLettesr() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {
  console.log("you typed " + letter);
  exists = false;

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  chosenArray.map(function(letterInArray,index){
    if( letterInArray === letter ){
      blanksAndSuccesses[index] = letter;
      exists = true;
    }
    else{
      exists = false;
    }
  })
  // Check if a letter exists inside the array at all.
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
    if (exists){
      numGuesses--;
      document.getElementById("guesses-left").innerHTML = numGuesses;
      document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    }
    else{
      numGuesses--;
      wrongGuesses.push(letter);
      document.getElementById("guesses-left").innerHTML = numGuesses;
      document.getElementById("wrong-guesses").innerHTML = wrongGuesses;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).

    // Loop through the word

      // Populate the blanksAndSuccesses with every instance of the letter.

        // Here we set the specific space in blanks and letter equal to the letter when there is a match.


    // Logging for testing.

  // If the letter doesn't exist at all...
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.


// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.


  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.

  // This will print the array of guesses and blanks onto the page.

  // This will print the wrong guesses onto the page.


  // If we have gotten all the letters to match the solution...

    // ..add to the win counter & give the user an alert.


    // Update the win counter in the HTML & restart the game.



  // If we've run out of guesses..

    // Add to the loss counter.

    // Give the user an alert.


    // Update the loss counter in the HTML.

    // Restart the game.


}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters();
  // Runs the code after each round is done.

};