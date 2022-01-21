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
            console.log(`                                     
___________      .__.__                        
\_   _____/____  |__|  |  __ _________   ____  
 |    __) \__  \ |  |  | |  |  \_  __ \_/ __ \ 
 |     \   / __ \|  |  |_|  |  /|  | \/\  ___/ 
 \___  /  (____  /__|____/____/ |__|    \___  >
     \/        \/                           \/  `);
            console.log("Please type a password without the white space(s)")
            console.log(`Your password is ${password}`)
        }else{
            console.log(`
       _____                               
  / ___/__  _______________  __________
  \__ \/ / / / ___/ ___/ _ \/ ___/ ___/
 ___/ / /_/ / /__/ /__/  __(__  |__  ) 
/____/\__,_/\___/\___/\___/____/____/  
                                                                                                                                    
            `)
            console.log(`Your password is ${password}`)
        }
    }
    else if(password.length > 0){
        if (password.indexOf(' ') >= 0){
            console.log(`                                     
___________      .__.__                        
\_   _____/____  |__|  |  __ _________   ____  
 |    __) \__  \ |  |  | |  |  \_  __ \_/ __ \ 
 |     \   / __ \|  |  |_|  |  /|  | \/\  ___/ 
 \___  /  (____  /__|____/____/ |__|    \___  >
     \/        \/                           \/  `);
            console.log("Please type a password with at least 10 characters and no the white space(s)")
            console.log(`Your password is ${password}`)
        }else{
            console.log(`                                     
___________      .__.__                        
\_   _____/____  |__|  |  __ _________   ____  
 |    __) \__  \ |  |  | |  |  \_  __ \_/ __ \ 
 |     \   / __ \|  |  |_|  |  /|  | \/\  ___/ 
 \___  /  (____  /__|____/____/ |__|    \___  >
     \/        \/                           \/  `);
            console.log('The password should have at least 10 characters')
            console.log(`Your password is ${password}`)
        }
    }
    else{
        console.log(`                                     
___________      .__.__                        
\_   _____/____  |__|  |  __ _________   ____  
 |    __) \__  \ |  |  | |  |  \_  __ \_/ __ \ 
 |     \   / __ \|  |  |_|  |  /|  | \/\  ___/ 
 \___  /  (____  /__|____/____/ |__|    \___  >
     \/        \/                           \/  `);
        console.log("Please type a password to validate")
    }

    reader.close()
})
