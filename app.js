var playerinput = prompt("Welcome. Enter your move: rock, paper, scissors")
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
