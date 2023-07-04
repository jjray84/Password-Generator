// Assignment Code
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "<", ">"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pikachu = [];
let numberOfCharacters;

const generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! Look! You clicked the button!");
  getUserInput();
  let password = "";

  function getUserInput() {
    numberOfCharacters = parseInt(window.prompt("Select the number of characters for your password."));

    if (isNaN(numberOfCharacters)){
      window.alert("Please enter a numerical value.");
      return;
    }
  
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      window.alert("Passwords must contain between 8 and 128 characters. Please try again.");
      return;
    }
    
    const userNumbers = window.confirm("Would you like numbers in your password?");
    if (userNumbers) {
      pikachu = pikachu.concat(numbers);
    }
  
    const userSymbols = window.confirm("Would you like to use symbols in your password?");
    if (userSymbols) {
      pikachu = pikachu.concat(symbols);
    }
  
    const userLowercase = window.confirm("Would you like to use lowercase letters in your password?");
    if (userLowercase) {
      pikachu = pikachu.concat(lowercase);
    }
  
    const userUppercase = window.confirm("Would you like to use uppercase letters in your password?");
    if (userUppercase) {
      pikachu = pikachu.concat(uppercase);
    }
  
    console.log(pikachu);
  }

  for (let i = 0; i < numberOfCharacters; i++) {
    console.log(i);
    const random = Math.floor(Math.random() * pikachu.length);
    console.log(random);

    password += pikachu[random];
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

