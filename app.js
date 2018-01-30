//Gets player input as string
var playerinput = prompt("Welcome. Enter your move: rock, paper, scissors")
//Converts player input into a number between 0 and 2 with the scheme:
//rock = 0
//paper = 1
//scissors = 2
var player;
switch (playerinput) {
  case 'rock':
    player = '0';
    break;
  case 'paper':
    player = '1';
    break;
  case 'scissors':
    player = '2';
  default:
    throw 'invalidInputError';
}

//Generates number between 0 and 2 for computer move
console.log(Math.floor(Math.random()*3));
var computer = Math.floor(Math.random()*3);
