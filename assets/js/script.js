// Assignment Code
var generateBtn = document.querySelector('#generate');
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];



// function that includes all arrays created above
function generatePassword(lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters) {
    var passwordLength = parseInt(window.prompt('How long do you wish for your password to be?'));
    var includeLowercase = confirm('Do you wish to include lowercase letters in your password?');
    var includeUppercase = confirm('Do you wish to include uppercase letters in your password?');
    var includeNumbers = confirm('Do you wish to include numbers in your password?');
    var includeSpecialCharacters = confirm('Do you wish to include special characters in your password?');
        
// creates empty array for characters that the user decides to use  
    var characters = [];
// if statements that confirm whether or not the user wants to include a character type
// used concat to combine the arrays into the character array
// originally used += characters.concat which was casuing the array to keep growing with each iteration, changed it to = and added += to the for loop
  if (includeLowercase) {
    characters = characters.concat(lowercaseCharacters);
  }

  if (includeUppercase) {
    characters = characters.concat(uppercaseCharacters);
  }

  if (includeNumbers) {
    characters = characters.concat(numericCharacters);
  }

  if (includeSpecialCharacters) {
    characters = characters.concat(specialCharacters);
  }
// creates an alert if the user does not input a correct password length or a number
  while (isNaN(passwordLength) || passwordLength< 8 || passwordLength > 128) {
    window.alert('Please enter a valid password length.');
    passwordLength = parseInt(window.prompt('How long do you wish for your password to be?'));
   }

  var password = '';
// creates the loop that generates the password based off users input for passwordLength
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);