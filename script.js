let playerPoints = 0,
  computerPoints = 0;

const venoButton = document.getElementById("veno");
const blastoButton = document.getElementById("blasto");
const chariButton = document.getElementById("chari");
const imageVeno = document.createElement("img");
const imageBlasto = document.createElement("img");
const imageChari = document.createElement("img");
const imageVeno1 = document.createElement("img");
const imageBlasto1 = document.createElement("img");
const imageChari1 = document.createElement("img");
imageVeno.src = "/images/venusaur-1.png";
imageBlasto.src = "/images/blastoise-1.png";
imageChari.src = "/images/charizard-1.png";
imageVeno1.src = "/images/venusaur-1.png";
imageBlasto1.src = "/images/blastoise-1.png";
imageChari1.src = "/images/charizard-1.png";
imageVeno.classList.toggle("player-image");
imageBlasto.classList.toggle("player-image");
imageChari.classList.toggle("player-image");
imageVeno1.classList.toggle("player-image");
imageBlasto1.classList.toggle("player-image");
imageChari1.classList.toggle("player-image");
const plImageDiv = document.getElementById("image-pl");
const cpIMageDIV = document.getElementById("image-cp");

venoButton.addEventListener("click", () => game("grass"));
blastoButton.addEventListener("click", () => game("water"));
chariButton.addEventListener("click", () => game("dragon"));

function computerPlay() {
  const choice = ["grass", "dragon", "water"];
  let sign = choice[Math.floor(Math.random() * 3)];
  return sign;
}

function game(playerSelection) {
  if (plImageDiv.querySelectorAll(".player-image").length > 0) {
    plImageDiv.innerHTML = "";
    cpIMageDIV.innerHTML = "";
  }

  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  if (gameIsOver()) {
    establishWinner();
    playerPoints = 0;
    computerPoints = 0;
    plImageDiv.innerHTML = "";
    cpIMageDIV.innerHTML = "";
  }
}

function playRound(playerSelection, computerSelection) {
  playerImage(playerSelection);
  computerImage(computerSelection);
  if (computerSelection === playerSelection) {
    console.log("tie");
  } else if (playerSelection === "dragon") {
    if (computerSelection === "grass") {
      playerPoints++;
    } else if (computerSelection === "water") {
      computerPoints++;
    }
  } else if (playerSelection === "grass") {
    if (computerSelection === "dragon") {
      computerPoints++;
    } else if (computerSelection === "water") {
      playerPoints++;
    }
  } else if (playerSelection === "water") {
    if (computerSelection === "dragon") {
      playerPoints++;
    } else if (computerSelection === "grass") {
      computerPoints++;
    }
  }
}

function gameIsOver() {
  return playerPoints === 3 || computerPoints === 3;
}

function establishWinner() {
  if (playerPoints === 3) {
    alert("Game over! Player wins");
  } else {
    alert("Game Over! Computer Wins");
  }
}

function playerImage(playerSelection) {
  console.log(playerSelection);
  if (playerSelection === "grass") {
    document.getElementById("image-pl").appendChild(imageVeno);
  } else if (playerSelection === "water") {
    document.getElementById("image-pl").appendChild(imageBlasto);
  } else if (playerSelection === "dragon") {
    document.getElementById("image-pl").appendChild(imageChari);
  }
}

function computerImage(computerSelection) {
  console.log(computerSelection);
  if (computerSelection === "grass") {
    document.getElementById("image-cp").appendChild(imageVeno1);
  } else if (computerSelection === "water") {
    document.getElementById("image-cp").appendChild(imageBlasto1);
  } else if (computerSelection === "dragon") {
    document.getElementById("image-cp").appendChild(imageChari1);
  }
}
