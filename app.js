function getPlayerMove() {
  //Gets player input as string
  var playerinput = prompt("Enter your move: rock, paper, scissors")
  //Converts player input into a number between 0 and 2 with the scheme:
  //rock = 0
  //paper = 1
  //scissors = 2
  switch (playerinput) {
    case 'rock':
      return '0';
      break;
    case 'paper':
      return '1';
      break;
    case 'scissors':
      return '2';
    default:
      throw 'invalidInputError';
  }
}

//Generates number between 0 and 2 for computer move
function generateCompMove() {
  return var Math.floor(Math.random()*3);
}


//Game itself:
//variable to check if player wins (1). Default to compuer winning (0). Draw is when no one wins (2).
var win = 0;
//Game stats:
var round = 1;
var max = 5;
var playerpoint = 0;
var comppoint = 0;
//Get Moves:
var computer = generateCompMove();
var player = getPlayerMove();
//Win state 1: player number > computer number. Ie, player is paper, computer is rock; player is scissors, computer is paper
if (player > computer) {
  playerpoint+=1;
} else if (player==0 && computer==2){ //Win state 2: player is 0, and computer is 2. Ie, player is rock, computer is scissors
  playerpoint+=1;
} else if (player==computer){ //Draw state: player and computer choose the same thing
  //Do nothing
} else { //Otherwise it is assumed computer won
  comppoint+=1;
}
