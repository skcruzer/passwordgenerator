const generateBtn = document.getElementById("generate");

//Defining variables for what the password will include
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];

var addLength = "";
var addLowerCase;
var addUpperCase;
var addNumbers;
var addSpecChar;

//Defining the length of generatePassword
function generatePassword() {
  var addLength = (prompt("How many characters would you like your password to be? (Must be between 8 - 128 characters)."));

  //Alert showing when wrong mix and max lenghth are inputted
  while (addLength <= 7 || addLength >= 129) {
    alert("Password length must be between 8 - 128 characters. Please try again.");
    var addLength = (prompt("How many characters would you like your password to be? (Must be between 8 - 128 characters)."));
  }



// document.getElementById('generate').addEventListener('click', () => {

// })
