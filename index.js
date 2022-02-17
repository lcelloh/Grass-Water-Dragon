

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
  } else if (selection === "dragon" && play !== "dragon") {
    if (play === "grass") {
      console.log(`dragon beats grass`);
      return "PlayerWin";
    } else if (play === "water") {
      console.log(`waters beat dragon`);
      return "ComputerWin";
    }
  } else if (selection === "grass" && play !== "grass") {
    if (play === "dragon") {
      console.log(`dragon beats grass`);
      return "ComputerWin";
    } else if (play === "water") {
      console.log(`grass beats water`);
      return "PlayerWin";
    }
  } else if (selection === "water" && play !== "water") {
    if (play === "dragon") {
      console.log(`water beats dragon`);
      return "PlayerWin";
    } else if (play === "grass") {
      console.log(`grass beats water`);
      return "ComputerWin";
    }
  }
}
function computerPlay() {
  const choice = ["grass", "dragon", "water"];
  let sign = choice[Math.floor(Math.random() * 3)];
  return sign;
}

function playerSelection() {
  let choice = prompt("What do you want to play? ", "grass");

  return choice;
}

console.log("grass-dragon-waters game, bo3");
//game();
