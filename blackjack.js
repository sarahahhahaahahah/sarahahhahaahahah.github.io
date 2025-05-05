// Function to generate a random card (1-11)
function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;  // Generates a number between 1 and 11
}

// Set initial scores
let playerScore = 0;
let computerScore = Math.floor(Math.random() * 11) + 1; // Random score for the computer

// Update the scores displayed on the webpage
function updateScores() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Function to handle the player's "Hit"
function hit() {
    let card = getRandomCard();
    playerScore += card;  // Add the new card value to the player's score
    updateScores();
    
    // Show the new card in the game text (optional)
    document.getElementById('game-result').innerHTML = `You got a ${card}. Your total score is: ${playerScore}`;
    
    // Check if the player busted (score over 21)
    if (playerScore > 21) {
        document.getElementById('game-result').textContent = `Bust! Your score is ${playerScore}. You Lose!`;
        disableButtons();
    }
}

// Function to handle the player's "Stand"
function stand() {
    // Simulate the computer's turn (computer hits until it reaches at least 17)
    while (computerScore < 17) {
        computerScore += getRandomCard();
    }
    updateScores();

    // Determine the winner
    if (computerScore > 21) {
        document.getElementById('game-result').textContent = 'Computer Busts! You Win!';
    } else if (playerScore > computerScore) {
        document.getElementById('game-result').textContent = 'You Win!';
    } else if (playerScore === computerScore) {
        document.getElementById('game-result').textContent = 'It\'s a Tie!';
    } else {
        document.getElementById('game-result').textContent = 'You Lose!';
    }

    // Disable buttons after the game ends
    disableButtons();
}

// Disable the Hit and Stand buttons after the game is over
function disableButtons() {
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
}

// Show the Hit and Stand buttons once the Start Game button is clicked
function startGame() {
    document.getElementById('start-button').style.display = 'none'; // Hide the Start Game button
    document.getElementById('hit-button').style.display = 'inline';  // Show the Hit button
    document.getElementById('stand-button').style.display = 'inline';  // Show the Stand button

    // Reset the game state before starting
    playerScore = getRandomCard();  // Give the player the first card
    updateScores();  // Update the score display
    document.getElementById('game-result').textContent = `You got a ${playerScore}.`; // Show the first card
}

// Add event listeners to buttons
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);
