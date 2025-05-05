function startGame() {
    let player = getRandomCard() + getRandomCard();
    let computer = getRandomCard() + getRandomCard();
    let gameText = `You: ${player}<br>Computer: ${computer}<br>`;
  
    if (player > computer && player <= 21) {
      gameText += "You Win!";
    } else if (player === computer) {
      gameText += "It's a tie!";
    } else if (player > 21) {
      gameText += "You Bust!";
    } else {
      gameText += "You Lose!";
    }
  
    document.getElementById("game").innerHTML = gameText;
  }
  
  function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
  }
  