// Assignment Code + event listener onclick to prompt questions
var generateBtn = document.querySelector("#generate").addEventListener("click", getPasswordCritera);

// Write password to the #password input
function getPasswordCritera() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

// Array Variables
var symbols = ['!','£','$','%','^','&','*','-','+','=','@','#','<','>']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['0','1','2','3', '4', '5', '6', '7', '8', '9']

// Criteria Variables
var passwordLength = ""; 
var passwordSymbols = false; 
var passwordLowercaseLetters = false; 
var passwordUppercaseLetters = false;
var passwordNumbers = false;

// Password length check
function generatePassword(){
  alert("Please answer the following criteria questions to generate your password");
    passwordLength = (prompt("Between 8 and 128, please select the length of your password."));
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Number inputted must be between 8 and 128.");
    passwordLength = (prompt("Between 8 and 128, please select the length of your password."));
  }
    passwordSymbols = confirm("Would you like to use symbols?");
    passwordLowercaseLetters = confirm("Would you like to use lower case letters?");
    passwordUppercaseLetters = confirm("Would you like to use upper case letters?");
    passwordNumbers = confirm("would you like to use numbers?");

// Criteria check that atleast 1 has been chosen
  while (passwordSymbols === false && passwordNumbers === false && passwordLowercaseLetters === false && passwordUppercaseLetters === false){
    alert("You must choose at least one of the following criteria")
    passwordSymbols = confirm("Would you like to use symbols?");
    passwordLowercaseLetters = confirm("Would you like to use lower case letters?");
    passwordUppercaseLetters = confirm("Would you like to use upper case letters?");
    passwordNumbers = confirm("would you like to use numbers?");
  }

  // Creates one large array to pull from 
  var criteriaMet = []
    
    if (passwordSymbols) {
      criteriaMet = criteriaMet.concat(symbols);
    }
    if (passwordLowercaseLetters) {
      criteriaMet = criteriaMet.concat(lowercase);
    }
    if (passwordUppercaseLetters) {
      criteriaMet = criteriaMet.concat(uppercase);
    }
    if (passwordNumbers) {
      criteriaMet = criteriaMet.concat(numbers);
    }

    //variable for the password created via the loop
    var createdPassword = ""
      
    // loop uses the number stored from passwordLength against the criteriaMet to know where to pull from and continues to do so until the passwordLength is met
      for (var i = 0; i < passwordLength; i++) {
        createdPassword = createdPassword + criteriaMet[Math.floor(Math.random() * criteriaMet.length)];
        
      }
      return createdPassword;
}
