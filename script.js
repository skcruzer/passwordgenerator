const generateBtn = document.getElementById("generate");

//Defining variables for what the password will include
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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


  //Alert shown when length of password fits 8-128 character criteria
  alert("Your password will be " + addLength + " characters long.");

  //Confirming what characters should be included in the password
  var addLowerCase = confirm("Do you want your Password to include lowercase characters? Press 'OK' to add and 'Cancel' to remove.");
  var addUpperCase = confirm("Do you want your Password to include uppercase characters? Press 'OK' to add and 'Cancel' to remove.");
  var addNumbers = confirm("Do you want your Password to include numbers? Press 'OK' to add and 'Cancel' to remove.");
  var addSpecChar = confirm("Do you want your Password to include special characters? Press 'OK' to add and 'Cancel' to remove.");

  //Alert shown when none of the criteria are selected
  while (
    addLowerCase === false &&
    addUpperCase === false &&
    addNumbers === false &&
    addSpecChar === false) {
      alert("Please select at least ONE of the criteria to generate your password.");

      var addLowerCase = confirm("Do you want your Password to include lowercase characters? Press 'OK' to add and 'Cancel' to remove.");
      var addUpperCase = confirm("Do you want your Password to include uppercase characters? Press 'OK' to add and 'Cancel' to remove.");
      var addNumbers = confirm("Do you want your Password to include numbers? Press 'OK' to add and 'Cancel' to remove.");
      var addSpecChar = confirm("Do you want your Password to include special characters? Press 'OK' to add and 'Cancel' to remove.");

  }
  //Password Generator
  let passwordName = []
  if (addLowerCase) { passwordName = passwordName.concat(lowerCase) }
  if (addUpperCase) { passwordName = passwordName.concat(upperCase) }
  if (addNumbers) { passwordName = passwordName.concat(numbers) }
  if (addSpecChar) { passwordName = passwordName.concat(specChar) }

  let randomPassword = ""

  for (var i = 0; i < addLength; i++) {
    randomPassword = randomPassword + passwordName[Math.floor(Math.random() * passwordName.length)];
  }

  return randomPassword;
}


// document.getElementById('generate').addEventListener('click', () => {

// })
