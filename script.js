// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // step one have a condition to check password size between 8 and 128 < if outside the range promp and invalid> 
  var passwordSize = prompt("input 8 to 128 characters with upper and lower case including numbers")
  if (passwordSize >= 8 && passwordSize <= 128) {

  }
  else {

  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
