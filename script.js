// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getPasswordCritera() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts questions when button is clicked
document.getElementById("generate").addEventListener("click", generatePassword);

// Array Variables
var numbers = ['0','1','2','3', '4', '5', '6', '7', '8', '9']
var symbols = ['!','£','$','%','^','&','*','-','+','=','@','#','<','>']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// Criteria Variables
var passwordLength = ""; 
var passwordSymbols = false; 
var passwordLowercaseLetters = false; 
var passwordUppercaseLetters = false;
var passwordNumbers = false;

// Password length check
function generatePassword(){
  alert("Please answer the following criteria questions to generate your password");
  var passwordLength = (prompt("Between 8 and 128, please select the length of your password."));


  
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Number inputted must be between 8 and 128.");
    var passwordLength = (prompt("Between 8 and 128, please select the length of your password."));
  }

    passwordSymbols = confirm("Would you like to use symbols?");
    passwordNumbers = confirm("would you like to use numbers?");
    passwordLowercaseLetters = confirm("Would you like to use lower case letters?");
    passwordUppercaseLetters = confirm("Would you like to use upper case letters?");

}



