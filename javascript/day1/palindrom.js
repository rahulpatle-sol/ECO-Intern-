function palindromeChecker() {
  let word = prompt("Enter a word to check if it's a palindrome (like 'madam'):");

  if (!word) {
    console.log("You didn't enter anything 😅");
    return;
  }

  // Convert to lowercase to avoid case sensitivity issues
  let cleanedWord = word.toLowerCase();

  // Reverse the word
  let reversedWord = cleanedWord.split("").reverse().join("");

  if (cleanedWord === reversedWord) {
    console.log(`✅ "${word}" is a palindrome!`);
  } else {
    console.log(`❌ "${word}" is NOT a palindrome.`);
  }
}

palindromeChecker();
