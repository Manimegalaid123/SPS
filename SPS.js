let balance = 1000;
let currentBet = 100;
let soundOn = true;

const balanceDisplay = document.getElementById("balance");
const betDisplay = document.getElementById("bet");
const resultText = document.getElementById("resultText");
const scoreChange = document.getElementById("scoreChange");

const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

function updateBalanceDisplay() {
  balanceDisplay.innerText = balance;
}

function adjustBet(amount) {
  currentBet += amount;
  if (currentBet < 0) currentBet = 0;
  betDisplay.innerText = currentBet;
}

function toggleSound() {
  soundOn = !soundOn;
  document.getElementById("soundToggle").src = soundOn ? "sound_on.png" : "sound_off.png";
}

function replayGame() {
  resultText.innerText = "Make your move!";
  scoreChange.innerText = "";
  playerHand.src = "hand_rock.png";
  computerHand.src = "hand_paper.png";
}

function play(playerChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  playerHand.src = `hand_${playerChoice}.png`;
  computerHand.src = `hand_${computerChoice}.png`;

  let result;
  if (playerChoice === computerChoice) {
    result = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  if (result === "win") {
    balance += currentBet;
    resultText.innerText = "You won!";
    scoreChange.innerText = `+${currentBet}`;
  } else if (result === "lose") {
    balance -= currentBet;
    resultText.innerText = "You lost";
    scoreChange.innerText = `-${currentBet}`;
  } else {
    resultText.innerText = "It's a draw!";
    scoreChange.innerText = "0";
  }

  updateBalanceDisplay();
}
