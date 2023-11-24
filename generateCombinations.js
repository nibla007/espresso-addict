const fs = require('fs');

// Function to generate combinations of two words for each pair of Swedish characters from 'a' to 'ö'
function generateCombinations() {
  const startCharCode = 'a'.charCodeAt(0);
  const endCharCode = 'ö'.charCodeAt(0);
  const combinations = [];

  for (let i = startCharCode; i <= endCharCode; i++) {
    for (let j = startCharCode; j <= endCharCode; j++) {
      const char1 = '"' + String.fromCharCode(i);
      const char2 = String.fromCharCode(j)+'"'+ ',';

      // Filter out non-Swedish characters
      if (isSwedishCharacter(char1) && isSwedishCharacter(char2)) {
        combinations.push(`${char1.toLowerCase()}${char2.toLowerCase()}`);
      }
    }
  }

  return combinations;
}

// Helper function to check if a character is a Swedish character
function isSwedishCharacter(char) {
  return /[a-zåäö]/i.test(char);
}

// Generate combinations
const generatedCombinations = generateCombinations();

// Write to a text file
fs.writeFileSync('combinations.txt', generatedCombinations.join('\n'), 'utf-8');

console.log('File created: combinations.txt');
