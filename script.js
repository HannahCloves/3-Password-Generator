// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword (){
  var numbers = ['0','1','2','3', '4', '5', '6', '7', '8', '9']
  var symbols = ['!','£','$','%','^','&','*','-','+','=','@','#','<','>']
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
var passwordLength = ""; 
var passwordSymbols = false; 
var passwordLowercaseLetters = false; 
var passwordUppercaseLetters = false;

document.getElementById("generate").addEventListener("click", getPasswordCritera)
function getPasswordCritera(){

alert("Please answer the following criteria questions to generate your password");
passwordLength = parseInt(prompt("Between 8 and 128, please select the length of your password"));
passwordSymbols = confirm("Would you like to use symbols?");
passwordLowercaseLetters = confirm("Would you like to use lower case letters?");
passwordUppercaseLetters = confirm("Would you like to use upper case letters?");
} 
 

