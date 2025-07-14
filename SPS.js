let userScore = 0, compScore = 0;
let balance = 1000, betAmount = 100;
let soundOn = true;

const uScoreEl = document.getElementById("userScore");
const cScoreEl = document.getElementById("compScore");
const balanceEl = document.getElementById("balance");
const betEl = document.getElementById("bet");
const resultEl = document.getElementById("result");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const soundToggle = document.getElementById("soundToggle");

function play(choice) {
  if (balance < betAmount) {
    resultEl.innerText = "Not enough balance!";
    return;
  }

  const choices = ["rock", "paper", "scissor"];
  const comp = choices[Math.floor(Math.random() * 3)];

  playerHand.src = `hand_${choice}.png`;
  computerHand.src = `hand_${comp}.png`;

  let outcome;
  if (choice === comp) {
    outcome = "draw";
  } else if (
    (choice === "rock" && comp === "scissor") ||
    (choice === "paper" && comp === "rock") ||
    (choice === "scissor" && comp === "paper")
  ) {
    outcome = "win";
  } else {
    outcome = "lose";
  }

  updateOutcome(outcome, choice, comp);
}

function updateOutcome(outcome, choice, comp) {
  if (outcome === "win") {
    userScore++; balance += betAmount;
    if (soundOn) winSound.play();
    resultEl.innerText = `You Win! ${choice} beats ${comp}`;
  } else if (outcome === "lose") {
    compScore++; balance -= betAmount;
    if (soundOn) loseSound.play();
    resultEl.innerText = `You Lose! ${comp} beats ${choice}`;
  } else {
    resultEl.innerText = `Draw! Both chose ${choice}`;
  }

  uScoreEl.innerText = userScore;
  cScoreEl.innerText = compScore;
  balanceEl.innerText = balance;
}

function adjustBet(amt) {
  const newBet = betAmount + amt;
  if (newBet >= 50 && newBet <= balance) {
    betAmount = newBet;
    betEl.innerText = betAmount;
  }
}

function resetGame() {
  userScore = compScore = 0;
  balance = 1000; betAmount = 100;
  uScoreEl.innerText = userScore;
  cScoreEl.innerText = compScore;
  balanceEl.innerText = balance;
  betEl.innerText = betAmount;
  resultEl.innerText = "Make your move!";
  playerHand.src = computerHand.src = "hand_rock.png";
}

function toggleSound() {
  soundOn = !soundOn;
  soundToggle.innerText = soundOn ? "🔊 Sound On" : "🔇 Sound Off";
}
