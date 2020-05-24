/*// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

function myFunction() {
  var options = [];

  var passwordLength = parseInt(prompt("What is your desired length for this passowrd?\nPassword length must be between 8 to 128 characters"))
  console.log(passwordLength);
  if (isNaN(passwordLength)){ 
    console.log(isNaN(passwordLength));
    alert("Not a number")
    return
  }
  if (passwordLength < 8){
    alert("Must be a minimum of 8 characters")
    return
  }


  if (passwordLength > 128){
    alert("Must not exceed 128 characters")
    return
  } 

  var uppercase = confirm("Do you want uppercase letters in your password?\nClick OK for Yes or Cancel for No"); 
  console.log(uppercase);
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  if (uppercase == true) {
    options.push(uppercaseList);  
    console.log(options);
  }

  var lowercase = confirm("Do you want lowercase letters in your password?\nClick OK for Yes or Cancel for No"); 
  console.log(lowercase);
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  if (lowercase == true) {
    options.push(lowercaseList); 
    console.log(options);

  }


  var special_c = confirm("Do you want special characters in your password?\nClick OK for Yes or Cancel for No"); 
  console.log(special_c);
  var special_cList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  if (special_c == true) {
    options.push(special_cList); 
    console.log(options);

  }


  var numeric = confirm("Do you want numbers in your password?\nClick OK for Yes or Cancel for No"); 
  console.log(numeric);
  var numericList = "0123456789";
  if (numeric == true) {
    options.push(numericList); 
    console.log(options);

  }

  var passwordString = options.join("");
  console.log(passwordString);
}

let password = "";

function generatePassword (passwordString, passwordLength) {
  for(var i = 0; i <= passwordLength; i++){
    password = password + passwordString.charAt(Math.floor(Math.random() * Math.floor(passwordString.length)));
  }
console.log(password);

}