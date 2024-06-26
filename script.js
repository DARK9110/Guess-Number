// Generate a random target number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// This function checks the user's guess and provides feedback
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = Number(document.getElementById("guessInput").value);
  
  // Check if the user's guess is too high, too low, or correct
  if (userGuess > targetNumber) {
    document.getElementById("feedback").textContent = "Your guess is too high!";
  } else if (userGuess < targetNumber) {
    document.getElementById("feedback").textContent = "Your guess is too low!";
  } else {
    document.getElementById("feedback").textContent = "Congratulations! You guessed the number!";
  }
}