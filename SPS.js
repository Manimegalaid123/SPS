
    let userScore = 0;
    let compScore = 0;
    let balance = 1000;
    let betAmount = 100;
    let soundOn = true;

    function play(userChoice) {
      const choices = ["rock", "paper", "scissor"];
      const compChoice = choices[Math.floor(Math.random() * 3)];
      const resultEl = document.getElementById("result");
      const winSound = document.getElementById("winSound");
      const loseSound = document.getElementById("loseSound");

      if (balance < betAmount) {
        resultEl.innerText = "Insufficient balance! Please reduce your bet.";
        resultEl.className = "result-display lose";
        return;
      }

      let result = "";
      let resultClass = "";

      if (userChoice === compChoice) {
        result = `Draw! Both chose ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
        resultClass = "draw";
      } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "scissor" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
      ) {
        result = `You Win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`;
        userScore++;
        balance += betAmount;
        resultClass = "win";
        if (soundOn) winSound.play();
      } else {
        result = `You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
        compScore++;
        balance -= betAmount;
        resultClass = "lose";
        if (soundOn) loseSound.play();
      }

      document.getElementById("userScore").innerText = userScore;
      document.getElementById("compScore").innerText = compScore;
      document.getElementById("balance").innerText = balance;
      document.getElementById("result").innerText = result;
      document.getElementById("result").className = `result-display ${resultClass}`;
    }

    function adjustBet(amount) {
      let newBet = betAmount + amount;
      if (newBet >= 50 && newBet <= balance) {
        betAmount = newBet;
        document.getElementById("bet").innerText = betAmount;
      }
    }

    function resetGame() {
      userScore = 0;
      compScore = 0;
      balance = 1000;
      betAmount = 100;
      document.getElementById("userScore").innerText = userScore;
      document.getElementById("compScore").innerText = compScore;
      document.getElementById("balance").innerText = balance;
      document.getElementById("bet").innerText = betAmount;
      document.getElementById("result").innerText = "Ready to play? Choose your move!";
      document.getElementById("result").className = "result-display";
    }

    function toggleSound() {
      soundOn = !soundOn;
      const soundToggle = document.getElementById("soundToggle");
      soundToggle.innerHTML = soundOn ? "🔊" : "🔇";
      soundToggle.className = soundOn ? "sound-toggle" : "sound-toggle sound-off";
    }
 