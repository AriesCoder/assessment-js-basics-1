console.log('-------Welcome to the password validator tool-------')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password to validate: ", function(input){
	password = input.toString();

    if(password.length >= 10){
        if(password.indexOf(' ') >= 0){
            console.log("Failure! Please type a password without the white space(s)")
            console.log(`Your password is ${password}`)
        }else{
            console.log("Success!")
            console.log(`Your password is ${password}`)
        }
    }
    else if(password.length > 0){
        if (password.indexOf(' ') >= 0){
            console.log("Failure! Please type a password with at least 10 characters and no the white space(s)")
            console.log(`Your password is ${password}`)
        }else{
            console.log('Failure! The password should have at least 10 characters')
            console.log(`Your password is ${password}`)
        }
    }
    else{
        console.log("Failure! Please type a password to validate")
    }

    reader.close()
})
