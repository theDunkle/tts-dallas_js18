// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
console.log("Connected")
// Array of Word Options (all lowercase)
var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var chosenArray = [];
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
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution is chosen randomly from wordList.
  chosenWord = wordsList[parseInt(Math.random() * wordsList.length)];

  // The word is broken into individual letters.
  chosenArray = chosenWord.split('');

  // We count the number of letters in the word.
  wordLength = chosenArray.length;
  numBlanks = wordLength;

  // We print the solution in console (for testing).
  console.log(chosenWord);

  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = []

  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = []

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  // Print the initial blanks in console.
  for (var i = 0; i < wordLength; i++){
    blanksAndSuccesses.push("_");
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
  var exists = false;
  n = 0;


  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  chosenArray.map(function(letterInArray,index){
    if( letterInArray === letter ){
      n++;
      blanksAndSuccesses[index] = letter;
      exists = true;
    }
  })
  // Check if a letter exists inside the array at all.
    // If the letter exists then toggle this boolean to true. This will be used in the next step.
    if (exists){
      if (blanksAndSuccesses != letter){
        numBlanks -= n;
        document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
      }
      else{
        alert("You already guessed that letter. Please try again.")
      }
    }
    else{
      if(wrongGuesses){
        wrongGuesses.forEach(function(current){
        console.log(current);
        if(current == letter) {
          alert("You already guessed that letter. Please try again.")
        }
        else{
          numGuesses--;
          wrongGuesses.push(letter);
        }
      });
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).

    // Loop through the word

      // Populate the blanksAndSuccesses with every instance of the letter.

        // Here we set the specific space in blanks and letter equal to the letter when there is a match.


    // Logging for testing.

  // If the letter doesn't exist at all...
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log(winCounter, lossCounter, numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.


  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses;


  // If we have gotten all the letters to match the solution...
  if(numBlanks === 0){
    // ..add to the win counter & give the user an alert.
    winCounter++;
    alert("You guessed it! Please play again.");
    // Update the win counter in the HTML & restart the game.
    document.getElementById("win-counter").innerHTML = winCounter
    startGame();
  }


  // If we've run out of guesses..
  if(numGuesses === 0){
    // Add to the loss counter.
    lossCounter++;
    // Give the user an alert.
    alert("Looks like you've run out of guesses. Please play again");
    // Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = lossCounter
    // Restart the game.
    startGame();
  }



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
  if(isLetter(letterGuessed)){
    checkLetters(letterGuessed);
  } else {
    alert("Please only select letters.")
  }

  // Runs the code after each round is done.
  roundComplete();
};
