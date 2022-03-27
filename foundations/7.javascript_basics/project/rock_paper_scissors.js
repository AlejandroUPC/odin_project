const PICK_OPTIONS = ["Paper", "Rock", "Scissors"];

function computerPlay() {
  return PICK_OPTIONS[Math.floor(Math.random() * PICK_OPTIONS.length)];
}

let playerPick = prompt("Pick");
playerPick =
  playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase();

if (!PICK_OPTIONS.includes(playerPick)) {
  console.error("Pick between " + PICK_OPTIONS.join());
}

function playRound(playerSelection, computerSelection) {
  console.log(
    "Player " + playerSelection + " vs Computer " + computerSelection
  );
  if (playerSelection === computerSelection) {
    return "Draw";
  }
  if ((playerSelection == "Paper") & (computerSelection == "Rock")) {
    return "Player Wins";
  } else if ((playerSelection == "Rock") & (computerSelection == "Scissors")) {
    return "Player Wins";
  } else if ((playerSelection == "Scissors") & (computerSelection == "Paper")) {
    return "Player Wins";
  }
  return "Computer Wins";
}

console.log(playRound(playerPick, computerPlay()));
