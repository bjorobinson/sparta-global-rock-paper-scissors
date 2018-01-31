function getPlayerMove() {
  //Gets player input as string
  var playerinput = prompt("Enter your move: rock, paper, scissors")
  //Converts player input into a number between 0 and 2 with the scheme:
  //rock = 0
  //paper = 1
  //scissors = 2
  switch (playerinput) {
    case 'rock':
      return 0;
      break;
    case 'paper':
      return 1;
      break;
    case 'scissors':
      return 2;
    default:
      alert("Invalid input. Please enter: rock, paper, scissors, lowercase")
      getPlayerMove();
  }
}

//Generates number between 0 and 2 for computer move
function generateCompMove() {
  return Math.floor(Math.random()*3);
}

function roundRoundup(){
  alert('ROUND: ' + round + '\n' +
  'PLAYER SCORE: ' + playerpoint + '\n' +
  'COMPUTER SCORE: ' + comppoint);
}


//Game itself:
//Game stats:
var max = 5;
var playerpoint = 0;
var comppoint = 0;
var round=1;
while (round <= max && playerpoint < max/2 && comppoint < max/2) {
  //Get Moves:
  var computer = generateCompMove();
  var player = getPlayerMove();

  if (player > computer) {
    if (player-computer===2){ //Lose state 1: player > computer, but the difference between them is 2. Ie, player is scissors, and computer is rock.
      comppoint+=1;
    } else { //Win state 1: player number > computer number, but the difference is 1. Ie, player is paper, computer is rock; player is scissors, computer is paper
      playerpoint+=1;
    }
  } else if (player==0 && computer==2){ //Win state 2: player is 0, and computer is 2. Ie, player is rock, computer is scissors
    playerpoint+=1;
  } else if (player==computer){ //Draw state: player and computer choose the same thing
    //Do nothing
  } else { //Otherwise it is assumed computer won
    comppoint+=1;
  }
  //ROUND ROUNDUP
  roundRoundup();
  round ++;
}

//It exits the loop, so game has ended through 1 of the 3 conditions failing
if (playerpoint > comppoint) {
  alert("Player wins");
} else if (comppoint > playerpoint) {
  alert("Computer wins");
} else {
  alert("Draw!");
}
