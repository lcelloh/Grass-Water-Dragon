function game() {
  let flag = true,
    playerPoints = 0,
    computerPoints = 0;

  while (flag) {
    let manche = round();
    if (manche === "PlayerWin") {
      console.log("Player won the round");
      playerPoints += 1;
    } else if (manche === "ComputerWin") {
      console.log("Computer won the round");
      computerPoints += 1;
    } else if (manche === "tie") {
    }
    console.log(`Player score: ${playerPoints}`);
    console.log(`Computer score: ${computerPoints}`);
    if (computerPoints === 3 || playerPoints === 3) {
      alert("game over");
      flag = false;
    }
  }
  if (playerPoints > computerPoints) {
    console.log("Player Wins !");
  } else {
    console.log("Computer Wins");
  }
}

function round() {
  let play = computerPlay(),
    selection = playerSelection();
  console.log(`Player choosed: ${selection}`);
  console.log(`Computer choosed: ${play}`);
  if (play === selection) {
    console.log("it's a tie");
    return "tie";
  } else if (selection === "paper" && play !== "paper") {
    if (play === "rock") {
      console.log(`Paper beats rock`);
      return "PlayerWin";
    } else if (play === "scissor") {
      console.log(`Scissors beat paper`);
      return "ComputerWin";
    }
  } else if (selection === "rock" && play !== "rock") {
    if (play === "paper") {
      console.log(`Paper beats rock`);
      return "ComputerWin";
    } else if (play === "scissor") {
      console.log(`Rock beats scissor`);
      return "PlayerWin";
    }
  } else if (selection === "scissor" && play !== "scissor") {
    if (play === "paper") {
      console.log(`Scissor beats paper`);
      return "PlayerWin";
    } else if (play === "rock") {
      console.log(`Rock beats scissor`);
      return "ComputerWin";
    }
  }
}
function computerPlay() {
  const choice = ["rock", "paper", "scissor"];
  let sign = choice[Math.floor(Math.random() * 3)];
  return sign;
}

function playerSelection() {
  let choice = prompt("What do you want to play? ", "rock");

  return choice;
}

console.log("Rock-Paper-Scissors game, bo3");
game();
