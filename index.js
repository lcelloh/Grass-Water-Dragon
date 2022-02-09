function computerPlay() {
  let selectedNum = Math.floor(Math.random() * 3);

  if (selectedNum === 0) {
    return "rock";
  } else if (selectedNum === 1) {
    return "paper";
  } else if (selectedNum === 2) {
    return "scissor";
  }
}

function playerSelection() {
  return prompt("What do you want to play? ", "cancel");
}

const playerChoice = playerSelection();
const computerChoice = computerPlay();
console.log(computerChoice);
console.log(playerChoice);

// console.log(playRound(playerChoice, computerChoice));
const round = playRound();
let playerPoints = new Array();
let computerPoints = new Array();

/*function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    if (playerPoints.length === 3) {
      return "Player has won!";
      break;
    } else if (computerPoints.length === 3) {
      return "Computer has won!";
      break;
    } else if (round === "Tie") {
      //pass
    } else if (round === "Computer wins") {
      computerPoints.push(i);
    } else if (round === "Player wins") {
        playerPoints.push(i);
    }
    }
}
console.log(game())*/

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (playerChoice === null || playerChoice === "cancel") {
    return "Canceled";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else if (computerChoice === "scissor") {
      return "Player Wins";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      return "Computer wins";
    } else if (computerChoice === "rock") {
      return "Player Wins";
    }
  } else if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      return "Computer wins";
    } else if (computerChoice === "paper") {
      return "Player Wins";
    }
  }
}



