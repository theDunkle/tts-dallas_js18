var tournamentRoster = [
	{name:"playerOne", hand:"", wins: 0},
	{name:"playerTwo", hand:"", wins: 0},
	{name:"playerThree", hand:"", wins: 0},
	{name:"playerFour", hand:"", wins: 0}
	];

function playGame(p1,p2,playUntil){
	var roundNumber = 0;
	var roundWinner = "";

	function getHand(){
		var weapons = ["rock", "paper", "scissors"];
	  return weapons[parseInt(Math.random()*10)%3];
	}

	function playRound(p1,p2){
	  p1.hand = getHand();
	  p2.hand = getHand();

	  if ( p1.hand === p2.hand ) {
	    return null;
	  }
	  if ( p1.hand === "rock" && p2.hand === "scissors" || p1.hand === "scissors" && p2.hand === "paper" || p1.hand === "paper" && p2.hand === "rock") {
	    p1.wins += 1;
	    return p1.name;
	  }
	  if ( p2.hand === "rock" && p1.hand === "scissors" || p2.hand === "scissors" && p1.hand === "paper" || p2.hand === "paper" && p1.hand === "rock") {
	    p2.wins += 1;
	    return p2.name;
	  }
	}

	do{
      roundWinner = playRound(p1,p2);
      roundNumber++;
      if (roundWinner === null){
        console.log("It's a tie. Replay round " + roundNumber + ".");
        roundNumber--;
      }
      else {
        console.log("Round " + roundNumber + " goes to " + roundWinner + "!");
      }
	} while (p1.wins !== playUntil && p2.wins !== playUntil);
}
playGame(tournamentRoster[0],tournamentRoster[1],5);
console.log("Final score is: "+tournamentRoster[0].name+"="+tournamentRoster[0].wins+" vs "+tournamentRoster[1].name+"="+tournamentRoster[1].wins);
