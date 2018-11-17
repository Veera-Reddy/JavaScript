
/**
 *   
 */

 // LCD
 var whoIsHere = 'user'

if (whoIsHere == 'user') {
    console.log("Login sucessfull");
    console.log("Allow access to view all paid courses");
} else if (whoIsHere == 'teacher') {
    console.log('Allow access to his course');
} else {
    console.log("Message: please verify your user");
}

