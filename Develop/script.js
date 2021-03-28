// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Characters
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "}", "{" ,"<", ">", "?", "~"]


let passwordLength = ""
let confirmSpecials;
let confirmNumber;
let confirmUpperCase;
let confirmLowerCase;
let passwordCharacters = [];
var randomPassword = "";

// Character length inital prompting
function generatePassword() {
  let passwordLength = prompt("How many characters do you want in your password; it has to be between 8-128 charcaters long!");
// When the length is not between 8 and 128
while(passwordLength <= 8 || passwordLength >= 128) {
  alert("Your password has to be between 8 and 128 character!!");
  let passwordLength = (prompt("How many characters do you want in your password?"));
  } 

  // Repeat back how many charactes the user will have  
  alert("Your password has " + passwordLength + " characters") ;

// Checks if password meet the criteria
let confirmSpecials = confirm("Click OK if you want some special characters");
let confirmNumber = confirm("Click OK if you want some numbers");    
let confirmLowerCase = confirm("Click OK if you want some lowercase characters");
let confirmUpperCase = confirm("Click OK if you want some uppercase characters");
  // If the criteria isn't met, continue 
  while(confirmSpecials === false && confirmNumber === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("You need to have a number, letter, or special character. Please input again");
    let confirmSpecialCharacter = confirm("OK for special characters");
    let confirmNumericCharacter = confirm("OK for numbers");    
    let confirmLowerCase = confirm("OK for lowercase characters");
    let confirmUpperCase = confirm("OK for uppercase characters"); 
} 

  // Joining the strings for the password array
  let passwordCharacters = []
  
if (confirmSpecials) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

if (confirmNumber) {
  passwordCharacters = passwordCharacters.concat(numbers)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
}

  console.log(passwordCharacters)

  // this randomizes characters for the array
  var randomPassword = "";
  
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Call to the password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
  // // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  


