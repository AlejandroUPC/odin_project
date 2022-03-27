const PICK_OPTIONS = ["Paper", "Rock", "Scissors"];

function computerPlay() {
  return PICK_OPTIONS[Math.floor(Math.random() * PICK_OPTIONS.length)];
}

const buttons = document.querySelectorAll("button");
const compPickText = document.querySelector(".computer-pick");
let playerPick = "";
let playerScore = document.querySelector(".p-s");
let computerScore = document.querySelector(".c-s");
computerScore.innerText = 0;
playerScore.innerText = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerPick = button.innerHTML;
    computerPick = computerPlay();
    if (
      !PICK_OPTIONS.includes(playerPick) | !PICK_OPTIONS.includes(computerPick)
    ) {
      alert("Pick between " + PICK_OPTIONS.join());
    }
    compPickText.innerHTML = "Computer picks " + computerPick;
    if (playerPick === computerPick) {
      alert("same pick");
      return;
    }
    let playerWon = isPlayerWinner(playerPick, computerPick);
    console.log(playerScore.innerText);
    if (playerWon) {
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else {
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
  });
});

function isPlayerWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  }
  if ((playerSelection == "Paper") & (computerSelection == "Rock")) {
    return true;
  } else if ((playerSelection == "Rock") & (computerSelection == "Scissors")) {
    return true;
  } else if ((playerSelection == "Scissors") & (computerSelection == "Paper")) {
    return true;
  }
  return false;
}
