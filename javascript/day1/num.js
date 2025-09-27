function guessNum() {
  // Random number between 1-10
  const num = Math.floor(Math.random() * 10) + 1;
  let guess;

  while (guess !== num) {
    // Ask user for input
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess === num) {
      console.log("🎉 Correct! You guessed it!");
      break;
    } else if (guess < num) {
      console.log("Too low 🤔 Try again!");
    } else if (guess > num) {
      console.log("Too high 😅 Try again!");
    } else {
      console.log("Invalid input! Enter a number.");
    }
  }
}

guessNum();
