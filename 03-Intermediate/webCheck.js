
/** Username and Password checking in JavaScript */

let email = 'IMVR@GMAIL.COM       '
let Password = '1234'


let userChecker = function(userEmail) {

    if (userEmail.includes(123) && (userEmail.length > 6)) {
        return true;
    }
    return false;
}

let PasswordChecket = function(password) {
    if (password.includes(123)) {
        return true
    } 

    return false
}

console.log(userChecker(email));





