// Assignment Code
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "<", ">", "`", "/", "\"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pikachu = [];
var numberOfCharacters;






var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log("Hey! Look! You clicked the button!");
  getUserInput();
  var password;

  function getUserInput() {
  

    numberOfCharacters = window.prompt("Select the number of characters for your password.");

    if (isNaN(numberOfCharacters)){
      window.alert("Please enter a numerical value.");
      return;
    }
  
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      window.alert("Passwords must contain between 8 and 128 characters. Please try again.");
         return;
    }
    
    var userNumbers = window.confirm("Would you like numbers in your password?");
    if (userNumbers == true) {
      pikachu = pikachu.concat(numbers);
    } 
  
    var userSymbols = window.confirm("Would you like to use symbols in your password?");
    if (userSymbols == true) {
      pikachu = pikachu.concat(symbols);
    }
  
    var userLowercase = window.confirm("Would you like to use lowercase letters in your password?");
    if (userLowercase == true) {
      pikachu = pikachu.concat(lowercase);
    }
  
    var userUppercase = window.confirm("Would you like to use uppercase letter in your password?");
    if (userUppercase == true) {
      pikachu = pikachu.concat(uppercase);
    }
  
    console.log(pikachu);
  }

  for(var i=0; i < numberOfCharacters; i++) {
    console.log(i);
    var random = Math.floor(Math.random() * pikachu.length);
    console.log(random);

    if (password == undefined) {
      password = pikachu[random];
    } else {
      password = password.concat(pikachu[random]);
    }
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
